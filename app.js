
'use strict';

/*
//creating a server & run nodeJs from console

const http = require('http');

http.createServer((req, res) => {
   
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end('<h1 style="background-color:green">Hello node js</h1>');
})
.listen(3000, () => console.log('server running on port 3000'));

*/


/*
 ----question app----

var x = 'hello world!';
module.exports = x; // export module

//question answer example
const question = ['what is your name? \n', 'How old are you?\n'];
const answer = [];

process.stdout.write(question[0]);

process.stdin.on('data', data => {
    answer.push(data.toString().trim());

    if (answer.length < question.length) {
        process.stdout.write(question[answer.length]);
    } else {
        process.exit();
    }
});

process.on('exit', () => {
    for (var value of answer) {
        console.log(value);
    }
});

*/







//Asynchronous & non blocking
const fs = require('fs');

// fs.readFile('./note/testfile.txt', 'utf-8', (err, data) => {

//     console.log(data.toString());

//     fs.writeFile('./note/newTest.txt',`this is a test data.\n${data}`,'utf-8', (err,data1)=>{
//         console.log('your file has been written!');
//     })
// });


const http = require('http');
const url = require('url');

//------------ routing example ---------------//

// var server = http.createServer((req,res)=>{
//     const pathName = req.url;

//     if(pathName=="/"){
//         res.end('this is our home page');
//     }
//     else if(pathName == "/dashboard"){
//         res.end('this is a dashboard!');
//     }
//     else{
//         res.writeHead(400, {
//             'content-type': 'text/html'
//         });

//         res.end('<h3>page not found </h3>');
//     }
// });

// server.listen(8080, ()=>{
//     console.log('listing from 8080');
// });

//---------------- routing example -------------//


