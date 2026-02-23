const fs = require('fs');
const content = fs.readFileSync('src/components/EbookReader.jsx', 'utf-8');
const lines = content.split('\n');
for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i].trim();
  const nextLine = lines[i+1].trim();
  
  if (line === '' || nextLine === '') continue;
  
  // Case 1: Line ends with text (no > tag closer), next line starts with <span
  if (line.match(/[a-zA-Záéíóúãõâêô]$/) && nextLine.startsWith('<span')) {
    console.log(`Possible glue before span at line ${i+1}:`);
    console.log(line);
    console.log(nextLine);
    console.log('---');
  }
  
  // Case 2: Line ends with </span>, next line starts with text
  if (line.endsWith('</span>') && nextLine.match(/^[a-zA-Záéíóúãõâêô]/)) {
    console.log(`Possible glue after span at line ${i+1}:`);
    console.log(line);
    console.log(nextLine);
    console.log('---');
  }
  
  // Case 3: Line ends with text, next line starts with text (and parent is a semantic tag)
  // Hard to detect, but let's check basic ones
  if (line.match(/[a-zA-Záéíóúãõâêô]$/) && nextLine.match(/^[a-zA-Záéíóúãõâêô]/) && !line.includes('className') && !nextLine.includes('className')) {
      // Ignore some noise
  }
}
