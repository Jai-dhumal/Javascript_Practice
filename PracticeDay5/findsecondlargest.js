let arr=[10,23,435,23,1,45,23];
let i=0;
let largest=arr[i];
let secondLargest=arr[i];
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i];
    }else if(arr[i]>secondLargest && arr[i]!=largest){
        secondLargest=arr[i];
    }
    
}

console.log("the largest element is:",largest);
console.log("the secondlargest is:",secondLargest);
