window.onload = function(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.shadowColor = "#cf9";
    context.shadowOffsetX = 10;
    context.shadowOffsetY = 10;
    context.shadowBlur = 5;
    context.font = 'bold 60px Arial';
    context.fillStyle = "#69c";
    context.fillText("Hello World!" , 100, 100);
    context.lineWidth = 4;
    context.strokeStyle = '#99f';
    context.strokeText('For the Horde', 100, 200)
};

