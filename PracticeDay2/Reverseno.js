
let n=123456789;
let reverse=0;
while(n>0){
    let lastdigit=Math.floor(n%10);
    reverse=reverse*10+lastdigit;
    n=Math.floor(n/10);
   

}
 console.log(reverse);
