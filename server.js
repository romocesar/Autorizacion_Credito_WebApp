//
var express = require("express");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');
var port = 3000;
app.listen(port);

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Xacn#1855',
    database: 'movie_planner_DB'
});

connection.connect(function(err){
    if(err)throw err;
    console.log('connected as id ' + connection.threadId);
})

app.get('/',function(req,res){
    connection.query('SELECT * FROM movies;',function(err,data){
        res.render('index',{movies:data})
    })
})

app.post('/create', function(req,res){
    connection.query('INSERT INTO movies (movie) VALUES (?);', [
        req.body.movie], function(err,result){
            if(err)throw err;
            res.redirect('/');
        })
})

app.put('/update',function(req,res){
    connection.query('UPDATE movies SET movie = ? WHERE id = ?;',[
        req.body.movie, req.body.id], function(err,results){
        res.redirect('/');
    })
})

app.delete('/delete',function(req,res){
    connection.query("DELETE FROM movies WHERE id = ?;",[req.body.id],
    function(err,results){
        if(err) throw err;
        res.redirect('/');
    })
})