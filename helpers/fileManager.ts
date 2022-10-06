import fs from 'fs';

export function deleteAndCreateNewFile(filePath: string){
    if(fs.existsSync(filePath)){
        fs.unlink(filePath, (err)=>{
            if(err){
                console.log(err);
                throw err;
            }
        });
    }

    fs.open(filePath, "w", function(err){
        if(err){
            console.log(err);
            throw err;
        }
        console.log(filePath + " is created");
    });
}

export function cleanupFolder(folderPath: string){
    if(fs.existsSync(folderPath)){
        fs.rmSync(folderPath, { recursive: true});
    }
    fs.mkdirSync(folderPath);
}

