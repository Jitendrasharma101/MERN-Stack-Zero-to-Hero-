// Create a Node.js program that takes user input from the command line and writes it to a file.

const fs=require('fs');
var val;
function writeToFile(file){
process.stdin.on('data',function(data){
    var input=data.toString().trim();
    if(input === 'exit') {
        process.stdin.pause();
        console.log('Input process exited.');
        return;
      }

    if(val===undefined){
        
        fs.writeFile(file,data,function(err){
            if(err){
                console.log(err);
            }
            val=2;
        })
    
    }
    else{ 
        fs.appendFile(file,data,function(err){
            if(err){
                console.log(err);
            }
        })
    }

});
}

writeToFile("newFile.txt");