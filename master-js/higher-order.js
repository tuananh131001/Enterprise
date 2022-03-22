
// input the function
function sing(callback){
    console.log('la la la la');
    // check call back
    if(callback instanceof Function){callback();}
    
}
function meow(){
    console.log("meow meow")
}


/// Factory

function multiplier(x,factor){
    return x * factor
}
// return the function using the factor pass in
function multiplier(factor){
    return x => x * factor
}
let doubler = multiplier(2)
let tripler = multiplier(3)
//Higher order functions can be pass in function and return the function