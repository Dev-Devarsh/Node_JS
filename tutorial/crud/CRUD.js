const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');
const filepath = `${dirpath}/ap.txt`

//Create File
fs.writeFileSync(filepath,'this is semple txt file ');

//Read File
fs.readFile(filepath,'utf-8',(err,item)=>{
    console.log(item)
})

//Edit File's Content
fs.appendFile(filepath,'and name is ap.txt',(err)=>{
    if (!err) {
        console.log('file is updated')
    }
})
//Edit File's Name
fs.rename(filepath,`${dirpath}/apple.txt`,(err)=>{
    if (!err) {
        console.log('file name is updated')
    }
})


//Delete File
fs.unlinkSync(`${dirpath}/apple.txt`);