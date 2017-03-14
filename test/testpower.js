var context = bitlib.context(0, 0),
    width = context.width,
    height = context.height;
context.strokeStyle = "red";
context.translate(0.5, 0);
var vals = [];

var power = 50;

var max = 0;
for(var i = 0; i < 10000; i++) {
    update();
}

var scale = height / 2 / max;

context.beginPath();
for(var i = 0; i < vals.length; i++) {
    var val = vals[i];
    context.moveTo(i, height);
    context.lineTo(i, height - val * scale);
}
context.stroke();


function update() {
    var val = bitlib.random.powerInt(0, width, power);
    vals[val] = (vals[val] || 0) + 1;
    max = Math.max(vals[val], max);
    context.fillCircle(val, bitlib.random.float(height / 2), 2);
}

