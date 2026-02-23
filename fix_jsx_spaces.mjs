import fs from 'fs';
let content = fs.readFileSync('src/components/EbookReader.jsx', 'utf-8');

// The bug in JSX is that:
// "texto
// <span"
// evaluates to "texto<span>" with no space.

// Fix 1: Text followed by newline and then <span (or strong, etc)
// We match a word character/punctuation, optional spaces, newline, spaces, then <span
// We'll replace it by adding {" "}
const regexBefore = /([a-zA-Záéíóúãõâêô0-9\.\,\!\?])(\s*\n\s*)(<(span|strong|em|b|i)[^>]*>)/g;
content = content.replace(regexBefore, '$1 {" "}$2$3');

// Fix 2: </span> followed by newline and then Text
// We match </span..., optional spaces, newline, spaces, then text
const regexAfter = /(<\/(span|strong|em|b|i)>)(\s*\n\s*)([a-zA-Záéíóúãõâêô0-9])/g;
content = content.replace(regexAfter, '$1$3{" "}$4');

fs.writeFileSync('src/components/EbookReader.jsx', content, 'utf-8');
console.log("Spaces injected automatically.");
