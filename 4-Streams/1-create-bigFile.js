const {writeFileSync} = require('fs');

// creating a very file so that it take time

for (let i = 0; i < 100000; i++) {
    writeFileSync('./content/big.txt',`Hello World${i} `,{flag:'a'})    
}
