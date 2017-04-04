var bmDevHeadElement = document.getElementById('bm_header_dev');

function recreateImportButtonOnDevelopment() {
    //Create import button in development instance
    if (bmDevHeadElement) {
        var deleteBtnEl = document.getElementsByName("confirmdeletefile")[0];
        var tableData = document.createElement("TD");
        tableData.className = "button";

        var importButton = document.createElement("button");
        importButton.innerHTML = "Import";
        importButton.setAttribute("name", "confirmimport");
        importButton.setAttribute("type", "submit");
        importButton.className = "button";

        importButton.onclick = function () {
            deleteBtnEl.setAttribute("name", "confirmimport");
            deleteBtnEl.click();
        };
        tableData.appendChild(importButton);
        deleteBtnEl.parentNode.parentNode.insertBefore(tableData, deleteBtnEl.parentNode);
    }
}

function initSiteImportExport() {
 	// the import button on development

	recreateImportButtonOnDevelopment();
}

var bm_siteimportexport = {};

bm_siteimportexport.initSiteImportExport = initSiteImportExport;

module.exports = bm_siteimportexport;