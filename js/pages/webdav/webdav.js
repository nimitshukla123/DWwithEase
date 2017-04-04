var utils = require('../../libs/utils.js');

function getColor(color) {

    var randomElement = function(length) {
        return Math.floor(Math.random() * length);
    };

    //http://www.w3schools.com/colors/colors_picker.asp
    var colorize = ['ffe5e5', 'ffece5', 'fff2e5', 'fff9e5', 'ffffe5', 'f9ffe5', 'f2ffe5', 'ecffe5', 'e5ffe5', 'e5ffec', 'e5fff2', 'e5fff9', 'e5ffff', 'e5f9ff', 'e5f2ff', 'e5ecff', 'e5e5ff', 'ece5ff', 'f2e6ff', 'f2e5ff', 'f9e5ff', 'ffe5ff', 'ffe5f9', 'ffe5f2', 'ffe5ec', 'ffe5e5'];


    var gencolor = colorize[randomElement(colorize.length)];

    if (color !== gencolor) {
        return gencolor;
    }

    var copy = colorize.slice();
    while (color === gencolor) {
        var index = randomElement(copy.length);
        copy.splice(index, 1);
        gencolor = copy[0];
    }

    return gencolor;
}


function transformBreadcrumbMenu() {
    var path = "";
    var href = document.location.pathname;
    var s = href.split("/");
    for (var i = 5; i < (s.length - 1); i++) {
        if (s.length === 6) {
            path += s[i];
        } else {
            path += "<a href=\"" + href.substring(0, href.indexOf("/" + s[i]) + s[i].length + 1) + "\">" + s[i] + "</a> / ";
        }
    }
    i = s.length - 1;

    path += s[i];

    document.getElementsByTagName('h1')[0].innerHTML = path;
}

function setupLog(numberOfErrors) {
    var url = window.location.href;
    var index = url.lastIndexOf("/") + 1;
    var filename = url.substr(index);

    var re = new RegExp('GMT]', 'g');

    //get body text and keep line breaks
    var logBody = $('body pre').html().replace(/\n/g, "<br />");
    var matches = logBody.match(re);
    var idxStart = 0;
    var idxMatch = 0;
    var m;
    var newLogDate;

    if (logBody.length > 0) {
        //skip until X left
        if (matches.length > numberOfErrors) {
            idxStart = (matches.length - numberOfErrors);
        }

        var dateColor = getColor();
        var curDateSeries = null;

        while (m = re.exec(logBody)) {
            idxMatch++;

            if (idxMatch >= idxStart) {
                var logDate = logBody.slice((m.index - 25), (m.index + 4));
                newLogDate = logDate.replace("GMT]", "").replace("[", "").trim().substring(0, 24).trim();
                //2016-11-03 15:33:46.430

                var dateSeries = newLogDate.substring(0, 19);

                if (idxMatch === 0) {
                    curDateSeries = dateSeries;
                }
                if (dateSeries !== curDateSeries) {
                    curDateSeries = dateSeries;
                    dateColor = getColor(dateColor);
                }
                if (dateColor === undefined) {
                    dateColor = getColor(dateColor);
                }

                logBody = logBody.replace(logDate, "</td></tr><tr valign=\"top\"><td style=\"background-color: #" + dateColor + "\">" + newLogDate + "</td><td style='white-space: pre-wrap'>");
            }
        }

        //remove unuseful log separator
        logBody = logBody.replace(/\-{6,}/g, "");
        //create log sections (applicable to error log)
        logBody = logBody.replace(/(System Information)/g, "<br/><span class=\"log-label system\">System</span>");
        logBody = logBody.replace(/(Request Information)/g, "<br/><span class=\"log-label request-info\">Request</span>");
        logBody = logBody.replace(/(Request Parameters)/g, "<br/><span class=\"log-label request-params\">Parameters</span>");
        logBody = logBody.replace(/(Stack trace)/g, "<br/><span class=\"log-label stack-trace\">Stack trace</span><br/>");

        $('body').prepend('<h1>' + filename + '</h1><p>Note: This log is limited to the last ' + numberOfErrors + ' errors.</p>');
        $('body pre').html("<table id='myLogTable' class='tablesorter table logtable' cellpadding='10'><thead><tr><th width='240'>Date</th><th>Description</th></tr></thead><tbody><tr><td>" + logBody + "</td></tr></tbody></table>");

        $('#myLogTable tbody tr:first').remove();
    }
}

