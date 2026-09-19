function one(){
    console.log("Inside function one")
    return 1;
}

function two(){
    console.log("Inside the function two");
    return one()+one();
    
}
function three(){
    console.log("Inside the function three");
    return two()+one()
}

three();
console.log("callstack calling sequence done");