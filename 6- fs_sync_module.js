const fs = require('fs');

const first = fs.readFileSync('./content/first.txt','utf-8')
const second = fs.readFileSync('./content/second.txt','utf-8')
console.log((first));

 fs.writeFileSync('./content/test.txt',`This is new file`)
 const newFile = fs.readFileSync('./content/test.txt','utf-8')
console.log(newFile);

