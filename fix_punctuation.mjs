import fs from 'fs';
let content = fs.readFileSync('src/components/EbookReader.jsx', 'utf-8');

// Fix the "</span> ," or "</span> ." issue introduced by the blunt spacing
content = content.replace(/<\/(span|strong|em)> \./g, '</$1>.');
content = content.replace(/<\/(span|strong|em)> \,/g, '</$1>,');
content = content.replace(/<\/(span|strong|em)> \;/g, '</$1>;');
content = content.replace(/<\/(span|strong|em)> \:/g, '</$1>:');
content = content.replace(/<\/(span|strong|em)> \!/g, '</$1>!');
content = content.replace(/<\/(span|strong|em)> \?/g, '</$1>?');

// Also remove space if the span starts right after an opening quote or something, though space after span isn't as bad as before punctuation.
// What about " <span..." when it follows a newline that we already prefixed with {" "}. It might be `{" "} <span` which translates to `  <span`, harmless.

fs.writeFileSync('src/components/EbookReader.jsx', content, 'utf-8');
console.log("Punctuation spaces fixed.");