function beautifyTable() {alert()
    $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        integrity: "sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7",
        crossorigin: "anonymous",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
    }).prependTo("head");

    $('body').addClass("container-fluid");

    $('hr').remove();

    var myTable = $("table:first");

    if (myTable.length > 0) {

        myTable.attr('id', 'myTable');
        myTable.addClass("tablesorter table table-striped table-hover nimit");

        var thead = myTable.find("thead");
        var thRows = myTable.find("tr:first");

        if (thead.length === 0) {
            thead = $("<thead></thead>").appendTo(myTable);
        }

        var copy = thRows.clone(true).appendTo("thead");
        thRows.remove();

    }
}

function readfiles(files) {

    var totalFilesUploaded = 0;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var currentFileIndex = (i + 1);

        var xhr = new XMLHttpRequest();
        xhr.open('PUT', window.location.href + "/" + file.name, true);

        /*jshint loopfunc: true */
        xhr.onload = function() {
            progress.value = progress.innerHTML = 100;
            totalFilesUploaded += 1;

            if (totalFilesUploaded === files.length) {
                setTimeout(function() {
                    location.reload();
                }, 200);
            }
        };
        /*jshint loopfunc: true */
        xhr.upload.onprogress = function(event) {
            if (event.lengthComputable) {
                var complete = (event.loaded / event.total * 100 | 0);
                progress.value = progress.innerHTML = complete;
            }
        };

        xhr.setRequestHeader('X-Filename', file.name);
        xhr.send(file);
    }
}

// Grab the files and set them to our variable
function prepareUpload(event) {
    event.stopPropagation();
    event.preventDefault();

    var files = event.target.files;

    $.each(files, function(i, file) {

        var xhr = new XMLHttpRequest();
        var fileUpload = xhr.upload;

        fileUpload.addEventListener("progress", function(event) {
            if (event.lengthComputable) {
                var percentage = Math.round((event.loaded * 100) / event.total);
                if (percentage < 100) {
                    console.log("percent complete", percentage);
                    if (percentage >= 99) {
                        console.log("Uploaded, now processing listing..");
                    } else {
                        console.log(percentage + "%");
                    }
                }
            }
        }, false);

        fileUpload.addEventListener("load", function(event) {

            setTimeout(function() {
                location.reload();
            }, 200);

        }, false);

        fileUpload.addEventListener("error", function(event) {
            console.log("Error");
        }, false);

        xhr.open('PUT', window.location.href + "/" + file.name, true);
        xhr.setRequestHeader('X-Filename', file.name);

        xhr.send(file);
    });

}

function injectUploadForm() {
    //add file button and create directory button
    $('<form method="post" id="uploadForm" class="form-horizontal"><div class="hide"><input type="file" id="selectFile"></div><div class="btn-group"><div id="dragDropUploadArea">Drop files here to upload them all, or left click to upload single file.</div><button type="button" class="btn btn-default" id="btnCreateFolder">Create folder</button></div></form>').insertAfter("h1:first");

    //holder for drag and drop files    
    $('body').attr("id", "holder");

    //not sure on how to use this progress...for now just show a loader?
    $('<div class="hide"><p id="filereader">File API & FileReader API not supported</p><p id="formdata">XHR2 FormData is not supported</p><p id="progress">XHR2 upload progress is not supported</p><p>Upload progress: <progress id="uploadprogress" min="0" max="100" value="0">0</progress></p></div>').insertAfter("h1:first");

    // Add events
    $('#uploadForm input[type=file]').on('change', prepareUpload);

    $("#dragDropUploadArea").on("click", function() {
        $("#selectFile").focus().click();
    });

    $("#btnCreateFolder").on("click", function() {
        var folderName = prompt("Please enter the name of the folder to create", "");
        if (folderName !== null && folderName.length > 0) {
            var xhr = new XMLHttpRequest();
            xhr.open('MKCOL', window.location.href + "/" + folderName, true);

            xhr.onload = function() {
                setTimeout(function() {
                    location.reload();
                }, 200);
            };

            xhr.send();

            setTimeout(function() {
                location.reload();
            }, 800);
        }

    });

    var holder = document.getElementById('holder'),
        tests = {
            filereader: typeof FileReader !== 'undefined',
            dnd: 'draggable' in document.createElement('span'),
            formdata: !!window.FormData,
            progress: "upload" in new XMLHttpRequest()
        },
        support = {
            filereader: document.getElementById('filereader'),
            formdata: document.getElementById('formdata'),
            progress: document.getElementById('progress')
        },
        progress = document.getElementById('uploadprogress'),
        fileupload = document.getElementById('upload');

    "filereader formdata progress".split(' ').forEach(function(api) {
        if (tests[api] === false) {
            support[api].className = 'fail';
        } else {
            support[api].className = 'hidden';
        }
    });

    if (tests.dnd) {
        holder.ondragover = function() {
            this.className = 'hover';
            return false;
        };
        holder.ondragenter = function() {
            this.className = 'hover';
            return false;
        };
        holder.ondragend = function() {
            this.className = '';
            return false;
        };
        holder.ondragleave = function() {
            this.className = '';
            return false;
        };
        holder.ondrop = function(e) {
            this.className = '';
            e.preventDefault();
            readfiles(e.dataTransfer.files);
        };
    } else {
        fileupload.className = 'hidden';
        fileupload.querySelector('input').onchange = function() {
            readfiles(this.files);
        };
    }

}

