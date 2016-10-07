var w = 340,
    h = 350,
    context = bitlib.context(w, h);

testRGB(0, 10);
testRGBA(0, 50);
testNumber(0, 90);
testRandomRGB(120, 10);
testRandomRGBSeeded(240, 10);
testGray(0, 130);
testRandomGray(120, 130);
testRandomGraySeeded(240, 130);
testStrings(0, 250);
testHSV(120, 250);
testLerp(240, 250);


function testRGB(x, y) {
    context.save();
    context.translate(x, y);
    context.fillStyle = bitlib.color.rgb(255, 0, 0);
    context.fillRect(0, 0, 19, 19);
    context.fillStyle = bitlib.color.rgb(255, 255, 0);
    context.fillRect(20, 0, 19, 19);
    context.fillStyle = bitlib.color.rgb(0, 255, 0);
    context.fillRect(40, 0, 19, 19);
    context.fillStyle = bitlib.color.rgb(0, 255, 255);
    context.fillRect(60, 0, 19, 19);
    context.fillStyle = bitlib.color.rgb(0, 0, 255);
    context.fillRect(80, 0, 19, 19);
    context.fillStyle = bitlib.color.rgb(0, 0, 0);
    context.fillText("RGB", 0, 0);
    context.restore();
}

function testRGBA(x, y) {
    context.save();
    context.translate(x, y);
    context.fillStyle = bitlib.color.rgba(255, 0, 0, .2);
    context.fillRect(0, 0, 19, 19);
    context.fillStyle = bitlib.color.rgba(255, 255, 0, .4);
    context.fillRect(20, 0, 19, 19);
    context.fillStyle = bitlib.color.rgba(0, 255, 0, .6);
    context.fillRect(40, 0, 19, 19);
    context.fillStyle = bitlib.color.rgba(0, 255, 255, 8);
    context.fillRect(60, 0, 19, 19);
    context.fillStyle = bitlib.color.rgba(0, 0, 255, 1);
    context.fillRect(80, 0, 19, 19);
    context.fillStyle = bitlib.color.rgba(0, 0, 0, 1);
    context.fillText("RGBA", 0, 0);
    context.restore();
}

function testNumber(x, y) {
    context.save();
    context.translate(x, y);
    context.fillStyle = bitlib.color.number(0xff0000);
    context.fillRect(0, 0, 19, 19);
    context.fillStyle = bitlib.color.number(0xffff00);
    context.fillRect(20, 0, 19, 19);
    context.fillStyle = bitlib.color.number(0x00ff00);
    context.fillRect(40, 0, 19, 19);
    context.fillStyle = bitlib.color.number(0x00ffff);
    context.fillRect(60, 0, 19, 19);
    context.fillStyle = bitlib.color.number(0x0000ff);
    context.fillRect(80, 0, 19, 19);
    context.fillStyle = bitlib.color.number(0x000000);
    context.fillText("Number", 0, 0);
    context.restore();
}

function testRandomRGB(x, y) {
    bitlib.random.setSeed(0);
    context.save();
    context.translate(x, y);
    for(var y = 0; y < 100; y += 20) {
        for (var x = 0; x < 100; x += 20) {
            context.fillStyle = bitlib.color.randomRGB();
            context.fillRect(x, y, 19, 19);
        }
    }
    context.fillStyle = "black";
    context.fillText("randomRGB", 0, 0);
    context.restore();
}

function testRandomRGBSeeded(x, y) {
    context.save();
    context.translate(x, y);
    for(var y = 0; y < 100; y += 20) {
        bitlib.random.setSeed(0);
        for (var x = 0; x < 100; x += 20) {
            context.fillStyle = bitlib.color.randomRGB();
            context.fillRect(x, y, 19, 19);
        }
    }
    context.fillStyle = "black";
    context.fillText("randomRGB seeded", 0, 0);
    context.restore();
}

function testGray(x, y) {
    context.save();
    context.translate(x, y);
    context.fillStyle = bitlib.color.gray(0);
    context.fillRect(0, 0, 19, 19);
    context.fillStyle = bitlib.color.gray(51);
    context.fillRect(20, 0, 19, 19);
    context.fillStyle = bitlib.color.gray(102);
    context.fillRect(40, 0, 19, 19);
    context.fillStyle = bitlib.color.gray(153);
    context.fillRect(60, 0, 19, 19);
    context.fillStyle = bitlib.color.gray(204);
    context.fillRect(80, 0, 19, 19);
    context.fillStyle = bitlib.color.gray(0);
    context.fillText("Gray", 0, 0);
    context.restore();
}

