// create handler module for given `context`.
var constants = require('../libs/constants.js');
var storage = require('../libs/base-storage.js');

function log() {
    console.log.apply(console, arguments);
}

module.exports.create = function (context) {
    return {
        //this is the function executed in background.js which gives us the data from the storage
        getSandboxes: function (what, done) {
            storage.getSandboxes(function (response) {
                //send back storage data to the caller
                done(response);
            });
        }
    };
};
// for surpressing console.log output in unit tests:
module.exports.__resetLog = function () {
//    log = function () {};
};