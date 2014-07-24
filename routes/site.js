/**
 * @author: vincent
 * @date: 2014/7/21
 */
'use strict';

var auth = require('./auth');

function renderPage (req, res, token, user) {
    if (Object.keys(req.params).length === 0) {
        res.redirect('/home');
        return;
    }
    res.render('index.jade', {
        title: 'Vincent Gallery',
        token: token,
        user: user
    });
}

module.exports.index = function (req, res) {

    var token = req.access_token || req.cookies.token;
    var user = req.user || req.cookies.user;

    if (user) {
        user = JSON.parse(user);
    }

    if (!token) {
        auth(req, res, function () {
            renderPage(req, res, req.access_token, req.user);
        });
        return;
    }

    renderPage(req, res, token, user);
};