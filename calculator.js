//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

 app.post("/", function(req,res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var num3 = Number(req.body.n3)
    var result = num1+num2+num3;
    res.send("The result of calculation is " + result);
});

app.get("/bmi", function(req, res){
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", function(req,res){

    var num1 = parseFloat(req.body.Height);
    var num2 = parseFloat(req.body.Weight);
   
    var result = num2/(num1*num1);
    
    res.send("Your BMI is " + result);
});



app.listen(3000, function(){
    console.log("server is running on port 3000");

});