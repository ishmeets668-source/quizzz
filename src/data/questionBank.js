export const QUESTION_BANK = {
  coding: {
    title: 'Technology & Coding',
    icon: '💻',
    colorTheme: 'from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.15)] border-cyan-500/20 text-cyan-400',
    subcategories: {
      html: { title: 'HTML', load: () => import('./courses/coding.js').then(m => m.htmlQuestions) },
      css: { title: 'CSS', load: () => import('./courses/coding.js').then(m => m.cssQuestions) },
      python: { title: 'Python', load: () => import('./courses/coding.js').then(m => m.pythonQuestions) },
      
      tally: { title: 'Tally', load: () => import('./courses/accounting.js').then(m => m.tallyQuestions) },
      dfa: { title: 'DFA', load: () => import('./courses/accounting.js').then(m => m.dfaQuestions) },
      adfa: { title: 'ADFA', load: () => import('./courses/accounting.js').then(m => m.adfaQuestions) },
      pdfa: { title: 'PDFA', load: () => import('./courses/accounting.js').then(m => m.pdfaQuestions) },
      taxation: { title: 'Taxation', load: () => import('./courses/accounting.js').then(m => m.taxationQuestions) },
      
      graphic_design: { title: 'Graphic Design', load: () => import('./courses/graphic_design.js').then(m => m.graphicDesignQuestions) },
      coreldraw: { title: 'CorelDRAW', load: () => import('./courses/graphic_design.js').then(m => m.coreldrawQuestions) },
      photoshop: { title: 'Adobe Photoshop', load: () => import('./courses/graphic_design.js').then(m => m.photoshopQuestions) },
      illustrator: { title: 'Adobe Illustrator', load: () => import('./courses/graphic_design.js').then(m => m.illustratorQuestions) },
      three_d_effects: { title: '3D Effects', load: () => import('./courses/graphic_design.js').then(m => m.threeDEffectsQuestions) },
      
      react: { title: 'React', load: () => import('./courses/coding_extra.js').then(m => m.reactQuestions) },
      gsap: { title: 'GSAP', load: () => import('./courses/coding_extra.js').then(m => m.gsapQuestions) },
      lenis: { title: 'Lenis', load: () => import('./courses/coding_extra.js').then(m => m.lenisQuestions) },
      c_lang: { title: 'C', load: () => import('./courses/coding_extra.js').then(m => m.cLangQuestions) },
      cpp: { title: 'C++', load: () => import('./courses/coding_extra.js').then(m => m.cppQuestions) },
      php: { title: 'PHP', load: () => import('./courses/coding_extra.js').then(m => m.phpQuestions) },
      java: { title: 'Java', load: () => import('./courses/coding_extra.js').then(m => m.javaQuestions) },
      javascript: { title: 'JavaScript', load: () => import('./courses/coding_extra.js').then(m => m.javascriptQuestions) },
      sql: { title: 'SQL', load: () => import('./courses/coding_extra.js').then(m => m.sqlQuestions) },
      linux: { title: 'Linux', load: () => import('./courses/coding_extra.js').then(m => m.linuxQuestions) },
      
      web_design_quiz: { title: 'Web Design', load: () => import('./courses/professional.js').then(m => m.webDesignQuizQuestions) },
      o_level: { title: 'O Level', load: () => import('./courses/professional.js').then(m => m.oLevelQuestions) },
      a_level: { title: 'A Level', load: () => import('./courses/professional.js').then(m => m.aLevelQuestions) },
      data_scientist: { title: 'Data Scientist', load: () => import('./courses/professional.js').then(m => m.dataScientistQuestions) },
      google_ads: { title: 'Google Ads', load: () => import('./courses/professional.js').then(m => m.googleAdsQuestions) },
      seo: { title: 'SEO', load: () => import('./courses/professional.js').then(m => m.seoQuestions) },
      wordpress: { title: 'WordPress', load: () => import('./courses/professional.js').then(m => m.wordpressQuestions) },
      
      excel_mis: { title: 'Excel MIS', load: () => import('./courses/excel.js').then(m => m.excelMisQuestions) },
      excel_macro: { title: 'Excel Macro', load: () => import('./courses/excel.js').then(m => m.excelMacroQuestions) },
      excel_dashboard: { title: 'Excel Dashboard', load: () => import('./courses/excel.js').then(m => m.excelDashboardQuestions) },
      advanced_excel: { title: 'Advanced Excel', load: () => import('./courses/excel.js').then(m => m.advancedExcelQuestions) },
      
      niit: { title: 'NIIT', load: () => import('./courses/diploma.js').then(m => m.niitQuestions) },
      dit: { title: 'DIT', load: () => import('./courses/diploma.js').then(m => m.ditQuestions) },
      adca: { title: 'ADCA', load: () => import('./courses/diploma.js').then(m => m.adcaQuestions) },
      dca: { title: 'DCA', load: () => import('./courses/diploma.js').then(m => m.dcaQuestions) },
      
      pandas: { title: 'Pandas', load: () => import('./courses/data_analyst.js').then(m => m.pandasQuestions) },
      numpy: { title: 'NumPy', load: () => import('./courses/data_analyst.js').then(m => m.numpyQuestions) },
      machine_learning: { title: 'Machine Learning', load: () => import('./courses/data_analyst.js').then(m => m.machineLearningQuestions) },
      power_bi: { title: 'Power BI', load: () => import('./courses/data_analyst.js').then(m => m.powerBiQuestions) },
      tableau: { title: 'Tableau', load: () => import('./courses/data_analyst.js').then(m => m.tableauQuestions) },
      
      basic: { title: 'Basic Questions', load: () => import('./courses/other.js').then(m => m.basicQuestions) },
      ccc: { title: 'CCC', load: () => import('./courses/other.js').then(m => m.cccQuestions) },
      ip_it: { title: 'IP IT', load: () => import('./courses/other.js').then(m => m.ipItQuestions) }
    }
  }
};
