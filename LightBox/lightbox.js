;(function($){
	var LightBox = function(){
			var self = this;

			//创建遮罩和弹出框
			this.popupMask = $('<div id="G-lightbox-mask"></div>');
			this.popupWin = $('<div id="G-lightbox-popup"></div>');

			//保存body
			this.bodyNode = $(document.body);

			//渲染剩余的DOM，并且插入到BODY
			//this.renderDOM();

			this.bodyNode.on('click', '.js-lightbox', function(event){
				event.stopPropagation();
				alert('hehe')
			});

	};

	LightBox.prototype = {


			renderDOM: function(){
				var DOMStr = '<div class="lightbox-pic-view">'
								+ '<span class="lightbox-btn btn-prev"></span>'
								+ '<img src="images/1-3.jpg" width="100%" class="lightbox-image">'
								+ '<span class="lightbox-btn btn-next"></span>'
								+ '</div>'
								+ '<div class="lightbox-pic-caption">'
								+ '<div class="lightbox-caption-area">'
								+ '<p class="lightbox-pic-desc">图片标题</p>'
								+ '<span class="lightbox-of-index">当前索引</span>'
								+ '</div>'
								+ '<div class="lightbox-close-btn"></div>'
								+'</div>';

				this.popupWin.html(DOMStr);
				this.bodyNode.append(this.popupMask);
				this.bodyNode.append(this.popupWin);
			}

			
	};

	window["LightBox"] = LightBox;
})(jQuery);