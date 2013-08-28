/**
 * User: katat
 * Date: 8/28/13
 * Time: 9:41 AM
 */
var express = require('express');
var request = require('request');
var app = express();
var port = 3030;

app.use(express.bodyParser());

app.post('/', function (req, res) {
    var results, parsed;
    request(req.query.url, function (error, response, body) {
//        if(error != null)
//        {
//            res.send(error);
//            return;
//        }
        console.log(error);
        var expr = req.body.expr;
        var regex = new RegExp(expr, "g");
        results = body.match(regex);
        parsed = true;
        res.send(results);
        console.log(results);
    })
})

var server = app.listen(port);
module.exports = app;