var constants = require('./constants.js');

var sandboxNotifData = {
    "type": "basic",
    "iconUrl": "images/notifications/new_sandbox.png",
    "title": chrome.i18n.getMessage("notifications_sandbox_title"),
    "message": chrome.i18n.getMessage("notifications_sandbox_message"),
    "contextMessage": "",
    buttons: [{
        title: chrome.i18n.getMessage("notifications_sandbox_button_title"),
        iconUrl: "images/stop.png"
        }]
};
var donateNotifData = {
    "type": "basic",
    "iconUrl": "images/icon/icon-128.png",
    "title": "Donate?",
    "message": "Click here if you enjoy using the extension and you want to support us!",
    "contextMessage": ""
};
var wrongPassNotifData = {
    "type": "basic",
    "iconUrl": "images/notifications/wrong_password.png",
    "title": chrome.i18n.getMessage("notifications_password_title"),
    "message": chrome.i18n.getMessage("notifications_password_message"),
    "contextMessage": ""
};
var newUpdateNotifData = {
    "type": "basic",
    "iconUrl": "images/notifications/update.png",
    "title": chrome.i18n.getMessage("notifications_update_title"),
    "message": chrome.i18n.getMessage("notifications_update_message1") + chrome.runtime.getManifest().version + chrome.i18n.getMessage("notifications_update_message2"),
    "contextMessage": ""
};
//create a function which on its part will create notification,
//when calling depending on the notification type we create the notification
//containing the necessary information (image, title and text)

var options = {};

var notifications = {
    createNotification: function (notificationType, params) {
        if (notificationType === constants.sandboxNotifId) {
            chrome.notifications.clear(constants.sandboxNotifId, function () {
                options[constants.sandboxNotifId] = params;
                chrome.notifications.create(constants.sandboxNotifId, sandboxNotifData, function (id) {});
            });
        }
        if (notificationType === constants.donateNotifId) {
            chrome.notifications.clear(constants.donateNotifId, function () {
                options[constants.donateNotifId] = params;
                chrome.notifications.create(constants.donateNotifId, donateNotifData, function (id) {});
            });
        }
        if (notificationType === constants.wrongPassNotifId) {
            chrome.notifications.clear(constants.wrongPassNotifId, function () {
                options[constants.wrongPassNotifId] = params;
                chrome.notifications.create(constants.wrongPassNotifId, wrongPassNotifData, function (id) {});
            });
        }
        if (notificationType === constants.newUpdateNotifId) {
            chrome.notifications.clear(constants.newUpdateNotifId, function () {
                options[constants.newUpdateNotifId] = params;
                chrome.notifications.create(constants.newUpdateNotifId, newUpdateNotifData, function (id) {});
            });
        }
    }
};

chrome.notifications.onClicked.addListener(function (notifId) {
    var params = null;
    if (notifId === constants.sandboxNotifId) {
        params = options[constants.sandboxNotifId];
        openOptions(params.host, params.name);
    } else if (notifId === constants.donateNotifId) {
        openAbout();
    } else if (notifId === constants.wrongPassNotifId) {
        params = options[constants.wrongPassNotifId];
        editPass(params.host);
    } else if (notifId === constants.newUpdateNotifId) {
        openAbout();
    }

});

chrome.notifications.onButtonClicked.addListener(function (notifId, btnIdx) {
    if (notifId === constants.sandboxNotifId) {
        if (btnIdx === 0) {

            var params = options[constants.sandboxNotifId];

            chrome.storage.sync.get(constants.generalOptsKey, function (generalData) {
                if (!generalData[constants.generalOptsKey].deniedUrls) {
                    generalData[constants.generalOptsKey].deniedUrls = [];
                    generalData[constants.generalOptsKey].deniedUrls.push(params.host);
                    chrome.storage.sync.set(generalData);
                    chrome.notifications.clear(constants.sandboxNotifId);
                } else {
                    generalData[constants.generalOptsKey].deniedUrls.push(params.host);
                    chrome.storage.sync.set(generalData);
                    chrome.notifications.clear(constants.sandboxNotifId);
                }
            });

        }
    }
});

function editPass(host) {
    var win = window.open(chrome.extension.getURL("html/options.html#sandboxes?editpass=" + host), '_blank');
    win.focus();
}

function openOptions(host, name) {
    var win = window.open(chrome.extension.getURL("html/options.html#sandboxes?new&host=" + host + "&name=" + name), '_blank');
    win.focus();
}

function openAbout() {
    var win = window.open(chrome.extension.getURL("html/options.html#about"), '_blank');
    win.focus();
}


module.exports = notifications;