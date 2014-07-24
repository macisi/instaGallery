/**
 * @author: vincent
 * @date: 2014/7/21
 */
'use strict';

var https = require('https');
var qs = require('querystring');

//CLIENT ID	aa5a82e71a124bf1a70c7ac5e18b0960
//CLIENT SECRET	a535875b004945df93df7dc737ca88fc
//WEBSITE URL	http://vg.vincentlab.com
//REDIRECT URI	http://vg.vincentlab.com

var clientId = 'aa5a82e71a124bf1a70c7ac5e18b0960';
var clientSecret =  'a535875b004945df93df7dc737ca88fc';
var redirect = 'http://vg.vincentlab.com';
var url = 'https://api.instagram.com/oauth/authorize/?client_id=' + clientId + '&redirect_uri=' + redirect + '&response_type=code';

var options = {
    hostname: 'api.instagram.com',
    path: '/oauth/access_token',
    method: 'POST'
};

module.exports = function(req, res, callback){

    if (req.query && req.query.code) {
        var postData = {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            redirect_uri: redirect,
            code: req.query.code
        };
        options.header = {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        };

        var _res = res;

        var request = https.request(options, function (res) {

            res.setEncoding('utf8');

            var data = '';

            res.on('data', function (chunk) {
                data += chunk;
            });
            res.on('end', function () {
                console.log(data);
                data = JSON.parse(data);
                if (data.code === 400) {
                    console.log("error_type", data.error_type, "error_message", data.error_message);
                    _res.redirect(url);
                } else {
                    req.access_token = data.access_token;
                    req.user = data.user;
                    _res.cookie('token', req.access_token);
                    _res.cookie('user', JSON.stringify(data.user));
                    callback();
                }
            });

        });
        request.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        request.write(qs.stringify(postData));
        request.end();

    } else {
        res.redirect(url);
    }
};