window.onload = function(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    function drawRoundRect(ctx, x, y, width, height, radius) {
        var sLineWidth = width - 2 * radius;
        var sLineHeight = height - 2 * radius;
        ctx.save();
        ctx.beginPath();
        ctx.arc(x + radius + sLineWidth, y + radius + sLineHeight, radius, 0, 0.5 * Math.PI);
        ctx.lineTo(x + radius, y + height);
        ctx.arc(x + radius, y + radius + sLineHeight, radius, 0.5 * Math.PI, Math.PI);
        ctx.lineTo(x, y + radius);
        ctx.arc(x + radius, y + radius, radius, Math.PI, 1.5 * Math.PI);
        ctx.lineTo(x + radius + sLineWidth, y);
        ctx.arc(x + radius + sLineWidth, y + radius, radius, 1.5 * Math.PI,  2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    }
    drawRoundRect(context,20,20,400,400,40);

};

