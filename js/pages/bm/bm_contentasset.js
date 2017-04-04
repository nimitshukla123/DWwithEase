function escapeAssetHtml() {

    var reGT = />/gi;
    var reLT = /</gi;
    var reQUOT = /"/gi;
    var reAMP = /&/gi;
    var reAPOS = /'/gi;
    var reNL = /\n/gi;
    
    var link = document.getElementsByClassName("btnEscape")[0];
    var name = document.getElementsByClassName("table_detail")[1].childNodes[1].value;
    var id = document.getElementsByClassName("table_detail")[0].childNodes[1].value;
    var textAreas = document.getElementsByTagName("textarea");
    var contentBodyIds = null;
    var strXML = null;
    var xmlLang = null;
    var constructBodies = [];
    var constructedBodies = null;

    var selectLanguageDropdown = document.getElementsByName('LocaleId')[0];
    var selectedLanguage = selectLanguageDropdown.options[selectLanguageDropdown.selectedIndex].value;

    if(selectedLanguage === 'default') {
        xmlLang = 'x-default';
    } else {
        xmlLang = selectedLanguage.replace('_', '-');
    }

    window.URL = window.URL || window.webkitURL;

    for (var i = 1; i < textAreas.length; i++) {
        var assetContent = textAreas[i].value;
        strXML = assetContent.replace(reAMP, "&amp;")
        .replace(reQUOT, "&quot;")
        .replace(reNL, "&#13;\n")
        .replace(reLT, "&lt;")
        .replace(reGT, "&gt;")
        .replace(reAPOS, "&apos;");

        if(textAreas[i].innerHTML.length > 0) {
       
            contentBodyIds = textAreas[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].childNodes[1].childNodes[0].childNodes[1].childNodes[5].getAttribute("data-dw-tooltip").match(/([^.])+/g)[1];
            constructBodies.push(
                '\t\t<custom-attributes>\n' +
                '\t\t\t<custom-attribute attribute-id="' + contentBodyIds + '" xml:lang="x-default">' +
                strXML + '</custom-attribute>\n' +
                '\t\t</custom-attributes>\n'); 
        }
    }

    constructedBodies = constructBodies.join(' ');
    
    var construct = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<library xmlns="http://www.demandware.com/xml/impex/library/2006-10-31">\n' +
        '\t<content content-id="' + id + '">\n' +
        '\t\t<display-name xml:lang="' + xmlLang + '">' + name + '</display-name>\n' +
        '\t\t<online-flag>true</online-flag>\n' +
        '\t\t<searchable-flag>false</searchable-flag>\n' +
        '\t\t<page-attributes/>\n' +
        constructedBodies +
        '\t</content>\n' +
        '</library>';

    var blob = new Blob([construct], {
        type: 'text/xml'
    });

    link.href = window.URL.createObjectURL(blob);
    link.download = id + ".xml";
}

function createAssetDownload() {
    var buttonField = document.getElementsByClassName("w e s")[4].childNodes[1].childNodes[1].childNodes[0];
    var escapeButton = document.createElement("a");
    escapeButton.innerHTML = "Download";
    escapeButton.className = "btnEscape";
    escapeButton.setAttribute("style", "background-color:#D9D9D9; border: 1px solid #ccc; display: inline-block; height:18px; padding:2px 5px; cursor: pointer; border-radius:3px; text-decoration:none;");
    escapeButton.onclick = function () {
        escapeAssetHtml();
    };
    buttonField.insertBefore(escapeButton, buttonField.childNodes[0]);
}

function initContentAsset() {
    //the content asset button

    createAssetDownload();
}

var bm_contentasset = {};

bm_contentasset.initContentAsset = initContentAsset;

module.exports = bm_contentasset;