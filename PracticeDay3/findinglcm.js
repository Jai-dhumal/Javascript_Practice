let a=12;
let b=13;
let bigger=Math.max(a,b);
let Lcm=1;
for(let i=bigger;;i++){
    if(i%a===0 && i%b===0){
        Lcm=i;
        break;
    }
}
console.log(Lcm);