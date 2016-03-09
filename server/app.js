var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/food/:id', function(req, res){

  var food = req.params.id;
  console.log(food);
  if(food == "apples"){
  res.send("Apples");
} else if (food == "pears"){
  res.send("Pears");
} else if (food == "bananas"){
  res.send("Bananas");
} else if (food=="pizza"){
  res.send("Pizza");
}else {
  res.send("No match");
}
});

app.set("port", (process.env.PORT || 5000));

app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: " , app.get("port"));
});
