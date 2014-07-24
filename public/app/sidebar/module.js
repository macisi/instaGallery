/**
 * @author: vincent
 * @date: 2014/7/24
 */
define(['backbone', 'component/profile/view', 'component/profile/model'], function(Backbone, ProfileView, ProfileModel){
    'use strict';

    var SideBar = Backbone.View.extend({

        el: "#sidebar",

        initialize: function(){
            new ProfileView({
                el: this.$el.find('.profile'),
                model: new ProfileModel({
                    id: VG.uid
                })
            });
        }

    });

    return SideBar;

});