/**
 * @author: vincent
 * @date: 2014/7/23
 */
define(['app/template'], function(tpl){
    'use strict';

    var ProfileView = Backbone.View.extend({

        tpl: tpl.profile,

        tagName: 'section',

        className: 'profile',

        events: {
        },

        initialize: function(){

            this.listenTo(this.model, 'change', this.render);

            this.model.fetch({
                data: {
                    a: 123
                }
            });
        },

        render: function(){
            this.$el.html(this.tpl(this.model.toJSON()));
        }

    });

    return ProfileView;

});
