var express         =         require("express");
var app             =         express();

app.set('port', (process.env.PORT || 5000));

/*
  * Configure Express Server.
*/
app.use("js", express.static(__dirname + '/js'));
app.use("css", express.static(__dirname + '/css'));
app.use("controllers", express.static(__dirname + '/controllers'));
/*
  * Define routing of the application.
*/
app.get('/', function(request, response) {
  response.render('index.html')
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
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
