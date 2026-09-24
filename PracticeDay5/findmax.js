
let arr=[100,23,34,46,23,56,12];
let i=0;
let max=arr[i];

for(let i=0;i<arr.length;i++){
   
    if(arr[i]>max){
        max=arr[i];
    }

}
console.log(max);