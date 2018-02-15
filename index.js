const {blue} = require('chalk');
const {print} = require('printer');

let core = {};

(core => {
    core.printBlueText = text => {
        print(blue(text));
    };
})(core);

module.exports = core;