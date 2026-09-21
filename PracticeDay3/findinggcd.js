let a=21;
let b=18;
let gcd=1;
let smaller=Math.min(a,b);
for(let num=1;num<=smaller;num++){
    if(a%num===0 && b%num===0){
        gcd=num;
    }
}
console.log("gcd is ",gcd);