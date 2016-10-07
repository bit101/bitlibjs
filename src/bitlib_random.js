bitlib.random = {
    seed: Date.now(),
    a: 1664525,
    c: 1013904223,
    m: Math.pow(2, 32),

    setSeed: function(seed) {
        this.seed = seed;
    },

    _next: function() {
        // range [0, 2^32)
        this.seed = (this.seed * this.a + this.c) % this.m;
        return this.seed;
    },

    _nextFloat: function() {
        // range [0, 1)
        return this._next() / this.m;
    },

    nextBool: function(percent) {
        // percent is chance of getting true
        if(percent == null) {
            percent = 0.5;
        }
        return this._nextFloat() < percent;
    },

    nextFloat: function(min, max) {
        // range [min, max)
        if(arguments.length === 2) {
            return min + this._nextFloat() * (max - min);
        }
        return this._nextFloat();
    },

    nextInt: function(min, max) {
        // range [min, max)
        if(arguments.length === 2) {
            return Math.floor(this.nextFloat(min, max));
        }
        return this._next();
    }

};
