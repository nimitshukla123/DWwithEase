var constants = require('./constants.js');
var activeContextMenuItems;
var inactiveContextMenuItems;
var initialize;

var initContextMenu = function() {

  storage.get(constants.contextMenuKey, function(contextMenu) {

    var settings = contextMenu[constants.contextMenuKey];

    var newContextMenu = {
      menuName: 'New menu item',
      menuUrl: chrome.extension.getURL("html/options.html#menu"),
      default: false
    };

    activeContextMenuItems = settings.activeContextMenuItems;

    activeContextMenuItems.push(newContextMenu);

    initialize = chrome.contextMenus.create({
      title: 'DWithEase',
      contexts: ['page'],
      documentUrlPatterns: ["*://*.demandware.net/*"]
    }, function() {

      for (var i = 0; i < activeContextMenuItems.length; i++) {
        var menu = activeContextMenuItems[i];

        var lastContextmenuItem = activeContextMenuItems[activeContextMenuItems.length - 1].menuName;

        if (i === activeContextMenuItems.length - 1) {
          chrome.contextMenus.create({
            type: 'separator',
            parentId: initialize
          });
        }

        chrome.contextMenus.create({
          title: activeContextMenuItems[i].menuName,
          contexts: ['page'],
          parentId: initialize,
          onclick: (function(menu) {
            return function(evt) {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function(tabs) {

                var activeTabUrl = tabs[0].url;
                var tabDomain = activeTabUrl.match(/[a-zA-Z0-9][a-zA-Z0-9\-\.]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+?/)[0];
                var tabPathName = new URL(tabs[0].url).pathname;
                
                if (menu.menuName === 'New menu item') {
               
                  chrome.tabs.create({
                    url: chrome.extension.getURL("html/options.html#menu?newmenu&url=" + tabPathName)
                  });

                } else {
                  createTab(menu.menuUrl, tabDomain);
                }

              });

            };
          })(menu)
        });
      }
    });

  });
};

function createTab(url, tabDomain) {
  chrome.tabs.create({
    url: 'https://' + tabDomain + url
  });
}

module.exports.initContextMenu = initContextMenu;