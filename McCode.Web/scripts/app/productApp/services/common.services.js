var Application;
(function (Application) {
    var Common;
    (function (Common) {
        Common.appService = angular.module('common.service', ['ngResource']);
    })(Common = Application.Common || (Application.Common = {}));
})(Application || (Application = {}));
