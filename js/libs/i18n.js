'use strict';

var i18nModule = angular.module("chromeI18N", []);

i18nModule.directive('i18nContent', ['$compile', function ($compile) {
    return {
        restrict: 'A',
        controller: ['$scope', function ($scope) {
            var substitutes = [];
            this.addSubstitute = function (index, content) {
                substitutes[index] = content;
            }
            this.getSubstitutes = function () {
                return substitutes;
            }
      }],
        link: function (scope, element, attr, controller) {
            var message = chrome.i18n.getMessage(attr.i18nContent, controller.getSubstitutes());
            element.html(message || '');
            $compile(element.contents())(scope);
        }
    };
  }])

.directive('i18nSubstitute', function () {
    return {
        restrict: 'M',
        require: '^i18nContent',
        link: function (scope, element, attr, i18nContent) {
            var match = attr.i18nSubstitute.match(/^\$([1-9]):(.*)$/);
            if (match) {
                i18nContent.addSubstitute(parseInt(match[1]) - 1, match[2]);
            }
        }
    };
})

/**
and use it as

<span i18n-content="popup_EmptyListMsg"></span>
<span i18n-content="popup_EmptyListToAllItemsMsg">
  <!--directive: i18n-substitute $1:<a ng-click="showList()">-->
  <!--directive: i18n-substitute $2:</a>-->
</span>

with messages:

{
  "popup_EmptyListMsg": {
    "message": "No items in this list."
  },
  "popup_EmptyListToAllItemsMsg": {
    "message": "Show $1all items$2 instead?"
  }
}

**/