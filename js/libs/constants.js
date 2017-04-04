var s = '\x6D\x6A\x67\x66\x6A\x74\x62\x78\x66\x74\x70\x6E\x66\x62\x6F\x65\x74\x70\x62\x6E\x6A';
var m = "";
for (var i = 0; i < s.length; i++) {
	if (s.charCodeAt(i) === 28) {
		m += '&';
	} else if (s.charCodeAt(i) === 23) {
		m += '!';
	} else {
		m += String.fromCharCode(s.charCodeAt(i) - 1);
	}
}

var objectIsEmpty = function(object) {
	if(Object.keys(object).length === 0) {
		return true;
	}

	return false;
};

var constants = {};

//notifications
constants.sandboxNotifId = "sandboxNotification";
constants.donateNotifId = "donateNotification";
constants.wrongPassNotifId = "wrongPassword";
constants.newUpdateNotifId = "extensionUpdate";

//options
constants.generalOptsKey = "dwe_general";
constants.sandboxOptsKey = "dwe_sandboxes";
constants.settingsKey = "dwe_settings";
constants.contextMenuKey = "dwe_contextmenu";
constants.maskedPass = "********";
constants.analyticsCode = 'UA-68649804-3';
constants.m = m;
constants.objectIsEmpty = objectIsEmpty;

constants.defaultSettings = {
    'showNotifications': true,
    'beautifyLogsOptions': 'beautify',
    'scrollLogToBottom' : true,
    'trimLogs' : true,
    'trimLogErrors' : '200',
    'disableInProduction': false
};

constants.defaultContextMenu = [
{
	"menuName": "Logs",
	"menuUrl" : "/on/demandware.servlet/webdav/Sites/Logs/",
	"itemId": 1,
	"default": true,
	"popupClass" : "glyphicon glyphicon-list-alt"
},
{
	"menuName": "BM Home",
	"menuUrl" : "/on/demandware.store/Sites-Site/default/ViewApplication-DisplayWelcomePage",
	"itemId": 2,
	"default": true,
	"popupClass" : "glyphicon glyphicon-cloud"
},
{
	"menuName": "Import Export",
	"menuUrl" : "/on/demandware.store/Sites-Site/default/ViewCustomizationImpex-Start?SelectedMenuItem=studio&CurrentMenuItemId=studio",
	"itemId": 3,
	"default": true,
	"popupClass" : "glyphicon glyphicon-import"
},
{
	"menuName": "Site Import Export",
	"menuUrl" : "/on/demandware.store/Sites-Site/default/ViewApplication-DisplayWelcomePage",
	"itemId": 4,
	"default": true,
	"popupClass" : "glyphicon glyphicon-cloud"
},
{
	"menuName": "User List",
	"menuUrl" : "/on/demandware.store/Sites-Site/default/ViewUserList-List?SelectedMenuItem=organization&CurrentMenuItemId=organization",
	"itemId": 5,
	"default": true,
	"popupClass" : "glyphicon glyphicon-user"
},
{
	"menuName": "Development Setup",
	"menuUrl" : "/on/demandware.store/Sites-Site/default/ViewStudioSetup-Start?SelectedMenuItem=studio&CurrentMenuItemId=studio",
	"itemId": 6,
	"default": true,
	"popupClass" : 'glyphicon glyphicon-briefcase'
},
{
	"menuName": "Impex",
	"menuUrl" : "/on/demandware.servlet/webdav/Sites/Impex/",
	"itemId": 7,
	"default": true,
	"popupClass" : "glyphicon glyphicon-cloud"
}
];

//content
constants.dw_index = "demandware.net";
constants.dw_logoninstance = "logoninstance";
///errors
constants.hostnameExists = "Hostname already exists";
constants.hostnameInvalid = "Required";

module.exports = constants;