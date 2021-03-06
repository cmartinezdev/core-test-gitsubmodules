const {blue, green} = require('chalk');
const {print} = require('printer-test-gitsubmodules');

let core = {};

(core => {
    core.printBlueText = text => {
        print(blue(text));
    };

    core.printGreenText = text => {
        print(green(text));
    };
})(core);

module.exports = core;