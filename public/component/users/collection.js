/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['component/users/model', 'component/users/view'], function(UserModel, UserView){
    'use strict';

    var UserCollection = Backbone.Collection.extend({
        model: UserModel,

        initialize: function(){

            this.on('sync', function(collection, res){
                this.pagination = res.pagination;

                if (this.pagination && this.pagination.next_cursor) {
                    this.fetchNext();
                }
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
            this.trigger('view-add', new UserView({
                model: model
            }));
        },

        /**
         * fetch next page
         */
        fetchNext: function(){
            this.fetch({
                data: {
                    cursor: this.pagination.next_cursor
                },
                remove: false
            });
        }
    });

    return UserCollection;

});