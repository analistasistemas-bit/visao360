import fs from 'fs';
const content = fs.readFileSync('src/components/EbookReader.jsx', 'utf-8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  const beforeSpan = line.match(/[a-zA-Záéíóúãõâêô0-9\.\,\!\?\]\)]<span/);
  if (beforeSpan) {
    console.log(`Line ${i+1}: Missing space before span -> ${line.trim()}`);
  }

  const afterSpan = line.match(/<\/span>[a-zA-Záéíóúãõâêô0-9\[\(]/);
  if (afterSpan) {
    console.log(`Line ${i+1}: Missing space after span -> ${line.trim()}`);
  }
}
