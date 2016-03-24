/**
 * Created by 邓波 on 2016/3/24.
 */
;$(function(){
   //alert("插件版本待开发，哈哈") ;
    var Tabs = function(){
        console.log('he');
        this.bindEvent();
    };

    var defaultOptions = {

    };
    Tabs.prototype = {
        bindEvent: function(){
            var titleArr = this.options;
        }
    };


    window['Tabs'] = Tabs;
});