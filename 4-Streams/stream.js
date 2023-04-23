// Streams in node js are used to write or right sequentically . When we have handle or  manuplate streaming
// data for exam countious soruce or a big file Stream's come in real handy 


/*
    there are four types of Streams: 
    1- Writeable = Used to write data sequentically 
    2- Readable = Used to read data sequentically
    3- Duplex = To do both read and write data sequentically
    4- Transform = To modify data while reading or writing of data sequentically
*/
 


// 2-stream.js


/* 
    createReadStream -- fs module contains the inbuilt API(Application programming interface)
                        createReadStream.It allows us to open a file/stream and reads the data
                        present inside it.
                      - It reads the file in chunks according to a need by the user.
                      - It is faster then (readfile) due to its property of bringing in chunks.
                      - It is

*/

// 3-streams-http.js

/*
    if we use readFileSync it sends a lot of data and may take a large call (see in developers toll ->network)
    to avoid that we refactor it to readFileStream to read data in chunks.

    
     const text =createReadStream('./content/big.txt','utf-8')
   text.on('open',()=>{
    text.pipe(res)
   })

   it has an method name open then we use .pipe to send data in chunks to show in browser.

   text.on('error',(err)=>{
    res.end(err)
   })
   - use to deal with error
*/
