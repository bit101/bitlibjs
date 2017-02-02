bitlib.context = function (w, h, parent) {
    if(w === 0 || h === 0) {
        w = window.innerWidth;
        h = window.innerHeight;
    }
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    bitlib.extendContext(context);
    canvas.style.display = "block";
    context.setSize(w || 600, h || 600);
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    parent = parent || document.body;
    parent.appendChild(canvas);
    return context;
};

bitlib.extendContext = function(context) {

    context.setShadow =function(color, offsetX, offsetY, blur) {
        this.shadowColor = color;
        this.shadowOffsetX = offsetX;
        this.shadowOffsetY = offsetY;
        this.shadowBlur = blur;
    };

    context.clear = function(color) {
        this.save();
        this.setTransform(1, 0, 0, 1, 0, 0);
        if(color) {
            this.fillStyle = color;
            this.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        else {
            this.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.restore();
    }

    context.circle = function(x, y, radius) {
        this.arc(x, y, radius, 0, Math.PI * 2);
    }

    context.fillCircle = function(x, y, radius) {
        this.beginPath();
        this.circle(x, y, radius);
        this.fill();
    }

    context.strokeCircle = function(x, y, radius) {
        this.beginPath();
        this.circle(x, y, radius);
        this.stroke();
    }

    context.ellipse = function(x, y, xr, yr) {
        this.save();
        this.translate(x, y);
        this.scale(xr, yr);
        this.arc(0, 0, 1, 0, Math.PI * 2);
        this.restore();
    }

    context.setSize = function(w, h) {
        this.width = this.canvas.width = w;
        this.height = this.canvas.height = h;
    };

    context.multiCurve = function(points) {
        this.moveTo(points[0].x, points[0].y);
        this.lineTo((points[0].x + points[1].x) / 2, (points[0].y + points[1].y) / 2);
        for(var i = 1; i < points.length - 1; i++) {
            var p0 = points[i],
                p1 = points[i + 1],
                midx = (p0.x + p1.x) / 2,
                midy = (p0.y + p1.y) / 2;
            this.quadraticCurveTo(p0.x, p0.y, midx, midy);

        }
        var p = points[points.length - 1];
        this.lineTo(p.x, p.y);
    };

    context.strokeMultiCurve = function(points) {
        this.beginPath();
        this.multiCurve(points);
        this.stroke();
    };

    context.multiLoop = function(points) {
        var pA = points[0],
            pB = points[1],
            pZ = points[points.length - 1],
            mid1x = (pZ.x + pA.x) / 2,
            mid1y = (pZ.y + pA.y) / 2;
        this.moveTo(mid1x, mid1y);
        for(var i = 0; i < points.length - 1; i++) {
            var p0 = points[i],
                p1 = points[i + 1],
                midx = (p0.x + p1.x) / 2,
                midy = (p0.y + p1.y) / 2;
            this.quadraticCurveTo(p0.x, p0.y, midx, midy);
        }
        this.quadraticCurveTo(pZ.x, pZ.y, mid1x, mid1y);
    };

    context.strokeMultiLoop = function(points) {
        this.beginPath();
        this.multiLoop(points);
        this.stroke();
    };

    context.fillMultiLoop = function(points) {
        this.beginPath();
        this.multiLoop(points);
        this.fill();
    };




};