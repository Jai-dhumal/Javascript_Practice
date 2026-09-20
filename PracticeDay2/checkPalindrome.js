let n=2244;
let original=n;
let reverse=0;
while(n>0){
    let lastdigit=Math.floor(n%10);
    reverse=reverse*10+lastdigit;
    n=Math.floor(n/10);
    
}

console.log(reverse);
if(reverse==original){
    console.log("given number is palindrome");
}else{
    console.log("give number is not a palindrome");
}