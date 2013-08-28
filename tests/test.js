/**
 * User: katat
 * Date: 8/28/13
 * Time: 9:40 AM
 */
var assert = require("assert");
var should = require('should');
var request = require('supertest');
var app = require('../app');

describe('API tests', function(){
    describe('get content of an url link', function(){
        it('should return content of the url link', function(done){
            request(app)
                .get('/?url=http://www.yahoo.com')
                .end(function(err, res){
                    console.log(res.body);
                    done()
                })
        })

        it('should return error when a invalid url link provided', function(done){
            request(app)
                .get('/?url=http://test')
                .end(function(err, res){
                    console.log(res.body);
                    done();
                })
        })
    })
})