let sum=0;
let n=57;
while(n>0){
    let lastdigit=Math.floor(n%10);
    sum=sum+lastdigit;
    n=n/10;

}
console.log(sum);