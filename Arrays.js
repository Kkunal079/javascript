// let arr = ['rajesh','suresh', 'ramesh']
// for (let i =0 ; i <arr.length; i ++ ){
//     console.log(arr[i])

// arr[arr.length-1] ="";
// console.log(arr)

// arr.push('aman')
// arr.push('mohan')
// arr.pop(arr.length-1)
//  console.log(arr)


 let arr1 =[1,2,3]
 let arr2 = [100,2,1,10]
 //output = [1,2,3,100,10]
 
for(let i =0 ; i < arr1.length; i ++){
    let element = arr1[i];
let ispresent = true;
for(let j = 0 ; j < arr2.length ; j ++){
let out = arr2[j];
if(out == element){
    ispresent = false;
}

}
if( ispresent == true){
    arr2.push(element);
}

}
console.log(arr2)