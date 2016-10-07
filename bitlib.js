(function() {
    var bitlib = {};

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


bitlib.context = function (w, h, parent) {
    var canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.width = w;
    canvas.height = h;
    canvas.getContext("2d");
    if (!parent) {
        parent = document.body;
    }
    parent.appendChild(canvas);
    return canvas.getContext("2d");
};



bitlib.color = {
    rgb: function(r, g, b) {
        return this.rgba(r, g, b, 1);
    },

    rgba: function(r, g, b, a) {
        return this.Color.create(r, g, b, a);
    },

    number: function(num) {
        return this.rgb(num >> 16, num >> 8 & 0xff, num & 0xff);
    },

    randomRGB: function() {
        return this.number(bitlib.random.int(0xffffff));
    },

    gray: function(shade) {
        return this.rgb(shade, shade, shade);
    },

    randomGray: function() {
        return this.gray(bitlib.random.int(255));
    },

    hsv: function(h, s, v) {
        h /= 360;
        var r, g, b,
            i = Math.floor(h * 6),
            f = h * 6 - i,
            p = v * (1 - s),
            q = v * (1 - f * s),
            t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return this.rgb(r * 255, g * 255, b * 255);
    },

    lerp: function(t, colorA, colorB) {
        var ca, cb;
        if(typeof colorA === "string") {
            ca = this.string(colorA);
        }
        else if(typeof colorA === "number") {
            ca = this.num(colorA);
        }
        else if(colorA.isColorObject) {
            ca = colorA;
        }
        if(typeof colorB === "string") {
            cb = this.string(colorB);
        }
        else if(typeof colorB === "number") {
            cb = this.number(colorB);
        }
        else if(colorB.isColorObject) {
            cb = colorB;
        }
        var r = bitlib.math.lerp(t, ca.red,   cb.red),
            g = bitlib.math.lerp(t, ca.green, cb.green),
            b = bitlib.math.lerp(t, ca.blue,  cb.blue),
            a = bitlib.math.lerp(t, ca.alpha, cb.alpha);
        return this.rgba(r, g, b, a);
    },

    string: function(str) {
        if(str.charAt(0) === "#" && str.length === 7) {
            str = "0x" + str.substr(1);
            var num = parseInt(str, 16);
            return this.number(num);
        }
        else if(str.charAt(0) === "#" && str.length === 4) {
            var r = str.charAt(1),
                g = str.charAt(2),
                b = str.charAt(3);
            str = "0x" + r + r + g + g + b + b;
            var num = parseInt(str, 16);
            return this.number(num);
        }
        else if(str.indexOf("rgba(") === 0) {
            var vals = str.substring(5, str.length - 1).split(",");
            return this.rgba(
                parseInt(vals[0], 10),
                parseInt(vals[1], 10),
                parseInt(vals[2], 10),
                parseFloat(vals[3])
            );
        }
        else if(str.indexOf("rgb(") === 0) {
            var vals = str.substring(4, str.length - 1).split(",");
            return this.rgba(
                parseInt(vals[0], 10),
                parseInt(vals[1], 10),
                parseInt(vals[2], 10),
                1
            );
        }
        else if(this._colorMap[str]) {
            return this.rgba(
                this._colorMap[str][0],
                this._colorMap[str][1],
                this._colorMap[str][2],
                1
            );
        }
        else {
            return this.rgba(0, 0, 0, 1);
        }
    },

    _colorMap: {
        blueviolet: [138,43,226],
        brown: [165,42,42],
        aliceblue: [240,248,255],
        antiquewhite: [250,235,215],
        aqua: [0,255,255],
        aquamarine: [127,255,212],
        azure: [240,255,255],
        beige: [245,245,220],
        bisque: [255,228,196],
        black: [0,0,0],
        blanchedalmond: [255,235,205],
        blue: [0,0,255],
        burlywood: [222,184,135],
        cadetblue: [95,158,160],
        chartreuse: [127,255,0],
        chocolate: [210,105,30],
        coral: [255,127,80],
        cornflowerblue: [100,149,237],
        cornsilk: [255,248,220],
        crimson: [220,20,60],
        cyan: [0,255,255],
        darkblue: [0,0,139],
        darkcyan: [0,139,139],
        darkgoldenrod: [184,134,11],
        darkgray: [169,169,169],
        darkgreen: [0,100,0],
        darkgrey: [169,169,169],
        darkkhaki: [189,183,107],
        darkmagenta: [139,0,139],
        darkolivegreen: [85,107,47],
        darkorange: [255,140,0],
        darkorchid: [153,50,204],
        darkred: [139,0,0],
        darksalmon: [233,150,122],
        darkseagreen: [143,188,143],
        darkslateblue: [72,61,139],
        darkslategray: [47,79,79],
        darkslategrey: [47,79,79],
        darkturquoise: [0,206,209],
        darkviolet: [148,0,211],
        deeppink: [255,20,147],
        deepskyblue: [0,191,255],
        dimgray: [105,105,105],
        dimgrey: [105,105,105],
        dodgerblue: [30,144,255],
        firebrick: [178,34,34],
        floralwhite: [255,250,240],
        forestgreen: [34,139,34],
        fuchsia: [255,0,255],
        gainsboro: [220,220,220],
        ghostwhite: [248,248,255],
        gold: [255,215,0],
        goldenrod: [218,165,32],
        gray: [128,128,128],
        green: [0,128,0],
        greenyellow: [173,255,47],
        grey: [128,128,128],
        honeydew: [240,255,240],
        hotpink: [255,105,180],
        indianred: [205,92,92],
        indigo: [75,0,130],
        ivory: [255,255,240],
        khaki: [240,230,140],
        lavender: [230,230,250],
        lavenderblush: [255,240,245],
        lawngreen: [124,252,0],
        lemonchiffon: [255,250,205],
        lightblue: [173,216,230],
        lightcoral: [240,128,128],
        lightcyan: [224,255,255],
        lightgoldenrodyellow: [250,250,210],
        lightgray: [211,211,211],
        lightgreen: [144,238,144],
        lightgrey: [211,211,211],
        lightpink: [255,182,193],
        lightsalmon: [255,160,122],
        lightseagreen: [32,178,170],
        lightskyblue: [135,206,250],
        lightslategray: [119,136,153],
        lightslategrey: [119,136,153],
        lightsteelblue: [176,196,222],
        lightyellow: [255,255,224],
        lime: [0,255,0],
        limegreen: [50,205,50],
        linen: [250,240,230],
        magenta: [255,0,255],
        maroon: [128,0,0],
        mediumaquamarine: [102,205,170],
        mediumblue: [0,0,205],
        mediumorchid: [186,85,211],
        mediumpurple: [147,112,219],
        mediumseagreen: [60,179,113],
        mediumslateblue: [123,104,238],
        mediumspringgreen: [0,250,154],
        mediumturquoise: [72,209,204],
        mediumvioletred: [199,21,133],
        midnightblue: [25,25,112],
        mintcream: [245,255,250],
        mistyrose: [255,228,225],
        moccasin: [255,228,181],
        navajowhite: [255,222,173],
        navy: [0,0,128],
        oldlace: [253,245,230],
        olive: [128,128,0],
        olivedrab: [107,142,35],
        orange: [255,165,0],
        orangered: [255,69,0],
        orchid: [218,112,214],
        palegoldenrod: [238,232,170],
        palegreen: [152,251,152],
        paleturquoise: [175,238,238],
        palevioletred: [219,112,147],
        papayawhip: [255,239,213],
        peachpuff: [255,218,185],
        peru: [205,133,63],
        pink: [255,192,203],
        plum: [221,160,221],
        powderblue: [176,224,230],
        purple: [128,0,128],
        rebeccapurple: [102,51,153],
        red: [255,0,0],
        rosybrown: [188,143,143],
        royalblue: [65,105,225],
        saddlebrown: [139,69,19],
        salmon: [250,128,114],
        sandybrown: [244,164,96],
        seagreen: [46,139,87],
        seashell: [255,245,238],
        sienna: [160,82,45],
        silver: [192,192,192],
        skyblue: [135,206,235],
        slateblue: [106,90,205],
        slategray: [112,128,144],
        slategrey: [112,128,144],
        snow: [255,250,250],
        springgreen: [0,255,127],
        steelblue: [70,130,180],
        tan: [210,180,140],
        teal: [0,128,128],
        thistle: [216,191,216],
        tomato: [255,99,71],
        turquoise: [64,224,208],
        violet: [238,130,238],
        wheat: [245,222,179],
        white: [255,255,255],
        whitesmoke: [245,245,245],
        yellow: [255,255,0],
        yellowgreen: [154,205,50]
    },

    Color: {
        isColorObject: true,

        create: function(r, g, b, a) {
            var obj = Object.create(this);
            obj._init(r, g, b, a);
            return obj;
        },

        _init: function(r, g, b, a) {
            this.red = r;
            this.green = g;
            this.blue = b;
            this.alpha = a;
        },

        toString: function () {
            return "rgba(" + Math.floor(this.red) + "," + Math.floor(this.green) + "," + Math.floor(this.blue) + "," + this.alpha + ")";
        }
    }

};

bitlib.random = {
    _seed: Date.now(),
    _a: 1664525,
    _c: 1013904223,
    _m: Math.pow(2, 32),

    seed: function(seed) {
        this._seed = seed;
    },

    _int: function() {
        // range [0, 2^32)
        this._seed = (this._seed * this._a + this._c) % this._m;
        return this._seed;
    },

    _float: function() {
        // range [0, 1)
        return this._int() / this._m;
    },

    bool: function(percent) {
        // percent is chance of getting true
        if(percent == null) {
            percent = 0.5;
        }
        return this._float() < percent;
    },

    float: function(min, max) {
        // range [min, max)
        if(arguments.length === 1) {
            return this._float() * min;
        }
        if(arguments.length === 2) {
            return min + this._float() * (max - min);
        }
        return this._float();
    },

    int: function(min, max) {
        // range [min, max)
        if(arguments.length === 1) {
            return Math.floor(this._float() * min);
        }
        if(arguments.length === 2) {
            return Math.floor(this.float(min, max));
        }
        return this._int();
    }

};


bitlib.anim = function(fps, renderCallback) {

    return {
        fps: fps,
        renderCallback: renderCallback,

        start: function () {
            if (!this.running) {
                this.running = true;
                this.render();
            }
        },

        stop: function () {
            this.running = false;
        },

        toggle: function () {
            if (this.running) {
                this.stop();
            }
            else {
                this.start();
            }
        },

        render: function () {
            if (this.running) {
                if (this.renderCallback) {
                    this.renderCallback();
                }
                var self = this;
                setTimeout(function () {
                    requestAnimationFrame(function () {
                        self.render();
                    });
                }, 1000 / this.fps);
            }
        }
    }
}


    if (typeof define === "function" && define.amd) {
        define(bitlib);
    } else {
        window.bitlib = bitlib;
    }

})();