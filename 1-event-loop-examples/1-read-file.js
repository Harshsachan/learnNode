const { readFile }= require('fs');

console.log('Started a first task');

//Check file path !!!!
// readFile is srnchoyc it will some in execution  only when it is ready to give output 
readFile('../content/first.txt','utf-8',(err, result)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('Completed first task');
})

console.log('Starting next task');