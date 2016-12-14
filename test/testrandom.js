var chooser = bitlib.random.chooser()
    .addChoice("one", 1)
    .addChoice("three", 3)
    .addChoice("six", 6)
    .addChoice("nine", 9);


var results = {
    one: 0,
    three: 0,
    six: 0,
    nine: 0
};


for(var i = 0; i < 1000; i++) {
    var choice = chooser.getChoice();
    results[choice]++
}

console.log(results);
