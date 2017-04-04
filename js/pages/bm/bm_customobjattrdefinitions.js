var bmDevHeadElement = document.getElementById('bm_header_dev');

function recreateNewAndDeleteButtonsOnDev() {
    //Create new and delete buttons in development instance
    if (bmDevHeadElement) {

        var newBtnTableData = document.createElement("TD");
        var deleteBtnTableData = document.createElement("TD");

        newBtnTableData.className = "button";

        var newButton = document.createElement("button");
        var deleteButton = document.createElement("button");

        newButton.innerHTML = "New";
        newButton.setAttribute("name", "new");
        newButton.setAttribute("type", "submit");
        newButton.className = "button";

        deleteButton.innerHTML = "Delete";
        deleteButton.setAttribute("name", "confirmDelete");
        deleteButton.setAttribute("type", "submit");
        deleteButton.className = "button";

        newBtnTableData.appendChild(newButton);
        deleteBtnTableData.appendChild(deleteButton);

        var table = document.getElementsByClassName("w e s");
        for (var i = 0; table[i]; i++) {
            if (table[+i + 1] === undefined) {
                table[i].childNodes[1].childNodes[1].childNodes[0].appendChild(newBtnTableData);
                table[i].childNodes[1].childNodes[1].childNodes[0].appendChild(deleteBtnTableData);
            }
        }
        var innerTable = document.getElementsByTagName("table")[7].childNodes[1].childNodes;
        for (var m = 2; innerTable.length; m += 2) {

            if (m === innerTable.length - 6) {
                var anchorLinks = document.getElementsByClassName("table_detail_link");
                var checkboxValue = document.getElementsByName("SelectedAttributeDefinitionID");
                var checkboxHiddenValue = document.getElementsByName("AllAttributeDefinitionID");

                var j = 0;
                for (var p = 0; p < checkboxValue.length; p++) {
                    j += 2;
                    checkboxValue[p].setAttribute("value", anchorLinks[j - 1].href.split("&")[1].split("=")[1]);
                    checkboxHiddenValue[p].setAttribute("value", anchorLinks[j - 1].href.split("&")[1].split("=")[1]);

                }
                break;
            }
            var checkboxes = document.createElement("input");
            var checkboxesHidden = document.createElement("input");

            var checkboxTableData = document.createElement("TD");
            checkboxTableData.setAttribute("class", "table_detail w s center");
            checkboxes.setAttribute("name", "SelectedAttributeDefinitionID");
            checkboxes.setAttribute("type", "checkbox");

            checkboxesHidden.setAttribute("name", "AllAttributeDefinitionID");
            checkboxesHidden.setAttribute("type", "hidden");

            checkboxTableData.appendChild(checkboxes);
            checkboxTableData.appendChild(checkboxesHidden);

            var tableRows = document.getElementsByTagName("table")[7].childNodes[1].childNodes[m];

            tableRows.insertBefore(checkboxTableData, document.getElementsByTagName("table")[7].childNodes[1].childNodes[m].childNodes[0]);
        }
    }
}

var initCustomObjAttrDefinitions = function() {
    recreateNewAndDeleteButtonsOnDev();
};

var customObjAttrDefinitions = {};

customObjAttrDefinitions.initCustomObjAttrDefinitions = initCustomObjAttrDefinitions;

module.exports = customObjAttrDefinitions;