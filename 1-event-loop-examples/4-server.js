const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request sent');
    res.end('Hello world listeing on 5002');
})

server.listen(5002,()=>{
    console.log('server listening to port 5002');
})