var utils = require('../../libs/utils.js');
var bmDevHeadElement = document.getElementById('bm_header_dev');

function recreateNewAttrGroupFormOnDev(sandbox) {
    if (bmDevHeadElement) {
        var getInside = document.getElementsByClassName("top")[1];
        var applyBtnEl = document.getElementsByName("switch")[0];

        var table = document.createElement('table');
        var form = document.createElement("form");
        utils.setAttributes(table, {
            "border": "0",
            "cellpadding": "4",
            "cellspacing": "0",
            "width": "100%",
            "class": "infobox w e s"
        });
        utils.setAttributes(form, {
            "action": "https://" + sandbox.url + "/on/demandware.store/Sites-Site/default/ViewObjectTypeScopeList-Dispatch",
            "method": "post"
        });

        var formTableRows = '<tbody><tr><td class="table_title2" colspan="9">New Attribute Group</td></tr><tr><td class="infobox_item" nowrap="nowrap">ID:</td><td class="infobox_item"><input type="text" name="NewAttributeScope_ID" value="" size="25" class="inputfield_en"></td><td class="infobox_item" nowrap="nowrap">Name:</td><td class="infobox_item"><input type="text" name="NewAttributeScope_Name" value="" class="inputfield_en" size="50"></td><td class="buttonspacing"><input type="hidden" name="ObjectTypeDefinitionUUID" value="bczsMiaaiOjtIaaadjQZ3DnzVF"><input type="hidden" name="LocaleID" value="default"><button name="add" class="button">Add</button></td><td width="100%">&nbsp;</td></tr></tbody>';

        getInside.insertBefore(table, getInside.childNodes[30]);
        table.innerHTML = formTableRows;

        var addBtn = document.getElementsByName("add")[0];

        table.insertBefore(form, table.childNodes[0]);

        addBtn.onclick = function () {
            applyBtnEl.setAttribute("name", "add");
            applyBtnEl.click();
        };
    }
}

function recreateNewAttrGroupDelBtnOnDev() {
    if (bmDevHeadElement) {
        var resetBtnEl = document.getElementsByName("reset")[0];

        var tableData = document.createElement("TD");
        tableData.className = "button";

        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.setAttribute("name", "confirmDelete");
        deleteBtn.className = "button";

        tableData.appendChild(deleteBtn);

        resetBtnEl.parentNode.parentNode.insertBefore(tableData, resetBtnEl.parentNode);
        var delBtn = document.getElementsByName("confirmDelete")[0];

        delBtn.onclick = function () {
            resetBtnEl.setAttribute("name", "confirmDelete");
            resetBtnEl.setAttribute("type", "submit");
            resetBtnEl.click();
        };
    }
}

var initCustomObjAttrGroups = function(sandbox) {
    recreateNewAttrGroupFormOnDev(sandbox);
    recreateNewAttrGroupDelBtnOnDev();
};

var customObjAttrGroups = {};

customObjAttrGroups.initCustomObjAttrGroups = initCustomObjAttrGroups;

module.exports = customObjAttrGroups;