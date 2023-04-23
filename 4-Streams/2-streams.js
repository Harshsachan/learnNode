const {createReadStream} = require('fs');


const stream = createReadStream('./content/big.txt',{highWaterMark:150000,encoding:'utf-8'});

stream.on(`data`,(result)=>{
    console.log(result);
})

// error event -
   
stream.on('error',(err)=>{
    console.log(err);
})


/* default - 64kb
   last buffer -remainder
   highWaterMark - control size
   const stream - createReadStream('./content/big.txt',{highWaterMark:150000});
      const stream - createReadStream('./content/big.txt',{encoding:'utf-8'});


*/