/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(function(){
    'use strict';

    var MediaModel = Backbone.Model.extend({
        urlRoot: 'https://api.instagram.com/v1/media/'
    });

    return MediaModel;
});