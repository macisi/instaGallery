/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['component/posts/model', 'component/posts/view'], function(PostModel, PostView){
    'use strict';

    var PostCollection = Backbone.Collection.extend({
//        model: PostModel,

        initialize: function(){

            this.on('sync', function(collection, res){
                this.pagination = res.pagination;
                this.trigger('pagination', res.pagination);
            });

            this.on('reset', function(){
                this.each(function(model){
                    this.initModelView(model);
                }, this);
            });

            this.on('add', function(model){
                this.add(model);
                this.initModelView(model);
            });

            this.on('next', this.fetchNext);
        },

        initModelView: function(model){
            this.trigger('view-add', new PostView({
                model: model
            }));
        },

        /**
         * fetch next page
         */
        fetchNext: function(){
            this.fetch({
                data: {
                    max_id: this.pagination.next_max_id
                },
                remove: false
            });
        }
    });

    return PostCollection;

});