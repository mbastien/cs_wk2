var fizzBuzz = require("./src/fizz_buzz");
var http = require("http");
var fs = require("fs");
var Mustache = require("mustache");

http.createServer(function(req, res){
    var count = parseInt(req.url.substr(1));
    // console.log(count);
    // console.log(fizzBuzz.generate(count));
    var fizzBuzzArray = fizzBuzz.generate(count);
    fs.readFile("index.html", function(err, data){
        if(err)
            res.end(err);
        else{
            var model = {
                fizzBuzzArray : fizzBuzzArray, 
                title : "Fizz Buzz " + count
            }
            var output = Mustache.render(data.toString(), model);
            res.end(output);
        }
    })
    
    // res.end("Hello, World.  I am a server");
}).listen(process.env.PORT);