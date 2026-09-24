let arr=[104,75,667,35,341,449];
let even=0;
let odd=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        even++;
    }else{
        odd++;
    }
}
console.log("the array contains this number of even number:",even);
console.log("the array contains this number of odd number:",odd);