/**
 * @author: vincent
 * @date: 2014/7/21
 */
'use strict';
requirejs.config({
    baseUrl: '../../',
    paths: {
        jquery: 'bower_components/jquery-2.1.1.min/index',
        text: 'bower_components/text/text',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/underscore/underscore',
        router: 'app/router',
        component: 'component',
        handlebars: 'bower_components/handlebars/handlebars.amd.min'
    }
});
require(['backbone', 'router', 'app/sidebar/module'], function (Backbone, Router, SideBar) {

    /**
     * rewrite backbone ajax
     */
    Backbone.ajax = function(request){
        var _req = _.extend({}, request, {
            dataType: "jsonp",
            data: {
                access_token: VG.token
            }
        });
        if (request.data) {
            _.extend(_req.data, request.data);
        }
        $.ajax(_req);
    };

    /**
     * override model parse
     */
    Backbone.Model.prototype.parse = Backbone.Collection.prototype.parse = function(data){
        if (data.meta) {
            if (data.meta.code === 200) {
                return data.data;
            } else {
                console.log("request exception:", data);
            }
        } else {
            return data;
        }
    };

    window.vent = _.extend({}, Backbone.Events);


    var App = Backbone.View.extend({

        el: "body",

        events: {
            'click [data-href]': 'linkTo'
        },

        initialize: function () {
            new Router();

            Backbone.history.start({
                pushState: true,
                root: '/'
            });

            this.initSideBar();
        },

        initSideBar: function () {
            new SideBar();
        },

        linkTo: function(e){
            e.preventDefault();
            var target = e.target;
            while (target && !target.dataset.href) {
                target = target.parentNode;
            }
            if (target.dataset.href) {
                vent.trigger('navTo', target.dataset.href);
            }
        }
    });

    new App();

});
