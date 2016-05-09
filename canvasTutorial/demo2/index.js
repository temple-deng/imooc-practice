window.onload = function(){


    // 线性渐变demo begin
    var canvas1 = document.getElementById('canvas1');
    var context = canvas1.getContext('2d');

    var linearGrad = context.createLinearGradient(0, 0, 800, 800);
    linearGrad.addColorStop(0.0, 'black');
    linearGrad.addColorStop(1.0, '#035');
    context.fillStyle = linearGrad;
    context.fillRect(100, 100, 400, 400);

    // 线性渐变demo end

    // 径向渐变demo begin
    var canvas2 = document.getElementById('canvas2');
    var context = canvas2.getContext('2d');

    var radialGrad = context.createRadialGradient(400, 400, 20, 400, 400, 200);
    radialGrad.addColorStop(0.0, '#66f');
    radialGrad.addColorStop(1.0, 'rgb(102,255,255)');
    context.fillStyle = radialGrad;
    context.fillRect(0, 0, 800, 800);

    // 径向渐变demo end

    // 模式demo begin
    var canvas3 = document.getElementById('canvas3');
    var context = canvas3.getContext('2d');

    var img = new Image();
    img.src= "logo.png";
    img.onload = function() {
        var pattern = context.createPattern(img, 'repeat-x');
        context.fillStyle = pattern;
        context.fillRect(0, 0, 800, 800);
        // 模式demo end
    };


};

