var express         =         require("express");
var mysql = require("mysql");
var fs = require("fs");
var app             =         express();

/*
  * Configure MySQL parameters.
*/
var connection      =         mysql.createConnection({
        host        :         "localhost",
        user        :         "root",
        password    :         "",
        database     :         "smartphone_comparator"
});

connection.connect(function(error){
  if(error)
    {
      console.log("Problem with MySQL"+error);
    }
  else
    {
      console.log("Connected with Database");
    }
});

/*
  * Configure Express Server.
*/
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/controllers", express.static(__dirname + '/controllers'));
/*
  * Define routing of the application.
*/
app.get('/',function(req,res){
    res.sendFile("/Projects/Smartphone Comparator/Smartphone Comparator/index.html");
});

app.get('/load',function(req,res){
  connection.query("SELECT * from smartphones",function(err,rows){
    if(err)
      {
        console.log("Problem with MySQL"+err);
      }
      else
        {
          res.end(JSON.stringify(rows));
        }
  });
});

/*
  * Start the Express Web Server.
*/
app.listen(3000,function(){
  console.log("It's Started on PORT 3000");
});
