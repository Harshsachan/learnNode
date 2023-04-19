const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.end('welcome')
// })

// Using event emitter API

const server = http.createServer()

server.on('request',(req,res)=>{
    if(req.url==='/')
    {
    res.end("WELCOME Connection established")
    }
    else if(req.url==='/about')
    {
        res.end("about page here")
    }
    else{
    res.end("No page found")
    }
})

server.listen(5009);