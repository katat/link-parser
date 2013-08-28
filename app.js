/**
 * User: katat
 * Date: 8/28/13
 * Time: 9:41 AM
 */
var express = require('express');
var request = require('request');
var jsdom = require('jsdom');
var app = express();
var port = 4040;

app.use(express.bodyParser());

app.get('/', function (req, res) {
    jsdom.env({
        url:req.query.url,
        scripts:['http://code.jquery.com/jquery.js'],
        done:function (errors, window) {
            if(errors != null){
                res.send(errors);
                return;
            }
            var $ = window.$;
            var links = [];
            $('a').each(function (i, elm) {
                links.push({link:$(elm).attr('href')});
            })

            res.send(links);
        }
    })
})

//var server = app.listen(port);
//
//server.listen(3000);
//
//server.on('connection', function(socket) {
//    console.log("A new connection was made by a client.");
//    socket.setTimeout(30 * 1000);
//    // 30 second timeout. Change this as you see fit.
//})

module.exports = app;