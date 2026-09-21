let no=153;
let sum=0;
let original=no;
while(no>0){
    let lastdigit=no%10;
    let cube=lastdigit**3;
    sum=sum+cube;
    no=Math.floor(no/10);
}
if(original===sum){
    console.log("the number is armstrong number");
}else{
    console.log("the number is not a armsstrong");
}