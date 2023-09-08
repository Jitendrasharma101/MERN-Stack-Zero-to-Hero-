//Build a program that retrieves data from an external API using the 'https' module, 
//processes the response using streams, and saves it to a file.

const https=require('https');
const fs=require('fs');

//calling external API

const apiUrl='https://dummyjson.com/auth/RESOURCE';

const filePath='output.json';

//file main data save krne ke liye ek writable stream

const fileStream=fs.createWriteStream(filePath);

const request=https.get(apiUrl,(response)=>{
    //repose stream ko filse stream ke saath pipe kr rhe hain
    response.pipe(fileStream);

    //Data ko puri tareeke se file main likhne ke liye finish handler

    fileStream.on('finish',()=>{
        console.log('data is tranfered completely into the file stream');
        fileStream.close();

    });

}).on('error',(error)=>{
    console.log('data milne main koi gadbadi hui hai',error);
});

const timeout = 10000; // 10 seconds
request.setTimeout(timeout, () => {
  request.destroy();
  console.log('Request timed out. Response destroyed.');
});
