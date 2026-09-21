let no=7;
let isprime=true;
for(let i=2;i<no;i++){
    if(no%i===0){
        isprime=false;
        break;
    }
}

if(isprime){
    console.log("the number is  prime number ");

}else{
    console.log("the number is not prime");
}