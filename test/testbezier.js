var w = 600,
    h = 600,
    context = bitlib.context(w, h);
context.lineWidth = 0.5;

var pointsA = [
        {
            x: 0,
            y: 0
        },
        p1 = {
            x: 600,
            y: 0
        },
        p2 = {
            x: 0,
            y: 600
        },
        p3 = {
            x: 600,
            y: 600
        }
    ],
    pointsB = [
        {
            x: 200,
            y: 600
        },
        p1 = {
            x: 600,
            y: 600
        },
        p2 = {
            x: 600,
            y: 600
        },
        p3 = {
            x: 0,
            y: 600
        }
    ],
    anim = bitlib.anim(60, draw),
    angle = 0;

anim.start();

function draw() {
    var tt = Math.sin(angle) * 0.5 + 0.5;
    var p0 = bitlib.math.lerpPoint(pointsA[0], pointsB[0], tt),
        p1 = bitlib.math.lerpPoint(pointsA[1], pointsB[1], tt),
        p2 = bitlib.math.lerpPoint(pointsA[2], pointsB[2], tt),
        p3 = bitlib.math.lerpPoint(pointsA[3], pointsB[3], tt);
    context.clearRect(0, 0, w, h);
    context.beginPath();
    context.moveTo(p0.x, p0.y);
    context.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
    context.stroke();

    context.beginPath();
    for (var t = 0; t <= 1; t += 0.01) {
        var p = bitlib.math.bezier(p0, p1, p2, p3, t);
        context.moveTo(600, 0);
        context.lineTo(p.x, p.y);
    }
    context.stroke();
    angle += 0.01;
}

function draw2() {
    p0.x = 0;
    p0.y = 600;
    p1.x = 600;
    p1.y = 300;
    p2.x = 0;
    p2.y = 0;

    context.beginPath();
    context.moveTo(p0.x, p0.y);
    context.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    context.stroke();

    context.beginPath();
    for (var t = 0; t <= 1; t += 0.01) {
        var p = bitlib.math.quadratic(p0, p1, p2, t);
        context.moveTo(0, 300);
        context.lineTo(p.x, p.y);
    }
    context.stroke();
}