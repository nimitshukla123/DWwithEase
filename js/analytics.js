/*! dwithease - v1.6.0 - 2017-02-16 */!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(b.dwe||(b.dwe={})).exports=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){function d(a){f.push(["_trackEvent",a.target.id,"clicked"])}var e=a("./libs/constants.js"),f=f||[];f.push(["_setAccount",e.analyticsCode]),f.push(["_trackPageview"]),function(){var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://ssl.google-analytics.com/ga.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)}(),document.addEventListener("DOMContentLoaded",function(){for(var a=document.getElementsByTagName("a"),b=0;b<a.length;b++)a[b].addEventListener("click",d)})},{"./libs/constants.js":2}],2:[function(a,b,c){for(var d="mjgfjtbxftpnfboetpbnj",e="",f=0;f<d.length;f++)e+=28===d.charCodeAt(f)?"&":23===d.charCodeAt(f)?"!":String.fromCharCode(d.charCodeAt(f)-1);var g=function(a){return 0===Object.keys(a).length},h={};h.sandboxNotifId="sandboxNotification",h.donateNotifId="donateNotification",h.wrongPassNotifId="wrongPassword",h.newUpdateNotifId="extensionUpdate",h.generalOptsKey="dwe_general",h.sandboxOptsKey="dwe_sandboxes",h.settingsKey="dwe_settings",h.contextMenuKey="dwe_contextmenu",h.maskedPass="********",h.analyticsCode="UA-68649804-3",h.m=e,h.objectIsEmpty=g,h.defaultSettings={showNotifications:!0,beautifyLogsOptions:"beautify",scrollLogToBottom:!0,trimLogs:!0,trimLogErrors:"200",disableInProduction:!1},h.defaultContextMenu=[{menuName:"Logs",menuUrl:"/on/demandware.servlet/webdav/Sites/Logs/",itemId:1,default:!0,popupClass:"glyphicon glyphicon-list-alt"},{menuName:"BM Home",menuUrl:"/on/demandware.store/Sites-Site/default/ViewApplication-DisplayWelcomePage",itemId:2,default:!0,popupClass:"glyphicon glyphicon-cloud"},{menuName:"Import Export",menuUrl:"/on/demandware.store/Sites-Site/default/ViewCustomizationImpex-Start?SelectedMenuItem=studio&CurrentMenuItemId=studio",itemId:3,default:!0,popupClass:"glyphicon glyphicon-import"},{menuName:"Site Import Export",menuUrl:"/on/demandware.store/Sites-Site/default/ViewApplication-DisplayWelcomePage",itemId:4,default:!0,popupClass:"glyphicon glyphicon-cloud"},{menuName:"User List",menuUrl:"/on/demandware.store/Sites-Site/default/ViewUserList-List?SelectedMenuItem=organization&CurrentMenuItemId=organization",itemId:5,default:!0,popupClass:"glyphicon glyphicon-user"},{menuName:"Development Setup",menuUrl:"/on/demandware.store/Sites-Site/default/ViewStudioSetup-Start?SelectedMenuItem=studio&CurrentMenuItemId=studio",itemId:6,default:!0,popupClass:"glyphicon glyphicon-briefcase"},{menuName:"Impex",menuUrl:"/on/demandware.servlet/webdav/Sites/Impex/",itemId:7,default:!0,popupClass:"glyphicon glyphicon-cloud"}],h.dw_index="demandware.net",h.dw_logoninstance="logoninstance",h.hostnameExists="Hostname already exists",h.hostnameInvalid="Required",b.exports=h},{}]},{},[1])(1)});