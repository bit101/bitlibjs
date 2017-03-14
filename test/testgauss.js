var context = bitlib.context(0, 0),
    width = context.width,
    height = context.height;

// bitlib.random.seed(0);

for(var i = 0; i < 10000; i++) {
    var x = bitlib.random.gauss(width, 100),
        y = bitlib.random.gauss(height, 100);
    context.fillRect(x, y, 1, 1);
}