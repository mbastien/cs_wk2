var request = require("request");
var cheerio = require("cheerio");
describe("home page", function(){
    describe("/3", function(){
        var html;
        beforeEach(function(done){
            request("http://localhost:8080/3", function(error, resp, body){
                html = body;
                $ = cheerio.load(body);
                done();
            });
        });
        it("should cantain hello world", function(){
            expect(html).toContain("Hello");
        });
        it("should cantain 3 items", function(){
            expect($(".list-group li").length).toEqual(3);
        });
        it("first item is 1", function(){
            expect($(".list-group li").first().html().trim()).toEqual("1");
        });
    })
})