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

