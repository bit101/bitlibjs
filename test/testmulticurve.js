var context = bitlib.context(0, 0),
    width = context.width,
    height = context.height;

var points = [];

for(var i = 0; i < 10; i++) {
    points.push({
        x: bitlib.random.int(width),
        y: bitlib.random.int(height)
    });
}


for(var i = 0; i < points.length; i++) {
    var p = points[i];
    context.fillCircle(p.x, p.y, 2);
    context.fillText(i, p.x + 5, p.y);
}
context.setShadow("rgba(0,0,0,0.5", 5, 5, 10);

for(var i = 0;  i < 10; i++) {
    for(var j = 0; j < points.length; j++) {
        points[j].x += bitlib.random.float(-20, 20);
        points[j].y += bitlib.random.float(-20, 20);
    }

    context.lineWidth = 10;
    context.strokeStyle = bitlib.color.randomRGB();
    context.multiLoop(points);

    context.lineWidth = 3;
    context.strokeStyle = "rgba(255,255,255,0.15)";
    context.save();
    context.translate(-2, -2);
    context.multiLoop(points);
    context.restore();
}