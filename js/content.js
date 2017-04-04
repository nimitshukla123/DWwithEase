function usn() {
    var a = [];
	var z= [];
    $("td.error-msg").each(function() {
        var b = $(this).text(),
            c = b.match(new RegExp("Sites-(.*)-Site"));
			if(c !== null){
            d = c[0].substring(c[0].indexOf("Sites-") + 6, c[0].indexOf("-Site"));
			}else{ 
			d = 'Global';
			}
			q = b.match(new RegExp("Site |(.*)|PipelineCall"));
			if(d == '-'){
				d='Global';
				v = q[0].substring(q[0].indexOf("-Site|") + 6, q[0].indexOf("|OnRequest|"));
				}else{
					if(q[0].indexOf("|PipelineCall|") != -1){
						v = q[0].substring(q[0].indexOf("-Site|") + 6, q[0].indexOf("|PipelineCall|"));
					}else if(q[0].indexOf("|OnRequest|") != -1){
						v = q[0].substring(q[0].indexOf("-Site|") + 6, q[0].indexOf("|OnRequest|"));
					}else{
						v = 'Global';
					}
				}
        "" != d && ($.inArray(d, a) == -1 && a.push(d), $(this).siblings("td.sitename").html(d))
		"" != v && ($.inArray(v, z) == -1 && z.push(v), $(this).siblings("td.pipeline").html(v))
    });
    var b = $("<select style='width:150px;' id='site-dropdown'/>");
    $("<option value='All'>All</option>").appendTo(b);
    for (var c = 0; c < a.length; c++) $("<option value=" + a[c] + ">" + a[c] + "</option>").appendTo(b);
    b.appendTo("th.site-dropdown");
	 var y = $("<select style='width:150px;' id='pipeline-dropdown'/>");
    $("<option value='All'>All</option>").appendTo(y);
    for (var c = 0; c < z.length; c++) $("<option value=" + z[c] + ">" + z[c] + "</option>").appendTo(y);
    y.appendTo("th.pipeline-dropdown")
}! function(a) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = a();
    else if ("function" == typeof define && define.amd) define([], a);
    else {
        var b;
        b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, (b.dwe || (b.dwe = {})).exports = a()
    }
}(function() {
    return function a(b, c, d) {
        function e(g, h) {
            if (!c[g]) {
                if (!b[g]) {
                    var i = "function" == typeof require && require;
                    if (!h && i) return i(g, !0);
                    if (f) return f(g, !0);
                    var j = new Error("Cannot find module '" + g + "'");
                    throw j.code = "MODULE_NOT_FOUND", j
                }
                var k = c[g] = {
                    exports: {}
                };
                b[g][0].call(k.exports, function(a) {
                    var c = b[g][1][a];
                    return e(c ? c : a)
                }, k, k.exports, a, b, c, d)
            }
            return c[g].exports
        }
        for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
        return e
    }({
        1: [function(a, b, c) {
            ! function() {
                function b() {
                    for (var a = {
                            type: "new_sandbox",
                            host: window.location.hostname
                        }, b = 0; b < j.length; b++) window.location.hostname.indexOf(j[b]) > -1 && (a = {});
                    (window.location.hostname.indexOf(e.dw_index) > -1 || document.getElementsByClassName(e.dw_logoninstance).length > 0) && d.bg("pushNotification", a)
                }
                var c = a("./modules/handlers").create("ct"),
                    d = a("./modules/msg").init("ct", c),
                    e = (a("./libs/helper.js"), a("./libs/constants.js")),
                    f = (a("./libs/utils.js"), a("./pages/bm/bm_utils.js")),
                    g = a("./libs/urlmap.js"),
                    h = 0;
                document.getElementById("bm_header_dev"), c.rememberTabId = function(a) {
                    h = a, i()
                };
                var i = function() {
                        d.bg("getSandboxes", {}, function(c) {
                            var e = function() {
                                    var a = {};
                                    return a.tab = h, a.host = window.location.host, a
                                },
                                i = null;
                            if (c && (i = f.getSandboxConfig(c)))
                                if (f.isLoginPageOpened(i)) i.pswd && i.automaticLogin ? window.location.href.indexOf("logOut") < 1 && d.bg("getTabReloadCount", e(), function(a) {
                                    if (a < 1) {
                                        var b = {
                                            timeSaved: 15
                                        };
                                        d.bg("timeSaved", b), f.submitLoginPage(i)
                                    } else {
                                        var c = {
                                            type: "wrong_password",
                                            host: window.location.host
                                        };
                                        d.bg("pushNotification", c)
                                    }
                                }) : i.automaticLogin = !1;
                                else if (f.isBMPageLoaded(i)) {
                                d.bg("resetCounter", e()), k.execute("requestSiteLabel", i, h), i.keepSessionActive && (setInterval(function() {
                                    var a = new XMLHttpRequest;
                                    a.open("GET", "/on/demandware.store/Sites-Site/default/ViewApplication-DisplayWelcomePage"), a.send(null)
                                }, 3e5), setInterval(function() {
                                    null !== document.getElementById("modalWin_table_content") ? f.keepBMSessionAlive(i) : document.getElementsByClassName("logoinstance").length > 0 && f.submitLoginPage(i)
                                }, 1e4));
                                var j = document.getElementsByClassName("headermenu logoff")[0];
                                j.href = window.location.origin + "/on/demandware.store/Sites-Site/default/ViewApplication-Logout#logOut"
                            }
                            i || b(), g.is(g.bm_contentasset) ? a("./pages/bm/bm_contentasset.js").initContentAsset() : g.is(g.bm_siteimportexport) ? a("./pages/bm/bm_siteimportexport.js").initSiteImportExport() : g.is(g.bm_sitesettings) ? a("./pages/bm/bm_sitesettings.js").initSiteSettings() : g.is(g.webdav_logs) ? a("./pages/webdav/webdav.js").initLogs(d) : g.is([g.webdav_impex, g.webdav_cartridges, g.webdav_securitylogs, g.webdav_temp, g.webdav_static, g.webdav_libraries]) ? a("./pages/webdav/webdav.js").initFolder() : g.is(g.bm_customobjattrdefinitions) ? a("./pages/bm/bm_customobjattrdefinitions.js").initCustomObjAttrDefinitions() : g.is(g.bm_customobjattrgroups) ? a("./pages/bm/bm_customobjattrgroups.js").initCustomObjAttrGroups(i) : g.is(g.account_demandware)
                        })
                    },
                    j = ["xchange.demandware.com", "account.demandware.com", "controlcenter.pod"],
                    k = {
                        requestSiteLabel: function(a, b) {
                            var c = "sod_option",
                                e = document.getElementById("SelectedSiteID");
                            if (e) {
                                if (0 !== e.selectedIndex) return;
                                for (var f = [], g = !1, h = 1; h < document.getElementsByClassName(c).length; h++) g = 1 === h, f.push({
                                    id: document.getElementsByClassName(c)[h].title,
                                    isDefault: g
                                });
                                var i = {};
                                i.findSites = f, i.selectedSandbox = a, d.bg("receiveSites", i, function(a) {
                                    for (var b = a, d = 0; d < document.getElementsByClassName(c).length; d++) document.getElementsByClassName(c)[d].title === b && document.getElementsByClassName(c)[d].click()
                                })
                            }
                        }
                    };
                k.execute = function(a) {
                    return k[a] && k[a].apply(k, [].slice.call(arguments, 1))
                }, document.onkeydown = function(a) {
                    var b = navigator.platform.match("Mac") ? a.metaKey : a.ctrlKey;
                    if (b && 83 === a.keyCode) {
                        if (g.is(g.bm_contentasset)) {
                            var c = document.getElementsByName("apply")[0];
                            return c && c.click(), !1
                        }
                        if (window.location.href.indexOf("ViewLibraryFolder_52-Edit") > -1 || window.location.href.indexOf("ViewLibraryFolder_52-Dispatch") > -1) {
                            var d = document.getElementsByName("apply")[0];
                            return d && d.click(), !1
                        }
                        if (window.location.href.indexOf("ViewProduct_52-Edit") > -1 || window.location.href.indexOf("ViewProduct_52-Dispatch") > -1) {
                            var e = document.getElementsByName("update")[0];
                            return e && e.click(), !1
                        }
                        if (window.location.href.indexOf("CustomPreferences-ViewGroup") > -1 || window.location.href.indexOf("CustomPreferences-Dispatch") > -1) {
                            var f = document.getElementsByName("update")[0];
                            return f && f.click(), !1
                        }
                        if (window.location.href.indexOf("Slot-Edit?") > -1) {
                            var h = document.getElementsByName("SlotConfigurationListApplyButton")[0];
                            return h && h.click(), !1
                        }
                        if (window.location.href.indexOf("ViewChannelCategoryAttributes_52") > -1) {
                            var i = document.getElementsByName("update")[0];
                            return i && i.click(), !1
                        }
                    }
                }, String.prototype.endsWith = function(a) {
                    return this.indexOf(a, this.length - a.length) !== -1
                }, Date.prototype.yyyymmdd = function(a) {
                    var b = this.getFullYear().toString(),
                        c = (this.getMonth() + 1).toString(),
                        d = this.getDate().toString();
                    return b + (c[1] ? c : "0" + c[0]) + (d[1] ? d : "0" + d[0])
                }
            }()
        }, {
            "./libs/constants.js": 3,
            "./libs/helper.js": 4,
            "./libs/urlmap.js": 5,
            "./libs/utils.js": 6,
            "./modules/handlers": 7,
            "./modules/msg": 8,
            "./pages/bm/bm_contentasset.js": 9,
            "./pages/bm/bm_customobjattrdefinitions.js": 10,
            "./pages/bm/bm_customobjattrgroups.js": 11,
            "./pages/bm/bm_siteimportexport.js": 12,
            "./pages/bm/bm_sitesettings.js": 13,
            "./pages/bm/bm_utils.js": 14,
            "./pages/webdav/webdav.js": 15
        }],
        2: [function(a, b, c) {
            function d(a, b) {
                return 0 === b ? a : a + "_" + b
            }
            var e = (a("../libs/constants.js"), "dwe_sandboxes"),
                f = null;
            try {
                f = chrome.storage.sync
            } catch (a) {
                console.log("could not initiate chrome local storage: " + a)
            }
            storage = {};
            var g = function(a, b) {
                "undefined" != typeof b && b(a)
            };
            storage.get = function(a, b) {
                f.get(a, function(a) {
                    g(a, b)
                })
            }, storage.getSandboxes = function(a) {
                f.get(null, function(b) {
                    var c, h = [];
                    for (c = 0; c < f.MAX_ITEMS && void 0 !== b[d(e, c)]; c++) h.push.apply(h, b[d(e, c)]);
                    g(h, a)
                })
            }, storage.set = function(a, b) {
                f.set(a, function(a) {
                    g(a, b)
                })
            }, storage.splitArray = function(a, b) {
                if (a) {
                    for (var c = a.slice(0), d = []; c.length > 0;) d.push(c.splice(0, b));
                    return d
                }
            }, storage.lengthInUtf8Bytes = function(a) {
                var b = encodeURIComponent(a).match(/%[89ABab]/g);
                return a.length + (b ? b.length : 0)
            }, storage.setSandboxes = function(a, b) {
                if (a) {
                    for (var c, g, h = 0, i = {}, j = this.splitArray(a, 1), h = 0; h < j.length; h++) g = d(e, h), c = j[h], i[g] = c;
                    f.set(i, b), f.remove(d(e, h))
                }
            }, storage.remove = function(a, b) {
                f.remove(a, function(a) {
                    g(a, b)
                })
            }, b.exports = storage
        }, {
            "../libs/constants.js": 3
        }],
        3: [function(a, b, c) {
            for (var d = "mjgfjtbxftpnfboetpbnj", e = "", f = 0; f < d.length; f++) e += 28 === d.charCodeAt(f) ? "&" : 23 === d.charCodeAt(f) ? "!" : String.fromCharCode(d.charCodeAt(f) - 1);
            var g = function(a) {
                    return 0 === Object.keys(a).length
                },
                h = {};
            h.sandboxNotifId = "sandboxNotification", h.donateNotifId = "donateNotification", h.wrongPassNotifId = "wrongPassword", h.newUpdateNotifId = "extensionUpdate", h.generalOptsKey = "dwe_general", h.sandboxOptsKey = "dwe_sandboxes", h.settingsKey = "dwe_settings", h.contextMenuKey = "dwe_contextmenu", h.maskedPass = "********", h.analyticsCode = "UA-68649804-3", h.m = e, h.objectIsEmpty = g, h.defaultSettings = {
                showNotifications: !0,
                beautifyLogsOptions: "beautify",
                scrollLogToBottom: !0,
                trimLogs: !0,
                trimLogErrors: "200",
                disableInProduction: !1
            }, h.defaultContextMenu = [{
                menuName: "Logs",
                menuUrl: "/on/demandware.servlet/webdav/Sites/Logs/",
                itemId: 1,
                default: !0,
                popupClass: "glyphicon glyphicon-list-alt"
            }, {
                menuName: "BM Home",
                menuUrl: "/on/demandware.store/Sites-Site/default/ViewApplication-DisplayWelcomePage",
                itemId: 2,
                default: !0,
                popupClass: "glyphicon glyphicon-cloud"
            }, {
                menuName: "Import Export",
                menuUrl: "/on/demandware.store/Sites-Site/default/ViewCustomizationImpex-Start?SelectedMenuItem=studio&CurrentMenuItemId=studio",
                itemId: 3,
                default: !0,
                popupClass: "glyphicon glyphicon-import"
            }, {
                menuName: "Site Import Export",
                menuUrl: "/on/demandware.store/Sites-Site/default/ViewApplication-DisplayWelcomePage",
                itemId: 4,
                default: !0,
                popupClass: "glyphicon glyphicon-cloud"
            }, {
                menuName: "User List",
                menuUrl: "/on/demandware.store/Sites-Site/default/ViewUserList-List?SelectedMenuItem=organization&CurrentMenuItemId=organization",
                itemId: 5,
                default: !0,
                popupClass: "glyphicon glyphicon-user"
            }, {
                menuName: "Development Setup",
                menuUrl: "/on/demandware.store/Sites-Site/default/ViewStudioSetup-Start?SelectedMenuItem=studio&CurrentMenuItemId=studio",
                itemId: 6,
                default: !0,
                popupClass: "glyphicon glyphicon-briefcase"
            }, {
                menuName: "Impex",
                menuUrl: "/on/demandware.servlet/webdav/Sites/Impex/",
                itemId: 7,
                default: !0,
                popupClass: "glyphicon glyphicon-cloud"
            }], h.dw_index = "demandware.net", h.dw_logoninstance = "logoninstance", h.hostnameExists = "Hostname already exists", h.hostnameInvalid = "Required", b.exports = h
        }, {}],
        4: [function(a, b, c) {
            "use strict";

            function d(a) {
                throw a
            }

            function e(a, b, c) {
                4 !== b.length && d(new l.exception.invalid("invalid aes block size"));
                var e = a.a[c],
                    f = b[0] ^ e[0],
                    g = b[c ? 3 : 1] ^ e[1],
                    h = b[2] ^ e[2];
                b = b[c ? 1 : 3] ^ e[3];
                var i, j, k, m, n = e.length / 4 - 2,
                    o = 4,
                    p = [0, 0, 0, 0];
                i = a.j[c], a = i[0];
                var q = i[1],
                    r = i[2],
                    s = i[3],
                    t = i[4];
                for (m = 0; m < n; m++) i = a[f >>> 24] ^ q[g >> 16 & 255] ^ r[h >> 8 & 255] ^ s[255 & b] ^ e[o], j = a[g >>> 24] ^ q[h >> 16 & 255] ^ r[b >> 8 & 255] ^ s[255 & f] ^ e[o + 1], k = a[h >>> 24] ^ q[b >> 16 & 255] ^ r[f >> 8 & 255] ^ s[255 & g] ^ e[o + 2], b = a[b >>> 24] ^ q[f >> 16 & 255] ^ r[g >> 8 & 255] ^ s[255 & h] ^ e[o + 3], o += 4, f = i, g = j, h = k;
                for (m = 0; 4 > m; m++) p[c ? 3 & -m : m] = t[f >>> 24] << 24 ^ t[g >> 16 & 255] << 16 ^ t[h >> 8 & 255] << 8 ^ t[255 & b] ^ e[o++], i = f, f = g, g = h, h = b, b = i;
                return p
            }

            function f(a, b) {
                var c, d, e, f = b.slice(0),
                    g = a.q,
                    h = a.a,
                    i = g[0],
                    j = g[1],
                    k = g[2],
                    l = g[3],
                    m = g[4],
                    n = g[5],
                    o = g[6],
                    p = g[7];
                for (c = 0; 64 > c; c++) 16 > c ? d = f[c] : (d = f[c + 1 & 15], e = f[c + 14 & 15], d = f[15 & c] = (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + f[15 & c] + f[c + 9 & 15] | 0), d = d + p + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (o ^ m & (n ^ o)) + h[c], p = o, o = n, n = m, m = l + d | 0, l = k, k = j, j = i, i = d + (j & k ^ l & (j ^ k)) + (j >>> 2 ^ j >>> 13 ^ j >>> 22 ^ j << 30 ^ j << 19 ^ j << 10) | 0;
                g[0] = g[0] + i | 0, g[1] = g[1] + j | 0, g[2] = g[2] + k | 0, g[3] = g[3] + l | 0, g[4] = g[4] + m | 0, g[5] = g[5] + n | 0, g[6] = g[6] + o | 0, g[7] = g[7] + p | 0
            }

            function g(a, b) {
                var c, d = l.random.z[a],
                    e = [];
                for (c in d) d.hasOwnProperty(c) && e.push(d[c]);
                for (c = 0; c < e.length; c++) e[c](b)
            }

            function h(a) {
                a.a = i(a).concat(i(a)), a.A = new l.cipher.aes(a.a)
            }

            function i(a) {
                for (var b = 0; 4 > b && (a.e[b] = a.e[b] + 1 | 0, !a.e[b]); b++);
                return a.A.encrypt(a.e)
            }
            var j = void 0,
                k = !1,
                l = {
                    cipher: {},
                    hash: {},
                    keyexchange: {},
                    mode: {},
                    misc: {},
                    codec: {},
                    exception: {
                        corrupt: function(a) {
                            this.toString = function() {
                                return "CORRUPT: " + this.message
                            }, this.message = a
                        },
                        invalid: function(a) {
                            this.toString = function() {
                                return "INVALID: " + this.message
                            }, this.message = a
                        },
                        bug: function(a) {
                            this.toString = function() {
                                return "BUG: " + this.message
                            }, this.message = a
                        },
                        notReady: function(a) {
                            this.toString = function() {
                                return "NOT READY: " + this.message
                            }, this.message = a
                        }
                    }
                };
            "undefined" != typeof b && b.exports && (b.exports = l), l.cipher.aes = function(a) {
                this.j[0][0][0] || this.D();
                var b, c, e, f, g = this.j[0][4],
                    h = this.j[1];
                b = a.length;
                var i = 1;
                for (4 !== b && 6 !== b && 8 !== b && d(new l.exception.invalid("invalid aes key size")), this.a = [e = a.slice(0), f = []], a = b; a < 4 * b + 28; a++) c = e[a - 1], (0 === a % b || 8 === b && 4 === a % b) && (c = g[c >>> 24] << 24 ^ g[c >> 16 & 255] << 16 ^ g[c >> 8 & 255] << 8 ^ g[255 & c], 0 === a % b && (c = c << 8 ^ c >>> 24 ^ i << 24, i = i << 1 ^ 283 * (i >> 7))), e[a] = e[a - b] ^ c;
                for (b = 0; a; b++, a--) c = e[3 & b ? a : a - 4], f[b] = 4 >= a || 4 > b ? c : h[0][g[c >>> 24]] ^ h[1][g[c >> 16 & 255]] ^ h[2][g[c >> 8 & 255]] ^ h[3][g[255 & c]]
            }, l.cipher.aes.prototype = {
                encrypt: function(a) {
                    return e(this, a, 0)
                },
                decrypt: function(a) {
                    return e(this, a, 1)
                },
                j: [
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ],
                    [
                        [],
                        [],
                        [],
                        [],
                        []
                    ]
                ],
                D: function() {
                    var a, b, c, d, e, f, g, h = this.j[0],
                        i = this.j[1],
                        j = h[4],
                        k = i[4],
                        l = [],
                        m = [];
                    for (a = 0; 256 > a; a++) m[(l[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
                    for (b = c = 0; !j[b]; b ^= d || 1, c = m[c] || 1)
                        for (f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4, f = f >> 8 ^ 255 & f ^ 99, j[b] = f, k[f] = b, e = l[a = l[d = l[b]]], g = 16843009 * e ^ 65537 * a ^ 257 * d ^ 16843008 * b, e = 257 * l[f] ^ 16843008 * f, a = 0; 4 > a; a++) h[a][b] = e = e << 24 ^ e >>> 8, i[a][f] = g = g << 24 ^ g >>> 8;
                    for (a = 0; 5 > a; a++) h[a] = h[a].slice(0), i[a] = i[a].slice(0)
                }
            }, l.bitArray = {
                bitSlice: function(a, b, c) {
                    return a = l.bitArray.O(a.slice(b / 32), 32 - (31 & b)).slice(1), c === j ? a : l.bitArray.clamp(a, c - b)
                },
                extract: function(a, b, c) {
                    var d = Math.floor(-b - c & 31);
                    return ((b + c - 1 ^ b) & -32 ? a[b / 32 | 0] << 32 - d ^ a[b / 32 + 1 | 0] >>> d : a[b / 32 | 0] >>> d) & (1 << c) - 1
                },
                concat: function(a, b) {
                    if (0 === a.length || 0 === b.length) return a.concat(b);
                    var c = a[a.length - 1],
                        d = l.bitArray.getPartial(c);
                    return 32 === d ? a.concat(b) : l.bitArray.O(b, d, 0 | c, a.slice(0, a.length - 1))
                },
                bitLength: function(a) {
                    var b = a.length;
                    return 0 === b ? 0 : 32 * (b - 1) + l.bitArray.getPartial(a[b - 1])
                },
                clamp: function(a, b) {
                    if (32 * a.length < b) return a;
                    a = a.slice(0, Math.ceil(b / 32));
                    var c = a.length;
                    return b &= 31, 0 < c && b && (a[c - 1] = l.bitArray.partial(b, a[c - 1] & 2147483648 >> b - 1, 1)), a
                },
                partial: function(a, b, c) {
                    return 32 === a ? b : (c ? 0 | b : b << 32 - a) + 1099511627776 * a
                },
                getPartial: function(a) {
                    return Math.round(a / 1099511627776) || 32
                },
                equal: function(a, b) {
                    if (l.bitArray.bitLength(a) !== l.bitArray.bitLength(b)) return k;
                    var c, d = 0;
                    for (c = 0; c < a.length; c++) d |= a[c] ^ b[c];
                    return 0 === d
                },
                O: function(a, b, c, d) {
                    var e;
                    for (e = 0, d === j && (d = []); 32 <= b; b -= 32) d.push(c), c = 0;
                    if (0 === b) return d.concat(a);
                    for (e = 0; e < a.length; e++) d.push(c | a[e] >>> b), c = a[e] << 32 - b;
                    return e = a.length ? a[a.length - 1] : 0, a = l.bitArray.getPartial(e), d.push(l.bitArray.partial(b + a & 31, 32 < b + a ? c : d.pop(), 1)), d
                },
                k: function(a, b) {
                    return [a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3]]
                }
            }, l.codec.utf8String = {
                fromBits: function(a) {
                    var b, c, d = "",
                        e = l.bitArray.bitLength(a);
                    for (b = 0; b < e / 8; b++) 0 === (3 & b) && (c = a[b / 4]), d += String.fromCharCode(c >>> 24), c <<= 8;
                    return decodeURIComponent(escape(d))
                },
                toBits: function(a) {
                    a = unescape(encodeURIComponent(a));
                    var b, c = [],
                        d = 0;
                    for (b = 0; b < a.length; b++) d = d << 8 | a.charCodeAt(b), 3 === (3 & b) && (c.push(d), d = 0);
                    return 3 & b && c.push(l.bitArray.partial(8 * (3 & b), d)), c
                }
            }, l.codec.hex = {
                fromBits: function(a) {
                    var b, c = "";
                    for (b = 0; b < a.length; b++) c += ((0 | a[b]) + 0xf00000000000).toString(16).substr(4);
                    return c.substr(0, l.bitArray.bitLength(a) / 4)
                },
                toBits: function(a) {
                    var b, c, d = [];
                    for (a = a.replace(/\s|0x/g, ""), c = a.length, a += "00000000", b = 0; b < a.length; b += 8) d.push(0 ^ parseInt(a.substr(b, 8), 16));
                    return l.bitArray.clamp(d, 4 * c)
                }
            }, l.codec.base64 = {
                I: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                fromBits: function(a, b, c) {
                    var d = "",
                        e = 0,
                        f = l.codec.base64.I,
                        g = 0,
                        h = l.bitArray.bitLength(a);
                    for (c && (f = f.substr(0, 62) + "-_"), c = 0; 6 * d.length < h;) d += f.charAt((g ^ a[c] >>> e) >>> 26), 6 > e ? (g = a[c] << 6 - e, e += 26, c++) : (g <<= 6, e -= 6);
                    for (; 3 & d.length && !b;) d += "=";
                    return d
                },
                toBits: function(a, b) {
                    a = a.replace(/\s|=/g, "");
                    var c, e, f = [],
                        g = 0,
                        h = l.codec.base64.I,
                        i = 0;
                    for (b && (h = h.substr(0, 62) + "-_"), c = 0; c < a.length; c++) e = h.indexOf(a.charAt(c)), 0 > e && d(new l.exception.invalid("this isn't base64!")), 26 < g ? (g -= 26, f.push(i ^ e >>> g), i = e << 32 - g) : (g += 6, i ^= e << 32 - g);
                    return 56 & g && f.push(l.bitArray.partial(56 & g, i, 1)), f
                }
            }, l.codec.base64url = {
                fromBits: function(a) {
                    return l.codec.base64.fromBits(a, 1, 1)
                },
                toBits: function(a) {
                    return l.codec.base64.toBits(a, 1)
                }
            }, l.hash.sha256 = function(a) {
                this.a[0] || this.D(), a ? (this.q = a.q.slice(0), this.m = a.m.slice(0), this.g = a.g) : this.reset()
            }, l.hash.sha256.hash = function(a) {
                return (new l.hash.sha256).update(a).finalize()
            }, l.hash.sha256.prototype = {
                blockSize: 512,
                reset: function() {
                    return this.q = this.M.slice(0), this.m = [], this.g = 0, this
                },
                update: function(a) {
                    "string" == typeof a && (a = l.codec.utf8String.toBits(a));
                    var b, c = this.m = l.bitArray.concat(this.m, a);
                    for (b = this.g, a = this.g = b + l.bitArray.bitLength(a), b = 512 + b & -512; b <= a; b += 512) f(this, c.splice(0, 16));
                    return this
                },
                finalize: function() {
                    var a, b = this.m,
                        c = this.q,
                        b = l.bitArray.concat(b, [l.bitArray.partial(1, 1)]);
                    for (a = b.length + 2; 15 & a; a++) b.push(0);
                    for (b.push(Math.floor(this.g / 4294967296)), b.push(0 | this.g); b.length;) f(this, b.splice(0, 16));
                    return this.reset(), c
                },
                M: [],
                a: [],
                D: function() {
                    function a(a) {
                        return 4294967296 * (a - Math.floor(a)) | 0
                    }
                    var b, c = 0,
                        d = 2;
                    a: for (; 64 > c; d++) {
                        for (b = 2; b * b <= d; b++)
                            if (0 === d % b) continue a;
                        8 > c && (this.M[c] = a(Math.pow(d, .5))), this.a[c] = a(Math.pow(d, 1 / 3)), c++
                    }
                }
            }, l.mode.ccm = {
                name: "ccm",
                encrypt: function(a, b, c, e, f) {
                    var g, h = b.slice(0),
                        i = l.bitArray,
                        j = i.bitLength(c) / 8,
                        k = i.bitLength(h) / 8;
                    for (f = f || 64, e = e || [], 7 > j && d(new l.exception.invalid("ccm: iv must be at least 7 bytes")), g = 2; 4 > g && k >>> 8 * g; g++);
                    return g < 15 - j && (g = 15 - j), c = i.clamp(c, 8 * (15 - g)), b = l.mode.ccm.K(a, b, c, e, f, g), h = l.mode.ccm.n(a, h, c, b, f, g), i.concat(h.data, h.tag)
                },
                decrypt: function(a, b, c, e, f) {
                    f = f || 64, e = e || [];
                    var g = l.bitArray,
                        h = g.bitLength(c) / 8,
                        i = g.bitLength(b),
                        j = g.clamp(b, i - f),
                        k = g.bitSlice(b, i - f),
                        i = (i - f) / 8;
                    for (7 > h && d(new l.exception.invalid("ccm: iv must be at least 7 bytes")), b = 2; 4 > b && i >>> 8 * b; b++);
                    return b < 15 - h && (b = 15 - h), c = g.clamp(c, 8 * (15 - b)), j = l.mode.ccm.n(a, j, c, k, f, b), a = l.mode.ccm.K(a, j.data, c, e, f, b), g.equal(j.tag, a) || d(new l.exception.corrupt("ccm: tag doesn't match")), j.data
                },
                K: function(a, b, c, e, f, g) {
                    var h = [],
                        i = l.bitArray,
                        j = i.k;
                    if (f /= 8, (f % 2 || 4 > f || 16 < f) && d(new l.exception.invalid("ccm: invalid tag length")), (4294967295 < e.length || 4294967295 < b.length) && d(new l.exception.bug("ccm: can't deal with 4GiB or more data")), g = [i.partial(8, (e.length ? 64 : 0) | f - 2 << 2 | g - 1)], g = i.concat(g, c), g[3] |= i.bitLength(b) / 8, g = a.encrypt(g), e.length)
                        for (c = i.bitLength(e) / 8, 65279 >= c ? h = [i.partial(16, c)] : 4294967295 >= c && (h = i.concat([i.partial(16, 65534)], [c])), h = i.concat(h, e), e = 0; e < h.length; e += 4) g = a.encrypt(j(g, h.slice(e, e + 4).concat([0, 0, 0])));
                    for (e = 0; e < b.length; e += 4) g = a.encrypt(j(g, b.slice(e, e + 4).concat([0, 0, 0])));
                    return i.clamp(g, 8 * f)
                },
                n: function(a, b, c, d, e, f) {
                    var g, h = l.bitArray;
                    g = h.k;
                    var i = b.length,
                        j = h.bitLength(b);
                    if (c = h.concat([h.partial(8, f - 1)], c).concat([0, 0, 0]).slice(0, 4), d = h.bitSlice(g(d, a.encrypt(c)), 0, e), !i) return {
                        tag: d,
                        data: []
                    };
                    for (g = 0; g < i; g += 4) c[3]++, e = a.encrypt(c), b[g] ^= e[0], b[g + 1] ^= e[1], b[g + 2] ^= e[2], b[g + 3] ^= e[3];
                    return {
                        tag: d,
                        data: h.clamp(b, j)
                    }
                }
            }, l.mode.ocb2 = {
                name: "ocb2",
                encrypt: function(a, b, c, e, f, g) {
                    128 !== l.bitArray.bitLength(c) && d(new l.exception.invalid("ocb iv must be 128 bits"));
                    var h, i = l.mode.ocb2.G,
                        j = l.bitArray,
                        k = j.k,
                        m = [0, 0, 0, 0];
                    c = i(a.encrypt(c));
                    var n, o = [];
                    for (e = e || [], f = f || 64, h = 0; h + 4 < b.length; h += 4) n = b.slice(h, h + 4), m = k(m, n), o = o.concat(k(c, a.encrypt(k(c, n)))), c = i(c);
                    return n = b.slice(h), b = j.bitLength(n), h = a.encrypt(k(c, [0, 0, 0, b])), n = j.clamp(k(n.concat([0, 0, 0]), h), b), m = k(m, k(n.concat([0, 0, 0]), h)), m = a.encrypt(k(m, k(c, i(c)))), e.length && (m = k(m, g ? e : l.mode.ocb2.pmac(a, e))), o.concat(j.concat(n, j.clamp(m, f)))
                },
                decrypt: function(a, b, c, e, f, g) {
                    128 !== l.bitArray.bitLength(c) && d(new l.exception.invalid("ocb iv must be 128 bits")), f = f || 64;
                    var h, i, j = l.mode.ocb2.G,
                        k = l.bitArray,
                        m = k.k,
                        n = [0, 0, 0, 0],
                        o = j(a.encrypt(c)),
                        p = l.bitArray.bitLength(b) - f,
                        q = [];
                    for (e = e || [], c = 0; c + 4 < p / 32; c += 4) h = m(o, a.decrypt(m(o, b.slice(c, c + 4)))), n = m(n, h), q = q.concat(h), o = j(o);
                    return i = p - 32 * c, h = a.encrypt(m(o, [0, 0, 0, i])), h = m(h, k.clamp(b.slice(c), i).concat([0, 0, 0])), n = m(n, h), n = a.encrypt(m(n, m(o, j(o)))), e.length && (n = m(n, g ? e : l.mode.ocb2.pmac(a, e))), k.equal(k.clamp(n, f), k.bitSlice(b, p)) || d(new l.exception.corrupt("ocb: tag doesn't match")), q.concat(k.clamp(h, i))
                },
                pmac: function(a, b) {
                    var c, d = l.mode.ocb2.G,
                        e = l.bitArray,
                        f = e.k,
                        g = [0, 0, 0, 0],
                        h = a.encrypt([0, 0, 0, 0]),
                        h = f(h, d(d(h)));
                    for (c = 0; c + 4 < b.length; c += 4) h = d(h), g = f(g, a.encrypt(f(h, b.slice(c, c + 4))));
                    return c = b.slice(c), 128 > e.bitLength(c) && (h = f(h, d(h)), c = e.concat(c, [-2147483648, 0, 0, 0])), g = f(g, c), a.encrypt(f(d(f(h, d(h))), g))
                },
                G: function(a) {
                    return [a[0] << 1 ^ a[1] >>> 31, a[1] << 1 ^ a[2] >>> 31, a[2] << 1 ^ a[3] >>> 31, a[3] << 1 ^ 135 * (a[0] >>> 31)]
                }
            }, l.mode.gcm = {
                name: "gcm",
                encrypt: function(a, b, c, d, e) {
                    var f = b.slice(0);
                    return b = l.bitArray, d = d || [], a = l.mode.gcm.n(!0, a, f, d, c, e || 128), b.concat(a.data, a.tag)
                },
                decrypt: function(a, b, c, e, f) {
                    var g = b.slice(0),
                        h = l.bitArray,
                        i = h.bitLength(g);
                    return f = f || 128, e = e || [], f <= i ? (b = h.bitSlice(g, i - f), g = h.bitSlice(g, 0, i - f)) : (b = g, g = []), a = l.mode.gcm.n(k, a, g, e, c, f), h.equal(a.tag, b) || d(new l.exception.corrupt("gcm: tag doesn't match")), a.data
                },
                U: function(a, b) {
                    var c, d, e, f, g, h = l.bitArray.k;
                    for (e = [0, 0, 0, 0], f = b.slice(0), c = 0; 128 > c; c++) {
                        for ((d = 0 !== (a[Math.floor(c / 32)] & 1 << 31 - c % 32)) && (e = h(e, f)), g = 0 !== (1 & f[3]), d = 3; 0 < d; d--) f[d] = f[d] >>> 1 | (1 & f[d - 1]) << 31;
                        f[0] >>>= 1, g && (f[0] ^= -520093696)
                    }
                    return e
                },
                f: function(a, b, c) {
                    var d, e = c.length;
                    for (b = b.slice(0), d = 0; d < e; d += 4) b[0] ^= 4294967295 & c[d], b[1] ^= 4294967295 & c[d + 1], b[2] ^= 4294967295 & c[d + 2], b[3] ^= 4294967295 & c[d + 3], b = l.mode.gcm.U(b, a);
                    return b
                },
                n: function(a, b, c, d, e, f) {
                    var g, h, i, j, k, m, n, o, p = l.bitArray;
                    for (m = c.length, n = p.bitLength(c), o = p.bitLength(d), h = p.bitLength(e), g = b.encrypt([0, 0, 0, 0]), 96 === h ? (e = e.slice(0), e = p.concat(e, [1])) : (e = l.mode.gcm.f(g, [0, 0, 0, 0], e), e = l.mode.gcm.f(g, e, [0, 0, Math.floor(h / 4294967296), 4294967295 & h])), h = l.mode.gcm.f(g, [0, 0, 0, 0], d), k = e.slice(0), d = h.slice(0), a || (d = l.mode.gcm.f(g, h, c)), j = 0; j < m; j += 4) k[3]++, i = b.encrypt(k), c[j] ^= i[0], c[j + 1] ^= i[1], c[j + 2] ^= i[2], c[j + 3] ^= i[3];
                    return c = p.clamp(c, n), a && (d = l.mode.gcm.f(g, h, c)), a = [Math.floor(o / 4294967296), 4294967295 & o, Math.floor(n / 4294967296), 4294967295 & n], d = l.mode.gcm.f(g, d, a), i = b.encrypt(e), d[0] ^= i[0], d[1] ^= i[1], d[2] ^= i[2], d[3] ^= i[3], {
                        tag: p.bitSlice(d, 0, f),
                        data: c
                    }
                }
            }, l.misc.hmac = function(a, b) {
                this.L = b = b || l.hash.sha256;
                var c, d = [
                        [],
                        []
                    ],
                    e = b.prototype.blockSize / 32;
                for (this.o = [new b, new b], a.length > e && (a = b.hash(a)), c = 0; c < e; c++) d[0][c] = 909522486 ^ a[c], d[1][c] = 1549556828 ^ a[c];
                this.o[0].update(d[0]), this.o[1].update(d[1])
            }, l.misc.hmac.prototype.encrypt = l.misc.hmac.prototype.mac = function(a) {
                return a = new this.L(this.o[0]).update(a).finalize(), new this.L(this.o[1]).update(a).finalize()
            }, l.misc.pbkdf2 = function(a, b, c, e, f) {
                c = c || 1e3, (0 > e || 0 > c) && d(l.exception.invalid("invalid params to pbkdf2")), "string" == typeof a && (a = l.codec.utf8String.toBits(a)), f = f || l.misc.hmac, a = new f(a);
                var g, h, i, j, k = [],
                    m = l.bitArray;
                for (j = 1; 32 * k.length < (e || 1); j++) {
                    for (f = g = a.encrypt(m.concat(b, [j])), h = 1; h < c; h++)
                        for (g = a.encrypt(g), i = 0; i < g.length; i++) f[i] ^= g[i];
                    k = k.concat(f)
                }
                return e && (k = m.clamp(k, e)), k
            }, l.prng = function(a) {
                this.b = [new l.hash.sha256], this.h = [0], this.F = 0, this.t = {}, this.C = 0, this.J = {}, this.N = this.c = this.i = this.T = 0, this.a = [0, 0, 0, 0, 0, 0, 0, 0], this.e = [0, 0, 0, 0], this.A = j, this.B = a, this.p = k, this.z = {
                    progress: {},
                    seeded: {}
                }, this.l = this.S = 0, this.u = 1, this.w = 2, this.Q = 65536, this.H = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024], this.R = 3e4, this.P = 80
            }, l.prng.prototype = {
                randomWords: function(a, b) {
                    var c, e = [];
                    c = this.isReady(b);
                    var f;
                    if (c === this.l && d(new l.exception.notReady("generator isn't seeded")), c & this.w) {
                        c = !(c & this.u), f = [];
                        var g, j = 0;
                        for (this.N = f[0] = (new Date).valueOf() + this.R, g = 0; 16 > g; g++) f.push(4294967296 * Math.random() | 0);
                        for (g = 0; g < this.b.length && (f = f.concat(this.b[g].finalize()), j += this.h[g], this.h[g] = 0, !(!c && this.F & 1 << g)); g++);
                        for (this.F >= 1 << this.b.length && (this.b.push(new l.hash.sha256), this.h.push(0)), this.c -= j, j > this.i && (this.i = j), this.F++, this.a = l.hash.sha256.hash(this.a.concat(f)), this.A = new l.cipher.aes(this.a), c = 0; 4 > c && (this.e[c] = this.e[c] + 1 | 0, !this.e[c]); c++);
                    }
                    for (c = 0; c < a; c += 4) 0 === (c + 1) % this.Q && h(this), f = i(this), e.push(f[0], f[1], f[2], f[3]);
                    return h(this), e.slice(0, a)
                },
                setDefaultParanoia: function(a) {
                    this.B = a
                },
                addEntropy: function(a, b, c) {
                    c = c || "user";
                    var e, f, h = (new Date).valueOf(),
                        i = this.t[c],
                        k = this.isReady(),
                        m = 0;
                    switch (e = this.J[c], e === j && (e = this.J[c] = this.T++), i === j && (i = this.t[c] = 0), this.t[c] = (this.t[c] + 1) % this.b.length, typeof a) {
                        case "number":
                            b === j && (b = 1), this.b[i].update([e, this.C++, 1, b, h, 1, 0 | a]);
                            break;
                        case "object":
                            if (c = Object.prototype.toString.call(a), "[object Uint32Array]" === c) {
                                for (f = [], c = 0; c < a.length; c++) f.push(a[c]);
                                a = f
                            } else
                                for ("[object Array]" !== c && (m = 1), c = 0; c < a.length && !m; c++) "number" != typeof a[c] && (m = 1);
                            if (!m) {
                                if (b === j)
                                    for (c = b = 0; c < a.length; c++)
                                        for (f = a[c]; 0 < f;) b++, f >>>= 1;
                                this.b[i].update([e, this.C++, 2, b, h, a.length].concat(a))
                            }
                            break;
                        case "string":
                            b === j && (b = a.length), this.b[i].update([e, this.C++, 3, b, h, a.length]), this.b[i].update(a);
                            break;
                        default:
                            m = 1
                    }
                    m && d(new l.exception.bug("random: addEntropy only supports number, array of numbers or string")), this.h[i] += b, this.c += b, k === this.l && (this.isReady() !== this.l && g("seeded", Math.max(this.i, this.c)), g("progress", this.getProgress()))
                },
                isReady: function(a) {
                    return a = this.H[a !== j ? a : this.B], this.i && this.i >= a ? this.h[0] > this.P && (new Date).valueOf() > this.N ? this.w | this.u : this.u : this.c >= a ? this.w | this.l : this.l
                },
                getProgress: function(a) {
                    return a = this.H[a ? a : this.B], this.i >= a ? 1 : this.c > a ? 1 : this.c / a
                },
                startCollectors: function() {
                    this.p || (window.addEventListener ? (window.addEventListener("load", this.r, k), window.addEventListener("mousemove", this.s, k)) : document.attachEvent ? (document.attachEvent("onload", this.r), document.attachEvent("onmousemove", this.s)) : d(new l.exception.bug("can't attach event")), this.p = !0)
                },
                stopCollectors: function() {
                    this.p && (window.removeEventListener ? (window.removeEventListener("load", this.r, k), window.removeEventListener("mousemove", this.s, k)) : window.detachEvent && (window.detachEvent("onload", this.r), window.detachEvent("onmousemove", this.s)), this.p = k)
                },
                addEventListener: function(a, b) {
                    this.z[a][this.S++] = b
                },
                removeEventListener: function(a, b) {
                    var c, d, e = this.z[a],
                        f = [];
                    for (d in e) e.hasOwnProperty(d) && e[d] === b && f.push(d);
                    for (c = 0; c < f.length; c++) d = f[c], delete e[d]
                },
                s: function(a) {
                    l.random.addEntropy([a.x || a.clientX || a.offsetX || 0, a.y || a.clientY || a.offsetY || 0], 2, "mouse")
                },
                r: function() {
                    l.random.addEntropy((new Date).valueOf(), 2, "loadtime")
                }
            }, l.random = new l.prng(6);
            try {
                var m = new Uint32Array(32);
                crypto.getRandomValues(m), l.random.addEntropy(m, 1024, "crypto['getRandomValues']")
            } catch (a) {}
            l.json = {
                defaults: {
                    v: 1,
                    iter: 1e3,
                    ks: 128,
                    ts: 64,
                    mode: "ccm",
                    adata: "",
                    cipher: "aes"
                },
                encrypt: function(a, b, c, e) {
                    c = c || {}, e = e || {};
                    var f, g = l.json,
                        h = g.d({
                            iv: l.random.randomWords(4, 0)
                        }, g.defaults);
                    return g.d(h, c), c = h.adata, "string" == typeof h.salt && (h.salt = l.codec.base64.toBits(h.salt)), "string" == typeof h.iv && (h.iv = l.codec.base64.toBits(h.iv)), (!l.mode[h.mode] || !l.cipher[h.cipher] || "string" == typeof a && 100 >= h.iter || 64 !== h.ts && 96 !== h.ts && 128 !== h.ts || 128 !== h.ks && 192 !== h.ks && 256 !== h.ks || 2 > h.iv.length || 4 < h.iv.length) && d(new l.exception.invalid("json encrypt: invalid parameters")), "string" == typeof a && (f = l.misc.cachedPbkdf2(a, h), a = f.key.slice(0, h.ks / 32), h.salt = f.salt), "string" == typeof b && (b = l.codec.utf8String.toBits(b)), "string" == typeof c && (c = l.codec.utf8String.toBits(c)), f = new l.cipher[h.cipher](a), g.d(e, h), e.key = a, h.ct = l.mode[h.mode].encrypt(f, b, h.iv, c, h.ts), g.encode(h)
                },
                decrypt: function(a, b, c, e) {
                    c = c || {}, e = e || {};
                    var f = l.json;
                    b = f.d(f.d(f.d({}, f.defaults), f.decode(b)), c, !0);
                    var g;
                    return c = b.adata, "string" == typeof b.salt && (b.salt = l.codec.base64.toBits(b.salt)), "string" == typeof b.iv && (b.iv = l.codec.base64.toBits(b.iv)), (!l.mode[b.mode] || !l.cipher[b.cipher] || "string" == typeof a && 100 >= b.iter || 64 !== b.ts && 96 !== b.ts && 128 !== b.ts || 128 !== b.ks && 192 !== b.ks && 256 !== b.ks || !b.iv || 2 > b.iv.length || 4 < b.iv.length) && d(new l.exception.invalid("json decrypt: invalid parameters")), "string" == typeof a && (g = l.misc.cachedPbkdf2(a, b), a = g.key.slice(0, b.ks / 32), b.salt = g.salt), "string" == typeof c && (c = l.codec.utf8String.toBits(c)), g = new l.cipher[b.cipher](a), c = l.mode[b.mode].decrypt(g, b.ct, b.iv, c, b.ts), f.d(e, b), e.key = a, l.codec.utf8String.fromBits(c)
                },
                encode: function(a) {
                    var b, c = "{",
                        e = "";
                    for (b in a)
                        if (a.hasOwnProperty(b)) switch (b.match(/^[a-z0-9]+$/i) || d(new l.exception.invalid("json encode: invalid property name")), c += e + '"' + b + '":', e = ",", typeof a[b]) {
                            case "number":
                            case "boolean":
                                c += a[b];
                                break;
                            case "string":
                                c += '"' + escape(a[b]) + '"';
                                break;
                            case "object":
                                c += '"' + l.codec.base64.fromBits(a[b], 0) + '"';
                                break;
                            default:
                                d(new l.exception.bug("json encode: unsupported type"))
                        }
                        return c + "}"
                },
                decode: function(a) {
                    a = a.replace(/\s/g, ""), a.match(/^\{.*\}$/) || d(new l.exception.invalid("json decode: this isn't json!")), a = a.replace(/^\{|\}$/g, "").split(/,/);
                    var b, c, e = {};
                    for (b = 0; b < a.length; b++)(c = a[b].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i)) || d(new l.exception.invalid("json decode: this isn't json!")), e[c[2]] = c[3] ? parseInt(c[3], 10) : c[2].match(/^(ct|salt|iv)$/) ? l.codec.base64.toBits(c[4]) : unescape(c[4]);
                    return e
                },
                d: function(a, b, c) {
                    if (a === j && (a = {}), b === j) return a;
                    for (var e in b) b.hasOwnProperty(e) && (c && a[e] !== j && a[e] !== b[e] && d(new l.exception.invalid("required parameter overridden")), a[e] = b[e]);
                    return a
                },
                X: function(a, b) {
                    var c, d = {};
                    for (c in a) a.hasOwnProperty(c) && a[c] !== b[c] && (d[c] = a[c]);
                    return d
                },
                W: function(a, b) {
                    var c, d = {};
                    for (c = 0; c < b.length; c++) a[b[c]] !== j && (d[b[c]] = a[b[c]]);
                    return d
                }
            }, l.encrypt = l.json.encrypt, l.decrypt = l.json.decrypt, l.misc.V = {}, l.misc.cachedPbkdf2 = function(a, b) {
                var c, d = l.misc.V;
                return b = b || {}, c = b.iter || 1e3, d = d[a] = d[a] || {}, c = d[c] = d[c] || {
                    firstSalt: b.salt && b.salt.length ? b.salt.slice(0) : l.random.randomWords(2, 0)
                }, d = b.salt === j ? c.firstSalt : b.salt, c[d] = c[d] || l.misc.pbkdf2(a, d, b.iter), {
                    key: c[d].slice(0),
                    salt: d.slice(0)
                }
            }
        }, {}],
        5: [function(a, b, c) {
            function d(a) {
                return window.location.pathname.indexOf(a) > -1 || window.location.host.indexOf(a) > -1
            }
            var e = {};
            e = {
                bm_login: "ViewApplication-DisplayWelcomePage",
                bm_contentasset: "ViewLibraryContent_52",
                bm_siteimportexport: "ViewSiteImpex-",
                bm_sitesettings: ["ViewChannelDetails-Edit", "ViewChannelDetails-Dispatch"],
                webdav_logs: "on/demandware.servlet/webdav/Sites/Logs",
                webdav_impex: "on/demandware.servlet/webdav/Sites/Impex",
                webdav_cartridges: "on/demandware.servlet/webdav/Sites/Cartridges",
                webdav_libraries: "on/demandware.servlet/webdav/Sites/Libraries",
                webdav_securitylogs: "on/demandware.servlet/webdav/Sites/Securitylogs",
                webdav_temp: "on/demandware.servlet/webdav/Sites/Temp",
                webdav_static: "on/demandware.servlet/webdav/Sites/Static",
                bm_customobjattrdefinitions: "ViewObjectTypeAttributeList",
                bm_customobjattrgroups: "ViewObjectTypeScopeList-Start",
                account_demandware: "account.demandware.com",
                is: function(a) {
                    if ("string" == typeof a) return d(a);
                    for (var b = a.length - 1; b >= 0; b--)
                        if (d(a[b])) return !0;
                    return !1
                }
            }, b.exports = e
        }, {}],
        6: [function(a, b, c) {
            var d = function() {
                    function a() {
                        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
                    }
                    return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a()
                },
                e = function() {
                    chrome.extension.getBackgroundPage().location.reload(!0)
                },
                f = function(a) {
                    var b = document.createElement("link");
                    b.rel = "stylesheet", b.href = chrome.extension.getURL(a), document.head.appendChild(b)
                },
                g = function(a, b) {
                    for (var c in b) a.setAttribute(c, b[c])
                },
                h = {};
            h.generateId = d, h.refreshBackgroundPage = e, h.appendStyle = f, h.setAttributes = g, b.exports = h
        }, {}],
        7: [function(a, b, c) {
            var d = (a("../libs/constants.js"), a("../libs/base-storage.js"));
            b.exports.create = function(a) {
                return {
                    getSandboxes: function(a, b) {
                        d.getSandboxes(function(a) {
                            b(a)
                        })
                    }
                }
            }, b.exports.__resetLog = function() {}
        }, {
            "../libs/base-storage.js": 2,
            "../libs/constants.js": 3
        }],
        8: [function(a, b, c) {
            function d(a, b) {
                if ("function" == typeof b) {
                    var c = {};
                    for (var d in a) a.hasOwnProperty(d) && (c[d] = b(d, a[d], a));
                    return c
                }
            }

            function e() {
                this.handlers = {}, this.id = null, this.port = null, this.extPorts = {}, this.cbTable = {}, this.pendingReqs = {}, this.uId = 1, this.requestId = 1, this.portMap = {}, this.runtime = h, this.devtools = i
            }

            function f(a, b) {
                a.__setRuntime = function(c) {
                    return b.runtime = c, a
                }, a.__setDevTools = function(c) {
                    return b.devtools = c, a
                }, a.__getId = function() {
                    return b.id
                }, a.__getPort = function() {
                    return b.port
                }, a.__getPortMap = function() {
                    return b.portMap
                }, a.__getHandlers = function() {
                    return b.handlers
                }, a.__getPendingReqs = function() {
                    return b.pendingReqs
                }
            }
            var g = -1e3,
                h = "object" == typeof chrome && chrome.runtime,
                i = "object" == typeof chrome && chrome.devtools;
            e.prototype.selectTargets = function(a, b, c, e, f) {
                var h = [],
                    i = this.portMap[e] && this.portMap[e][f];
                return a || i ? (a || b !== g || (b = i.tabId), d(this.portMap, function(e, f) {
                    c && -1 === c.indexOf(e) || d(f, function(c, d) {
                        b && b !== d.tabId || (a || i.port !== d.port) && h.push({
                            port: d.port,
                            id: c
                        })
                    })
                }), h) : []
            }, e.prototype.onCustomMsg = function(a) {
                function b(b) {
                    a.sendResponse && this.port.postMessage({
                        cmd: "response",
                        portId: this.id,
                        reqId: a.reqId,
                        resultValid: !0,
                        result: b
                    })
                }

                function c(b) {
                    var c = [];
                    return function(e, f) {
                        if (f !== !1 && c.push(e), b--, !b && a.sendResponse && ((d = this.extPorts[a.extensionId]) || this.portMap[a.category] && (d = this.portMap[a.category][a.portId]))) {
                            var g = {
                                cmd: "response",
                                reqId: a.reqId,
                                result: a.broadcast ? c : c[0]
                            };
                            a.extensionId && (g.extensionId = h.id), d.port.postMessage(g)
                        }
                    }.bind(this)
                }
                var d, e, f, g, i;
                if (a && a.cmd) {
                    if ("setName" === a.cmd) return void(this.id = a.name);
                    if ("bg" === this.id) {
                        if ("request" === a.cmd) {
                            var j = this.selectTargets(!1, a.tabId, a.contexts, a.category, a.portId),
                                k = j.length;
                            if (void 0 !== a.tabId || a.contexts && -1 === a.contexts.indexOf("bg") || (g = this.handlers[a.cmdName]) && "function" == typeof g && (f = g, k++), k) {
                                var l = c.call(this, k);
                                for (i = 0; i < j.length; i++) d = j[i], d.port.postMessage({
                                    cmd: "request",
                                    cmdName: a.cmdName,
                                    sendResponse: !0,
                                    args: a.args,
                                    reqId: this.requestId
                                }), e = this.pendingReqs[d.id] || [], e.push({
                                    id: this.requestId,
                                    cb: l
                                }), this.pendingReqs[d.id] = e, this.requestId++;
                                f && (a.args.push(l), f.apply(this.handlers, a.args))
                            } else if (a.sendResponse && ((d = this.extPorts[a.extensionId]) || this.portMap[a.category] && (d = this.portMap[a.category][a.portId]))) {
                                var m = {
                                    cmd: "response",
                                    reqId: a.reqId,
                                    resultValid: !1,
                                    result: a.broadcast ? [] : void 0
                                };
                                a.extensionId && (m.extensionId = h.id), d.port.postMessage(m)
                            }
                        } else if ("response" === a.cmd) {
                            var n = a.portId || a.extensionId;
                            if (e = this.pendingReqs[n]) {
                                for (i = 0; i < e.length && e[i].id !== a.reqId;) i++;
                                i < e.length && (e[i].cb(a.result, a.resultValid), this.pendingReqs[n].splice(i, 1), this.pendingReqs[n].length || delete this.pendingReqs[n])
                            }
                        } else if ("updateTabId" === a.cmd) {
                            var o = a.context,
                                p = a.portId;
                            (d = this.portMap[o]) && (d = d[p]) && ("function" == typeof this.handlers.onDisconnect && this.handlers.onDisconnect(o, d.tabId), d.tabId = a.tabId, "function" == typeof this.handlers.onConnect && this.handlers.onConnect(o, d.tabId))
                        }
                    } else "request" === a.cmd ? (f = this.handlers[a.cmdName], "function" != typeof f ? a.sendResponse && this.port.postMessage({
                        cmd: "response",
                        portId: this.id,
                        reqId: a.reqId,
                        resultValid: !1
                    }) : (a.args.push(b.bind(this)), f.apply(this.handlers, a.args))) : "response" === a.cmd && this.cbTable[a.reqId] && (this.cbTable[a.reqId](a.result), delete this.cbTable[a.reqId])
                }
            }, e.prototype.closePendingReqs = function(a) {
                var b;
                if (b = this.pendingReqs[a]) {
                    for (var c = 0; c < b.length; c++) b[c].cb(void 0, !1);
                    delete this.pendingReqs[a]
                }
            }, e.prototype.registerExternalConnection = function(a, b) {
                function c() {
                    b.onDisconnect.removeListener(e), b.onMessage.removeListener(d), delete this.extPorts[a], this.closePendingReqs(a), "function" == typeof this.handlers.onExtensionDisconnect && this.handlers.onExtensionDisconnect(a)
                }
                this.extPorts[a] = {
                    port: b
                };
                var d, e;
                b.onMessage.addListener(d = this.onCustomMsg.bind(this)), b.onDisconnect.addListener(e = c.bind(this)), "function" == typeof this.handlers.onExtensionConnect && this.handlers.onExtensionConnect(a)
            }, e.prototype.onConnectExternal = function(a) {
                this.extPorts[a.sender.id] || this.registerExternalConnection(a.sender.id, a)
            }, e.prototype.onConnect = function(a) {
                function b() {
                    a.onDisconnect.removeListener(h), a.onMessage.removeListener(g), e = this.portMap[c];
                    var b;
                    e && (b = e[d]) && (f = b.tabId, delete e[d]), this.closePendingReqs(d), "function" == typeof this.handlers.onDisconnect && this.handlers.onDisconnect(c, f)
                }
                var c = a.name || "unknown",
                    d = c + "-" + this.uId;
                this.uId++;
                var e = this.portMap[c] || {},
                    f = a.sender && a.sender.tab && a.sender.tab.id || 1 / 0;
                e[d] = {
                    port: a,
                    tabId: f
                }, this.portMap[c] = e;
                var g, h;
                a.onMessage.addListener(g = this.onCustomMsg.bind(this)), a.onDisconnect.addListener(h = b.bind(this)), a.postMessage({
                    cmd: "setName",
                    name: d
                }), "function" == typeof this.handlers.onConnect && this.handlers.onConnect(c, f)
            }, e.prototype.createMsgObject = function(a) {
                function b(b) {
                    function c(a, c) {
                        var d = [];
                        return function(e, f) {
                            f && d.push(e), a--, a <= 0 && c && c(b ? d : d[0])
                        }
                    }
                    return function d() {
                        if (!arguments.length) return !1;
                        if (!this.id) {
                            var e = this,
                                f = arguments;
                            return setTimeout(function() {
                                d.apply(e, f)
                            }, 1), !0
                        }
                        var g, h, i, j, k = [],
                            l = 0,
                            m = arguments.length;
                        for ("function" == typeof arguments[m - 1] && (m--, j = arguments[m]); l < m;) {
                            var n = arguments[l++];
                            if (void 0 === i) switch (typeof n) {
                                case "number":
                                    if (void 0 !== g) return !1;
                                    g = n;
                                    break;
                                case "object":
                                    if ("undefined" == typeof n.length || void 0 !== h) return !1;
                                    h = n;
                                    break;
                                case "string":
                                    i = n;
                                    break;
                                default:
                                    return !1
                            } else k.push(n)
                        }
                        if (void 0 === i) return !1;
                        if ("bg" === this.id) {
                            for (var o = this.selectTargets(!0, g, h), p = o.length, q = c.call(this, p, j), r = 0; r < o.length; r++) {
                                var s = o[r];
                                s.port.postMessage({
                                    cmd: "request",
                                    cmdName: i,
                                    sendResponse: !0,
                                    args: k,
                                    reqId: this.requestId
                                });
                                var t = this.pendingReqs[s.id] || [];
                                t.push({
                                    id: this.requestId,
                                    cb: q
                                }), this.pendingReqs[s.id] = t, this.requestId++
                            }
                            o.length || q(null, !1)
                        } else j && (this.cbTable[this.requestId] = j), this.port.postMessage({
                            cmd: "request",
                            cmdName: i,
                            reqId: this.requestId,
                            sendResponse: void 0 !== j,
                            broadcast: b,
                            category: a,
                            portId: this.id,
                            tabId: g,
                            contexts: h,
                            args: k
                        }), this.requestId++;
                        return !0
                    }.bind(this)
                }

                function c() {
                    return function(a, b) {
                        if (arguments.length < 2) return !1;
                        if ("bg" !== this.id) return !1;
                        var c, d = Array.prototype.slice.call(arguments, 2);
                        "function" == typeof d[d.length - 1] && (c = d.pop());
                        var e = this.extPorts[a];
                        if (!e) return c && c(), !0;
                        e.port.postMessage({
                            cmd: "request",
                            cmdName: b,
                            sendResponse: !0,
                            args: d,
                            reqId: this.requestId,
                            extensionId: h.id
                        });
                        var f = this.pendingReqs[a] || [];
                        return f.push({
                            id: this.requestId,
                            cb: function(a) {
                                c && c(a)
                            }
                        }), this.pendingReqs[a] = f, this.requestId++, !0
                    }.bind(this)
                }
                var d = {
                    cmd: b.call(this, !1),
                    bcast: b.call(this, !0)
                };
                return "bg" !== a ? d.bg = function() {
                    if (0 === arguments.length || "string" != typeof arguments[0]) return !1;
                    for (var a = [
                            ["bg"]
                        ], b = 0; b < arguments.length; b++) a.push(arguments[b]);
                    return d.cmd.apply(d, a)
                } : (d.connectExt = function(a) {
                    if (this.extPorts[a]) return !0;
                    var b = this.runtime.connect(a);
                    this.registerExternalConnection(a, b)
                }.bind(this), d.cmdExt = c.call(this)), d
            }, e.prototype.init = function(a, b) {
                function c() {
                    this.port.onDisconnect.removeListener(e), this.port.onMessage.removeListener(f)
                }

                function d() {
                    return this.id ? void this.port.postMessage({
                        cmd: "updateTabId",
                        context: a,
                        portId: this.id,
                        tabId: g
                    }) : void setTimeout(d.bind(this), 1)
                }
                this.handlers = b || {};
                var e, f, g;
                return "bg" === a ? (this.id = "bg", this.runtime.onConnect.addListener(this.onConnect.bind(this)), this.runtime.onConnectExternal.addListener(this.onConnectExternal.bind(this))) : (this.port = this.runtime.connect({
                    name: a
                }), this.port.onMessage.addListener(f = this.onCustomMsg.bind(this)), this.port.onDisconnect.addListener(e = c.bind(this)), "dt" === a && this.devtools && (g = this.devtools.inspectedWindow) && "number" == typeof(g = g.tabId) && d.call(this)), this.createMsgObject(a)
            };
            var j = new e;
            b.exports = {
                SAME_TAB: g,
                init: j.init.bind(j),
                __allowUnitTests: function() {
                    f(this, j)
                },
                __createClone: function() {
                    var a = new e;
                    return a.SAME_TAB = g, f(a, a), a
                }
            }
        }, {}],
        9: [function(a, b, c) {
            function d() {
                var a = />/gi,
                    b = /</gi,
                    c = /"/gi,
                    d = /&/gi,
                    e = /'/gi,
                    f = /\n/gi,
                    g = document.getElementsByClassName("btnEscape")[0],
                    h = document.getElementsByClassName("table_detail")[1].childNodes[1].value,
                    i = document.getElementsByClassName("table_detail")[0].childNodes[1].value,
                    j = document.getElementsByTagName("textarea"),
                    k = null,
                    l = null,
                    m = null,
                    n = [],
                    o = null,
                    p = document.getElementsByName("LocaleId")[0],
                    q = p.options[p.selectedIndex].value;
                m = "default" === q ? "x-default" : q.replace("_", "-"), window.URL = window.URL || window.webkitURL;
                for (var r = 1; r < j.length; r++) {
                    var s = j[r].value;
                    l = s.replace(d, "&amp;").replace(c, "&quot;").replace(f, "&#13;\n").replace(b, "&lt;").replace(a, "&gt;").replace(e, "&apos;"), j[r].innerHTML.length > 0 && (k = j[r].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[1].childNodes[0].childNodes[1].childNodes[5].getAttribute("data-dw-tooltip").match(/([^.])+/g)[1], n.push('\t\t<custom-attributes>\n\t\t\t<custom-attribute attribute-id="' + k + '" xml:lang="x-default">' + l + "</custom-attribute>\n\t\t</custom-attributes>\n"))
                }
                o = n.join(" ");
                var t = '<?xml version="1.0" encoding="UTF-8"?>\n<library xmlns="http://www.demandware.com/xml/impex/library/2006-10-31">\n\t<content content-id="' + i + '">\n\t\t<display-name xml:lang="' + m + '">' + h + "</display-name>\n\t\t<online-flag>true</online-flag>\n\t\t<searchable-flag>false</searchable-flag>\n\t\t<page-attributes/>\n" + o + "\t</content>\n</library>",
                    u = new Blob([t], {
                        type: "text/xml"
                    });
                g.href = window.URL.createObjectURL(u), g.download = i + ".xml"
            }

            function e() {
                var a = document.getElementsByClassName("w e s")[4].childNodes[1].childNodes[1].childNodes[0],
                    b = document.createElement("a");
                b.innerHTML = "Download", b.className = "btnEscape", b.setAttribute("style", "background-color:#D9D9D9; border: 1px solid #ccc; display: inline-block; height:18px; padding:2px 5px; cursor: pointer; border-radius:3px; text-decoration:none;"), b.onclick = function() {
                    d()
                }, a.insertBefore(b, a.childNodes[0])
            }

            function f() {
                e()
            }
            var g = {};
            g.initContentAsset = f, b.exports = g
        }, {}],
        10: [function(a, b, c) {
            function d() {
                if (e) {
                    var a = document.createElement("TD"),
                        b = document.createElement("TD");
                    a.className = "button";
                    var c = document.createElement("button"),
                        d = document.createElement("button");
                    c.innerHTML = "New", c.setAttribute("name", "new"), c.setAttribute("type", "submit"), c.className = "button", d.innerHTML = "Delete", d.setAttribute("name", "confirmDelete"), d.setAttribute("type", "submit"), d.className = "button", a.appendChild(c), b.appendChild(d);
                    for (var f = document.getElementsByClassName("w e s"), g = 0; f[g]; g++) void 0 === f[+g + 1] && (f[g].childNodes[1].childNodes[1].childNodes[0].appendChild(a), f[g].childNodes[1].childNodes[1].childNodes[0].appendChild(b));
                    for (var h = document.getElementsByTagName("table")[7].childNodes[1].childNodes, i = 2; h.length; i += 2) {
                        if (i === h.length - 6) {
                            for (var j = document.getElementsByClassName("table_detail_link"), k = document.getElementsByName("SelectedAttributeDefinitionID"), l = document.getElementsByName("AllAttributeDefinitionID"), m = 0, n = 0; n < k.length; n++) m += 2, k[n].setAttribute("value", j[m - 1].href.split("&")[1].split("=")[1]), l[n].setAttribute("value", j[m - 1].href.split("&")[1].split("=")[1]);
                            break
                        }
                        var o = document.createElement("input"),
                            p = document.createElement("input"),
                            q = document.createElement("TD");
                        q.setAttribute("class", "table_detail w s center"), o.setAttribute("name", "SelectedAttributeDefinitionID"), o.setAttribute("type", "checkbox"), p.setAttribute("name", "AllAttributeDefinitionID"), p.setAttribute("type", "hidden"), q.appendChild(o), q.appendChild(p);
                        var r = document.getElementsByTagName("table")[7].childNodes[1].childNodes[i];
                        r.insertBefore(q, document.getElementsByTagName("table")[7].childNodes[1].childNodes[i].childNodes[0])
                    }
                }
            }
            var e = document.getElementById("bm_header_dev"),
                f = function() {
                    d()
                },
                g = {};
            g.initCustomObjAttrDefinitions = f, b.exports = g
        }, {}],
        11: [function(a, b, c) {
            function d(a) {
                if (g) {
                    var b = document.getElementsByClassName("top")[1],
                        c = document.getElementsByName("switch")[0],
                        d = document.createElement("table"),
                        e = document.createElement("form");
                    f.setAttributes(d, {
                        border: "0",
                        cellpadding: "4",
                        cellspacing: "0",
                        width: "100%",
                        class: "infobox w e s"
                    }), f.setAttributes(e, {
                        action: "https://" + a.url + "/on/demandware.store/Sites-Site/default/ViewObjectTypeScopeList-Dispatch",
                        method: "post"
                    });
                    var h = '<tbody><tr><td class="table_title2" colspan="9">New Attribute Group</td></tr><tr><td class="infobox_item" nowrap="nowrap">ID:</td><td class="infobox_item"><input type="text" name="NewAttributeScope_ID" value="" size="25" class="inputfield_en"></td><td class="infobox_item" nowrap="nowrap">Name:</td><td class="infobox_item"><input type="text" name="NewAttributeScope_Name" value="" class="inputfield_en" size="50"></td><td class="buttonspacing"><input type="hidden" name="ObjectTypeDefinitionUUID" value="bczsMiaaiOjtIaaadjQZ3DnzVF"><input type="hidden" name="LocaleID" value="default"><button name="add" class="button">Add</button></td><td width="100%">&nbsp;</td></tr></tbody>';
                    b.insertBefore(d, b.childNodes[30]), d.innerHTML = h;
                    var i = document.getElementsByName("add")[0];
                    d.insertBefore(e, d.childNodes[0]), i.onclick = function() {
                        c.setAttribute("name", "add"), c.click()
                    }
                }
            }

            function e() {
                if (g) {
                    var a = document.getElementsByName("reset")[0],
                        b = document.createElement("TD");
                    b.className = "button";
                    var c = document.createElement("button");
                    c.innerHTML = "Delete", c.setAttribute("name", "confirmDelete"), c.className = "button", b.appendChild(c), a.parentNode.parentNode.insertBefore(b, a.parentNode);
                    var d = document.getElementsByName("confirmDelete")[0];
                    d.onclick = function() {
                        a.setAttribute("name", "confirmDelete"), a.setAttribute("type", "submit"), a.click()
                    }
                }
            }
            var f = a("../../libs/utils.js"),
                g = document.getElementById("bm_header_dev"),
                h = function(a) {
                    d(a), e()
                },
                i = {};
            i.initCustomObjAttrGroups = h, b.exports = i
        }, {
            "../../libs/utils.js": 6
        }],
        12: [function(a, b, c) {
            function d() {
                if (f) {
                    var a = document.getElementsByName("confirmdeletefile")[0],
                        b = document.createElement("TD");
                    b.className = "button";
                    var c = document.createElement("button");
                    c.innerHTML = "Import", c.setAttribute("name", "confirmimport"), c.setAttribute("type", "submit"), c.className = "button", c.onclick = function() {
                        a.setAttribute("name", "confirmimport"), a.click()
                    }, b.appendChild(c), a.parentNode.parentNode.insertBefore(b, a.parentNode)
                }
            }

            function e() {
                d()
            }
            var f = document.getElementById("bm_header_dev"),
                g = {};
            g.initSiteImportExport = e, b.exports = g
        }, {}],
        13: [function(a, b, c) {
            function d() {
                var a = jQuery("#bm_content_column > table > tbody > tr > td > table > tbody > tr > td.top > form:nth-child(8) > table:nth-child(3) > tbody > tr:nth-child(7) > td.table_detail");
                a.html(a.text().split(":").join("<br/>"))
            }
            var e = {};
            e.initSiteSettings = d, b.exports = e
        }, {}],
        14: [function(a, b, c) {
            function d(a) {
                var b = window.location.href;
                if (b.endsWith("Logout") || b.endsWith("ProcessLogin")) return !0;
                if (document.getElementsByClassName("loginformreset").length > 0) return !1;
                var c = document.getElementsByTagName("div");
                for (var d in c)
                    if (c[d].className && c[d].className.indexOf("logoninstance") > -1) return !0;
                return !1
            }

            function e(a) {
                var b = document.getElementsByTagName("input")[0];
                b.value = a.username;
                var c = document.getElementsByTagName("input")[1];
                c.value = j.decrypt(k.m, a.pswd), document.getElementsByName("LoginForm")[0].submit()
            }

            function f(a) {
                var b = document.getElementById("bm_header_sbx"),
                    c = document.getElementById("bm_header_dev"),
                    d = document.getElementById("bm_header_stg");
                return !(null === b && null === c && !d)
            }

            function g(a) {
                for (var b = 0; b < a.length; b++) {
                    var c = a[b].aliases;
                    if (c && c.length > 0) {
                        for (var d = 0; d < c.length; d++)
                            if (window.location.hostname === a[b].url || window.location.hostname === c[d].url) return a[b]
                    } else if (window.location.hostname === a[b].url) return a[b]
                }
                return null
            }

            function h() {
                var a = function() {
                        callServer()
                    },
                    b = document.createElement("script");
                return b.appendChild(document.createTextNode("(" + a + ")();")), (document.body || document.head || document.documentElement).appendChild(b), !0
            }

            function i(a) {
                var b = document.getElementsByTagName("input")[0];
                b.value = j.decrypt(k.m, a.pswd), h()
            }
            var j = a("../../libs/helper.js"),
                k = a("../../libs/constants.js"),
                l = {};
            l.getSandboxConfig = g, l.isLoginPageOpened = d, l.submitLoginPage = e, l.isBMPageLoaded = f, l.keepBMSessionAlive = i, b.exports = l
        }, {
            "../../libs/constants.js": 3,
            "../../libs/helper.js": 4
        }],
        15: [function(a, b, c) {
            function d(a) {
                var b = function(a) {
                        return Math.floor(Math.random() * a)
                    },
                    c = ["ffe5e5", "ffece5", "fff2e5", "fff9e5", "ffffe5", "f9ffe5", "f2ffe5", "ecffe5", "e5ffe5", "e5ffec", "e5fff2", "e5fff9", "e5ffff", "e5f9ff", "e5f2ff", "e5ecff", "e5e5ff", "ece5ff", "f2e6ff", "f2e5ff", "f9e5ff", "ffe5ff", "ffe5f9", "ffe5f2", "ffe5ec", "ffe5e5"],
                    d = c[b(c.length)];
                if (a !== d) return d;
                for (var e = c.slice(); a === d;) {
                    var f = b(e.length);
                    e.splice(f, 1), d = e[0]
                }
                return d
            }

            function e() {
                for (var a = "", b = document.location.pathname, c = b.split("/"), d = 5; d < c.length - 1; d++) a += 6 === c.length ? c[d] : '<a href="' + b.substring(0, b.indexOf("/" + c[d]) + c[d].length + 1) + '">' + c[d] + "</a> / ";
                d = c.length - 1, a += c[d], document.getElementsByTagName("h1")[0].innerHTML = a
            }

            function f(a) {
                var b, c, e = window.location.href,
                    f = e.lastIndexOf("/") + 1,
                    g = e.substr(f),
                    h = new RegExp("GMT]", "g");
                new RegExp;
                if (i = $("body pre").html().replace(/\n/g, "<br />"), j = i.match(h), k = 0, l = 0, i.length > 0) {
                    j.length > a && (k = j.length - a);
                    for (var n = d(), o = null; b = h.exec(i);)
                        if (l++, l >= k) {
                            var p = i.slice(b.index - 25, b.index + 4);
                            c = p.replace("GMT]", "").replace("[", "").trim().substring(0, 24).trim();
                            var q = c.substring(0, 19);
                            0 === l && (o = q), q !== o && (o = q, n = d(n)), void 0 === n && (n = d(n)), i = i.replace(p, '</td></tr><tr valign="top"><td class="sitename" style="background-color:pink"></td><td class="pipeline"></td><td style="background-color: #' + n + '">' + c + "</td><td class=error-msg style='white-space: pre-wrap'>")
                        }
                    i = i.replace(/\-{6,}/g, ""), i = i.replace(/(System Information)/g, '<br/><span class="log-label system">System</span>'), i = i.replace(/(Request Information)/g, '<br/><span class="log-label request-info">Request</span>'), i = i.replace(/(Request Parameters)/g, '<br/><span class="log-label request-params">Parameters</span>'), i = i.replace(/(Stack trace)/g, '<br/><span class="log-label stack-trace">Stack trace</span><br/>'), $("body").prepend("<h1>" + g + "</h1><p>Note: This log is limited to the last " + a + " errors.</p>"), $("body pre").html("<table id='myLogTable' class='tablesorter table logtable' cellpadding='10'><thead><tr><th class='site-dropdown' width='150'>Sites</th><th class='pipeline-dropdown' width='150'>Pipeline</th><th width='180'>Date</th><th>Description</th></tr></thead><tbody><tr><td>" + i + "</td></tr></tbody></table>"), $("#myLogTable tbody tr:first").remove(), usn()
                }
            }

            function g() {
                $("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    integrity: "sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7",
                    crossorigin: "anonymous",
                    href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
                }).prependTo("head"), $("body").addClass("container-fluid"), $("hr").remove();
                var a = $("table:first");
                if (a.length > 0) {
                    a.attr("id", "myTable"), a.addClass("tablesorter table table-striped table-hover nimit");
                    var b = a.find("thead"),
                        c = a.find("tr:first");
                    0 === b.length && (b = $("<thead></thead>").appendTo(a)), c.clone(!0).appendTo("thead"), c.remove()
                }
            }

            function h(a) {
                for (var b = 0, c = 0; c < a.length; c++) {
                    var d = a[c],
                        e = new XMLHttpRequest;
                    e.open("PUT", window.location.href + "/" + d.name, !0), e.onload = function() {
                        progress.value = progress.innerHTML = 100, b += 1, b === a.length && setTimeout(function() {
                            location.reload()
                        }, 200)
                    }, e.upload.onprogress = function(a) {
                        if (a.lengthComputable) {
                            var b = a.loaded / a.total * 100 | 0;
                            progress.value = progress.innerHTML = b
                        }
                    }, e.setRequestHeader("X-Filename", d.name), e.send(d)
                }
            }

            function i(a) {
                a.stopPropagation(), a.preventDefault();
                var b = a.target.files;
                $.each(b, function(a, b) {
                    var c = new XMLHttpRequest,
                        d = c.upload;
                    d.addEventListener("progress", function(a) {
                        if (a.lengthComputable) {
                            var b = Math.round(100 * a.loaded / a.total);
                            b < 100 && (console.log("percent complete", b), b >= 99 ? console.log("Uploaded, now processing listing..") : console.log(b + "%"))
                        }
                    }, !1), d.addEventListener("load", function(a) {
                        setTimeout(function() {
                            location.reload()
                        }, 200)
                    }, !1), d.addEventListener("error", function(a) {
                        console.log("Error")
                    }, !1), c.open("PUT", window.location.href + "/" + b.name, !0), c.setRequestHeader("X-Filename", b.name), c.send(b)
                })
            }

            function j() {
                $('<form method="post" id="uploadForm" class="form-horizontal"><div class="hide"><input type="file" id="selectFile"></div><div class="btn-group"><div id="dragDropUploadArea">Drop files here to upload them all, or left click to upload single file.</div><button type="button" class="btn btn-default" id="btnCreateFolder">Create folder</button></div></form>').insertAfter("h1:first"), $("body").attr("id", "holder"), $('<div class="hide"><p id="filereader">File API & FileReader API not supported</p><p id="formdata">XHR2 FormData is not supported</p><p id="progress">XHR2 upload progress is not supported</p><p>Upload progress: <progress id="uploadprogress" min="0" max="100" value="0">0</progress></p></div>').insertAfter("h1:first"), $("#uploadForm input[type=file]").on("change", i), $("#dragDropUploadArea").on("click", function() {
                    $("#selectFile").focus().click()
                }), $("#btnCreateFolder").on("click", function() {
                    var a = prompt("Please enter the name of the folder to create", "");
                    if (null !== a && a.length > 0) {
                        var b = new XMLHttpRequest;
                        b.open("MKCOL", window.location.href + "/" + a, !0), b.onload = function() {
                            setTimeout(function() {
                                location.reload()
                            }, 200)
                        }, b.send(), setTimeout(function() {
                            location.reload()
                        }, 800)
                    }
                });
                var a = document.getElementById("holder"),
                    b = {
                        filereader: "undefined" != typeof FileReader,
                        dnd: "draggable" in document.createElement("span"),
                        formdata: !!window.FormData,
                        progress: "upload" in new XMLHttpRequest
                    },
                    c = {
                        filereader: document.getElementById("filereader"),
                        formdata: document.getElementById("formdata"),
                        progress: document.getElementById("progress")
                    },
                    d = (document.getElementById("uploadprogress"), document.getElementById("upload"));
                "filereader formdata progress".split(" ").forEach(function(a) {
                    b[a] === !1 ? c[a].className = "fail" : c[a].className = "hidden"
                }), b.dnd ? (a.ondragover = function() {
                    return this.className = "hover", !1
                }, a.ondragenter = function() {
                    return this.className = "hover", !1
                }, a.ondragend = function() {
                    return this.className = "", !1
                }, a.ondragleave = function() {
                    return this.className = "", !1
                }, a.ondrop = function(a) {
                    this.className = "", a.preventDefault(), h(a.dataTransfer.files)
                }) : (d.className = "hidden", d.querySelector("input").onchange = function() {
                    h(this.files)
                })
            }

            function k(a, b) {
                var c, d, e = a.attr("data-uri").lastIndexOf("/") + 1,
                    f = a.attr("data-uri").substr(e);
                "empty" === b ? (c = "Are you sure you want to EMPTY", d = "Are you REALLY sure you want to EMPTY") : "delete" === b ? (c = "Are you sure you want to DELETE", d = "Are you REALLY sure you want to DELETE") : "unzip" === b && (c = "Are you sure you want to UNZIP", d = "Are you REALLY sure you want to UNZIP");
                var g = $(location).attr("href") + "/" + f;
                if (f.length > 0) c += " file : " + f + "?", d += " file : " + f + "?";
                else {
                    var h = a.attr("data-uri").substr(0, e - 2);
                    e = h.lastIndexOf("/") + 1, f = a.attr("data-uri").substr(e).replace("/", ""), g = $(location).attr("href") + f + "/", c += " directory : " + f + "?", d += " directory : " + f + "?"
                }
                if (confirm(c) && confirm(d)) {
                    var i = new XMLHttpRequest;
                    i.onload = function() {
                        setTimeout(function() {
                            location.reload()
                        }, 200)
                    }, "empty" === b ? (i.open("PUT", g, !0), i.setRequestHeader("Content-type", "text/plain"), i.send("")) : "delete" === b ? (i.open("DELETE", g, !0), i.send()) : "unzip" === b && (i.open("POST", g, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8"), i.send("method=UNZIP"))
                }
            }

            function l() {
                g(), $("#myTable a").each(function() {
                    $(this).parent().next().find("tt").before('<tt class=".btn-empty-container"><span class="glyphicon glyphicon-erase emptyAction" title="Empty log" data-uri="' + $(this).attr("href") + '"></span></tt>')
                }), $(document).on("click", ".emptyAction", function(a) {
                    k($(this), "empty")
                })
            }

            function m() {
                g(), $("#myTable a").each(function(a) {
                    var b = $(this).text();
                    if ("Parent Directory" !== b) {
                        var c = '<span class="glyphicon glyphicon-trash deleteAction" title="Delete" data-uri="' + $(this).attr("href") + '"></span>';
                        ".zip" === b.slice(-4) && (c += '<span class="glyphicon glyphicon-cloud-download unzipAction" title="Unzip" data-uri="' + $(this).attr("href") + '"></span>'), $(this).after('<tt class="btn-container" style="position: relative">' + c + "</tt>")
                    }
                }), $(document).on("click", ".deleteAction", function(a) {
                    k($(this), "delete")
                }), $(document).on("click", ".unzipAction", function(a) {
                    k($(this), "unzip")
                })
            }

            function n() {
                document.body.innerHTML = document.body.innerHTML.replace(/(^\[.+?\])/gm, '</div><div class="logs-section"><strong>$1</strong>').replace(/(WARN|warning)/gm, '<strong class="bold warning orange"><i>$1</i></strong>').replace(/(ERROR)/gm, '<strong class="error">$1</strong>').replace(/(Sites\-(\w+-)?Site)/gm, '<strong class="keyword italic">$1</strong>').replace(/(\|(\w+-\w+)\|)/gm, '<strong class="green"><i>$1</i></strong>').replace(/(^\tat.+$)/gm, '<div class="small inline">$1</div>').replace(/((\#|lineNumber: |line )\d+)/gim, '<strong class="number">$1</strong>').replace(/(null|TypeError|ReferenceError)/gim, '<strong class="error">$1</strong>')
            }

            function o() {
                p.appendStyle("./css/webdav.css"), window.location.href.indexOf(".log") > 0 ? f() : (m(), e(), $("#myTable").length > 0 && j())
            }
            var p = a("../../libs/utils.js"),
                q = function(a) {
                    p.appendStyle("./css/logs.css");
                    var b = window.location.href;
                    if (b.indexOf(".log") > 0) a.bg("getSettings", {}, function(a) {
                        a.scrollLogToBottom && window.scrollTo(0, document.body.scrollHeight), "beautify" === a.beautifyLogsOptions && a.trimLogs && (f(a.trimLogErrors), n()), "colorize" === a.beautifyLogsOptions && n()
                    });
                    else {
                        l();
                        var c = document.getElementsByTagName("a"),
                            d = document.getElementsByTagName("tbody")[0],
                            e = new Date,
                            g = new Date;
                        g.setDate(g.getDate() - 1);
                        for (var h = [], i = 0; i < c.length; i++) {
                            var j = c[i].parentNode.parentNode.children[1].childNodes[0],
                                k = c[i].childNodes[0].innerHTML;
                            c[i].text.indexOf("-20") > -1 && (c[i].text.slice(-12, -4) === e.yyyymmdd() && (c[i].parentNode.parentNode.style.background = "#DAFFE8"), c[i - 1].text.slice(-12, -4) === g.yyyymmdd() && (c[i - 1].parentNode.parentNode.style.background = "#F9FDDA"), "0.0 kb" === j.innerHTML && (j.innerHTML = "&empty;", j.style["font-weight"] = "bold"), h.push(c[i].parentNode.parentNode)), k.indexOf("error") > -1 && (k = k.replace(/error/g, '<span style="font-size:18px;color:red"><strong>error</strong></span>'), c[i].childNodes[0].innerHTML = k), k.indexOf("info") > -1 && (k = k.replace(/info/g, '<span style="font-size:18px;color:blue"><strong>info</strong></span>'), c[i].childNodes[0].innerHTML = k), k.indexOf("warn") > -1 && (k = k.replace(/warn/g, '<span style="font-size:18px;color:orange"><strong>warn</strong></span>'), c[i].childNodes[0].innerHTML = k), k.indexOf("debug") > -1 && (k = k.replace(/debug/g, '<span style="font-size:18px;color:green"><strong>debug</strong></span>'), c[i].childNodes[0].innerHTML = k), c[i].setAttribute("target", "_blank")
                        }
                        h.sort(function(a, b) {
                            return a = new Date(a.childNodes[5].childNodes[0].innerHTML), b = new Date(b.childNodes[5].childNodes[0].innerHTML), a === b ? 0 : a > b ? 1 : -1
                        });
                        for (var m = 0; m < h.length; m++) d.insertBefore(h[m], d.children[1]);
                        document.body.addEventListener("mouseover", function(a) {
                            var b = a.target;
                            b && "TD" === b.tagName && (a.stopPropagation(), b.addEventListener("mouseout", function(a) {
                                b.parentNode.className = b.parentNode.className.replace(new RegExp(" highlight\\b", "g"), "")
                            }), b.parentNode.className += " highlight")
                        })
                    }
                },
                r = {};
            r.initLogs = q, r.initFolder = o, b.exports = r
        }, {
            "../../libs/utils.js": 6
        }]
    }, {}, [1])(1)
});
var currentSite;var currentPipeline;
$(document).on("change", "#site-dropdown", function() {
    currentSite = this.value, $("td.sitename").each(function() {
        var a = $(this).text();
        a === currentSite ? $(this).parent("tr").show() : "All" == currentSite ? $(this).parent("tr").show() : $(this).parent("tr").hide()
    });
	var z= [];
	$("td:visible.error-msg").each(function() {
        var b = $(this).text(),
			q = b.match(new RegExp("Site |(.*)|PipelineCall")),
			v = q[0].substring(q[0].indexOf("-Site|") + 6, q[0].indexOf("|PipelineCall|"));
		"" != v && ($.inArray(v, z) == -1 && z.push(v), $(this).siblings("td.pipeline").html(v))
    });
	$('select#pipeline-dropdown').remove();
	var y = $("<select style='width:150px;' id='pipeline-dropdown'/>");
    $("<option value='All'>All</option>").appendTo(y);
    for (var c = 0; c < z.length; c++) $("<option value=" + z[c] + ">" + z[c] + "</option>").appendTo(y);
    y.appendTo("th.pipeline-dropdown")
});
$(document).on("change", "#pipeline-dropdown", function() {
    currentPipeline = this.value, $("td.pipeline").each(function() {
        var a = $(this).text();
		var selectedSite = $('select#site-dropdown').val();
		var siteName = $(this).siblings('td.sitename').text();
		if(selectedSite == 'All' && currentPipeline == 'All' ){
			$(this).parents('tr').show();
		}else if(currentPipeline == 'All' && selectedSite != 'All' ){
			if(siteName == selectedSite){
				$(this).parents('tr').show();
			}else{
				$(this).parents('tr').hide();
			}
		}else if(currentPipeline != 'All' && selectedSite == 'All'){
			if(currentPipeline == a){
				$(this).parents('tr').show();
			}else{
				$(this).parents('tr').hide();
			}
		}else{
			if(currentPipeline == a && selectedSite == siteName ){
				$(this).parents('tr').show();
			}else{
				$(this).parents('tr').hide();
			}
		}
    })
});