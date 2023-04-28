var express = require('express');
var path = require('path');
var open = require('open');
import compression from 'compression';
// eslint-disable no-console


var port = 3000;

var app = express();

app.use(compression());
app.use(express.static('dist'));

//requesting the root and sending the specified file to local
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get("/users", function(req,res){
    res.json([
        {"id": 1, "firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
        {"id": 1, "firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
        {"id": 1, "firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"},
    ]);
});

app.listen(port, function(err) {
        if (err) {
            console.log(err)// eslint-disable no-console
        }
        else {
            open('http://localhost:' + port)
        }
})
