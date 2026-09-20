//program 1
function savetodb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed>2){
            resolve("success:the data was saved successfully");
        }else{
            reject("Failure:the was not saved successfully");
        }


    });
   

}

savetodb("jai is pagluuuu")
.then(()=>{
    console.log("promise was resolved");
    return savetodb("pooja");
})
.then(()=>{
    console.log("data 2 was saved succesfully");
    return savetodb("gauri");
})
.then(()=>{
    console.log("data 3 was saved successfully");
})
.catch(()=>{
    console.log("promise was rejected");
});


//program 2
savetodb("my name is jai",()=>{
    console.log("your data was saved successfully");
    savetodb("Papamummy",()=>{
        console.log("success:Data number 2 was saved successfully");
    },()=>{
        console.log("Failure:Data number 2 was not saved successfully")
    })
 },()=>{     console.log("your data was not saved due low internet speed");
})
program //3
let heading=document.querySelector("h1");
function changedColor(data,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>3){
            reject("The error ocuured");}
            heading.style.color=data;
            resolve("Sucess:color was chenges succesfully");
        },delay);
    });
    
}

async function demo(){
    try{
    await changedColor("red",1000);
    await changedColor("yellow",1000);
    await changedColor("purple",1000);
    await changedColor("pink",1000);
    await changedColor("black",1000);
}
catch(err){
    console.log("Hi i am okay with i am loving what i am doing i am enjoying my day i am doing what i")
}
}
changedColor("yellow",1000)
.then(()=>{
    console.log("Success:changes the colored");
    return changedColor("red",1000);
})
.then(()=>{
    console.log("color second was applied successfully");
})

.catch(()=>{
    console.log("unable to cchanged the color");
})


async function greet(){
  
    return "Excutes successfully";
    abc.abc();
}

greet()
.then((result)=>{
    console.log("Promise excuted successfully with no error");
    console.log("the result is:",result);
})

.catch((err)=>{
    console.log("the promise is excuted with the error ");
    console.log("the error is:",err);

})

//program 4
function getNum(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         let num=Math.floor(Math.random()*10)+1;
        console.log(num);

        resolve();
       },1000);
    })
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();
    getNum();
}

demo();
