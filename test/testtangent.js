var context = bitlib.context(0, 0),
    width = context.width,
    height = context.height;

var c = {
    x:  width / 2,
    y: height / 2,
    r:  100
};

document.body.addEventListener("mousemove", function(event) {
    var x = event.clientX,
        y = event.clientY,
        tan0 = bitlib.math.tangentPointToCircle(x, y, c.x, c.y, c.r),
        tan1 = bitlib.math.tangentPointToCircle(x, y, c.x, c.y, c.r, true);
    context.clear();
    context.line(x, y, tan0.x, tan0.y);
    context.line(x, y, tan1.x, tan1.y);
    context.line(c.x, c.y, tan0.x, tan0.y);
    context.line(c.x, c.y, tan1.x, tan1.y);
    context.strokeCircle(c.x, c.y, c.r);
})

