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

      {/* Visual Circular/Radial Score Progress */}
      <div className="flex flex-col items-center justify-center my-3 space-y-2 relative z-10">
        <div className="relative w-28 h-28 flex items-center justify-center">
          {/* SVG Radial Score Chart */}
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              className="stroke-white/5"
              strokeWidth="8"
            />
            {/* Colored Progress Circle */}
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
          {/* Score Number in Center */}
          <div className="absolute flex flex-col items-center justify-center text-white">
            <span className="text-2xl font-black">{percentScore}%</span>
            <span className="text-[9px] uppercase font-bold tracking-widest text-white/40 mt-0.5">
              {score} / {totalQuestions} Marks
            </span>
          </div>
        </div>

        {/* Dynamic Badge & Rating */}
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

      {/* Accordion List for Question Reviews */}
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

      {/* Replay / Welcome Screen Buttons */}
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
        
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => {
              if (playSfx) playSfx('click', soundEnabled)
              onChooseAnother()
            }}
            className="py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-bold tracking-wider uppercase active:scale-[0.99] transition-all duration-200 cursor-pointer border border-white/10"
          >
            Choose Another Subject
          </button>
          
          <button
            onClick={() => {
              if (playSfx) playSfx('click', soundEnabled)
              onGoHome()
            }}
            className="py-2.5 rounded-xl bg-slate-900 text-real-white hover:bg-slate-800 text-xs font-bold tracking-wider uppercase active:scale-[0.99] transition-all duration-200 cursor-pointer shadow-md"
          >
            Go to Home
          </button>
        </div>
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
        <div className="p-4 bg-white/[0.01] border-t border-white/5 space-y-3 animate-fade-in text-white">
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
