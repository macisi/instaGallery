/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['app/template', 'component/media/view', 'component/media/model'], function(tpl, MediaView, MediaModel){
    'use strict';

    var Home = Backbone.View.extend({

        template: tpl.postpage,

        events: {
        },

        initialize: function(options){
            this.render(true);

            new MediaView({
                el: this.$el.find('#container'),
                model: new MediaModel({
                    id: options.pid
                })
            });
        },

        render: function(isNew){
            this.$el.html(this.template());
            isNew && $('#main').append(this.$el);
        }
    });

    return Home;

});