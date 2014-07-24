/**
 * @author: vincent
 * @date: 2014/7/23
 */
define(['backbone'], function(Backbone){
    'use strict';

    var ProfileModel = Backbone.Model.extend({
        urlRoot: 'https://api.instagram.com/v1/users/'
    });

    return ProfileModel;

});