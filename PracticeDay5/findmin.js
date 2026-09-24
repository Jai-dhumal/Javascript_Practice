let arr=[100,73,846,836,6132];
let i=0;
let min=arr[i];
for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i];
    }
}
console.log(min);