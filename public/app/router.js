/**
 * @author: vincent
 * @date: 2014/7/23
 */
define(['app/modules'], function (Modules) {
    'use strict';

    var Router = Backbone.Router.extend({

        initialize: function(){
            this.listenTo(vent, 'navTo', this.navTo)
        },

        routes: {
            ':module(/:type)(/:id)': 'loadModule'
        },

        navTo: function(path){
            this.navigate(path, {
                trigger: true
            });
        },

        loadModule: function(module, type, id){
            console.log('%cloadModule: ' + module + ', ' + type + ', ' + id, 'color: #0c0');
            var options;
            this.module && this.module.remove();
            switch (module) {
                case 'user':
                    options = {
                        type: type,
                        uid: id
                    };
                    break;
                case 'post':
                    options = {
                        pid: type,
                        uid: this.lastuid
                    };
                    break;
                case 'home':
                    options = {
                        uid: VG.uid
                    };
                default:
                    break;
            }
            this.module = new Modules[module](options);
            if (this.lastuid !== options.uid) {
                new Modules['sidebar'](options);
            }
            this.lastuid = options.uid;
        }
    });

    return Router;

});
