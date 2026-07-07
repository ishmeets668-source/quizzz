import fs from 'fs';

try {
  const content = fs.readFileSync('src/data/questionBank.js', 'utf8');
  
  // Extract the QUESTION_BANK object literal from the file
  const startIndex = content.indexOf('const QUESTION_BANK = {');
  if (startIndex === -1) {
    console.log("QUESTION_BANK not found in src/data/questionBank.js!");
    process.exit(1);
  }
  
  // Find matching closing brace for QUESTION_BANK
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
  
  // Evaluate the extracted object literal
  const qBank = eval(`(${qBankStr})`);
  
  let total = 0;
  let invalid = [];
  
  for (const catKey in qBank) {
    const cat = qBank[catKey];
    
    // Process subcategories
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
    
    // Process direct categories (if any)
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
