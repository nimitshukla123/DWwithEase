var isDebug =  true; //@DEBUG@;

function log() {
    /* jshint -W021 */
    if (window.console) {

        // Only run on the first time through - reset this function to the appropriate console.log helper
        if (Function.prototype.bind) {
            log = Function.prototype.bind.call(console.log, console);
        } else {
            log = function() {
                Function.prototype.apply.call(console.log, console, arguments);
            };
        }
        if (isDebug == true) {
        	//'connection : %j', myObject
            log.apply(this, arguments);
        }
    }
}

module.exports = log;