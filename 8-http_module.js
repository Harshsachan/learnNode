const http =require('http')
// req has the url which the user is requseting from the browser

// res means the response which we have to output when that particluar url is hit


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