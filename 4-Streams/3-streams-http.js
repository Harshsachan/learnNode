const http = require('http')
const {createReadStream}= require('fs');

const text =createReadStream('./content/big.txt','utf-8')


http.createServer((req,res)=>{
    const text =createReadStream('./content/big.txt','utf-8')
   text.on('open',()=>{
    text.pipe(res)
   })
   text.on('error',(err)=>{
    res.end(err)
   })
    }).listen(5009)