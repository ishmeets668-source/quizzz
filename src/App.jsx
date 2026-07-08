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

  // Fetch history from MongoDB
  useEffect(() => {
    if (isLoggedIn && candidateEmail) {
      fetch(`/api/history?email=${encodeURIComponent(candidateEmail)}`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch history');
          return res.json();
        })
        .then(data => {
          if (data.success && data.history) {
            setHistoryList(data.history);
          }
        })
        .catch(err => console.error("Error fetching history from MongoDB:", err));
    }
  }, [isLoggedIn, candidateEmail]);

  // Delete a history record
  const handleDeleteRecord = (id) => {
    fetch(`/api/history/${id}?email=${encodeURIComponent(candidateEmail)}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to delete record');
      return res.json();
    })
    .then(data => {
      if (data.success) {
        setHistoryList(prev => prev.filter(item => item.id !== id));
      }
    })
    .catch(err => console.error("Error deleting record from MongoDB:", err));
  };

  // Clear all history records for candidate
  const handleClearAllHistory = () => {
    fetch(`/api/history?email=${encodeURIComponent(candidateEmail)}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to clear history');
      return res.json();
    })
    .then(data => {
      if (data.success) {
        setHistoryList([]);
      }
    })
    .catch(err => console.error("Error clearing history from MongoDB:", err));
  };

  // Timer Ref to clear intervals correctly
  const timerRef = useRef(null)

  // Load questions when starting game
  const startGame = (diffOverride, subcatOverride) => {
    playSfx('click', soundEnabled)
    const activeSubcat = subcatOverride || selectedSubcategory
    if (subcatOverride) {
      setSelectedSubcategory(subcatOverride)
    }
    const categoryData = QUESTION_BANK[selectedCategory]
    if (categoryData) {
      let qList = []
      let sourceObj = null
      
      if (categoryData.subcategories) {
        sourceObj = categoryData.subcategories[activeSubcat]
      } else {
        sourceObj = categoryData
      }
      
      if (sourceObj) {
        const levels = ['easy', 'medium', 'hard']
        levels.forEach(level => {
          if (Array.isArray(sourceObj[level])) {
            qList = qList.concat(sourceObj[level])
          }
        })
        
        if (qList.length === 0 && Array.isArray(sourceObj)) {
          qList = sourceObj
        }
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
        alert("This subject's questions are not available yet.");
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
      
      const categoryData = QUESTION_BANK[selectedCategory]
      let subjectTitle = 'General Quiz'
      if (categoryData) {
        if (categoryData.subcategories && categoryData.subcategories[selectedSubcategory]) {
          subjectTitle = categoryData.subcategories[selectedSubcategory].title || selectedSubcategory
        } else {
          subjectTitle = categoryData.title || selectedCategory
        }
      }

      const newRecord = {
        id: Date.now(),
        name: candidateName.trim() || 'Anonymous',
        subject: subjectTitle,
        difficulty: 'General',
        totalQuestions,
        score,
        percentage: percentScore,
        status: isPassed ? 'Pass' : 'Fail',
        dateTime: new Date().toLocaleString()
      }

      // Save to MongoDB
      fetch('/api/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...newRecord,
          email: candidateEmail
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.history) {
          setHistoryList(data.history);
        }
      })
      .catch(err => {
        console.error("Error saving history to MongoDB:", err);
        // Fallback to local state if server/DB is down
        setHistoryList(prev => [newRecord, ...prev]);
      });

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
                onDeleteRecord={handleDeleteRecord}
                onClearAll={handleClearAllHistory}
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