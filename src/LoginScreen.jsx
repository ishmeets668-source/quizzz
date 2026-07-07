import React, { useState, useEffect, useRef } from 'react'

export default function LoginScreen({ onLoginSuccess, soundEnabled, playSfx }) {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)
  
  // Rate-limiting resend timer
  const [resendCooldown, setResendCooldown] = useState(0)
  
  // Custom notification messages
  const [notification, setNotification] = useState(null) // { type: 'success' | 'error', text: '' }
  
  const timerRef = useRef(null)

  // Manage resend cooldown timer
  useEffect(() => {
    if (resendCooldown > 0) {
      timerRef.current = setInterval(() => {
        setResendCooldown((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [resendCooldown])

  // Email format validation helper
  const validateEmail = (emailVal) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(emailVal.trim())
  }

  // Trigger: Send OTP
  const handleSendOtp = async (e) => {
    if (e) e.preventDefault()
    if (loading || resendCooldown > 0) return

    if (playSfx) playSfx('click', soundEnabled)

    if (!validateEmail(email)) {
      setNotification({ type: 'error', text: 'Please enter a valid email address.' })
      return
    }

    setLoading(true)
    setNotification(null)

    try {
      const response = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await response.json()

      if (response.ok) {
        setOtpSent(true)
        setResendCooldown(30)
        setNotification({ 
          type: 'success', 
          text: 'OTP has been sent to your registered email address.' 
        })
        if (playSfx) playSfx('correct', soundEnabled)
      } else {
        setNotification({ type: 'error', text: data.error || 'Failed to send OTP. Please try again.' })
        if (playSfx) playSfx('incorrect', soundEnabled)
      }
    } catch (err) {
      console.error(err)
      setNotification({ 
        type: 'error', 
        text: 'Connection to server failed. Please ensure the backend is running.' 
      })
      if (playSfx) playSfx('incorrect', soundEnabled)
    } finally {
      setLoading(false)
    }
  }

  // Trigger: Verify OTP & Login
  const handleVerifyOtp = async (e) => {
    if (e) e.preventDefault()
    if (loading) return

    if (playSfx) playSfx('click', soundEnabled)

    if (otp.trim().length !== 6 || isNaN(otp.trim())) {
      setNotification({ type: 'error', text: 'Please enter a valid 6-digit numeric OTP.' })
      return
    }

    setLoading(true)
    setNotification(null)

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), otp: otp.trim() }),
      })
      const data = await response.json()

      if (response.ok && data.success) {
        if (playSfx) playSfx('complete', soundEnabled)
        setNotification({ type: 'success', text: 'Login successful! Redirecting...' })
        
        setTimeout(() => {
          onLoginSuccess(data.session.name, data.session.email)
        }, 1000)
      } else {
        setNotification({ type: 'error', text: data.error || 'Invalid OTP. Please try again.' })
        if (playSfx) playSfx('incorrect', soundEnabled)
      }
    } catch (err) {
      console.error(err)
      setNotification({ type: 'error', text: 'Server error occurred during verification.' })
      if (playSfx) playSfx('incorrect', soundEnabled)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full animate-fade-in flex flex-col items-center py-6">
      {/* Logo container */}
      <div className="w-20 h-20 rounded-3xl bg-white shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden border border-blue-100 flex items-center justify-center p-1.5 mb-6">
        <img src="/iccvs_logo.jpg" alt="ICCVS Logo" className="w-full h-full object-contain" />
      </div>

      <div className="text-center space-y-2 mb-6 max-w-sm">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight select-none">
          Welcome to Mock Test
        </h1>
        <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest">
          Organised by ICCVS
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full my-1"></div>
      </div>

      {/* Login Card */}
      <div className="w-full glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-[0_15px_35px_rgba(30,41,59,0.06)] relative overflow-hidden">
        {/* Subtle ambient glows inside card */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Dynamic Alert Banner */}
        {notification && (
          <div className={`p-4 mb-5 rounded-2xl border text-xs font-semibold animate-fade-in flex items-start gap-2.5 ${
            notification.type === 'success' 
              ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' 
              : 'bg-rose-500/10 text-rose-700 border-rose-500/20'
          }`}>
            <span className="text-sm">{notification.type === 'success' ? '✓' : '⚠️'}</span>
            <span className="leading-relaxed">{notification.text}</span>
          </div>
        )}

        <form onSubmit={otpSent ? handleVerifyOtp : handleSendOtp} className="space-y-5 relative z-10">
          <div className="border-b border-white/10 pb-3 mb-2 flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-slate-700 tracking-wide uppercase">
              {otpSent ? 'Enter Security Code' : 'Candidate Registration'}
            </h3>
            {otpSent && (
              <button
                type="button"
                onClick={() => {
                  if (playSfx) playSfx('click', soundEnabled)
                  setOtpSent(false)
                  setOtp('')
                  setNotification(null)
                }}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer flex items-center gap-1"
              >
                Change Email
              </button>
            )}
          </div>

          {/* Email input field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block pl-1">
              Candidate Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="email"
                disabled={loading || otpSent}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-white/20 focus:bg-white text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-300 ${
                  otpSent 
                    ? 'border-slate-200 opacity-65 cursor-not-allowed'
                    : 'border-slate-200/80 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10'
                }`}
              />
            </div>
          </div>

          {/* OTP field (Rendered only after OTP is sent) */}
          {otpSent && (
            <div className="space-y-1.5 animate-slide-up">
              <div className="flex justify-between items-center pr-1">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block pl-1">
                  Enter 6-Digit OTP
                </label>
                {resendCooldown > 0 ? (
                  <span className="text-[10px] text-slate-400 font-bold">
                    Resend in {resendCooldown}s
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    className="text-[10px] font-black text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                  <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </span>
                <input
                  type="text"
                  maxLength={6}
                  disabled={loading}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit code"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200/80 bg-white/20 focus:bg-white text-sm font-medium tracking-widest text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>
            </div>
          )}

          {/* Action button */}
          {!otpSent ? (
            <button
              type="submit"
              disabled={loading || !validateEmail(email)}
              className={`w-full py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-transparent ${
                !validateEmail(email) || loading
                  ? 'bg-slate-200/60 text-slate-400 cursor-not-allowed shadow-none'
                  : 'bg-blue-600 hover:bg-blue-700 text-real-white shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 active:scale-[0.99] cursor-pointer'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4.5 w-4.5 text-blue-600" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Sending Verification Code...</span>
                </>
              ) : (
                <>
                  <span>Send Verification OTP</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading || otp.trim().length !== 6}
              className={`w-full py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-transparent ${
                otp.trim().length !== 6 || loading
                  ? 'bg-slate-200/60 text-slate-400 cursor-not-allowed shadow-none'
                  : 'bg-blue-600 hover:bg-blue-700 text-real-white shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 active:scale-[0.99] cursor-pointer'
              }`}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4.5 w-4.5 text-blue-600" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Verifying Code...</span>
                </>
              ) : (
                <>
                  <span>Verify & Login</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </form>
      </div>
    </div>
  )
}
