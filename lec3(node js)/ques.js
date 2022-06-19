let files = ["javascript" , "react", "sql", "browser"]
let path = require("path")
let fs = require("fs")

// get a path to directory
let webdevpath = path.join(process.cwd() , "Web dev")

if(!(fs.existsSync(webdevpath))){
    fs.mkdirSync(webdevpath)
}

// module inside web devfolder
for(let i =0 ; i< files.length;i++){
let modulepath = path.join(webdevpath,files[i])
if(!(fs.existsSync(modulepath))) 
fs.mkdirSync(modulepath)
}


