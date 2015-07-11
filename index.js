var express = require('express');
/*var mysql = require("mysql");*/
var app = express();

/*
  * Configure MySQL parameters.
*/
var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-02.cleardb.net",
    user: "b9a54a14d41bbe",
    password: "91090f06",
    database: "heroku_a3a793583554b25"
});

connection.connect(function (error) {
    if (error) {
        console.log("Problem with MySQL" + error);
    }
    else {
        console.log("Connected with Database");
    }
});

app.set('port', (process.env.PORT || 5000));

app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/controllers", express.static(__dirname + '/controllers'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/load', function (req, res) {
    connection.query("SELECT * from smartphones", function (err, rows) {
        if (err) {
            console.log("Problem with MySQL" + err);
        }
        else {
            res.end(JSON.stringify(rows));
        }
    });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


