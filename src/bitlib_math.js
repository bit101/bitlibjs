bitlib.math = {
    polarToPoint: function (angle, radius) {
        return {
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius
        };
    },

    pointToPolar: function(x, y) {
        return {
            angle: Math.atan2(y, x),
            radius: this.dist(0, 0, x, y)
        };
    },

    norm: function (value, min, max) {
        return (value - min) / (max - min);
    },

    lerp: function (t, min, max) {
        return min + (max - min) * t;
    },

    map: function (srcValue, srcMin, srcMax, dstMin, dstMax) {
        norm = this.norm(srcValue, srcMin, srcMax);
        return lerp(norm, dstMin, dstMax);
    },

    clamp: function (value, min, max) {
        return Math.min(Math.max(value, min), max);
    },

    dist: function (x0, y0, x1, y1) {
        var dx = x1 - x0,
            dy = y1 - y0;
        return Math.sqrt(dx * dx + dy * dy);
    },

    dotProduct: function(x0, y0, x1, y1, x2, y2, x3, y3) {
        var dx0 = x1 - x0,
            dy0 = y1 - y0,
            dx1 = x3 - x2,
            dy1 = y3 - y2;
        return dx0 * dx1 + dy0 * dy1;
    }
};
