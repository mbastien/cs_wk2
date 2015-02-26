// console.log("in fizz_buzz");

// called revealing module pattern
module.exports = {
    generate : generate,
    foo : 'bar'
};

function generate(count){
    var arr = [];
    for(var i=1; i <= count; i++){
        if( i % 3 == 0 && i % 5 ==0){
            arr.push("FizzBuzz");
        }
        else if(i % 3 == 0){
            arr.push("Fizz");
        }
        else if(i % 5 == 0){
            arr.push("Buzz");
        }
        else {
            arr.push(i);
        }
    }
    // console.log('generate');
    return arr;
}

var title = "FizzBuzz";
function sayHi(){
    console.log("hello");
}

module.exports.title = title;
// module.exports.foo = sayHi;