import React, { useState, useEffect, useRef } from 'react'

export default function WelcomeScreen({
  candidateName,
  candidatePhone,
  onLogout,
  onSelectSubject,
  onViewHistory,
  soundEnabled,
  playSfx
}) {
  const [activeDropdown, setActiveDropdown] = useState(null) // 'basic' | 'accounting' | 'graphic_design' | 'web_design' | ...

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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
      
      {/* User Profile Badge & Logout */}
      <div className="flex items-center justify-end mb-2 relative z-20">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 shadow-sm">
          <div className="w-6 h-6 rounded-full bg-blue-600 text-real-white flex items-center justify-center text-xs font-black select-none">
            {candidateName ? candidateName.charAt(0).toUpperCase() : 'U'}
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-black text-slate-700 leading-none">{candidateName}</p>
            <p className="text-[10px] font-medium text-slate-600 leading-none mt-0.5">{candidatePhone}</p>
          </div>
          <button
            onClick={() => {
              if (playSfx) playSfx('click', soundEnabled)
              onLogout()
            }}
            className="p-1 rounded-lg hover:bg-red-50 text-slate-600 hover:text-red-600 transition-colors cursor-pointer ml-1"
            title="Logout"
            aria-label="Logout"
          >
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>

      <div className="text-center relative space-y-2">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-[0_8px_24px_rgba(124,58,237,0.15)] mb-0.5 hover:scale-105 transition-transform duration-300 overflow-hidden border border-purple-100/30">
          <img src="/iccvs_logo.jpg" alt="ICCVS Logo" width="56" height="56" className="w-full h-full object-contain p-1" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-wide bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent select-none pb-0.5">
          Mock Test
        </h1>
        <p className="text-[10px] text-slate-600 font-bold max-w-sm mx-auto uppercase tracking-widest">
          Design by Ishmeet Singh / Rishi Biswas
        </p>
        <div className="w-10 h-0.5 bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 mx-auto rounded-full mt-1"></div>
        <p className="text-xs text-slate-700 font-bold max-w-xs mx-auto leading-relaxed mt-1">
          Our Target Your Success
        </p>
      </div>

      <div className="mt-4 space-y-3">
        <h2 className="text-[10px] font-bold tracking-widest text-slate-600 uppercase block text-center mb-1">
          Select a Subject to Begin
        </h2>
        
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
                aria-haspopup={item.hasDropdown ? "true" : undefined}
                aria-expanded={item.hasDropdown ? (activeDropdown === item.key) : undefined}
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
                {item.hasDropdown && <span className="text-[9px] text-slate-600 mr-0.5 select-none">▼</span>}
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

      {/* View History Button */}
      <div className="mt-6 border-t border-black/[0.06] pt-5 relative">
        <button
          onClick={() => {
            if (playSfx) playSfx('click', soundEnabled)
            onViewHistory()
          }}
          className="w-full py-3.5 rounded-2xl bg-[#f1f0fb] hover:bg-[#e8e6f7] text-[#3f3967] hover:text-[#2d294d] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-[#e2e0f2] shadow-sm font-semibold text-xs tracking-wider"
        >
          <span>📜 View Quiz History</span>
        </button>
      </div>
    </div>
  )
}
