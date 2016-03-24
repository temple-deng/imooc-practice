/**
 * Created by 邓波 on 2016/3/16.
 */
;(function($){
    var Carousel = function(poster){

    console.log(poster.data('setting'));

    };

    Carousel.prototype = {

    };

    Carousel.init = function(posters){
        var _this_ = this;
        posters.each(function(i, elem){
            new _this_($(this));
        })
    };

    window["Carousel"] = Carousel;
})(jQuery);