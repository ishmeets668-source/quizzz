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
      <div className="glass-panel rounded-2xl p-3 flex items-center justify-between border border-white/10">
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

        {/* Timer Progress Ring & Numeric Countdown */}
        <div className="flex items-center justify-between mb-4 mt-0.5">
          <div className="text-xs font-bold text-white/40 tracking-wider uppercase">
            Question {currentIdx + 1}
          </div>
          
          {/* Timer Display */}
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
        <h3 className="text-base sm:text-lg font-bold leading-snug text-white/90 mb-4">
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
                // Correct option turns green and pulses
                optionClass = 'bg-brand-green/10 border-brand-green/50 text-brand-green font-semibold ring-2 ring-brand-green/20 animate-pulse-fast'
              } else if (isSelected && !isCorrect) {
                // Selected incorrect option turns red and shakes
                optionClass = 'bg-brand-red/10 border-brand-red/50 text-brand-red font-semibold ring-2 ring-brand-red/20 animate-shake'
              } else {
                // Non-selected incorrect options fade
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
                  <span className="font-medium text-white">{opt}</span>
                </div>
                
                {/* Checkmarks / Cross indicators */}
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

        {/* Reveal Explanation Box */}
        {selectedAns !== null && (
          <div className="mt-4 p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-xs leading-relaxed animate-fade-in">
            <div className="flex items-center gap-1.5 mb-1 text-indigo-400 font-bold uppercase tracking-wider">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explanation
            </div>
            <p className="text-indigo-200/90 font-medium">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Next/Skip Button */}
        {selectedAns !== null && (
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleNext}
              className={`px-5 py-2.5 rounded-xl bg-gradient-to-r ${currentTheme} font-bold text-xs tracking-wider uppercase shadow-md flex items-center gap-2 hover:opacity-95 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer`}
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
