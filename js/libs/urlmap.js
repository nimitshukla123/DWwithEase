var page = {};

function checkLocation(url){
	if(window.location.pathname.indexOf(url) > -1 || window.location.host.indexOf(url) > -1) {
		return true;
	} else {
		return false;
	}
}

page = {
	'bm_login' : 'ViewApplication-DisplayWelcomePage',
	'bm_contentasset' : 'ViewLibraryContent_52',
	'bm_siteimportexport' : 'ViewSiteImpex-',
	'bm_sitesettings' : ['ViewChannelDetails-Edit', 'ViewChannelDetails-Dispatch'],
	'webdav_logs' : 'on/demandware.servlet/webdav/Sites/Logs',
	'webdav_impex' : 'on/demandware.servlet/webdav/Sites/Impex',
	'webdav_cartridges' : 'on/demandware.servlet/webdav/Sites/Cartridges',
	'webdav_libraries' : 'on/demandware.servlet/webdav/Sites/Libraries',
	'webdav_securitylogs' : 'on/demandware.servlet/webdav/Sites/Securitylogs',
	'webdav_temp' : 'on/demandware.servlet/webdav/Sites/Temp',
	'webdav_static' : 'on/demandware.servlet/webdav/Sites/Static',
	'bm_customobjattrdefinitions' : 'ViewObjectTypeAttributeList',
	'bm_customobjattrgroups' : 'ViewObjectTypeScopeList-Start',
	'account_demandware' : 'account.demandware.com',

	is : function (url) {
		if( typeof url === 'string' ) {	
			return checkLocation(url);
		} else { //not a single string then it's an array
			for (var i = url.length - 1; i >= 0; i--) {
				if(checkLocation(url[i])) {
					return true;
				}
			}
			return false;
		}
	}	
};

module.exports = page;