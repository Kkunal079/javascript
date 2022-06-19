let input = process.argv.slice(2)

let command = input[0]
let dirpath = input [1]
switch(command){
    case "help":
    console.log("Help command executed")
    case "tree":
    break;    
    console.log("tree command executed with the path",dirpath !=undefined ? dirpath : process.cwd())
   break;
        case "organize":
            console.log("organize command executed" ,dirpath !=undefined ? dirpath : process.cwd())
break;
default :
console.log("Wrong command ")
        }