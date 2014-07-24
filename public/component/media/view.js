/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['app/template'], function(tpl){
    'use strict';

    var MediaView = Backbone.View.extend({
        template: tpl.media,

        className: 'post',

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);

            this.model.fetch();
        },

        render: function(){
            var data = this.model.toJSON();
            data.isImage = data.type === 'image';
            console.log(data)
            this.$el.html(this.template(data));
        }
    });

    return MediaView;

});