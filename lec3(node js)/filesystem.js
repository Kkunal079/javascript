let fs = require("fs")

// create a file
fs.writeFileSync("Newfolder.txt" ,"I have done something")

//read a file
fs.readFileSync("Newfolder.txt")

//update a file
fs.appendFileSync("Newfolder.txt" , "i have added some content later")

//delete
fs.unlinkSync("Newfolder.txt")

// ------------------directory---------------------
// //create a directory
// fs.mkdirSync("hello")

// //delete a directory
// fs.rmdirSync("hello")

// get some files feom different module
let content = fs.readdirSync("C:\Users\malho\OneDrive\Desktop\Fjp7\dsa\javascript\Modeule2")
console.log(content)