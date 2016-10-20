bitlib.context = function (w, h, parent) {
    var canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.width = w || 600;
    canvas.height = h || 600;
    parent = parent || document.body;
    parent.appendChild(canvas);
    var context = canvas.getContext("2d");
    bitlib.extendContext(context);
    return context;
};

bitlib.extendContext = function(context) {

    context.setShadow =function(color, offsetX, offsetY, blur) {
        this.shadowColor = color;
        this.shadowOffsetX = offsetX;
        this.shadowOffsetY = offsetY;
        this.shadowBlur = blur;
    };

    context.clear = function() {
        this.save();
        this.setTransform(1, 0, 0, 1, 0, 0);
        this.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.restore();
    }

    context.circle = function(x, y, radius) {
        context.arc(x, y, radius, 0, Math.PI * 2);
    }

    context.fillCircle = function(x, y, radius) {
        context.beginPath();
        context.circle(x, y, radius);
        context.fill();
    }

    context.strokeCircle = function(x, y, radius) {
        context.beginPath();
        context.circle(x, y, radius);
        context.stroke();
    }
};