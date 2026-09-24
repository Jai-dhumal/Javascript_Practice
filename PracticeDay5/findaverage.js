let arr=[100,1324,35,2345,56,2,3,222,442];
let average=0;
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
    average=sum/i;
}
console.log(average);

