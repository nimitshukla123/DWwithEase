function initSiteSettings() {
     var effectiveCartridgePath = jQuery("#bm_content_column > table > tbody > tr > td > table > tbody > tr > td.top > form:nth-child(8) > table:nth-child(3) > tbody > tr:nth-child(7) > td.table_detail");
         effectiveCartridgePath.html(effectiveCartridgePath.text().split(':').join('<br/>'));
}

var bm_sitesettings = {};

bm_sitesettings.initSiteSettings = initSiteSettings;

module.exports = bm_sitesettings;