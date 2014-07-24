/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['app/template'], function(tpl){
    'use strict';

    var PostView = Backbone.View.extend({
        template: tpl.post,

        className: 'post',

        initialize: function(){
            this.render();
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            this.$media = this.$el.find('.media');
        },

        /**
         * set the media's size
         * @param {number} size
         */
        setSize: function(size){
            this.$media.attr({
                width: size,
                height: size
            })
        }
    });

    return PostView;

});