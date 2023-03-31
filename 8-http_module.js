const http =require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write("Home page ")
        res.end()
    }
    if(req.url==='/about')
    {
        res.write("About page")
        res.end()
    }
// res.write("Server Started")
 res.end(`
OOPS 
NOT FOUND
 `)
})

server.listen(5009)