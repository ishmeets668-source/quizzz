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
