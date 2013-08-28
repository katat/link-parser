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
                .post("/?url=http://www.google.com")
                .send({expr:"https?://[-A-Za-z0-9+&@#/%?=~_()|!:,.;]*"})
                .end(function(err, res){
                    res.body[0].should.have.property('link');
                    done()
                })
        })

        it('should return error when a invalid url link provided', function(done){
            request(app)
                .post('/?url=http://test')
                .end(function(err, res){
                    res.body.should.have.property('errno').equal('ENOTFOUND')
                    done();
                })
        })
    })
})