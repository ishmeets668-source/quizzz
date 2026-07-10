import React, { useState } from 'react'

export default function LoginScreen({ onLoginSuccess, soundEnabled, playSfx }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [dob, setDob] = useState('')
  const [loading, setLoading] = useState(false)
  const [notification, setNotification] = useState(null) // { type: 'success' | 'error', text: '' }
  const [isSuccessState, setIsSuccessState] = useState(false)

  // Phone number format validation helper (exactly 10 digits)
  const validatePhone = (phoneVal) => {
    const phoneRegex = /^\d{10}$/
    return phoneRegex.test(phoneVal.trim())
  }

  const isFormValid = name.trim().length >= 2 && validatePhone(phone) && dob.trim().length >= 6

  const handleLogin = async (e) => {
    if (e) e.preventDefault()
    if (loading) return

    if (playSfx) playSfx('click', soundEnabled)

    if (name.trim().length < 2) {
      setNotification({ type: 'error', text: 'Candidate Name must be at least 2 characters.' })
      if (playSfx) playSfx('incorrect', soundEnabled)
      return
    }

    if (!validatePhone(phone)) {
      setNotification({ type: 'error', text: 'Please enter a valid 10-digit phone number.' })
      if (playSfx) playSfx('incorrect', soundEnabled)
      return
    }

    if (dob.trim().length < 6) {
      setNotification({ type: 'error', text: 'Date of Birth must be at least 6 characters.' })
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
          phone: phone.trim(),
          dob: dob.trim()
        })
      });

      let data = {}
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        data = await response.json()
      }

      if (!response.ok) {
        const baseMsg = data.error || response.statusText || 'Failed to login. Please try again.';
        const detailsMsg = data.details ? ` (Details: ${data.details})` : '';
        throw new Error(baseMsg + detailsMsg);
      }

      if (playSfx) playSfx('complete', soundEnabled)
      setIsSuccessState(true)

      setTimeout(() => {
        onLoginSuccess(data.session.name, data.session.phone)
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
          <img src="/iccvs_logo.jpg" alt="ICCVS Logo" width="96" height="96" className="w-full h-full object-contain animate-pulse" />
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
        <img src="/iccvs_logo.jpg" alt="ICCVS Logo" width="80" height="80" className="w-full h-full object-contain" />
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
          <div className={`p-4 mb-5 rounded-2xl border text-xs font-semibold animate-fade-in flex items-start gap-2.5 ${notification.type === 'success'
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
            <label htmlFor="candidate-name" className="text-xs font-bold text-slate-600 uppercase tracking-wide block pl-1">
              Candidate Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <input
                id="candidate-name"
                type="text"
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200/80 bg-white/20 focus:bg-white text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {/* Phone Number input field */}
          <div className="space-y-1.5">
            <label htmlFor="phone-number" className="text-xs font-bold text-slate-600 uppercase tracking-wide block pl-1">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <input
                id="phone-number"
                type="tel"
                disabled={loading}
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                placeholder="Enter 10-digit phone number"
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200/80 bg-white/20 focus:bg-white text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              />
            </div>
          </div>

          {/* Date of Birth input field */}
          <div className="space-y-1.5">
            <label htmlFor="date-of-birth" className="text-xs font-bold text-slate-600 uppercase tracking-wide block pl-1">
              Date of Birth
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
              <input
                id="date-of-birth"
                type="date"
                disabled={loading}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                onClick={(e) => { try { e.target.showPicker(); } catch (err) {} }}
                onFocus={(e) => { try { e.target.showPicker(); } catch (err) {} }}
                className={`w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200/80 bg-white/20 focus:bg-white text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 ${dob ? 'has-value' : ''}`}
              />
            </div>
          </div>

          {/* Login Action button */}
          <button
            type="submit"
            disabled={loading || !isFormValid}
            className={`w-full py-3 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-transparent ${!isFormValid || loading
                ? 'bg-slate-200/60 text-slate-400 cursor-not-allowed shadow-none'
                : 'bg-blue-600 hover:bg-blue-700 text-real-white shadow-lg shadow-blue-500/15 hover:shadow-blue-500/25 active:scale-[0.99] cursor-pointer'
              }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4.5 w-4.5 text-blue-600" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Logging In...</span>
              </>
            ) : (
              <>
                <span>Login</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
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
