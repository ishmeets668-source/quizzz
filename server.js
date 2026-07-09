import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import crypto from 'crypto';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from './models/User.js';
import History from './models/History.js';

dotenv.config({ override: true });

// Connect to MongoDB (non-blocking server initialization)
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
  console.error("MONGODB_URI is not defined in the environment variables!");
  process.exit(1);
}

mongoose.connect(mongoURI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch((err) => {
    console.error('Error connecting to MongoDB during startup:', err.message);
    console.error('The server will remain active but database operations will fail until connection is resolved.');
  });

// Listen to connection error events after initial connection
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error event:', err.message);
});

const app = express();
const PORT = process.env.PORT || 5001;

// Restore original req.url from Vercel headers (since Vercel rewrites it internally to the function path)
app.use((req, res, next) => {
  const originalPath = req.headers['x-vercel-forwarded-path'] || req.headers['x-invoke-path'];
  if (originalPath) {
    const queryIndex = req.url.indexOf('?');
    const queryString = queryIndex !== -1 ? req.url.substring(queryIndex) : '';
    req.url = originalPath + queryString;
  }
  next();
});

// Database availability middleware
const checkDbConnection = (req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.status(503).json({
      error: 'Database connection is offline. Please make sure your IP is whitelisted on MongoDB Atlas and credentials are correct.'
    });
  }
  next();
};

app.use(cors());
app.use(express.json());

// In-memory store for OTPs
// key: email, value: { hashedOtp, expiresAt, attemptsRemaining, lastSentAt }
const otpStore = {};

// Helper to generate a secure hash of the OTP
const hashOtp = (otp) => {
  return crypto.createHash('sha256').update(otp).digest('hex');
};

// Create email transporter
let transporter;

const setupTransporter = async () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    console.log("Using SMTP configuration from environment variables...");
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  } else {
    console.log("No SMTP configuration found. Creating a test Ethereal SMTP account...");
    try {
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass
        }
      });
      console.log(`\n==================================================`);
      console.log(`Ethereal Test SMTP credentials created!`);
      console.log(`User: ${testAccount.user}`);
      console.log(`Pass: ${testAccount.pass}`);
      console.log(`==================================================\n`);
    } catch (err) {
      console.error("Failed to create Ethereal SMTP account, falling back to console-only mode:", err);
    }
  }
};

// Initialize email transport
setupTransporter();

