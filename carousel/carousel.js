/**
 * Created by 邓波 on 2016/3/16.
 */
;(function($){
    var Carousel = function(poster){
        var defaultSettings = {
                    width: 1000,
                    height: 270,
                    posterWidth: 640,
                    posterHeight: 270,
                    scale: 0.9,
                    speed: 500,
                    verticalAlign: "middle"
                };

        this.posterSec = poster;
        this.posterList = poster.find('ul.poster-list');
        this.posterItems = this.posterList.find('.poster-item');
        this.nextBtn = poster.find('.poster-next-btn');
        this.prevBtn = poster.find('.poster-prev-btn');
        this.settings = $.extend({}, defaultSettings, this.getSettings(poster));
        this.rotateFlag = true;

        this.bindBtnClickEvent();
        this.setSettingValue();

    };

    Carousel.prototype = {
        bindBtnClickEvent : function () {
            var self = this;
            this.nextBtn.click(function(event){
                if(self.rotateFlag === true) {
                    self.rotateFlag = false;
                    self.rotate("left");
                }

            });
            this.prevBtn.click(function(event){
                if(self.rotateFlag === true) {
                    self.rotateFlag = false;
                    self.rotate('right');
                }

            });
        },

        rotate : function(dir) {
          if(dir === 'left') {
              var self = this;
              this.posterItems.each(function(index, elem){
                  var prevItem;
                  if(index === 0){
                      prevItem = self.posterItems.last();
                  }
                  else {
                      prevItem = $(this).prev();
                  }

                  var zIndex = prevItem.css('z-index'),
                      opacity = prevItem.css('opacity'),
                      width = prevItem.width(),
                      height = prevItem.height(),
                      left = prevItem.css('left');


                  $(this).animate({
                      zIndex:zIndex,
                      opacity : opacity,
                      width : width,
                      height: height,
                      left : left
                  }, self.settings.speed, function() {
                      self.rotateFlag = true;
                  });
              });
          }
          else {
              this.posterItems.each(function(index, elem){
                  var nextItem;
                  if(index === self.posterItems.length - 1){
                      nextItem = self.posterItems.first();
                  }
                  else {
                      nextItem = $(this).next();
                  }

                  var zIndex = nextItem.css('z-index'),
                      opacity = nextItem.css('opacity'),
                      width = nextItem.width(),
                      height = nextItem.height(),
                      left = nextItem.css('left');

                  //$(this).css('z-index', zIndex);
                  $(this).animate({
                      zIndex:zIndex,
                      opacity : opacity,
                      width : width,
                      height: height,
                      left : left
                  }, self.settings.speed, function() {
                      self.rotateFlag = true;
                  });
              });
          }
        },

        setSettingValue : function() {
            //  主区域的样式设置
            this.posterSec.css({
                width : this.settings.width,
                height : this.settings.height
            });

            // 图片列表的样式设置
            this.posterList.css({
                width : this.settings.width,
                height : this.settings.height
            });

            // 按钮的宽度计算
            var btnW = (this.settings.width - this.settings.posterWidth)/2;

            // 按钮样式
            this.nextBtn.css({
                width : btnW,
                height : this.settings.height,
                right : 0,
                top: 0
            });

            this.prevBtn.css({
                width : btnW,
                height : this.settings.height,
                left  : 0,
                top: 0
            });

            // 设置图片列表样式
            this.setPosterPos();


        },

        setPosterPos : function() {

            var btnWidth = (this.settings.width - this.settings.posterWidth)/2;
            var itemCount = this.posterItems.length;
            var topItemZIndex = Math.floor(itemCount/2);
            var restItems = this.posterItems.slice(1);
            var gap = btnWidth/((itemCount - 1)/2);

            this.setFirstItemPos(btnWidth, topItemZIndex);
            this.setRightItemsPos(restItems, btnWidth, gap, topItemZIndex);
            this.setLeftItemsPos(restItems, btnWidth, gap, topItemZIndex);
        },

        setFirstItemPos : function(btnWidth, topItemZIndex) {
          this.posterItems.eq(0).css({
              width : this.settings.posterWidth,
              height : this.settings.posterHeight,
              top : 0,
              left : btnWidth,
              'z-index' : topItemZIndex
          })
        },

        setRightItemsPos : function(restItems, btnWidth, gap, topItemZIndex) {
            var rightItems = restItems.slice(0, Math.floor((this.posterItems.length - 1)/2));
            var that = this;
            rightItems.each(function(index, elem){
                var itemWidth = that.settings.posterWidth * Math.pow(that.settings.scale, index + 1);
                var itemHeight = that.settings.posterHeight * Math.pow(that.settings.scale, index + 1);
                $(this).css({
                    'z-index': topItemZIndex - index - 1,
                    opacity : 1/(index + 1),
                    width : itemWidth,
                    height : itemHeight,
                    left : btnWidth + that.settings.posterWidth + gap * (index + 1) - itemWidth
                })
            })
        },

        setLeftItemsPos : function(restItems, btnWidth, gap, topItemZIndex) {
            var leftItems = restItems.slice(Math.floor((this.posterItems.length - 1)/2));
            var that = this;
            leftItems.each(function(index, elem){
                var itemWidth = that.settings.posterWidth * Math.pow(that.settings.scale, leftItems.length - index);
                var itemHeight = that.settings.posterHeight * Math.pow(that.settings.scale, leftItems.length - index);

                $(this).css({
                    'z-index': topItemZIndex - (leftItems.length - index),
                    opacity : 1/(leftItems.length - index),
                    width : itemWidth,
                    height : itemHeight,
                    left : gap * index
                })
            })
        },

        getSettings : function(poster){
            return poster.data("setting") || {};
        }
    };



    Carousel.init = function(posters){
        var _this_ = this;
        posters.each(function(i, elem){
            new _this_($(this));
        })
    };

    window["Carousel"] = Carousel;
})(jQuery);