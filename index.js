function receivesAFunction(callback) {
    return callback();
}

function doctorVisits() {
    console.log("How many times have you seen a doctor today?")
}

receivesAFunction(doctorVisits);

function returnsANamedFunction() {
    return function myInnerFunction() {
        return "This is my named fucntion";
    };
}

const myFunction = returnsANamedFunction();
console.log(myFunction());

function returnsAnAnonymousFunction() {
    return function(){
        return "This is my anonymous function";
    };
}