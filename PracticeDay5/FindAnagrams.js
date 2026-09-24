let str1="jaydeep";
let str2="deepjay";
let isAnagrams=true;
if(str1.length!=str2.length){
    console.log("the given strings are not an anagram");

}else{

for(let i=0;i<str1.length;i++){
    let count1=0;
    let count2=0;

    for(let j=0;j<str1.length;j++){
        if(str1[i]===str1[j]){
            count1++;
        }

    }
    for(let j=0;j<str2.length;j++){
        if(str1[i]===str2[j]){
            count2++;
        }
    }

    if(count1!==count2){
       isAnagrams=false;
    }


}
if(isAnagrams){
    console.log("the given both the string are anagrams ");
}
}
 