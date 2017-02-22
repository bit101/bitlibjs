var context = bitlib.context(0, 0),
    width = context.width,
    height = context.height;


var points = [];
for(var x = 0; x < width; x += 20) {
    var y = bitlib.random.float(100);
    points.push({
        x: x,
        y: y
    });
}

context.strokePath(points);

points = [];

var num = 12;
for(var i = 0; i < num; i++) {
    var a = i / num * Math.PI * 2;
    points.push({
        x: Math.cos(a) * bitlib.random.float(50, 250),
        y: Math.sin(a) * bitlib.random.float(50, 250)
    })
}

context.translate(260, height / 2);
context.strokePath(points);

context.translate(500, 0);
context.strokePath(points, true);

context.translate(500, 0);
context.fillPath(points);

