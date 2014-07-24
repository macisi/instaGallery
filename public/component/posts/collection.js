/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['component/posts/model', 'component/posts/view'], function(PostModel, PostView){
    'use strict';

    var PostCollection = Backbone.Collection.extend({
        model: PostModel,

        initialize: function(){
            this.views = [];
            this.on('sync', function(collection){
                collection.each(function(model){
                    this.views.push(new PostView({
                        model: model
                    }));
                }, this);
                this.trigger('view-init', this.views);
            });
        }
    });

    return PostCollection;

});