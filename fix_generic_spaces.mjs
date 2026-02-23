import fs from 'fs';
let content = fs.readFileSync('src/components/EbookReader.jsx', 'utf-8');

// Simplest robust solution for HTML space collapsing: 
// Force a literal space before <span and after </span> 
// The browser will collapse double spaces into one anyway!
content = content.replace(/(?<!\s)<(span|strong|em)([^>]*)>/g, ' <$1$2>');
content = content.replace(/<\/(span|strong|em)>(?!\s)/g, '</$1> ');

fs.writeFileSync('src/components/EbookReader.jsx', content, 'utf-8');
console.log("Forced spaces added.");
