import fs from 'fs';
const content = fs.readFileSync('src/components/EbookReader.jsx', 'utf-8');
const lines = content.split('\n');

for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i].trim();
  const nextLine = lines[i+1].trim();

  // Check if line ends with a word and next line starts with an inline tag without explicit space
  if (line.match(/[a-zA-Záéíóúãõâêô0-9\.\,\!\?\]\)]$/) && nextLine.match(/^<[a-z]+/)) {
    // Only care if the next line is an inline tag like span, strong, em, b, i, a
    if (nextLine.match(/^<(span|strong|em|b|i|a)[\s>]/)) {
        console.log(`Line ${i+1}: Missing space before tag:`);
        console.log(line);
        console.log(nextLine);
    }
  }

  // Check if line ends with an inline closing tag and next line starts with a word
  if (line.match(/<\/(span|strong|em|b|i|a)>$/) && nextLine.match(/^[a-zA-Záéíóúãõâêô0-9\[\(]/)) {
    console.log(`Line ${i+1}: Missing space after tag:`);
    console.log(line);
    console.log(nextLine);
  }
}
