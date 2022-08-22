const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,);

for (i = 0; i < 5; i++) {
    fs.writeFileSync(dirpath+'/hello'+i+'.txt','hii i am a developer');
}

fs.readdir(dirpath,(err,Files)=>{
    Files.forEach((item)=>
    {console.log('file nmae is',item)
    })
})