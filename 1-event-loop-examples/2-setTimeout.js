// started operating system process
console.log("first");
// setTimeout is synchonyc and syncronyuc function get offloaded becuse of event loop
setTimeout(()=>{
    console.log('second')
},0)
console.log("third");
// completed and exited operating system process