import fs from 'fs';
const content = fs.readFileSync('src/components/EbookReader.jsx', 'utf-8');
const lines = content.split('\n');
for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i].trim();
  const nextLine = lines[i+1].trim();
  
  if (line === '' || nextLine === '') continue;
  
  if (line.match(/[a-zA-Záéíóúãõâêô0-9]$/) && nextLine.startsWith('<span')) {
    console.log(`Missing space before span at line ${i+1}:`);
    console.log(lines[i]);
    console.log(lines[i+1]);
    console.log('---');
  }
  
  if (line.endsWith('</span>') && nextLine.match(/^[a-zA-Záéíóúãõâêô0-9]/)) {
    console.log(`Missing space after span at line ${i+1}:`);
    console.log(lines[i]);
    console.log(lines[i+1]);
    console.log('---');
  }
}
