//Create a program that recursively searches a directory for files with a specific extension 
//and copies them to a new directory. 
const fs=require('fs');

function copyAllJsonFiles(dirPath) {
    fs.readdir(dirPath,function(err,files){
        if(err){
            console.log(err);
        }
        else{
            for( let i=0;i<files.length;i++){
                fs.lstat(dirPath+files[i],function(err,stat){
                    if(err){
                        console.log(err);
                    }
                    else{
                        if(stat.isDirectory()){
                            copyAllJsonFiles(dirPath+files[i]+'/');
                        }
                        else{
                            if(
                                files[i].endsWith('.json')
                                
                            ){
                                fs.copyFile(dirPath+files[i],'.\\myfiles\\'+files[i],(err)=>{
                                    if(err)throw err;
                                    console.log(`${files[i]}copied successfully`);
                                })
                            }
                            else{
                                console.log(`${files[i]} file is not of json format`);
                            }
                        }
                    }
                })

            }
        }
    })

}

copyAllJsonFiles('./Json files/');