import React, { useState } from 'react'

export default function LoginScreen({ onLoginSuccess, soundEnabled, playSfx }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState(null) // { type: 'success' | 'error', text: '' }
  const [isSuccessState, setIsSuccessState] = useState(false)

  // Email format validation helper
  const validateEmail = (emailVal) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(emailVal.trim())
  }

  const isFormValid = name.trim().length >= 2 && validateEmail(email) && password.length >= 6

  const handleLogin = async (e) => {
    if (e) e.preventDefault()
    if (loading) return

    if (playSfx) playSfx('click', soundEnabled)

    if (name.trim().length < 2) {
      setNotification({ type: 'error', text: 'Candidate Name must be at least 2 characters.' })
      if (playSfx) playSfx('incorrect', soundEnabled)
      return
    }

    if (!validateEmail(email)) {
      setNotification({ type: 'error', text: 'Please enter a valid email address.' })
      if (playSfx) playSfx('incorrect', soundEnabled)
      return
    }

    if (password.length < 6) {
      setNotification({ type: 'error', text: 'Password must be at least 6 characters.' })
      if (playSfx) playSfx('incorrect', soundEnabled)
      return
    }

    setLoading(true)
    setNotification(null)

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          password
        })
      });

      let data = {}
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      }

      if (!response.ok) {
        const errorMsg = data.error + (data.details ? ` (Details: ${data.details})` : '');
        throw new Error(errorMsg);
      }

      if (playSfx) playSfx('complete', soundEnabled)
      setIsSuccessState(true)
      
      setTimeout(() => {
        onLoginSuccess(data.session.name, data.session.email)
      }, 1500)
    } catch (error) {
      setNotification({ type: 'error', text: error.message })
      if (playSfx) playSfx('incorrect', soundEnabled)
    } finally {
      setLoading(false)
    }
  }

  if (isSuccessState) {
    return (
      <div className="w-full animate-fade-in flex flex-col items-center py-12 text-center space-y-6">
        {/* Logo container */}
        <div className="w-24 h-24 rounded-3xl bg-real-white shadow-2xl hover:scale-105 transition-transform duration-300 overflow-hidden border border-blue-100 flex items-center justify-center p-2 mb-2">
          <img src="/iccvs_logo.jpg" alt="ICCVS Logo" className="w-full h-full object-contain animate-pulse" />
        </div>

        <div className="space-y-3 max-w-sm px-4 text-slate-800">
          <h2 className="text-3xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent leading-tight">
            Welcome, {name}!
          </h2>
          <p className="text-base font-bold text-slate-600">
            Your Mock Test is ready.
          </p>
        </div>

        {/* Loading Spinner */}
        <div className="flex flex-col items-center justify-center space-y-3 mt-6">
          <div className="relative w-12 h-12">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-blue-600 animate-spin"></div>
            {/* Inner pulsing pulse */}
            <div className="absolute inset-2 rounded-full bg-blue-500/10 animate-ping"></div>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest animate-pulse">
            Configuring Mock Test Dashboard...
          </span>
        </div>
      </div>
    )
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

        <form onSubmit={handleLogin} className="space-y-4 relative z-10">
          <div className="border-b border-white/10 pb-3 mb-2 flex items-center justify-between">
            <h3 className="font-extrabold text-sm text-slate-700 tracking-wide uppercase">
              Candidate Login
            </h3>
          </div>

          {/* Name input field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block pl-1">
              Candidate Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                type="text"
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200/80 bg-white/20 focus:bg-white text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {/* Email input field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block pl-1">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                type="email"
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200/80 bg-white/20 focus:bg-white text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {/* Password input field */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wide block pl-1">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-10 py-3 rounded-xl border border-slate-200/80 bg-white/20 focus:bg-white text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
              <button
                type="button"
                onClick={() => {
                  if (playSfx) playSfx('click', soundEnabled)
                  setShowPassword(!showPassword)
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer border-none bg-transparent"
              >
                {showPassword ? (
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Login Action button */}
          <button
            type="submit"
            disabled={loading || !isFormValid}
            className={`w-full py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-transparent ${
              !isFormValid || loading
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
                <span>Logging In...</span>
              </>
            ) : (
              <>
                <span>Login</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}