function doFileAction(element, action) {

    var index = element.attr("data-uri").lastIndexOf("/") + 1;
    var filename = element.attr("data-uri").substr(index);
    var msgConfirm;
    var doubleConfirm;

    if (action === 'empty') {
        msgConfirm = "Are you sure you want to EMPTY";
        doubleConfirm = "Are you REALLY sure you want to EMPTY";
    } else if (action === 'delete') {
        msgConfirm = "Are you sure you want to DELETE";
        doubleConfirm = "Are you REALLY sure you want to DELETE";
    } else if (action === 'unzip') {
        msgConfirm = "Are you sure you want to UNZIP";
        doubleConfirm = "Are you REALLY sure you want to UNZIP";
    }

    var uri = $(location).attr('href') + "/" + filename;

    if (filename.length > 0) {
        msgConfirm += " file : " + filename + "?";
        doubleConfirm += " file : " + filename + "?";
    } else {
        var newUri = element.attr("data-uri").substr(0, index - 2);
        index = newUri.lastIndexOf("/") + 1;
        filename = element.attr("data-uri").substr(index).replace("/", "");

        uri = $(location).attr('href') + filename + "/";
        msgConfirm += " directory : " + filename + "?";
        doubleConfirm += " directory : " + filename + "?";
    }

    if (confirm(msgConfirm)) {
        if (confirm(doubleConfirm)) {

            var xhr = new XMLHttpRequest();

            xhr.onload = function() {
                setTimeout(function() {
                    location.reload();
                }, 200);
            };

            if (action === 'empty') {
                xhr.open('PUT', uri, true);
                xhr.setRequestHeader('Content-type', 'text/plain');
                xhr.send('');
            } else if (action === 'delete') {
                xhr.open('DELETE', uri, true);
                xhr.send();
            } else if (action === 'unzip') {
                xhr.open('POST', uri, true);
                xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
                xhr.send('method=UNZIP');
            }
        }

    }

}

function appendEmptyBtn() {
    beautifyTable();
    $('#myTable a').each(function() {
        //create empty button
        $(this).parent().next().find("tt").before('<tt class=".btn-empty-container"><span class="glyphicon glyphicon-erase emptyAction" title="Empty log" data-uri="' + $(this).attr("href") + '"></span></tt>');
    });

    $(document).on("click", ".emptyAction", function(event) {
        doFileAction($(this), 'empty');
    });
}

function appendFileBtns() {

    beautifyTable();
    $('#myTable a').each(function(i) {
        var fileName = $(this).text();
        //create delete button
        if (fileName !== 'Parent Directory') {
            var buttonsHtml = '<span class="glyphicon glyphicon-trash deleteAction" title="Delete" data-uri="' + $(this).attr("href") + '"></span>';
            if (fileName.slice(-4) === '.zip') {
                buttonsHtml += '<span class="glyphicon glyphicon-cloud-download unzipAction" title="Unzip" data-uri="' + $(this).attr("href") + '"></span>';
            }

            $(this).after('<tt class="btn-container" style="position: relative">' + buttonsHtml + '</tt>');
        }
    });

    $(document).on("click", ".deleteAction", function(event) {
        doFileAction($(this), 'delete');
    });

    $(document).on("click", ".unzipAction", function(event) {
        doFileAction($(this), 'unzip');
    });

}

