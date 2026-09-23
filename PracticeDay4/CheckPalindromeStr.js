let str="madam";
let original=str;
let result="";
for(let i=str.length-1;i>=0;i--){
    result=result+str[i];

}
if(result==original){
    console.log("the given string is the palindrome");
}else{
    console.log("given string is not a palindrome");
}