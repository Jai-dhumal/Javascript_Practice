let n=100;
let count=0;
for(let num=2;num<=n;num++){
    let isprime=true;
    for(let i=2;i<num;i++){
        if(num%i===0){
            isprime=false;
            break;
        }
    }
    if(isprime){
        count++;
        
    }
  
}console.log(count);