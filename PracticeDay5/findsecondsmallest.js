let arr=[10,23,435,23,1,45,23];

let smallest=arr[0];
let secondSmallest=arr[0];

for(let i=1;i<arr.length;i++){

    if(arr[i]<smallest){

        secondSmallest=smallest;
        smallest=arr[i];

    }else if(arr[i]<secondSmallest && arr[i]!==smallest){

        secondSmallest=arr[i];

    }
}

console.log("The smallest element is:",smallest);
console.log("The second smallest element is:",secondSmallest);