// Endpoint: Send OTP
app.post('/api/send-otp', async (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email address is required.' });
  }
  
  // Basic email regex validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  const now = Date.now();
  const existingOtp = otpStore[email];

  // Enforce 30-second resend rate limit
  if (existingOtp && (now - existingOtp.lastSentAt) < 30000) {
    const secondsLeft = Math.ceil((30000 - (now - existingOtp.lastSentAt)) / 1000);
    return res.status(429).json({ 
      error: `Please wait ${secondsLeft} seconds before requesting a new OTP.` 
    });
  }

  // Generate 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const hashedOtp = hashOtp(otp);
  
  // Set expiry to 5 minutes
  const expiresAt = now + 5 * 60 * 1000;

  // Store in memory
  otpStore[email] = {
    hashedOtp,
    expiresAt,
    attemptsRemaining: 5,
    lastSentAt: now
  };

  // Log OTP in development console for easy debugging/fallback
  console.log(`\n-----------------------------------------`);
  console.log(`[OTP Sent Log]`);
  console.log(`Email: ${email}`);
  console.log(`OTP: ${otp}`);
  console.log(`Expires in: 5 minutes`);
  console.log(`-----------------------------------------\n`);

  try {
    if (transporter) {
      const fromEmail = process.env.SMTP_FROM || '"ICCVS Mock Test System" <noreply@iccvs.org>';
      
      const mailOptions = {
        from: fromEmail,
        to: email,
        subject: 'Your Mock Test Login Verification Code (OTP)',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; rounded: 12px; background-color: #ffffff;">
            <div style="text-align: center; margin-bottom: 20px;">
              <h2 style="color: #2563eb; margin: 0;">ICCVS Mock Test</h2>
              <p style="color: #64748b; font-size: 14px; margin-top: 5px;">Verification Portal</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin-bottom: 20px;" />
            <p style="font-size: 16px; color: #334155; line-height: 1.5;">Hello,</p>
            <p style="font-size: 16px; color: #334155; line-height: 1.5;">You requested an OTP to login to your Mock Test account. Please use the verification code below to complete your login:</p>
            <div style="text-align: center; margin: 30px 0;">
              <span style="font-size: 36px; font-weight: bold; letter-spacing: 6px; color: #1e3a8a; background-color: #eff6ff; padding: 12px 24px; border-radius: 8px; border: 1px dashed #3b82f6; display: inline-block;">
                ${otp}
              </span>
            </div>
            <p style="font-size: 14px; color: #ef4444; font-weight: 500;">
              ⚠️ This code is valid for exactly 5 minutes and will expire. Do not share this OTP with anyone.
            </p>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 20px 0;" />
            <p style="font-size: 12px; color: #94a3b8; text-align: center;">
              This is an automated email. Please do not reply directly.
            </p>
          </div>
        `
      };

      const info = await transporter.sendMail(mailOptions);
      
      // If using Ethereal, log the web link to preview the email
      if (nodemailer.getTestMessageUrl(info)) {
        console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
      }
    }
    
    return res.status(200).json({ 
      message: 'OTP has been sent to your registered email address.' 
    });
  } catch (error) {
    console.error("Error sending email:", error);
    // If SMTP fails, we still return success in development because we printed it in the console
    return res.status(200).json({
      message: 'OTP has been sent to your registered email address (Dev Console Fallback).'
    });
  }
});

// Endpoint: Verify OTP
app.post('/api/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ error: 'Email and OTP are required.' });
  }

  const record = otpStore[email];

  if (!record) {
    return res.status(404).json({ error: 'No OTP requested for this email. Please request a code.' });
  }

  // Check attempts lockout
  if (record.attemptsRemaining <= 0) {
    return res.status(403).json({ 
      error: 'Too many failed verification attempts. Please request a new OTP.' 
    });
  }

  const now = Date.now();

  // Check expiry (5 minutes)
  if (now > record.expiresAt) {
    delete otpStore[email]; // clean up
    return res.status(410).json({ 
      error: 'OTP has expired. Please request a new OTP.' 
    });
  }

  // Compare hashes
  const hashedInput = hashOtp(otp.trim());
  if (record.hashedOtp === hashedInput) {
    // Verification successful! Clean up OTP record
    delete otpStore[email];
    
    // Create candidate session payload
    const sessionToken = crypto.randomBytes(32).toString('hex');
    
    return res.status(200).json({
      success: true,
      message: 'OTP verified successfully.',
      session: {
        token: sessionToken,
        email,
        name: email.split('@')[0], // Fallback name based on email
        loggedInAt: now
      }
    });
  } else {
    // Incorrect OTP
    record.attemptsRemaining -= 1;
    
    if (record.attemptsRemaining <= 0) {
      return res.status(403).json({ 
        error: 'Too many failed verification attempts. Please request a new OTP.' 
      });
    }

    return res.status(400).json({ 
      error: `Invalid OTP. Please try again. (${record.attemptsRemaining} attempts remaining)` 
    });
  }
});

// Endpoint: Direct Password Login
app.post('/api/login', checkDbConnection, async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  if (name.trim().length < 2) {
    return res.status(400).json({ error: 'Name must be at least 2 characters.' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters.' });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    
    // Check if user exists
    let user = await User.findOne({ email: normalizedEmail });
    
    if (user) {
      // User exists, verify password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ error: 'Invalid password. Please try again.' });
      }
    } else {
      // User doesn't exist, create a new user
      const hashedPassword = await bcrypt.hash(password, 10);
      user = new User({
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword
      });
      await user.save();
    }

    // Create candidate session payload
    const sessionToken = crypto.randomBytes(32).toString('hex');
    
    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      session: {
        token: sessionToken,
        email: user.email,
        name: user.name,
        loggedInAt: Date.now()
      }
    });
  } catch (error) {
    console.error('Error logging in:', error);
    return res.status(500).json({ error: 'Internal server error during login.' });
  }
});

// Endpoint: Get History for a user
app.get('/api/history', checkDbConnection, async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email is required to fetch history.' });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    const history = await History.find({ email: normalizedEmail }).sort({ id: -1 });
    return res.status(200).json({ success: true, history });
  } catch (error) {
    console.error('Error fetching history:', error);
    return res.status(500).json({ error: 'Internal server error fetching history.' });
  }
});

// Endpoint: Save new History entry
app.post('/api/history', checkDbConnection, async (req, res) => {
  const { email, name, subject, difficulty, totalQuestions, score, percentage, status, dateTime, id } = req.body;

  if (!email || !name || !subject || !difficulty || totalQuestions === undefined || score === undefined || percentage === undefined || !status || !dateTime || id === undefined) {
    return res.status(400).json({ error: 'Missing required history parameters.' });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    const newRecord = new History({
      email: normalizedEmail,
      name: name.trim(),
      subject,
      difficulty,
      totalQuestions,
      score,
      percentage,
      status,
      dateTime,
      id
    });
    
    await newRecord.save();
    
    // Fetch and return the updated history for the user
    const history = await History.find({ email: normalizedEmail }).sort({ id: -1 });
    return res.status(200).json({ success: true, message: 'Record saved successfully.', history });
  } catch (error) {
    console.error('Error saving history record:', error);
    return res.status(500).json({ error: 'Internal server error saving history.' });
  }
});

// Endpoint: Delete a single History entry by numeric ID
app.delete('/api/history/:id', checkDbConnection, async (req, res) => {
  const { id } = req.params;
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email is required to delete history.' });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    const result = await History.deleteOne({ id: parseInt(id), email: normalizedEmail });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Record not found or not owned by you.' });
    }
    
    return res.status(200).json({ success: true, message: 'Record deleted successfully.' });
  } catch (error) {
    console.error('Error deleting record:', error);
    return res.status(500).json({ error: 'Internal server error deleting history.' });
  }
});

// Endpoint: Clear all History entries for a user
app.delete('/api/history', checkDbConnection, async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email is required to clear history.' });
  }

  try {
    const normalizedEmail = email.trim().toLowerCase();
    await History.deleteMany({ email: normalizedEmail });
    return res.status(200).json({ success: true, message: 'All history cleared successfully.' });
  } catch (error) {
    console.error('Error clearing history:', error);
    return res.status(500).json({ error: 'Internal server error clearing history.' });
  }
});


if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Secure OTP Server running on http://localhost:${PORT}`);
  });
}

export default app;
