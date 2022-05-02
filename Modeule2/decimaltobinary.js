function decimaltobinary(n){

let power= 1 , bin =0;
while(n!=0){
   let rem = n % 2;
   bin += rem*power;
   power *= 10;
   n = Math.floor(n/2)  
}
return bin;
}
let binarynumber = decimaltobinary(13);
console.log(binarynumber )