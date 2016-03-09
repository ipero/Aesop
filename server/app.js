var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/food/:id', function(req, res){
  //console.log("Passing some food");
  var food = req.params.id;
  console.log(food);
  if(food == "apples"){
  res.send("Apple");
} else if (food == "pears"){
  res.send("Pear");
} else if (food == "bananas"){
  res.send("Banana");
} else if (food=="pizza"){
  res.send("Pizza");
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
