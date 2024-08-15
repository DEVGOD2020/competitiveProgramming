/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let num1 = 0;
    let num2 = 1;
    let blah = 0;

    while (true) {
        if(blah==0){ yield 0; }
        else if(blah==1){ yield 1; }

        blah = num1+num2;
        yield blah;

        num1 = num2;
        num2 = blah;
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */