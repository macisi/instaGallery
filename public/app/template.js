/**
 * @author: vincent
 * @date: 2014/7/23
 */
define(function(require){
    'use strict';

    var Handlebars = require('handlebars').default;

    var tpl = {
        profile: Handlebars.compile(require('text!template/profile.tpl')),
        home: Handlebars.compile(require('text!template/home.tpl')),
        user: Handlebars.compile(require('text!template/user.tpl')),
        post: Handlebars.compile(require('text!template/post.tpl')),
        postpage: Handlebars.compile(require('text!template/postpage.tpl')),
        useritem: Handlebars.compile(require('text!template/useritem.tpl')),
        media: Handlebars.compile(require('text!template/media.tpl'))
    };

    return tpl;

});