const {readFile,writeFile} =require('fs').promises


// Node naive approach 
console.log("Entry point");
 const start = async()=>{
    try{
        const first = await readFile('./content/first.txt','utf-8')
        const second = await readFile('./content/first.txt','utf-8')
        await writeFile('./content/testhanl.txt',`This is a random generated file`)
        console.log(first, second)
    }
    catch(error){
        console.log(error)
    }
}
console.log("About to Start");
start()
console.log("Ended");
console.log("Exit point");


// Promise created below


// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf-8',(err,data)=>{
//             if(err)
//             {
//                 reject(err)
//             }
//             else{
//                 resolve(data)
//             }   
//         })
//     })
// }
//  getText('./content/first.txt').then((result)=>{console.log(result)}).catch((reject=>{console.log(reject)}))

