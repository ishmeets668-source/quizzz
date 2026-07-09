import mongoose from 'mongoose';

const HistorySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    required: true
  },
  totalQuestions: {
    type: Number,
    required: true
  },
  score: {
    type: Number,
    required: true
  },
  percentage: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  dateTime: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

export default mongoose.models.History || mongoose.model('History', HistorySchema);
