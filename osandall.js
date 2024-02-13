// const names = require('./1st.js');
// const sayHi = require('./2nd.js');
// const say = require("./3rd.js");
// require("./4th.js");

// const randomNum = require("./2nd.js");
// const num = randomNum();
// console.log(num);
// if(num === 2){
//     console.log("its equal to 2");
// }else{
//     console.log("not equal to 2");
// }

// const os = require('os');
//info about current user

// const user = os.userInfo()
// console.log(user)
//method returns the system uptime in seconds

// console.log(`The System uptime is ${os.uptime()} seconds`);

// const currentOs = {
//     name : os.type(),
//     release : os.release(),
//     totalMem : os.totalmem(),
//     freeMem : os.freemem(),
// }
// console.log(currentOs);

// const path = require('path');
// console.log(path.sep);
// const filePath = path.join("context","subfolder","text.txt");
// console.log(filePath);
// console.log(path.basename(filePath));
// const absolute = path.resolve(__dirname,"context","subfolder","text.js");
// console.log(absolute);

// const {readFileSync,writeFileSync} = require("fs");

// const first = readFileSync("./context/first.txt","utf8");
// const second = readFileSync("./context/second.txt","utf8");

// writeFileSync("third.txt","hello there sama");
// writeFileSync("fourth.txt","hello there subham");

// const {readFile,writeFile} = require('fs');
// readFile("./context/first.txt","utf8",(err,result)=>{
//     if (err) throw err;
//     const first = result;
//     readFile("./context/second.txt","utf8",(err,result)=>{
//         if (err) throw err;
//         const second = result;
//         writeFile("./context/async.txt",`Here is the result : ${first}, ${second}`,(err,result)=>{
//             if(err) throw err;
//             console.log(result);
//         })
//     })
// })

// const http = require('http');
// const server = http.createServer((req,res)=>{
//     if (req.url === "/"){
//         res.write("hey there");
//     }else if(req.url === "/about"){
//         res.write("you are in about page");
//     }else {
//         res.end(`
//             <h1>Oops</h1>
//             <p>you are trying a wrong url</p>
//             <a href = "/">back to home page</a>
//         `)
//     }
    
    
// })
// server.listen(5000);