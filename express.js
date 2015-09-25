/**
 * Created by QLJIANG on 15/9/25.
 */
var express = require('express');
var app = express();
app.use(express.static('./public'));
app.get('/',function(req,res){
    res.end('Hello world from express!');
});
app.listen(8080,function fun(){
    console.log('Hello world from express!');
});
