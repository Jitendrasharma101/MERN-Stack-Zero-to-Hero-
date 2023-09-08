// Demonstrate a simple Node.js program that reads a file and prints its contents to the console
const fs=require('fs');
function readingFile(file){
fs.readFile(file,'utf-8',function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});
}

readingFile('C:\\Users\\Jitendra sharma\\Desktop\\codequotient\\assignment\\assignment2\\random.js');