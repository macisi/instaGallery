/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(function(require){
    'use strict';

    var modules = {
        home: require('app/home/module'),
        user: require('app/user/module'),
        post: require('app/post/module')
    };

    return modules;

});