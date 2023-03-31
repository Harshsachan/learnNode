const fs = require('fs');

fs.readFile('./content/first.txt','utf8',(err,result)=>{
 if(err){
    console.log(err)
    return
 }
 else{
    const first = result
    fs.readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
         }
         else{
            const second= result
            fs.writeFile("./content/testAsync.txt",`Here is async file text created`,(err,result)=>{
                if(err)
                {
                    console.log(err)
                    return;
                }
                console.log(result)
            })
         }
    })
    }
})
