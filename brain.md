# Project Code Recovery and Backup Index

This document contains a backup of all the source files, utilities, and configurations for the quiz application. You can use this file to recover or inspect any file's code directly.

---

## Table of Contents
1. [src/App.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/App.jsx)
2. [src/LoginScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/LoginScreen.jsx)
3. [src/components/WelcomeScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/WelcomeScreen.jsx)
4. [src/components/CandidateNameScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/CandidateNameScreen.jsx)
5. [src/components/PlayingScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/PlayingScreen.jsx)
6. [src/components/ResultsScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/ResultsScreen.jsx)
7. [src/components/HistoryScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/HistoryScreen.jsx)
8. [src/components/LogoutConfirmDialog.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/LogoutConfirmDialog.jsx)
9. [src/utils/sfx.js](file:///c:/Users/ISHMEET/ego/insta_quiz/src/utils/sfx.js)
10. [src/utils/helpers.js](file:///c:/Users/ISHMEET/ego/insta_quiz/src/utils/helpers.js)
11. [src/data/questionBank.js](file:///c:/Users/ISHMEET/ego/insta_quiz/src/data/questionBank.js)
12. [server.js](file:///c:/Users/ISHMEET/ego/insta_quiz/server.js)
13. [count_questions.js](file:///c:/Users/ISHMEET/ego/insta_quiz/count_questions.js)
14. [extract_qbank.js](file:///c:/Users/ISHMEET/ego/insta_quiz/extract_qbank.js)
15. [package.json](file:///c:/Users/ISHMEET/ego/insta_quiz/package.json)
16. [index.html](file:///c:/Users/ISHMEET/ego/insta_quiz/index.html)
17. [vite.config.js](file:///c:/Users/ISHMEET/ego/insta_quiz/vite.config.js)
18. [eslint.config.js](file:///c:/Users/ISHMEET/ego/insta_quiz/eslint.config.js)

---

### 1. [src/App.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/App.jsx)
The main controller coordinate file connecting the authentication state and game lifecycle screens.

```jsx
import React, { useState, useEffect, useRef } from 'react'
import LoginScreen from './LoginScreen'
import WelcomeScreen from './components/WelcomeScreen'
import CandidateNameScreen from './components/CandidateNameScreen'
import PlayingScreen from './components/PlayingScreen'
import ResultsScreen from './components/ResultsScreen'
import HistoryScreen from './components/HistoryScreen'
import LogoutConfirmDialog from './components/LogoutConfirmDialog'
import { playSfx } from './utils/sfx'
import { shuffleArray } from './utils/helpers'
import { QUESTION_BANK } from './data/questionBank'

export default function App() {
  const [candidateName, setCandidateName] = useState(() => {
    try {
      const sess = JSON.parse(localStorage.getItem('quiz_session'))
      return sess ? sess.name : ''
    } catch {
      return ''
    }
  })
  const [candidateEmail, setCandidateEmail] = useState(() => {
    try {
      const sess = JSON.parse(localStorage.getItem('quiz_session'))
      return sess ? sess.email : ''
    } catch {
      return ''
    }
  })
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('quiz_session')
  })

  // Navigation State: WELCOME_LANGUAGE | WELCOME_NAME | PLAYING | RESULTS | HISTORY
  const [gameState, setGameState] = useState('WELCOME_LANGUAGE')
  
  // Dialog controls
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  
  // Game Settings
  const [selectedCategory, setSelectedCategory] = useState('coding')
  const [selectedSubcategory, setSelectedSubcategory] = useState('html')
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy')
  const [soundEnabled, setSoundEnabled] = useState(true)

  // Quiz Play State
  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedAns, setSelectedAns] = useState(null) // null | index
  const [timedOut, setTimedOut] = useState(false)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15) // 15s per question
  const [userAnswers, setUserAnswers] = useState([]) // tracks choices

  // History State
  const [historyList, setHistoryList] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('quiz_history') || '[]')
    } catch {
      return []
    }
  })

  // Timer Ref to clear intervals correctly
  const timerRef = useRef(null)

  // Load questions when starting game
  const startGame = (diffOverride, subcatOverride) => {
    playSfx('click', soundEnabled)
    const activeDiff = diffOverride || selectedDifficulty
    const activeSubcat = subcatOverride || selectedSubcategory
    if (diffOverride) {
      setSelectedDifficulty(diffOverride)
    }
    if (subcatOverride) {
      setSelectedSubcategory(subcatOverride)
    }
    const categoryData = QUESTION_BANK[selectedCategory]
    if (categoryData) {
      let qList = []
      if (categoryData.subcategories) {
        const subcatData = categoryData.subcategories[activeSubcat]
        qList = subcatData ? subcatData[activeDiff] : []
      } else {
        qList = categoryData[activeDiff] || []
      }
      
      if (qList.length > 0) {
        const shuffledList = shuffleArray(qList)
        const selectedQuestions = shuffledList.slice(0, 30).map(q => {
          const originalOptions = q.options
          const zipped = originalOptions.map((opt, idx) => ({
            text: opt,
            isCorrect: idx === q.correct
          }))
          const shuffledZipped = shuffleArray(zipped)
          return {
            ...q,
            options: shuffledZipped.map(item => item.text),
            correct: shuffledZipped.findIndex(item => item.isCorrect)
          }
        })
        setQuestions(selectedQuestions)
        setCurrentIdx(0)
        setSelectedAns(null)
        setTimedOut(false)
        setScore(0)
        setTimeLeft(15)
        setUserAnswers([])
        setGameState('PLAYING')
      } else {
        alert("This subject's questions are not available yet. Please select HTML, CSS, or Python.");
      }
    }
  }

  // Timer effect
  useEffect(() => {
    if (gameState !== 'PLAYING') return

    // If answer is already selected, stop countdown
    if (selectedAns !== null) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current)
          handleTimeOut()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [gameState, currentIdx, selectedAns])

  // Handle timeout
  const handleTimeOut = () => {
    setTimedOut(true)
    setSelectedAns(-1) // Special flag indicating skipped/timeout
    playSfx('incorrect', soundEnabled)

    const currentQuestion = questions[currentIdx]
    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        options: currentQuestion.options,
        chosen: -1,
        correct: currentQuestion.correct,
        explanation: currentQuestion.explanation,
        timeSpent: 15
      }
    ])
  }

  // Handle option select
  const handleSelectOption = (index) => {
    if (selectedAns !== null || timedOut) return // Lock inputs after selection

    setSelectedAns(index)
    const currentQuestion = questions[currentIdx]
    const isCorrect = index === currentQuestion.correct
    
    if (isCorrect) {
      setScore((prev) => prev + 1)
      playSfx('correct', soundEnabled)
    } else {
      playSfx('incorrect', soundEnabled)
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        options: currentQuestion.options,
        chosen: index,
        correct: currentQuestion.correct,
        explanation: currentQuestion.explanation,
        timeSpent: 15 - timeLeft
      }
    ])
  }

  // Handle skip question
  const handleSkipQuestion = () => {
    if (selectedAns !== null || timedOut) return

    setSelectedAns(-1)
    setTimedOut(true)
    playSfx('click', soundEnabled)

    const currentQuestion = questions[currentIdx]
    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        options: currentQuestion.options,
        chosen: -1,
        correct: currentQuestion.correct,
        explanation: currentQuestion.explanation,
        timeSpent: 15 - timeLeft
      }
    ])
  }

  // Advance to next question
  const handleNext = () => {
    playSfx('click', soundEnabled)
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((prev) => prev + 1)
      setSelectedAns(null)
      setTimedOut(false)
      setTimeLeft(15)
    } else {
      // Quiz complete!
      const totalQuestions = questions.length
      const percentScore = Math.round((score / totalQuestions) * 100)
      const isPassed = percentScore >= 50
      
      const newRecord = {
        id: Date.now(),
        name: candidateName.trim() || 'Anonymous',
        subject: selectedSubcategory === 'html' ? 'HTML' : selectedSubcategory === 'css' ? 'CSS' : 'Python',
        difficulty: selectedDifficulty,
        totalQuestions,
        score,
        percentage: percentScore,
        status: isPassed ? 'Pass' : 'Fail',
        dateTime: new Date().toLocaleString()
      }

      const updatedHistory = [newRecord, ...historyList]
      setHistoryList(updatedHistory)
      localStorage.setItem('quiz_history', JSON.stringify(updatedHistory))

      setGameState('RESULTS')
      playSfx('complete', soundEnabled)
    }
  }

  // Active theme helper based on category selection
  const currentTheme = QUESTION_BANK[selectedCategory]?.colorTheme || 'from-cyan-500 to-blue-600'

  return (
    <div className="animated-bg min-h-screen flex items-center justify-center p-4 sm:p-6 text-white font-sans overflow-x-hidden relative">
      {/* Background Neon Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500/5 blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="w-full max-w-xl transition-all duration-500 animate-slide-up relative z-10">
        {!isLoggedIn ? (
          <LoginScreen
            onLoginSuccess={(name, email) => {
              setCandidateName(name)
              setCandidateEmail(email)
              localStorage.setItem('quiz_session', JSON.stringify({ name, email }))
              setIsLoggedIn(true)
              setGameState('WELCOME_LANGUAGE')
            }}
            soundEnabled={soundEnabled}
            playSfx={playSfx}
          />
        ) : (
          <>
            {gameState === 'WELCOME_LANGUAGE' && (
              <WelcomeScreen
                candidateName={candidateName}
                candidateEmail={candidateEmail}
                onLogout={() => setShowLogoutConfirm(true)}
                onSelectSubject={(key) => {
                  startGame('easy', key)
                }}
                onViewHistory={() => setGameState('HISTORY')}
                soundEnabled={soundEnabled}
                playSfx={playSfx}
              />
            )}

            {gameState === 'WELCOME_NAME' && (
              <CandidateNameScreen
                selectedSubcategory={selectedSubcategory}
                candidateName={candidateName}
                setCandidateName={setCandidateName}
                onBack={() => setGameState('WELCOME_LANGUAGE')}
                onStartGame={() => startGame('easy')}
                soundEnabled={soundEnabled}
                playSfx={playSfx}
              />
            )}

            {gameState === 'PLAYING' && questions.length > 0 && (
              <PlayingScreen
                selectedSubcategory={selectedSubcategory}
                candidateName={candidateName}
                currentIdx={currentIdx}
                questions={questions}
                timeLeft={timeLeft}
                selectedAns={selectedAns}
                timedOut={timedOut}
                currentTheme={currentTheme}
                handleSelectOption={handleSelectOption}
                handleSkipQuestion={handleSkipQuestion}
                handleNext={handleNext}
                playSfx={playSfx}
                soundEnabled={soundEnabled}
                onBack={() => setGameState('WELCOME_LANGUAGE')}
              />
            )}

            {gameState === 'RESULTS' && (
              <ResultsScreen
                questions={questions}
                score={score}
                userAnswers={userAnswers}
                candidateName={candidateName}
                selectedCategory={selectedCategory}
                selectedSubcategory={selectedSubcategory}
                onRetry={() => startGame('easy')}
                onChooseAnother={() => setGameState('WELCOME_LANGUAGE')}
                onGoHome={() => setGameState('WELCOME_LANGUAGE')}
                soundEnabled={soundEnabled}
                playSfx={playSfx}
              />
            )}

            {gameState === 'HISTORY' && (
              <HistoryScreen
                historyList={historyList}
                setHistoryList={setHistoryList}
                onBack={() => setGameState('WELCOME_LANGUAGE')}
                soundEnabled={soundEnabled}
                playSfx={playSfx}
              />
            )}
          </>
        )}
      </div>

      {showLogoutConfirm && (
        <LogoutConfirmDialog
          onConfirm={() => {
            localStorage.removeItem('quiz_session')
            setIsLoggedIn(false)
            setCandidateName('')
            setCandidateEmail('')
            setShowLogoutConfirm(false)
            setGameState('WELCOME_LANGUAGE')
          }}
          onCancel={() => setShowLogoutConfirm(false)}
          soundEnabled={soundEnabled}
          playSfx={playSfx}
        />
      )}
    </div>
  )
}
```

---

### 2. [src/LoginScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/LoginScreen.jsx)
Handles OTP sending and verification requests.

```jsx
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

    // Process login instantly client-side to bypass backend dependency and avoid server failures
    setTimeout(() => {
      setLoading(false)
      if (playSfx) playSfx('complete', soundEnabled)
      setIsSuccessState(true)
      
      setTimeout(() => {
        onLoginSuccess(name.trim(), email.trim())
      }, 1500)
    }, 400)
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
```

---

### 3. [src/components/WelcomeScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/WelcomeScreen.jsx)
Lists categories of subjects and gives user dropdown choices to select a quiz subcategory.

```jsx
import React, { useState, useEffect, useRef } from 'react'

export default function WelcomeScreen({
  candidateName,
  candidateEmail,
  onLogout,
  onSelectSubject,
  onViewHistory,
  soundEnabled,
  playSfx
}) {
  const [activeDropdown, setActiveDropdown] = useState(null)

  const dropdownContainerRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownContainerRef.current && !dropdownContainerRef.current.contains(event.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleDropdown = (key) => {
    if (playSfx) playSfx('click', soundEnabled)
    setActiveDropdown(prev => (prev === key ? null : key))
  }

  const selectSubject = (key) => {
    if (playSfx) playSfx('click', soundEnabled)
    setActiveDropdown(null)
    onSelectSubject(key)
  }

  const subjects = [
    { 
      key: 'basic', 
      title: 'Basic', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),              
      gradient: 'from-[#FFFDF9] to-[#FFF5E8] hover:from-[#FFF5E8] hover:to-[#FFEAD0]',
      border: 'border-amber-200/80 hover:border-amber-300/90',
      iconBg: 'bg-amber-100/70 text-[#d97706] shadow-[0_0_15px_rgba(217,119,6,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-amber-700',
      hasDropdown: false
    },
    { 
      key: 'accounting', 
      title: 'Accountancy', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),              
      gradient: 'from-[#F5F7FF] to-[#ECEFFA] hover:from-[#ECEFFA] hover:to-[#DEE4F8]',
      border: 'border-indigo-200/80 hover:border-indigo-300/90',
      iconBg: 'bg-indigo-100/70 text-[#4f46e5] shadow-[0_0_15px_rgba(79,70,229,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-indigo-700',
      hasDropdown: true,
      options: [
        { key: 'tally', title: 'Tally', emoji: '📊' },
        { key: 'dfa', title: 'DFA', emoji: '📄' },
        { key: 'adfa', title: 'ADFA', emoji: '💼' },
        { key: 'pdfa', title: 'PDFA', emoji: '🎓' },
        { key: 'taxation', title: 'Taxation', emoji: '💸' }
      ]
    },
    { 
      key: 'graphic_design', 
      title: 'Graphic Design', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z" />
          <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor"/>
          <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor"/>
          <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor"/>
        </svg>
      ), 
      gradient: 'from-[#FCF6FF] to-[#F5EAFD] hover:from-[#F5EAFD] hover:to-[#EDD5FC]',
      border: 'border-purple-200/80 hover:border-purple-300/90',
      iconBg: 'bg-purple-100/70 text-[#9333ea] shadow-[0_0_15px_rgba(147,85,247,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-purple-700',
      hasDropdown: true,
      options: [
        { key: 'graphic_design', title: 'Graphic Design', emoji: '🎨' },
        { key: 'coreldraw', title: 'CorelDRAW', emoji: '🎨' },
        { key: 'photoshop', title: 'Adobe Photoshop', emoji: '🖼️' },
        { key: 'illustrator', title: 'Adobe Illustrator', emoji: '✏️' },
        { key: 'three_d_effects', title: '3D Effects', emoji: '✨' }
      ]
    },
    { 
      key: 'web_design', 
      title: 'ADIT/A level', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="8" x2="22" y2="8" />
          <line x1="6" y1="21" x2="18" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ), 
      gradient: 'from-[#F0FDFD] to-[#E0F2F1] hover:from-[#E0F2F1] hover:to-[#CCEAE7]',
      border: 'border-teal-200/80 hover:border-teal-300/90',
      iconBg: 'bg-teal-100/70 text-[#0d9488] shadow-[0_0_15px_rgba(13,148,136,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-teal-700',
      hasDropdown: true,
      options: [
        { key: 'html', title: 'HTML', emoji: '🌐' },
        { key: 'css', title: 'CSS', emoji: '🎨' },
        { key: 'react', title: 'React', emoji: '⚛️' },
        { key: 'gsap', title: 'GSAP', emoji: '✨' },
        { key: 'lenis', title: 'Lenis', emoji: '📜' },
        { key: 'python', title: 'Python', emoji: '🐍' },
        { key: 'c_lang', title: 'C', emoji: '💻' },
        { key: 'cpp', title: 'C++', emoji: '⚙️' },
        { key: 'php', title: 'PHP', emoji: '🐘' },
        { key: 'java', title: 'Java', emoji: '☕' },
        { key: 'javascript', title: 'JavaScript', emoji: '✨' },
        { key: 'sql', title: 'SQL', emoji: '🗄️' },
        { key: 'linux', title: 'Linux', emoji: '🐧' }
      ]
    },
    { 
      key: 'professional', 
      title: 'Professional Courses', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ), 
      gradient: 'from-[#FFF5F5] to-[#FFEAEA] hover:from-[#FFEAEA] hover:to-[#FFD5D5]',
      border: 'border-red-200/80 hover:border-red-300/90',
      iconBg: 'bg-red-100/70 text-[#dc2626] shadow-[0_0_15px_rgba(220,38,38,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-red-700',
      hasDropdown: true,
      options: [
        { key: 'web_design_quiz', title: 'Web Design', emoji: '🌐' },
        { key: 'o_level', title: 'O Level', emoji: '💻' },
        { key: 'a_level', title: 'A Level', emoji: '🎓' },
        { key: 'data_scientist', title: 'Data Scientist', emoji: '📊' }
      ]
    },
    { 
      key: 'digital_marketing', 
      title: 'Digital Marketing', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.5 1.5" />
          <path d="M14 14l3-3" />
        </svg>
      ), 
      gradient: 'from-[#F0FDF4] to-[#DCFCE7] hover:from-[#DCFCE7] hover:to-[#BBF7D0]',
      border: 'border-emerald-200/80 hover:border-emerald-300/90',
      iconBg: 'bg-emerald-100/70 text-[#059669] shadow-[0_0_15px_rgba(5,150,105,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-emerald-700',
      hasDropdown: true,
      options: [
        { key: 'photoshop', title: 'Photoshop', emoji: '🎨' },
        { key: 'google_ads', title: 'Google Ads', emoji: '📢' },
        { key: 'seo', title: 'SEO', emoji: '🔍' },
        { key: 'wordpress', title: 'WordPress', emoji: '🌐' },
        { key: 'html', title: 'HTML', emoji: '💻' }
      ]
    },
    { 
      key: 'adv_excel', 
      title: 'Adv. Excel', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      ), 
      gradient: 'from-[#ECFDF5] to-[#D1FAE5] hover:from-[#D1FAE5] hover:to-[#A7F3D0]',
      border: 'border-emerald-200/80 hover:border-emerald-300/90',
      iconBg: 'bg-emerald-100/70 text-[#059669] shadow-[0_0_15px_rgba(5,150,105,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-emerald-700',
      hasDropdown: true,
      options: [
        { key: 'excel_mis', title: 'Advanced Excel (MIS)', emoji: '📊' },
        { key: 'excel_macro', title: 'Advanced Excel (Macro)', emoji: '⚙️' },
        { key: 'excel_dashboard', title: 'Advanced Excel (Dashboard)', emoji: '📈' },
        { key: 'advanced_excel', title: 'Advanced Excel', emoji: '📊' }
      ]
    },
    { 
      key: 'diploma', 
      title: 'Diploma', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ), 
      gradient: 'from-[#EEF2FF] to-[#E0E7FF] hover:from-[#E0E7FF] hover:to-[#C7D2FE]',
      border: 'border-indigo-200/80 hover:border-indigo-300/90',
      iconBg: 'bg-indigo-100/70 text-[#4f46e5] shadow-[0_0_15px_rgba(79,70,229,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-indigo-700',
      hasDropdown: true,
      options: [
        { key: 'dfa', title: 'DFA', emoji: '📄' },
        { key: 'niit', title: 'NIIT', emoji: '💼' },
        { key: 'dit', title: 'DIT', emoji: '📜' },
        { key: 'adca', title: 'ADCA', emoji: '🎓' },
        { key: 'dca', title: 'DCA', emoji: '📜' }
      ]
    },
    { 
      key: 'data_analyst', 
      title: 'Data Analyst', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ), 
      gradient: 'from-[#F8FAFC] to-[#F1F5F9] hover:from-[#F1F5F9] hover:to-[#E2E8F0]',
      border: 'border-slate-200/80 hover:border-slate-300/90',
      iconBg: 'bg-slate-100/70 text-[#475569] shadow-[0_0_15px_rgba(71,85,105,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-slate-700',
      hasDropdown: true,
      options: [
        { key: 'python', title: 'Python', emoji: '🐍' },
        { key: 'pandas', title: 'Pandas', emoji: '🐼' },
        { key: 'numpy', title: 'NumPy', emoji: '🔢' },
        { key: 'sql', title: 'SQL', emoji: '🗄️' },
        { key: 'advanced_excel', title: 'Advanced Excel', emoji: '📊' },
        { key: 'machine_learning', title: 'Machine Learning', emoji: '🤖' },
        { key: 'power_bi', title: 'Power BI', emoji: '📈' },
        { key: 'tableau', title: 'Tableau', emoji: '📉' }
      ]
    },
    { 
      key: 'other', 
      title: 'Other Course', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ), 
      gradient: 'from-[#FFFBEB] to-[#FEF3C7] hover:from-[#FEF3C7] hover:to-[#FDE68A]',
      border: 'border-amber-200/80 hover:border-amber-300/90',
      iconBg: 'bg-amber-100/70 text-[#b45309] shadow-[0_0_15px_rgba(180,83,9,0.2)] group-hover:scale-105',
      hoverText: 'group-hover:text-amber-700',
      hasDropdown: true,
      options: [
        { key: 'ccc', title: 'CCC', emoji: '🖥️' },
        { key: 'ip_it', title: 'IP/IT', emoji: '💼' }
      ]
    }
  ]

  return (
    <div className="glass-panel rounded-3xl p-4 sm:p-5 shadow-2xl relative border border-white/10" ref={dropdownContainerRef}>
      {/* Ambient background glow inside the card */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* User Profile & Logout */}
      <div className="flex items-center justify-end mb-2 relative z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 shadow-sm text-slate-800">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-real-white flex items-center justify-center text-xs font-black select-none">
            {candidateName ? candidateName.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-[10px] font-black leading-none">{candidateName}</p>
            <p className="text-[8px] font-medium text-slate-400 leading-none mt-0.5">{candidateEmail}</p>
          </div>
          <button
            onClick={() => {
              if (playSfx) playSfx('click', soundEnabled)
              onLogout()
            }}
            className="p-1 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors cursor-pointer ml-1"
            title="Logout"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-center relative space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-[0_8px_24px_rgba(124,58,237,0.15)] mb-0.5 hover:scale-105 transition-transform duration-300 overflow-hidden border border-purple-100/30">
          <img src="/iccvs_logo.jpg" alt="ICCVS Logo" className="w-full h-full object-contain p-1" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-wide bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent select-none pb-0.5">
          Mock Test
        </h1>
        <p className="text-[9px] text-slate-400 font-bold max-w-sm mx-auto uppercase tracking-widest">
          Design by Ishmeet Singh / Rishi Biswas
        </p>
        <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 mx-auto rounded-full mt-1"></div>
        <p className="text-[11px] text-slate-500/80 font-bold max-w-xs mx-auto leading-relaxed mt-1">
          Our Target Your Success
        </p>
      </div>

      <div className="mt-4 space-y-3">
        <label className="text-[9px] font-bold tracking-widest text-slate-400 uppercase block text-center mb-1">
          Select a Subject to Begin
        </label>
        
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {subjects.map((item) => (
            <div key={item.key} className="relative">
              <button
                onClick={() => {
                  if (item.hasDropdown) {
                    toggleDropdown(item.key)
                  } else {
                    selectSubject(item.key)
                  }
                }}
                className={`w-full py-2 sm:py-2.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl text-left border bg-gradient-to-br ${item.gradient} ${item.border} transition-all duration-300 flex items-center justify-between gap-1.5 group cursor-pointer hover:-translate-y-0.5 shadow-sm hover:shadow-md`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 p-1.5 sm:p-2 ${item.iconBg}`}>
                    {item.icon}
                  </span>
                  <span className={`text-xs sm:text-sm font-bold tracking-wide text-slate-800 ${item.hoverText} transition-colors`}>
                    {item.title}
                  </span>
                </div>
                {item.hasDropdown && <span className="text-[9px] text-slate-400 mr-0.5 select-none">▼</span>}
              </button>

              {item.hasDropdown && activeDropdown === item.key && (
                <div className={`absolute left-0 right-0 mt-2.5 bg-white/95 backdrop-blur-md border rounded-[22px] py-2.5 z-50 max-h-56 overflow-y-auto animate-fade-in ${
                  item.key === 'accounting' ? 'border-indigo-200/60 shadow-[0_20px_40px_rgba(79,70,229,0.12)]' :
                  item.key === 'graphic_design' ? 'border-purple-200/60 shadow-[0_20px_40px_rgba(147,85,247,0.12)]' :
                  item.key === 'web_design' ? 'border-teal-200/60 shadow-[0_20px_40px_rgba(13,148,136,0.12)]' :
                  item.key === 'professional' ? 'border-red-200/60 shadow-[0_20px_40px_rgba(220,38,38,0.12)]' :
                  item.key === 'digital_marketing' ? 'border-emerald-200/60 shadow-[0_20px_40px_rgba(16,185,129,0.12)]' :
                  item.key === 'adv_excel' ? 'border-emerald-200/60 shadow-[0_20px_40px_rgba(5,150,105,0.12)]' :
                  item.key === 'diploma' ? 'border-indigo-200/60 shadow-[0_20px_40px_rgba(79,70,229,0.12)]' :
                  item.key === 'data_analyst' ? 'border-slate-200/60 shadow-[0_20px_40px_rgba(71,85,105,0.12)]' :
                  'border-amber-200/60 shadow-[0_20px_40px_rgba(180,83,9,0.12)]'
                }`}>
                  {item.options.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => selectSubject(opt.key)}
                      className={`w-full text-left px-5 py-3 text-sm font-extrabold text-slate-700 transition-all duration-200 hover:pl-6 cursor-pointer flex items-center gap-3 ${
                        item.key === 'accounting' ? 'hover:text-indigo-700 hover:bg-indigo-500/10' :
                        item.key === 'graphic_design' ? 'hover:text-purple-700 hover:bg-purple-500/10' :
                        item.key === 'web_design' ? 'hover:text-teal-700 hover:bg-teal-500/10' :
                        item.key === 'professional' ? 'hover:text-red-700 hover:bg-red-500/10' :
                        item.key === 'digital_marketing' ? 'hover:text-emerald-700 hover:bg-emerald-500/10' :
                        item.key === 'adv_excel' ? 'hover:text-emerald-700 hover:bg-emerald-500/10' :
                        item.key === 'diploma' ? 'hover:text-indigo-700 hover:bg-indigo-500/10' :
                        item.key === 'data_analyst' ? 'hover:text-slate-700 hover:bg-slate-500/10' :
                        'hover:text-amber-700 hover:bg-amber-500/10'
                      }`}
                    >
                      <span className="text-base">{opt.emoji}</span>
                      <span>{opt.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* View History */}
      <div className="mt-6 border-t border-black/[0.06] pt-5 relative">
        <button
          onClick={() => {
            if (playSfx) playSfx('click', soundEnabled)
            onViewHistory()
          }}
          className="w-full py-3.5 rounded-2xl bg-[#f1f0fb] hover:bg-[#e8e6f7] text-[#5c548f] hover:text-[#4d4580] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-[#e2e0f2] shadow-sm font-semibold text-xs tracking-wider"
        >
          <span>📜 View Quiz History</span>
        </button>
      </div>
    </div>
  )
}
```

---

### 4. [src/components/CandidateNameScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/CandidateNameScreen.jsx)
Shows a simple form to confirm the candidate name before launching the test.

```jsx
import React from 'react'

export default function CandidateNameScreen({
  selectedSubcategory,
  candidateName,
  setCandidateName,
  onBack,
  onStartGame,
  soundEnabled,
  playSfx
}) {
  const getSubjectLabel = (key) => {
    const mapping = {
      basic: '🧠 Basic',
      fundamental: '🧠 Fundamental',
      niit: '💼 NIIT',
      dit: '📜 DIT',
      ms_word: '📝 MS Word',
      ms_excel: '📈 MS Excel',
      powerpoint: '📢 PowerPoint',
      tally: '📊 Tally',
      dfa: '📊 DFA',
      adfa: '📊 ADFA',
      pdfa: '📊 PDFA',
      taxation: '📊 Taxation',
      accounting: '📊 Accountancy',
      graphic_design: '🎨 Graphic Design',
      coreldraw: '🎨 CorelDRAW',
      photoshop: '🖼️ Adobe Photoshop',
      illustrator: '✏️ Adobe Illustrator',
      three_d_effects: '✨ 3D Effects',
      html: '🌐 HTML',
      css: '🎨 CSS',
      python: '🐍 Python',
      c_lang: '💻 C',
      cpp: '⚙️ C++',
      php: '🐘 PHP',
      java: '☕ Java',
      javascript: '✨ JavaScript',
      sql: '🗄️ SQL',
      adca: '🎓 ADCA',
      dca: '📜 DCA',
      ccc: '🏅 CCC',
      digital_marketing: '📢 Digital Marketing',
      data_analyst: '📈 Data Analyst',
      typing: '⌨️ English Typing',
      hardware: '🔌 Hardware & Networking',
      web_design_quiz: '🌐 Web Design',
      o_level: '💻 O Level',
      a_level: '🎓 A Level',
      data_scientist: '📊 Data Scientis',
      google_ads: '📢 Google Ads',
      seo: '🔍 SEO',
      wordpress: '🌐 WordPress',
      react: '⚛️ React',
      gsap: '✨ GSAP',
      lenis: '📜 Lenis',
      linux: '🐧 Linux',
      ip_it: '💼 IP/IT',
      excel_mis: '📊 Advanced Excel (MIS)',
      excel_macro: '⚙️ Advanced Excel (Macro)',
      excel_dashboard: '📈 Advanced Excel (Dashboard)',
      tally_prime: '🧾 Tally Prime',
      gst: '📑 GST',
      e_accounting: '💼 E-Accounting',
      busy: '📊 Busy',
      payroll: '💰 Payroll',
      dfa_tally: '📊 Tally (DFA)',
      dfa_costing: '📊 Costing (DFA)',
      dfa_banking: '🏦 Banking (DFA)',
      dfa_advanced_accounting: '📘 Advanced Accounting (DFA)',
      adfa_income_tax: '💰 Income Tax (ADFA)',
      adfa_excel_mis: '📊 Advanced Excel MIS (ADFA)',
      adfa_trading: '📈 Trading (Share Market)',
      tax_tally: '🧾 Tally (Taxation)',
      tax_gst: '📑 GST (Taxation)',
      tax_tds: '📋 TDS (Taxation)',
      tax_itc: '💳 Input Tax Credit (Taxation)',
      tax_company_reg: '🏢 Company Registration (Taxation)',
      pdfa_re_audit: '🔍 Re-Audit (PDFA)',
      pdfa_revenue: '📈 Revenue (PDFA)',
      pdfa_excise: '📜 Excise (PDFA)',
      pdfa_import_export: '🚢 Import/Export (PDFA)',
      pandas: '🐼 Pandas',
      numpy: '🔢 NumPy',
      advanced_excel: '📊 Advanced Excel',
      machine_learning: '🤖 Machine Learning',
      power_bi: '📈 Power BI',
      tableau: '📉 Tableau'
    }
    return mapping[key] || '🌐 General Quiz'
  }

  const isValid = candidateName.trim().length >= 2

  return (
    <div className="glass-panel rounded-3xl p-4 sm:p-5 shadow-2xl relative overflow-hidden border border-white/10 animate-fade-in">
      {/* Ambient background glow inside the card */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-4 relative z-10">
        <button
          onClick={() => {
            if (playSfx) playSfx('click', soundEnabled)
            onBack()
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold tracking-wider text-white/70 hover:text-white transition-all cursor-pointer border border-white/5"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
        
        <div className="text-right text-slate-800">
          <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">Subject Selected</span>
          <span className="text-sm font-black capitalize">
            {getSubjectLabel(selectedSubcategory)}
          </span>
        </div>
      </div>

      <div className="text-center relative space-y-1 mb-4 z-10 text-slate-800">
        <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-brand-yellow to-brand-green bg-clip-text text-transparent">
          Candidate Info
        </h2>
        <p className="text-xs text-white/60 font-light max-w-sm mx-auto">
          Please confirm your name to start the test.
        </p>
      </div>

      {/* Input field */}
      <div className="space-y-3 relative z-10">
        <div>
          <label className="text-xs font-semibold tracking-wider text-white/50 uppercase block pl-1 mb-1.5">
            Candidate Name
          </label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            placeholder="Enter your full name"
            maxLength={30}
            className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.01] border focus:outline-none transition-all duration-300 text-sm font-medium text-slate-800 placeholder-white/20 ${
              isValid 
                ? 'border-brand-green/45 focus:border-brand-green ring-4 ring-brand-green/10 shadow-[0_0_20px_rgba(0,176,80,0.1)]' 
                : 'border-white/10 focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/15'
            }`}
          />
          <span className="text-[10px] text-white/30 block mt-1 pl-1">
            * Minimum 2 characters. Leading/trailing spaces will be trimmed.
          </span>
        </div>

        {/* Continue button */}
        <button
          onClick={() => {
            if (isValid) {
              if (playSfx) playSfx('click', soundEnabled)
              onStartGame()
            }
          }}
          disabled={!isValid}
          className={`w-full py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
            isValid
              ? 'bg-slate-900 text-real-white shadow-lg hover:bg-slate-800 hover:shadow-[0_4px_12px_rgba(30,41,59,0.15)] active:scale-[0.99] cursor-pointer'
              : 'bg-white/5 text-white/30 border border-white/5 cursor-not-allowed'
          }`}
        >
          <span>Start Mock Test</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  )
}
```

---

### 5. [src/components/PlayingScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/PlayingScreen.jsx)
Wired up to render questions, display the countdown timer, record choices, and show validation feedback.

```jsx
import React from 'react'

export default function PlayingScreen({
  selectedSubcategory,
  candidateName,
  currentIdx,
  questions,
  timeLeft,
  selectedAns,
  timedOut,
  currentTheme,
  handleSelectOption,
  handleSkipQuestion,
  handleNext,
  playSfx,
  soundEnabled,
  onBack
}) {
  const getSubjectLabel = (key) => {
    const mapping = {
      basic: '🧠 Basic',
      fundamental: '🧠 Fundamental',
      ms_word: '📝 MS Word',
      ms_excel: '📈 MS Excel',
      powerpoint: '📢 PowerPoint',
      tally: '📊 Tally',
      dfa: '📊 DFA',
      adfa: '📊 ADFA',
      pdfa: '📊 PDFA',
      taxation: '📊 Taxation',
      accounting: '📊 Accountancy',
      graphic_design: '🎨 Graphic Design',
      coreldraw: '🎨 CorelDRAW',
      photoshop: '🖼️ Adobe Photoshop',
      illustrator: '✏️ Adobe Illustrator',
      three_d_effects: '✨ 3D Effects',
      html: '🌐 HTML',
      css: '🎨 CSS',
      python: '🐍 Python',
      c_lang: '💻 C',
      cpp: '⚙️ C++',
      php: '🐘 PHP',
      java: '☕ Java',
      javascript: '✨ JavaScript',
      sql: '🗄️ SQL',
      adca: '🎓 ADCA',
      dca: '📜 DCA',
      ccc: '🏅 CCC',
      digital_marketing: '📢 Digital Marketing',
      data_analyst: '📈 Data Analyst',
      typing: '⌨️ English Typing',
      hardware: '🔌 Hardware & Networking',
      web_design_quiz: '🌐 Web Design',
      o_level: '💻 O Level',
      a_level: '🎓 A Level',
      data_scientist: '📊 Data Scientis',
      google_ads: '📢 Google Ads',
      seo: '🔍 SEO',
      wordpress: '🌐 WordPress',
      react: '⚛️ React',
      gsap: '✨ GSAP',
      lenis: '📜 Lenis',
      linux: '🐧 Linux',
      ip_it: '💼 IP/IT',
      excel_mis: '📊 Advanced Excel (MIS)',
      excel_macro: '⚙️ Advanced Excel (Macro)',
      excel_dashboard: '📈 Advanced Excel (Dashboard)',
      tally_prime: '🧾 Tally Prime',
      gst: '📑 GST',
      e_accounting: '💼 E-Accounting',
      busy: '📊 Busy',
      payroll: '💰 Payroll',
      dfa_tally: '📊 Tally (DFA)',
      dfa_costing: '📊 Costing (DFA)',
      dfa_banking: '🏦 Banking (DFA)',
      dfa_advanced_accounting: '📘 Advanced Accounting (DFA)',
      adfa_income_tax: '💰 Income Tax (ADFA)',
      adfa_excel_mis: '📊 Advanced Excel MIS (ADFA)',
      adfa_trading: '📈 Trading (Share Market)',
      tax_tally: '🧾 Tally (Taxation)',
      tax_gst: '📑 GST (Taxation)',
      tax_tds: '📋 TDS (Taxation)',
      tax_itc: '💳 Input Tax Credit (Taxation)',
      tax_company_reg: '🏢 Company Registration (Taxation)',
      pdfa_re_audit: '🔍 Re-Audit (PDFA)',
      pdfa_revenue: '📈 Revenue (PDFA)',
      pdfa_excise: '📜 Excise (PDFA)',
      pdfa_import_export: '🚢 Import/Export (PDFA)',
      pandas: '🐼 Pandas',
      numpy: '🔢 NumPy',
      advanced_excel: '📊 Advanced Excel',
      machine_learning: '🤖 Machine Learning',
      power_bi: '📈 Power BI',
      tableau: '📉 Tableau'
    }
    return mapping[key] || '🌐 General Quiz'
  }

  const currentQuestion = questions[currentIdx]

  return (
    <div className="space-y-4">
      {/* Back Button */}
      <div className="flex justify-start">
        <button
          onClick={() => {
            if (playSfx) playSfx('click', soundEnabled)
            onBack()
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold tracking-wider text-white/70 hover:text-white transition-all duration-200 cursor-pointer border border-white/5"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Setup</span>
        </button>
      </div>

      {/* Header: Score, Timer & Progress */}
      <div className="glass-panel rounded-2xl p-3 flex items-center justify-between border border-white/10 text-slate-800">
        <div className="flex items-center gap-3">
          <span className="text-xl">⚡</span>
          <div>
            <h2 className="text-sm font-bold leading-tight">
              {getSubjectLabel(selectedSubcategory)}
            </h2>
            <p className="text-xs font-bold text-indigo-400">Mock Test Mode</p>
            <p className="text-[10px] text-white/50 font-semibold mt-0.5">👤 Candidate: {candidateName}</p>
          </div>
        </div>
        
        {/* Question Count */}
        <div className="text-right">
          <span className="text-xs font-semibold text-white/40 block">Progress</span>
          <span className="text-sm font-bold text-brand-white">
            {currentIdx + 1} <span className="text-white/30 text-xs">/ {questions.length}</span>
          </span>
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-panel rounded-3xl p-4 sm:p-5 shadow-2xl relative border border-white/10 overflow-hidden">
        
        {/* Linear Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-white/5">
          <div 
            className={`h-full bg-gradient-to-r ${currentTheme} transition-all duration-300`} 
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Timer Progress Ring & Countdown */}
        <div className="flex items-center justify-between mb-4 mt-0.5">
          <div className="text-xs font-bold text-white/40 tracking-wider uppercase">
            Question {currentIdx + 1}
          </div>
          
          <div className="flex items-center gap-2">
            <svg className={`w-4 h-4 ${timeLeft <= 5 && selectedAns === null ? 'text-brand-red animate-pulse' : 'text-brand-yellow'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className={`text-sm font-extrabold tracking-tight ${
              timeLeft <= 5 && selectedAns === null ? 'text-brand-red animate-pulse-fast font-black' : 'text-brand-white'
            }`}>
              {timeLeft}s
            </span>
          </div>
        </div>

        {/* Current Question Text */}
        <h3 className="text-base sm:text-lg font-bold leading-snug text-slate-800 mb-4">
          {currentQuestion.question}
        </h3>

        {/* Answers Grid */}
        <div className="space-y-2">
          {currentQuestion.options.map((opt, index) => {
            const isCorrect = index === currentQuestion.correct
            const isSelected = index === selectedAns
            const answered = selectedAns !== null
            
            let optionClass = 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/15'
            
            if (answered) {
              if (isCorrect) {
                optionClass = 'bg-brand-green/10 border-brand-green/50 text-brand-green font-semibold ring-2 ring-brand-green/20 animate-pulse-fast'
              } else if (isSelected && !isCorrect) {
                optionClass = 'bg-brand-red/10 border-brand-red/50 text-brand-red font-semibold ring-2 ring-brand-red/20 animate-shake'
              } else {
                optionClass = 'opacity-30 border-white/5 bg-transparent cursor-not-allowed'
              }
            }

            return (
              <button
                key={index}
                disabled={answered}
                onClick={() => handleSelectOption(index)}
                className={`w-full p-2.5 rounded-xl border text-left text-xs sm:text-sm transition-all duration-300 flex items-center justify-between cursor-pointer ${optionClass}`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-5 h-5 rounded-md text-[10px] font-bold flex items-center justify-center ${
                    isSelected 
                      ? 'bg-white/20 text-white' 
                      : 'bg-white/5 text-white/40'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="font-medium text-slate-800">{opt}</span>
                </div>
                
                {answered && isCorrect && (
                  <span className="text-brand-green text-xs font-bold flex items-center gap-1">
                    ✓ Correct
                  </span>
                )}
                {answered && isSelected && !isCorrect && (
                  <span className="text-brand-red text-xs font-bold flex items-center gap-1">
                    ✗ Incorrect
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Skip Button */}
        {selectedAns === null && (
          <div className="mt-3 flex justify-end">
            <button
              onClick={handleSkipQuestion}
              className="px-3.5 py-1.5 text-xs font-bold tracking-wider text-white/40 hover:text-white/80 bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer border border-white/5 flex items-center gap-1.5"
            >
              <span>Skip Question</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}

        {/* Timeout Indicator */}
        {timedOut && timeLeft === 0 && (
          <div className="mt-4 p-3 rounded-xl bg-brand-red/10 border border-brand-red/20 text-center animate-shake">
            <p className="text-xs font-bold text-brand-red">⏰ TIME IS UP!</p>
          </div>
        )}

        {/* Skip Indicator */}
        {selectedAns === -1 && timeLeft > 0 && (
          <div className="mt-4 p-3 rounded-xl bg-white/5 border border-white/10 text-center animate-fade-in">
            <p className="text-xs font-bold text-white/50">⏭️ QUESTION SKIPPED</p>
          </div>
        )}

        {/* Explanation Box */}
        {selectedAns !== null && (
          <div className="mt-4 p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-xs leading-relaxed animate-fade-in">
            <div className="flex items-center gap-1.5 mb-1 text-indigo-400 font-bold uppercase tracking-wider">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explanation
            </div>
            <p className="text-indigo-900/90 font-medium">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Next Button */}
        {selectedAns !== null && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleNext}
              className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${currentTheme} font-bold text-xs tracking-wider uppercase text-real-white shadow-md flex items-center gap-2 hover:opacity-95 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer`}
            >
              <span>
                {currentIdx + 1 === questions.length ? 'Show Results' : 'Next Question'}
              </span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
```

---

### 6. [src/components/ResultsScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/ResultsScreen.jsx)
Calculates and displays final results, incorrect vs correct charts, and offers retry/exit actions.

```jsx
import React, { useState } from 'react'

export default function ResultsScreen({
  questions,
  score,
  userAnswers,
  candidateName,
  selectedCategory,
  selectedSubcategory,
  onRetry,
  onChooseAnother,
  onGoHome,
  soundEnabled,
  playSfx
}) {
  const totalQuestions = questions.length
  const percentScore = Math.round((score / totalQuestions) * 100)
  const isPassed = percentScore >= 50
  const correctCount = userAnswers.filter(ans => ans.chosen === ans.correct).length
  const unansweredCount = userAnswers.filter(ans => ans.chosen === -1).length
  const incorrectCount = totalQuestions - correctCount - unansweredCount

  const getRating = (pct) => {
    if (pct >= 90) {
      return { title: '🌟 Excellent!', desc: 'Exceptional mastery of the subject! You did an amazing job.', color: 'text-brand-green' }
    }
    if (pct >= 75) {
      return { title: '🎉 Great Job!', desc: 'Very good score! You have a solid understanding of these concepts.', color: 'text-brand-white font-bold' }
    }
    if (pct >= 50) {
      return { title: '👍 Good Effort!', desc: 'You passed! Keep learning to achieve an even higher score.', color: 'text-brand-yellow' }
    }
    return { title: '📚 Keep Practicing!', desc: 'You did not pass the quiz this time. Keep reviewing the topics and try again!', color: 'text-brand-red' }
  }

  const rating = getRating(percentScore)

  return (
    <div className="glass-panel rounded-3xl p-4 sm:p-5 shadow-2xl relative border border-white/10 overflow-hidden text-slate-800">
      {/* Ambient background decoration */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="text-center space-y-2 mb-4 relative z-10">
        <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">Quiz Complete!</h2>
        <p className="text-xs text-white/60 max-w-xs mx-auto">
          Excellent! Here is how <span className="text-brand-yellow font-bold">{candidateName}</span> performed in this test.
          <span className="text-xs text-white/40 block mt-0.5">Mock Test Mode</span>
        </p>
        
        {/* Pass/Fail badge */}
        <div className={`mt-1.5 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold ${
          isPassed 
            ? 'bg-brand-green/10 text-brand-green border border-brand-green/20' 
            : 'bg-brand-red/10 text-brand-red border border-brand-red/20'
        }`}>
          <span>{isPassed ? '🏆 PASSED' : '❌ FAILED'}</span>
          <span className="opacity-60">(Req. 50%)</span>
        </div>
      </div>

      {/* Visual Score Circle Chart */}
      <div className="flex flex-col items-center justify-center my-3 space-y-2 relative z-10">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              className="stroke-white/5"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              className={isPassed ? 'stroke-brand-green' : 'stroke-brand-red'}
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - (score / totalQuestions))}`}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-white">
            <span className="text-2xl font-black">{percentScore}%</span>
            <span className="text-[9px] uppercase font-bold tracking-widest text-white/40 mt-0.5">
              {score} / {totalQuestions} Marks
            </span>
          </div>
        </div>

        {/* Rating text */}
        <div className="text-center space-y-0.5 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-2 w-full max-w-sm">
          <span className={`text-sm font-extrabold ${rating.color}`}>
            {rating.title}
          </span>
          <p className="text-[11px] text-white/60 leading-relaxed max-w-xs mx-auto">
            {rating.desc}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-2 my-4 relative z-10">
        <div className="bg-brand-green/5 border border-brand-green/10 rounded-xl p-2 text-center">
          <span className="text-[9px] uppercase tracking-wider text-brand-green/70 font-semibold block">Correct</span>
          <span className="text-sm font-black text-brand-green mt-0.5 block">✔️ {correctCount}</span>
        </div>
        <div className="bg-brand-red/5 border border-brand-red/10 rounded-xl p-2 text-center">
          <span className="text-[9px] uppercase tracking-wider text-brand-red/70 font-semibold block">Incorrect</span>
          <span className="text-sm font-black text-brand-red mt-0.5 block">❌ {incorrectCount}</span>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-xl p-2 text-center">
          <span className="text-[9px] uppercase tracking-wider text-white/40 font-semibold block">Unanswered</span>
          <span className="text-sm font-black text-white/70 mt-0.5 block">⏭️ {unansweredCount}</span>
        </div>
      </div>

      {/* Review list */}
      <div className="mt-4 space-y-1 relative z-10">
        <h3 className="text-[10px] font-bold tracking-wider text-white/40 uppercase mb-2 pl-1">
          Question Review
        </h3>
        
        <div className="max-h-40 overflow-y-auto pr-1">
          {userAnswers.map((answer, index) => (
            <ReviewAccordion 
              key={index} 
              answer={answer} 
              idx={index} 
              playSfx={playSfx}
              soundEnabled={soundEnabled}
            />
          ))}
        </div>
      </div>

      {/* Replay Actions */}
      <div className="mt-4 space-y-2 pt-1 relative z-10">
        <button
          onClick={() => {
            if (playSfx) playSfx('click', soundEnabled)
            onRetry()
          }}
          className="w-full py-2.5 rounded-xl border border-brand-green/30 bg-brand-green/10 hover:bg-brand-green/20 text-brand-green text-xs font-bold tracking-wider uppercase active:scale-[0.99] transition-all duration-200 cursor-pointer"
        >
          Retry Quiz
        </button>
        
        <button
          onClick={() => {
            if (playSfx) playSfx('click', soundEnabled)
            onGoHome()
          }}
          className="w-full py-2.5 rounded-xl bg-slate-900 text-real-white hover:bg-slate-800 text-xs font-bold tracking-wider uppercase active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-md border border-white/5"
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}

function ReviewAccordion({ answer, idx, playSfx, soundEnabled }) {
  const [isOpen, setIsOpen] = useState(false)
  const isCorrect = answer.chosen === answer.correct

  return (
    <div className="border border-white/5 rounded-xl overflow-hidden mb-3 transition-all duration-300">
      <button
        onClick={() => {
          if (playSfx) playSfx('click', soundEnabled)
          setIsOpen(!isOpen)
        }}
        className="w-full flex items-center justify-between p-4 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200 text-left cursor-pointer"
      >
        <div className="flex items-center gap-3 pr-2">
          <span className="flex-shrink-0 text-sm font-semibold text-white/40">Q{idx + 1}</span>
          <p className="text-sm font-medium text-white/90 truncate max-w-[200px] sm:max-w-md">
            {answer.question}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          {isCorrect ? (
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-green/10 text-brand-green border border-brand-green/20">
              Correct
            </span>
          ) : answer.chosen === -1 ? (
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red border border-brand-red/20">
              Timeout
            </span>
          ) : (
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red border border-brand-red/20">
              Incorrect
            </span>
          )}
          <svg
            className={`w-4 h-4 text-white/40 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      {isOpen && (
        <div className="p-4 bg-white/[0.01] border-t border-white/5 space-y-3 animate-fade-in text-slate-800">
          <p className="text-sm font-medium text-white/80">{answer.question}</p>
          <div className="grid grid-cols-1 gap-2 text-xs">
            {answer.options.map((opt, oIdx) => {
              let cardStyle = 'border-white/5 text-white/60 bg-transparent'
              if (oIdx === answer.correct) {
                cardStyle = 'border-brand-green/30 text-brand-green bg-brand-green/5 font-medium'
              } else if (oIdx === answer.chosen && !isCorrect) {
                cardStyle = 'border-brand-red/30 text-brand-red bg-brand-red/5 font-medium'
              }
              return (
                <div key={oIdx} className={`p-2.5 rounded-lg border ${cardStyle} flex items-center justify-between`}>
                  <span>{opt}</span>
                  {oIdx === answer.correct && (
                    <span className="text-xs">✓ Correct</span>
                  )}
                  {oIdx === answer.chosen && !isCorrect && (
                    <span className="text-xs">✗ Yours</span>
                  )}
                </div>
              )
            })}
          </div>
          {answer.explanation && (
            <div className="p-3 rounded-lg bg-brand-yellow/5 border border-brand-yellow/10 text-xs text-brand-yellow/90 leading-relaxed">
              <strong className="text-brand-yellow block mb-1">Explanation:</strong>
              {answer.explanation}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
```

---

### 7. [src/components/HistoryScreen.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/HistoryScreen.jsx)
Retrieves and displays past attempts from LocalStorage with filter options.

```jsx
import React from 'react'

export default function HistoryScreen({
  historyList,
  setHistoryList,
  onBack,
  soundEnabled,
  playSfx
}) {
  const getSubjectEmoji = (subject) => {
    const s = subject || ''
    if (s.includes('Fundamental') || s.includes('Basic')) return '🧠'
    if (s.includes('Word')) return '📝'
    if (s.includes('Excel') || s.includes('MIS') || s.includes('Dashboard')) return '📈'
    if (s.includes('PowerPoint')) return '📢'
    if (s.includes('Tally') || s.includes('DFA') || s.includes('Accounting') || s.includes('Accountancy') || s.includes('Taxation') || s.includes('Busy') || s.includes('Payroll')) return '📊'
    if (s.includes('Banking')) return '🏦'
    if (s.includes('Trading') || s.includes('Share Market')) return '📈'
    if (s.includes('Graphic') || s.includes('CorelDRAW') || s.includes('Photoshop') || s.includes('Illustrator') || s.includes('3D')) return '🎨'
    if (s.includes('HTML') || s.includes('CSS') || s.includes('Web Design')) return '🌐'
    if (s.includes('Python')) return '🐍'
    if (s.includes('C++') || s.includes('Macro')) return '⚙️'
    if (s.includes('C') && s.length === 1) return '💻'
    if (s.includes('PHP')) return '🐘'
    if (s.includes('Java')) return '☕'
    if (s.includes('React')) return '⚛️'
    if (s.includes('Linux')) return '🐧'
    return '📜'
  }

  const handleDeleteRecord = (id) => {
    if (playSfx) playSfx('click', soundEnabled)
    const updated = historyList.filter(item => item.id !== id)
    setHistoryList(updated)
    localStorage.setItem('quiz_history', JSON.stringify(updated))
  }

  const handleClearAll = () => {
    if (playSfx) playSfx('click', soundEnabled)
    if (window.confirm('Are you sure you want to clear all history?')) {
      setHistoryList([])
      localStorage.removeItem('quiz_history')
    }
  }

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-white/10 max-h-[85vh] flex flex-col animate-fade-in text-white">
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 relative z-10 flex-shrink-0">
        <button
          onClick={() => {
            if (playSfx) playSfx('click', soundEnabled)
            onBack()
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-semibold tracking-wider text-white/70 hover:text-white transition-all cursor-pointer border border-white/5"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </button>
        
        {historyList.length > 0 && (
          <button
            onClick={handleClearAll}
            className="px-3 py-1.5 rounded-lg bg-brand-red/10 hover:bg-brand-red/20 text-brand-red hover:text-brand-red/90 text-xs font-bold transition-all border border-brand-red/10 cursor-pointer"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="text-center relative mb-4 z-10 flex-shrink-0">
        <h2 className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-white via-brand-yellow to-brand-green bg-clip-text text-transparent">
          Quiz History
        </h2>
      </div>

      <div className="overflow-y-auto flex-1 pr-1 space-y-3 min-h-0 relative z-10">
        {historyList.length === 0 ? (
          <div className="text-center py-12 text-white/40 space-y-2">
            <span className="text-4xl block">📜</span>
            <p className="text-sm font-light">No attempts recorded yet.</p>
          </div>
        ) : (
          historyList.map((record) => {
            const isPass = record.status === 'Pass'
            const emoji = getSubjectEmoji(record.subject)
            return (
              <div
                key={record.id}
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-4 hover:bg-white/[0.04] transition-all text-slate-800"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{emoji}</span>
                    <span className="text-sm font-bold truncate">{record.subject}</span>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-white/5 text-white/55">
                      {record.difficulty}
                    </span>
                  </div>
                  <div className="text-xs text-white/80 font-medium">
                    👤 Candidate: <span className="text-brand-yellow font-semibold">{record.name}</span>
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-white/45 font-medium">
                    <span>🎯 Score: {record.score}/{record.totalQuestions} ({record.percentage}%)</span>
                    <span className={isPass ? 'text-brand-green font-bold' : 'text-brand-red font-bold'}>
                      {isPass ? '🏆 Passed' : '❌ Failed'}
                    </span>
                  </div>
                  <div className="text-[10px] text-white/30">{record.dateTime}</div>
                </div>
                
                <button
                  onClick={() => handleDeleteRecord(record.id)}
                  className="p-2 rounded-xl bg-rose-500/5 hover:bg-rose-500/15 text-rose-400 hover:text-rose-300 transition-all border border-rose-500/5 cursor-pointer flex-shrink-0"
                  title="Delete Attempt"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
```

---

### 8. [src/components/LogoutConfirmDialog.jsx](file:///c:/Users/ISHMEET/ego/insta_quiz/src/components/LogoutConfirmDialog.jsx)
Wired as a modal backdrop verification dialog checking if candidates wish to log out.

```jsx
import React from 'react'

export default function LogoutConfirmDialog({ onConfirm, onCancel, soundEnabled, playSfx }) {
  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-slate-100 shadow-2xl relative animate-slide-up text-center">
        {/* Warning Icon */}
        <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        {/* Title */}
        <h3 className="text-lg font-black text-slate-800">Confirm Logout</h3>

        {/* Message */}
        <p className="text-xs sm:text-sm text-slate-500 font-semibold mt-2 leading-relaxed">
          Are you sure you want to log out? You will need to sign in again to access your account.
        </p>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            onClick={() => {
              if (playSfx) playSfx('click', soundEnabled)
              onCancel()
            }}
            className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-800 text-xs font-bold uppercase transition-all duration-200 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (playSfx) playSfx('click', soundEnabled)
              onConfirm()
            }}
            className="w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-real-white text-xs font-bold uppercase transition-all duration-200 cursor-pointer shadow-md shadow-rose-500/15 hover:shadow-rose-500/25 active:scale-95"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
```

---

### 9. [src/utils/sfx.js](file:///c:/Users/ISHMEET/ego/insta_quiz/src/utils/sfx.js)
Synthesizes sound frequencies dynamically using Web Audio API.

```javascript
// Web Audio API Sound Generator
export const playSfx = (type, enabled) => {
  if (!enabled) return
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext
    if (!AudioContext) return
    const ctx = new AudioContext()
    
    if (type === 'click') {
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.type = 'sine'
      osc.frequency.setValueAtTime(450, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08)
      gain.gain.setValueAtTime(0.06, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08)
      osc.start()
      osc.stop(ctx.currentTime + 0.08)
    } else if (type === 'correct') {
      const now = ctx.currentTime
      const playTone = (freq, start, duration) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(freq, start)
        gain.gain.setValueAtTime(0, start)
        gain.gain.linearRampToValueAtTime(0.12, start + 0.02)
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
        osc.start(start)
        osc.stop(start + duration)
      }
      playTone(523.25, now, 0.15) // C5
      playTone(659.25, now + 0.07, 0.15) // E5
      playTone(783.99, now + 0.14, 0.25) // G5
      playTone(1046.50, now + 0.22, 0.4) // C6
    } else if (type === 'incorrect') {
      const now = ctx.currentTime
      const playBuzz = (freq, start, duration) => {
        const osc1 = ctx.createOscillator()
        const osc2 = ctx.createOscillator()
        const gain = ctx.createGain()
        osc1.connect(gain)
        osc2.connect(gain)
        gain.connect(ctx.destination)
        
        osc1.type = 'sawtooth'
        osc2.type = 'triangle'
        osc1.frequency.setValueAtTime(freq, start)
        osc2.frequency.setValueAtTime(freq - 4, start)
        osc1.frequency.linearRampToValueAtTime(freq - 25, start + duration)
        
        gain.gain.setValueAtTime(0.08, start)
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
        
        osc1.start(start)
        osc2.start(start)
        osc1.stop(start + duration)
        osc2.stop(start + duration)
      }
      playBuzz(140, now, 0.2)
      playBuzz(120, now + 0.1, 0.25)
    } else if (type === 'complete') {
      const now = ctx.currentTime
      const playTone = (freq, start, duration, type = 'sine') => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()
        osc.connect(gain)
        gain.connect(ctx.destination)
        osc.type = type
        osc.frequency.setValueAtTime(freq, start)
        gain.gain.setValueAtTime(0, start)
        gain.gain.linearRampToValueAtTime(0.08, start + 0.05)
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration)
        osc.start(start)
        osc.stop(start + duration)
      }
      playTone(261.63, now, 0.25, 'triangle') // C4
      playTone(329.63, now, 0.25, 'triangle') // E4
      playTone(392.00, now, 0.25, 'triangle') // G4
      
      playTone(329.63, now + 0.2, 0.25, 'triangle') // E4
      playTone(392.00, now + 0.2, 0.25, 'triangle') // G4
      playTone(523.25, now + 0.2, 0.25, 'triangle') // C5
      
      playTone(523.25, now + 0.4, 0.5, 'triangle') // C5
      playTone(659.25, now + 0.4, 0.5, 'triangle') // E5
      playTone(783.99, now + 0.4, 0.5, 'triangle') // G5
      playTone(1046.50, now + 0.4, 0.7, 'sine') // C6
    }
  } catch (e) {
    console.error("Audio error:", e)
  }
}
```

---

### 10. [src/utils/helpers.js](file:///c:/Users/ISHMEET/ego/insta_quiz/src/utils/helpers.js)
Stores common utility functions like list shufflers.

```javascript
// Fisher-Yates Shuffle Utility
export const shuffleArray = (array) => {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
```

---

### 11. [src/data/questionBank.js](file:///c:/Users/ISHMEET/ego/insta_quiz/src/data/questionBank.js)
Stores the entire catalog database containing questions, correct indices, choices, and explanations.

*(Note: The full file is omitted here for brevity due to size constraint of ~2000 lines of data, but it is stored at the path listed above).*

---

### 12. [server.js](file:///c:/Users/ISHMEET/ego/insta_quiz/server.js)
The secure Express server which manages nodemailer SMTP credentials, generates OTPs, rate-limits verification targets, and verifies secure code session payloads.

```javascript
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory store for OTPs
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
      if (nodemailer.getTestMessageUrl(info)) {
        console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
      }
    }
    
    return res.status(200).json({ 
      message: 'OTP has been sent to your registered email address.' 
    });
  } catch (error) {
    console.error("Error sending email:", error);
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

  if (record.attemptsRemaining <= 0) {
    return res.status(403).json({ 
      error: 'Too many failed verification attempts. Please request a new OTP.' 
    });
  }

  const now = Date.now();

  if (now > record.expiresAt) {
    delete otpStore[email];
    return res.status(410).json({ 
      error: 'OTP has expired. Please request a new OTP.' 
    });
  }

  const hashedInput = hashOtp(otp.trim());
  if (record.hashedOtp === hashedInput) {
    delete otpStore[email];
    const sessionToken = crypto.randomBytes(32).toString('hex');
    
    return res.status(200).json({
      success: true,
      message: 'OTP verified successfully.',
      session: {
        token: sessionToken,
        email,
        name: email.split('@')[0],
        loggedInAt: now
      }
    });
  } else {
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
app.post('/api/login', (req, res) => {
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

  // Create candidate session payload
  const sessionToken = crypto.randomBytes(32).toString('hex');
  
  return res.status(200).json({
    success: true,
    message: 'Login successful.',
    session: {
      token: sessionToken,
      email: email.trim(),
      name: name.trim(),
      loggedInAt: Date.now()
    }
  });
});

app.listen(PORT, () => {
  console.log(`Secure OTP Server running on http://localhost:${PORT}`);
});
```

---

### 13. [count_questions.js](file:///c:/Users/ISHMEET/ego/insta_quiz/count_questions.js)
Script to evaluate option counts and correct question structures.

```javascript
import fs from 'fs';

try {
  const content = fs.readFileSync('src/data/questionBank.js', 'utf8');
  
  const startIndex = content.indexOf('const QUESTION_BANK = {');
  if (startIndex === -1) {
    console.log("QUESTION_BANK not found in src/data/questionBank.js!");
    process.exit(1);
  }
  
  let braceCount = 0;
  let endIndex = -1;
  for (let i = startIndex + 'const QUESTION_BANK = '.length; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    else if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }
  
  if (endIndex === -1) {
    console.log("Could not find matching closing brace for QUESTION_BANK");
    process.exit(1);
  }
  
  const qBankStr = content.substring(startIndex + 'const QUESTION_BANK = '.length, endIndex);
  const qBank = eval(`(${qBankStr})`);
  
  let total = 0;
  let invalid = [];
  
  for (const catKey in qBank) {
    const cat = qBank[catKey];
    
    if (cat.subcategories) {
      for (const subKey in cat.subcategories) {
        const sub = cat.subcategories[subKey];
        ['easy', 'medium', 'hard'].forEach(diff => {
          if (sub[diff] && Array.isArray(sub[diff])) {
            sub[diff].forEach((q, idx) => {
              total++;
              if (!q.options || !Array.isArray(q.options) || q.options.length !== 4) {
                invalid.push({ catKey, subKey, diff, idx, question: q.question, options: q.options });
              }
            });
          }
        });
      }
    }
    
    ['easy', 'medium', 'hard'].forEach(diff => {
      if (cat[diff] && Array.isArray(cat[diff])) {
        cat[diff].forEach((q, idx) => {
          total++;
          if (!q.options || !Array.isArray(q.options) || q.options.length !== 4) {
            invalid.push({ catKey, diff, idx, question: q.question, options: q.options });
          }
        });
      }
    });
  }
  
  console.log(`Total questions analyzed: ${total}`);
  console.log(`Questions with invalid options count (not equal to 4): ${invalid.length}`);
  if (invalid.length > 0) {
    console.log("Invalid questions details:", JSON.stringify(invalid.slice(0, 10), null, 2));
  }
} catch (e) {
  console.error("Error running script:", e);
}
```

---

### 14. [extract_qbank.js](file:///c:/Users/ISHMEET/ego/insta_quiz/extract_qbank.js)
Extracts inline question banks from `src/App.jsx` to `src/data/questionBank.js`.

```javascript
import fs from 'fs';
import path from 'path';

const appJsxPath = 'src/App.jsx';
const targetDir = 'src/data';
const targetPath = path.join(targetDir, 'questionBank.js');

try {
  console.log(`Reading from ${appJsxPath}...`);
  const content = fs.readFileSync(appJsxPath, 'utf8');
  
  const startIndex = content.indexOf('const QUESTION_BANK = {');
  if (startIndex === -1) {
    console.error("Error: const QUESTION_BANK not found in App.jsx!");
    process.exit(1);
  }
  
  let braceCount = 0;
  let endIndex = -1;
  const startOffset = startIndex + 'const QUESTION_BANK = '.length;
  for (let i = startOffset; i < content.length; i++) {
    if (content[i] === '{') braceCount++;
    else if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }
  
  if (endIndex === -1) {
    console.error("Error: Could not find matching closing brace for QUESTION_BANK");
    process.exit(1);
  }
  
  const qBankContent = content.substring(startIndex, endIndex);
  const exportedQBankContent = 'export ' + qBankContent + '\n';
  
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`Created directory ${targetDir}`);
  }
  
  fs.writeFileSync(targetPath, exportedQBankContent, 'utf8');
  console.log(`Successfully extracted and saved QUESTION_BANK to ${targetPath}`);
  console.log(`Extracted size: ${(exportedQBankContent.length / 1024).toFixed(2)} KB`);
} catch (err) {
  console.error("Failed to extract question bank:", err);
  process.exit(1);
}
```

---

### 15. [package.json](file:///c:/Users/ISHMEET/ego/insta_quiz/package.json)
Configures project dependencies, bundlers, and package commands.

```json
{
  "name": "insta_quiz",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "extract": "node extract_qbank.js"
  },
  "dependencies": {
    "@tailwindcss/vite": "^4.3.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "nodemailer": "^6.9.13",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwindcss": "^4.3.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.7",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "vite": "^6.0.5"
  }
}
```

---

### 16. [index.html](file:///c:/Users/ISHMEET/ego/insta_quiz/index.html)
Root HTML file rendering mount wrappers.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </head>
</html>
```

---

### 17. [vite.config.js](file:///c:/Users/ISHMEET/ego/insta_quiz/vite.config.js)
Bundler configuration and API target routing proxy setups.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  }
})
```

---

### 18. [eslint.config.js](file:///c:/Users/ISHMEET/ego/insta_quiz/eslint.config.js)
Code linter patterns and validation rules.

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]
```
