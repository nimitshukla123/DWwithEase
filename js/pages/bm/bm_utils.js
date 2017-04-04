var sjcl = require('../../libs/helper.js');
var constants = require('../../libs/constants.js');

function isLoginPageOpened(sandbox) {
    var href = window.location.href;
    if (href.endsWith("Logout") || href.endsWith("ProcessLogin")) {
        return true;
    }
    //check if we have the change password modal, if true dont submit login page info
    if (document.getElementsByClassName("loginformreset").length > 0) {
        return false;
    } else {
        //check for a div with class logoninstance
        var elems = document.getElementsByTagName('div');
        for (var i in elems) {
            if (elems[i].className && elems[i].className.indexOf('logoninstance') > -1) {
                return true;
            }
        }
    }
    return false;
}

function submitLoginPage(sandbox) {
    var login = document.getElementsByTagName("input")[0];
    login.value = sandbox.username;

    var pswd = document.getElementsByTagName("input")[1];
    //decrypt password so you can log in
    pswd.value = sjcl.decrypt(constants.m, sandbox.pswd);

    document.getElementsByName("LoginForm")[0].submit();
}

function isBMPageLoaded(sandbox) {
    var bmHeadElement = document.getElementById('bm_header_sbx');
    var bmDevHeadElement = document.getElementById('bm_header_dev');
    var bmStagingHeadElement = document.getElementById('bm_header_stg');

    if ((bmHeadElement !== null || bmDevHeadElement !== null) || (bmStagingHeadElement)) {
        return true;
    }
    return false;
}

function getSandboxConfig(sandboxes) {

    for (var i = 0; i < sandboxes.length; i++) {
        var aliases = sandboxes[i].aliases;
        if (aliases && aliases.length > 0) {
            for (var m = 0; m < aliases.length; m++) {
                if (window.location.hostname === sandboxes[i].url || window.location.hostname === aliases[m].url) {
                    return sandboxes[i];
                }
            }
        } else {
            if (window.location.hostname === sandboxes[i].url) {
                return sandboxes[i];
            }
        }
    }
    return null;
}

function injectScript() {
    var injectedCode = function() {
        callServer();
    };
    var script = document.createElement('script');
    script.appendChild(document.createTextNode('(' + injectedCode + ')();'));
    (document.body || document.head || document.documentElement).appendChild(script);

    return true;
}

function keepBMSessionAlive(sandbox) {
    var keepSessionAlive = document.getElementsByTagName("input")[0];

    keepSessionAlive.value = sjcl.decrypt(constants.m, sandbox.pswd);
    injectScript();
}

var bmUtils = {};

bmUtils.getSandboxConfig = getSandboxConfig;
bmUtils.isLoginPageOpened = isLoginPageOpened;
bmUtils.submitLoginPage = submitLoginPage;
bmUtils.isBMPageLoaded = isBMPageLoaded;
bmUtils.keepBMSessionAlive = keepBMSessionAlive;

module.exports = bmUtils;