function testRandomGray(x, y) {
    bitlib.random.setSeed(0);
    context.save();
    context.translate(x, y);
    for(var y = 0; y < 100; y += 20) {
        for (var x = 0; x < 100; x += 20) {
            context.fillStyle = bitlib.color.randomGray();
            context.fillRect(x, y, 19, 19);
        }
    }
    context.fillStyle = "black";
    context.fillText("randomGray", 0, 0);
    context.restore();
}

function testRandomGraySeeded(x, y) {
    context.save();
    context.translate(x, y);
    for(var y = 0; y < 100; y += 20) {
        bitlib.random.setSeed(0);
        for (var x = 0; x < 100; x += 20) {
            context.fillStyle = bitlib.color.randomGray();
            context.fillRect(x, y, 19, 19);
        }
    }
    context.fillStyle = "black";
    context.fillText("randomGray seeded", 0, 0);
    context.restore();
}

function testStrings(x, y) {
    var strings = [
        "#ff0000",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#0000ff",

        "#f00",
        "#ff0",
        "#0f0",
        "#0ff",
        "#00f",

        "rgb(255, 0, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 255, 255)",
        "rgb(0, 0, 255)",

        "rgba(255, 0, 0, 0.2)",
        "rgba(255, 255, 0, 0.4)",
        "rgba(0, 255, 0, 0.6)",
        "rgba(0, 255, 2550, 8)",
        "rgba(0, 0, 255, 1)",

        "red",
        "yellow",
        "green",
        "cyan",
        "blue"
    ];
    var index = 0;
    context.save();
    context.translate(x, y);
    for(var y = 0; y < 100; y += 20) {
        bitlib.random.setSeed(0);
        for (var x = 0; x < 100; x += 20) {
            context.fillStyle = bitlib.color.string(strings[index++]);
            context.fillRect(x, y, 19, 19);
        }
    }
    context.fillStyle = "black";
    context.fillText("strings", 0, 0);
    context.restore();

}

function testHSV(x, y) {
    context.save();
    context.translate(x, y);
    for (var x = 0; x < 100; x += 20) {
        context.fillStyle = bitlib.color.hsv(x / 100 * 360, 1, 1);
        context.fillRect(x, 0, 19, 19);
    }
    for (var x = 0; x < 100; x += 20) {
        context.fillStyle = bitlib.color.hsv(x / 100 * 360, x / 100, 1);
        context.fillRect(x, 20, 19, 19);
    }
    for (var x = 0; x < 100; x += 20) {
        context.fillStyle = bitlib.color.hsv(x / 100 * 360, 1, x / 100);
        context.fillRect(x, 40, 19, 19);
    }
    context.fillStyle = "black";
    context.fillText("hsv", 0, 0);
    context.restore();
}

function testLerp(x, y) {
    context.save();
    context.translate(x, y);

    var a = "#ff0000",
        b = "rgb(0, 0, 255)";
    for(var x = 0; x < 100; x += 20) {
        context.fillStyle = bitlib.color.lerp(x / 100, a, b);
        context.fillRect(x, 0, 19, 19);
    }

    b = "rgba(0, 0, 255, 0)";
    for(var x = 0; x < 100; x += 20) {
        context.fillStyle = bitlib.color.lerp(x / 100, a, b);
        context.fillRect(x, 20, 19, 19);
    }

    b = "blue";
    for(var x = 0; x < 100; x += 20) {
        context.fillStyle = bitlib.color.lerp(x / 100, a, b);
        context.fillRect(x, 40, 19, 19);
    }

    b = 0x0000ff;
    for(var x = 0; x < 100; x += 20) {
        context.fillStyle = bitlib.color.lerp(x / 100, a, b);
        context.fillRect(x, 60, 19, 19);
    }

    b = "#00f";
    for(var x = 0; x < 100; x += 20) {
        context.fillStyle = bitlib.color.lerp(x / 100, a, b);
        context.fillRect(x, 80, 19, 19);
    }
    context.fillStyle = "black";
    context.fillText("lerp", 0, 0);
    context.restore();
}