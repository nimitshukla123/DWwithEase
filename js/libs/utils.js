var generateId = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
};

var refreshBackgroundPage = function () {
    chrome.extension.getBackgroundPage().location.reload(true);
};


var appendStyle = function (path) {
    var defaultStyle = document.createElement('link');
    defaultStyle.rel = 'stylesheet';
    defaultStyle.href = chrome.extension.getURL(path);
    document.head.appendChild(defaultStyle);
};

var setAttributes = function (el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
};

var utils = {};
utils.generateId = generateId;
utils.refreshBackgroundPage = refreshBackgroundPage;
utils.appendStyle = appendStyle;
utils.setAttributes = setAttributes;

//export
module.exports = utils;