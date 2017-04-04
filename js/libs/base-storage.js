var constants = require('../libs/constants.js');
var sandboxKey = "dwe_sandboxes";
var area = null;

try {
    area = chrome.storage.sync;
} catch (err) {
    console.log("could not initiate chrome local storage: " + err);
}
storage = {};

function getCacheKey(sandboxKey, i) {
    return (i === 0) ? sandboxKey : sandboxKey + "_" + i;
}
var wrappedCallback = function(data, callback) {
    if (typeof callback !== 'undefined') {
        callback(data);
    }
};

storage.get = function(key, callback) {
    area.get(key, function(items) {
        //send back storage data to the caller
        wrappedCallback(items, callback);
    });
};

storage.getSandboxes = function(callback) {
    area.get(null, function(items) {
        var i;
        var value = [];

        for (i = 0; i < area.MAX_ITEMS; i++) {
            if (items[getCacheKey(sandboxKey, i)] === undefined) {
                break;
            }
            value.push.apply(value, items[getCacheKey(sandboxKey, i)]);
        }

        wrappedCallback(value, callback);
    });
};

storage.set = function(object, callback) {
    area.set(object, function(data) {
        wrappedCallback(data, callback);
    });
};

storage.splitArray = function(arr, size) {
    if (arr) {
        var arr2 = arr.slice(0),
            arrays = [];

        while (arr2.length > 0) {
            arrays.push(arr2.splice(0, size));
        }
        return arrays;
    }
};

storage.lengthInUtf8Bytes = function(str) {
  // Matches only the 10.. bytes that are non-initial characters in a multi-byte sequence.
  var m = encodeURIComponent(str).match(/%[89ABab]/g);
  return str.length + (m ? m.length : 0);
};

storage.setSandboxes = function(value, callback) {
    if (value) {
        var i = 0,
            cache = {},
            segment,
            cacheKey;

        // all subsets
        var segments = this.splitArray(value, 1);

        // split value into chunks and store them in an object indexed by `key_i`
        for (var i = 0; i < segments.length; i++) {

            cacheKey = getCacheKey(sandboxKey, i);

            segment = segments[i];
            cache[cacheKey] = segment;
        }
        // store all the chunks
        area.set(cache, callback);

        area.remove(getCacheKey(sandboxKey, i));
    }
};

storage.remove = function(key, callback) {
    area.remove(key, function(data) {
        //send back storage data to the caller
        wrappedCallback(data, callback);
    });
};

module.exports = storage;