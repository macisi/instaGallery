/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['app/template'], function(tpl){
    'use strict';

    var UserView = Backbone.View.extend({
        template: tpl.useritem,

        className: 'user-item',

        initialize: function(){
            this.render();
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            this.el.dataset.uid = this.model.get('id');
        }
    });

    return UserView;

});