import { QUESTION_BANK } from './src/data/questionBank.js';

try {
  let total = 0;
  let invalid = [];
  let counts = {};
  
  for (const catKey in QUESTION_BANK) {
    const cat = QUESTION_BANK[catKey];
    
    // Process subcategories
    if (cat.subcategories) {
      for (const subKey in cat.subcategories) {
        const sub = cat.subcategories[subKey];
        counts[subKey] = {};
        ['easy', 'medium', 'hard'].forEach(diff => {
          if (sub[diff] && Array.isArray(sub[diff])) {
            counts[subKey][diff] = sub[diff].length;
            sub[diff].forEach((q, idx) => {
              total++;
              if (!q.options || !Array.isArray(q.options) || q.options.length !== 4) {
                invalid.push({ catKey, subKey, diff, idx, reason: 'invalid options count', question: q.question, options: q.options });
              } else if (typeof q.correct !== 'number' || q.correct < 0 || q.correct > 3) {
                invalid.push({ catKey, subKey, diff, idx, reason: 'invalid correct index', correct: q.correct });
              } else if (!q.question || !q.explanation) {
                invalid.push({ catKey, subKey, diff, idx, reason: 'missing question or explanation' });
              }
            });
          }
        });
      }
    }
  }
  
  console.log(`Total questions analyzed: ${total}`);
  console.log("Category breakdown:");
  console.log(JSON.stringify(counts, null, 2));
  console.log(`Questions with issues: ${invalid.length}`);
  if (invalid.length > 0) {
    console.log("Invalid questions details:", JSON.stringify(invalid.slice(0, 10), null, 2));
  }
} catch (e) {
  console.error("Error running script:", e);
}
