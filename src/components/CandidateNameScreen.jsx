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
        
        <div className="text-right">
          <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block">Subject Selected</span>
          <span className="text-sm font-black text-brand-white capitalize">
            {getSubjectLabel(selectedSubcategory)}
          </span>
        </div>
      </div>

      <div className="text-center relative space-y-1 mb-4 z-10">
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
          <label htmlFor="confirm-candidate-name" className="text-xs font-semibold tracking-wider text-white/70 uppercase block pl-1 mb-1.5">
            Candidate Name
          </label>
          <input
            id="confirm-candidate-name"
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            placeholder="Enter your full name"
            maxLength={30}
            className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.01] border focus:outline-none transition-all duration-300 text-sm font-medium text-white placeholder-white/20 ${
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
