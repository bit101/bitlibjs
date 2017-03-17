var context = bitlib.context(0, 0);

context.setShadow("rgba(255, 0, 0, 0.5)", 10, 10, 10);

context.fillRect(50, 50, 100, 100);

for(var i = 0; i < 5; i++) {
    context.setShadow(i / 5, 10, 10, 10);

    context.fillRect(250, 50 + i * 150, 100, 100);
}