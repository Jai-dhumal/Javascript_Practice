let vowel="aeiou";
let str="i am a boy";

let count=0;
for(let i=0;i<=str.length-1;i++){
    if(!vowel.includes(str[i])){
        count++;
    }
}
console.log(count);