function colorLogs() {
    document.body.innerHTML = document.body.innerHTML
        .replace(/(^\[.+?\])/gm, '</div><div class="logs-section"><strong>$1</strong>')
        .replace(/(WARN|warning)/gm, '<strong class="bold warning orange"><i>$1</i></strong>')
        .replace(/(ERROR)/gm, '<strong class="error">$1</strong>')
        .replace(/(Sites\-(\w+-)?Site)/gm, '<strong class="keyword italic">$1</strong>')
        .replace(/(\|(\w+-\w+)\|)/gm, '<strong class="green"><i>$1</i></strong>')
        .replace(/(^\tat.+$)/gm, '<div class="small inline">$1</div>')
        .replace(/((\#|lineNumber: |line )\d+)/gmi, '<strong class="number">$1</strong>')
        .replace(/(null|TypeError|ReferenceError)/gmi, '<strong class="error">$1</strong>');
}

var initLogs = function(msg) {
    utils.appendStyle('./css/logs.css');

    var url = window.location.href;

    if (url.indexOf(".log") > 0) {

        msg.bg('getSettings', {}, function(settings) {

            if (settings.scrollLogToBottom) {
                window.scrollTo(0, document.body.scrollHeight);
            }

            if (settings.beautifyLogsOptions === 'beautify') {
                if (settings.trimLogs) {
                    setupLog(settings.trimLogErrors);
                    colorLogs();
                }
            }
            if (settings.beautifyLogsOptions === 'colorize') {
                //Color logs inside
                colorLogs();
            }
        });

    } else {

        appendEmptyBtn();

        var logs = document.getElementsByTagName("a");
        var logsTableBody = document.getElementsByTagName("tbody")[0];

        var today = new Date();
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        var filterLogs = [];

        for (var i = 0; i < logs.length; i++) {
            var logSize = logs[i].parentNode.parentNode.children[1].childNodes[0];
            var logsText = logs[i].childNodes[0].innerHTML;
            if (logs[i].text.indexOf("-20") > -1) {
                //Highlight today/yday logs
                if (logs[i].text.slice(-12, -4) === today.yyyymmdd()) {
                    logs[i].parentNode.parentNode.style.background = "#DAFFE8";
                }
                if (logs[i - 1].text.slice(-12, -4) === yesterday.yyyymmdd()) {
                    logs[i - 1].parentNode.parentNode.style.background = "#F9FDDA";
                }
                if (logSize.innerHTML === "0.0 kb") {
                    logSize.innerHTML = "&empty;";
                    logSize.style["font-weight"] = "bold";
                }
                filterLogs.push(logs[i].parentNode.parentNode);
            }

            //Highlight important words
            if (logsText.indexOf("error") > -1) {
                logsText = logsText.replace(/error/g, '<span style="font-size:18px;color:red"><strong>error</strong></span>');
                logs[i].childNodes[0].innerHTML = logsText;
            }
            if (logsText.indexOf("info") > -1) {
                logsText = logsText.replace(/info/g, '<span style="font-size:18px;color:blue"><strong>info</strong></span>');
                logs[i].childNodes[0].innerHTML = logsText;
            }
            if (logsText.indexOf("warn") > -1) {
                logsText = logsText.replace(/warn/g, '<span style="font-size:18px;color:orange"><strong>warn</strong></span>');
                logs[i].childNodes[0].innerHTML = logsText;
            }
            if (logsText.indexOf("debug") > -1) {
                logsText = logsText.replace(/debug/g, '<span style="font-size:18px;color:green"><strong>debug</strong></span>');
                logs[i].childNodes[0].innerHTML = logsText;
            }
            logs[i].setAttribute("target", "_blank");
        }

        //Sort logs by date and time
        filterLogs.sort(function(a, b) {
            a = new Date(a.childNodes[5].childNodes[0].innerHTML);
            b = new Date(b.childNodes[5].childNodes[0].innerHTML);
            return a === b ? 0 : (a > b ? 1 : -1);
        });


        for (var j = 0; j < filterLogs.length; j++) {
            logsTableBody.insertBefore(filterLogs[j], logsTableBody.children[1]);
        }
        //Highlight currently selected row
        document.body.addEventListener("mouseover", function(e) {

            var logsRow = e.target;
            if (logsRow) {
                if (logsRow.tagName === "TD") {
                    e.stopPropagation();
                    logsRow.addEventListener("mouseout", function(e) {
                        logsRow.parentNode.className = logsRow.parentNode.className.replace(new RegExp(" highlight\\b", "g"), "");
                    });
                    logsRow.parentNode.className += " highlight";
                }
            }
        });

    }
};

function initFolder() {
    utils.appendStyle('./css/webdav.css');

    if (window.location.href.indexOf(".log") > 0) {
        setupLog();
    } else {
        appendFileBtns();
        transformBreadcrumbMenu();

        if ($('#myTable').length > 0) {
            injectUploadForm();
        }
    }
}

var webdav = {};

webdav.initLogs = initLogs;
webdav.initFolder = initFolder;

module.exports = webdav;