(function() {
    var bitlib = {};

${bitlib_math}

${bitlib_context}

${bitlib_color}

${bitlib_random}

${bitlib_anim}

${bitlib_image}

    if (typeof define === "function" && define.amd) {
        define(bitlib);
    } else {
        if(window.bitlib) {
            for(var prop in bitlib) {
                window.bitlib[prop] = bitlib[prop];
            }
        }
        else {
            window.bitlib = bitlib;
        }
    }

})();