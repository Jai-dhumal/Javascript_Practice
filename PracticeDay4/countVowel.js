let vowel="aeiou";
let str="aeiou";
let count=0;
for(let i=0;i<=str.length-1;i++){
    if(vowel.includes(str[i])){
        count++;
    }
}
console.log(count);