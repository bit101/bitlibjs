bitlib.random = {
    seed: Date.now(),
    a: 1664525,
    c: 1013904223,
    m: Math.pow(2, 32),

    setSeed: function(seed) {
        this.seed = seed;
    },

    _int: function() {
        // range [0, 2^32)
        this.seed = (this.seed * this.a + this.c) % this.m;
        return this.seed;
    },

    _float: function() {
        // range [0, 1)
        return this._int() / this.m;
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
        if(arguments.length === 2) {
            return min + this._float() * (max - min);
        }
        return this._float();
    },

    int: function(min, max) {
        // range [min, max)
        if(arguments.length === 2) {
            return Math.floor(this.float(min, max));
        }
        return this._int();
    }

};
