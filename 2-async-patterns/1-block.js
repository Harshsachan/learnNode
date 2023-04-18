const http =require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.write('Home Page')
        res.end()
    }
    else if(req.url === '/about')
    {
        //Blocking code
        for (let i = 0; i < 1001; i++) {
            for (let j = 0; j < 1001; j++) {
                console.log(`${i} ${j}`);
            }
        } 
        res.end('About Page here')
    }
    else 
    {
        res.end('Web page not available')
    }
    })

server.listen(5009,()=>{
    console.log("Server is listening on port : 5009");
});
