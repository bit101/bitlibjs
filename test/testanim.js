var anim1 = bitlib.anim(60, onRender1),
    context1 = bitlib.context(100, 100),
    angle = 0;

draw1();

document.addEventListener("click", function() {
    anim1.toggle();
});

function onRender1() {
    draw1();
    angle += 0.1;
}

function draw1() {
    context1.clearRect(0, 0, 100, 100);
    context1.beginPath();
    context1.moveTo(50, 50);
    context1.lineTo(50 + Math.cos(angle) * 50, 50 + Math.sin(angle) * 50);
    context1.stroke();

    context1.beginPath();
    context1.arc(50, 50, 49, 0, Math.PI * 2);
    context1.stroke();
}

var anim2 = bitlib.anim(10, onRender2),
    context2 = bitlib.context(200, 100),
    x = 0;

document.addEventListener("keyup", function() {
    anim2.toggle();
});

onRender2();

function onRender2() {
    context2.clearRect(0, 0, 200, 100);
    context2.beginPath();
    context2.moveTo(x, 0);
    context2.lineTo(x, 100);
    context2.stroke();

    x++;
    if(x > 200) {
        x = 0;
    }
}