# Canvas入门课程
---

###  1.基础知识
```javascript
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    context.moveTo(num, num);        //设定起始点
    context.lineTo(num, num);        //画线

    context.lineWidth = 10;          //设定线宽
    context.strokeStyle = "#058";     //线的颜色
    context.lineCap ;          //线头开始和结尾出的帽子  butt(default), round 圆形  square  方形
    context.lineJoin;          //线头连接处的样子  miter(default)尖角   bevel  平头   round 圆形

    context.stroke();                 //绘制

    context.fillStyle = "#042";       //填充色
    context.fill();                   //填充

    context.rect(x,y, width, height);      //画一个矩形
    context.fillRect(x,y, width, height);
    context.strokeRect(x,y, width, height);
    //如果先绘制后填充， 即stroke(); fill(), 最终可能填充部分会覆盖一部分的线宽，所以应该先填充后绘制
```
canvas的15个图形属性
<table>
    <thead>
        <tr>
            <th>属性</th>
            <th>含义</th>
            <th>属性</th>
            <th>含义</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>fillStyle</td>
            <td>填充时候的颜色、渐变或图案等样式</td>
            <td>font</td>
            <td>绘制文本时候的CSS字体</td>
        </tr>
        <tr>
            <td>globalAlpha</td>
            <td>绘制像素时候要添加的透明度</td>
            <td>globalCompositeOperation</td>
            <td>如何合并新的像素点和下面的像素点</td>
        </tr>
        <tr>
            <td>lineCap</td>
            <td>如何渲染线段的末端</td>
            <td>lineJoin</td>
            <td>如何渲染顶点</td>
        </tr>
        <tr>
            <td>lineWidth</td>
            <td>外框线的宽度</td>
            <td>miterLimit</td>
            <td>紧急斜接顶点的最大长度</td>
        </tr>
        <tr>
            <td>textAlign</td>
            <td>文本水平对齐的方式</td>
            <td>textBaseline</td>
            <td>文本垂直对齐的方式</td>
        </tr>
        <tr>
            <td>shadowBlur</td>
            <td>阴影的清晰或模糊程度</td>
            <td>shadowColor</td>
            <td>下拉阴影的颜色</td>
        </tr>
        <tr>
            <td>shadowOffsetX</td>
            <td>阴影的水平偏移量</td>
            <td>shadowOffsetY</td>
            <td>阴影的垂直偏移量</td>
        </tr>
        <tr>
            <td>strokeStyle</td>
            <td>勾勒线段时的颜色、渐变或图案等样式</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>


###  2.demo1  存储状态
index.js  
```javascript
    window.onload = function(){
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');

        context.save();
        context.fillStyle = '#33cccc';
        context.translate(100, 100);
        context.fillRect(0, 0, 400, 400);
        context.restore();

        context.save();
        context.fillStyle = '#66ffff';
        context.translate(300, 300);
        context.fillRect(0, 0, 400, 400);
        context.restore();
    };
```

### 3. demo2 渐变

```javascript

    /*
     * @string color
     * @canvasGradient object :linearGradient or radialGradient object
     * @pattern HTMLImageElement or  HTMLCanvasElement or HTMLVideoElement
     */
     context.fillStyle;

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // 线性渐变
    var linearGrad = context.createLinearGradient(0, 0, 800, 800);              // 创建一个渐变对象，类似于css里面的渐变方向
    linearGrad.addColorStop(0.0, 'black');                                     // 添加颜色
    linearGrad.addColorStop(1.0, '#035');
    context.fillStyle = linearGrad;
    context.fillRect(100, 100, 400, 400);

    // 径向渐变
    var radialGrad = context.createRadialGradient(400, 400, 20, 400, 400, 200);  // x0,y0,r0,x1,y1,r1
    radialGrad.addColorStop(0.0, '#66f');
    radialGrad.addColorStop(1.0, 'rgb(102,255,255)');
    context.fillStyle = radialGrad;
    context.fillRect(0, 0, 800, 800);

    // 使用图片、画布或者video
    var img = new Image();
    img.src= "logo.png";
    img.onload = function() {
        var pattern = context.createPattern(img, 'repeat-x');
        context.fillStyle = pattern;
        context.fillRect(0, 0, 800, 800);
        // 模式demo end
    };
```

### 4. demo4 文字和阴影
```javascript
    // context.font 接受一个css字体结果的string
    // 顺序 font-style font-variant font-weight font-size font-family 最少要设置size和family
    /*
    * @string string 填充的文字
    * @number x  填充文字的x坐标
    * @number y  填充文字的y坐标
    * @number optional maxlen 可选的字体的长度
    */
   // context.fillText("Heheda", 40, 100);
    // context.strokeText // 同上

    // 文本水平对齐 context.textAlign :left center right
    // 文本垂直对齐 context.textBaseline : top middle bottom
    // context.measureText(string).width 获得文本宽度

    // context.shadowColor  css3接受的颜色
    // context.shadowOffsetX, context.shadowOffsetY, context.shadowBlur
```


### 5. 高级内容
context.globalAlpha  绘制内容的透明度，默认是1
context.globalCompositeOperation 内容重叠时的处理方式，默认是 source-over, 还有destination-over等11种值