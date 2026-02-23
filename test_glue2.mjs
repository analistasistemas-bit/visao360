import fs from 'fs';
const content = fs.readFileSync('src/components/EbookReader.jsx', 'utf-8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // same line misses space
  if (line.match(/[a-zA-Záéíóúãõâêô0-9]<span/)) {
    console.log(`Line ${i+1}: Missing space before span`);
    console.log(line.trim());
  }
  
  // same line misses space after
  if (line.match(/<\/span>[a-zA-Záéíóúãõâêô0-9]/)) {
    console.log(`Line ${i+1}: Missing space after span`);
    console.log(line.trim());
  }
}
