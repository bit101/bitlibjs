var w = 600,
    h = 600,
    context = bitlib.context(w, h);
context.lineWidth = 0.25;
context.fillStyle = "white";

var size = 2,
    scale = 8;
for(var y = 0; y < h + 200; y += size) {
    context.beginPath();
    for(var x = 0; x < w + 10; x += size) {
        var val = bitlib.perlin.noise(x / w * scale, y / h * scale, 0);
        var yy = val * 200 < 100 ? bitlib.random.float(99, 101) : val * 200;
        context.lineTo(x, y - yy);
    }
    context.lineTo(w + 10, h + 10);
    context.lineTo(-10, h + 10);
    context.closePath();
    context.fill();
    context.stroke();
}