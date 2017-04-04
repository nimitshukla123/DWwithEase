'use strict';
var storage = require('./base-storage.js');

angular.module("chromeStorage", [])
    .factory('chromeStorage', ['$q', function ($q) {
        var area = null;
        var sandboxKey = "dwe_sandboxes";

        try {
            area = chrome.storage.sync; // chrome.storage.sync is equal to chrome.storage.local in case google account is not logged in
        } catch (err) {
            console.log("could not initiate chrome local storage: " + err);
        }

        /**
         * These are provided and updated only for debugging purposes.
         */
        var totalBytes = null;
        var cache = {};

        function getCacheKey(sandboxKey, i) {
            return (i === 0) ? sandboxKey : sandboxKey + "_" + i;
        }

        return {

            get: function (key) {
                var deferred = $q.defer();
                area.get(key, function (value) {
                    // console.log('getTotalBytesInUse then with key ' + key + " : " + angular.toJson(value));
                    var keyValue = value[key];
                    deferred.resolve(keyValue);
                });
                return deferred.promise;
            },
            getSandboxes: function () {
                var deferred = $q.defer();

                area.get(null, function (items) {
                    var i;
                    var value = [];

                    for (i = 0; i < area.MAX_ITEMS; i++) {
                        if (items[getCacheKey(sandboxKey, i)] === undefined) {
                            break;
                        }
                        value.push.apply(value, items[getCacheKey(sandboxKey, i)]);
                    }
                    if (chrome.runtime.lasterror) {
                        console.log("error getting sandbox data");
                        deferred.reject(chrome.runtime.lasterror.message);
                    } else {
                        deferred.resolve(value);
                    }

                });

                return deferred.promise;
            },
            set: function (key, value) {
                var deferred = $q.defer();
                var saveObject = {};
                saveObject[key] = value;
                area.set(saveObject, function () {
                    if (chrome.runtime.lasterror) {
                        console.error(chrome.runtime.lasterror.message);
                    } else {
                        deferred.resolve();
                    }
                });
                return deferred.promise;
            },
            setSandboxes: function (value, callback) {
                var deferred = $q.defer();

                storage.setSandboxes(value, callback, function () {
                    if (chrome.runtime.lasterror) {
                        console.log("error setting sandbox data");
                        deferred.reject(chrome.runtime.lasterror.message);
                    } else {
                        deferred.resolve();
                    }

                });

                return deferred.promise;
            }

        };
            }]);