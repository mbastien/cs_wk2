// console.log("in fizz_buzz");

// called revealing module pattern
module.exports = {
    generate : generate,
    foo : 'bar'
};

function generate(){
    console.log('generate');
}

var title = "FizzBuzz";
function sayHi(){
    console.log("hello");
}

module.exports.title = title;
// module.exports.foo = sayHi;