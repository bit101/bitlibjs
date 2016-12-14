bitlib.chooser = function() {

    return {
        choices: [],
        total: 0,

        addChoice: function(weight, option) {
            this.choices.push({
                weight: weight,
                option: option
            });
            this.total += weight;
            return this;
        },

        getChoice: function() {
            var rand = bitlib.random.float(0, this.total);
            for(var i = 0; i < this.choices.length; i++) {
                var choice = this.choices[i];
                if(rand < choice.weight) {
                    return choice.option;
                }
                rand -= choice.weight;
            }
        }
    }
};