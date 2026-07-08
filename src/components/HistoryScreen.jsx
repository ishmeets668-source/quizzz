import React from 'react'

export default function HistoryScreen({
  historyList,
  onDeleteRecord,
  onClearAll,
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
    if (onDeleteRecord) onDeleteRecord(id)
  }

  const handleClearAll = () => {
    if (playSfx) playSfx('click', soundEnabled)
    if (window.confirm('Are you sure you want to clear all history?')) {
      if (onClearAll) onClearAll()
    }
  }

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-white/10 max-h-[85vh] flex flex-col animate-fade-in text-white">
      {/* Ambient background glow inside the card */}
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

      {/* Attempts list */}
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
                className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 flex items-center justify-between gap-4 hover:bg-white/[0.04] transition-all"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{emoji}</span>
                    <span className="text-sm font-bold text-white truncate">{record.subject}</span>
                    {record.difficulty && record.difficulty !== 'General' && (
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-md bg-white/5 text-white/55">
                        {record.difficulty}
                      </span>
                    )}
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
