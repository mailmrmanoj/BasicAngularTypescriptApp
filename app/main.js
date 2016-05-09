var AngularAttack;
(function (AngularAttack) {
    var AngularAttackConstants = (function () {
        function AngularAttackConstants() {
        }
        AngularAttackConstants.MODULE = "angular.attack";
        AngularAttackConstants.DIRECTIVES = "angular.attack.directives";
        AngularAttackConstants.CONTROLLERS = "angular.attack.controllers";
        AngularAttackConstants.SERVICES = "angular.attack.services";
        AngularAttackConstants.FACTORIES = "angular.attack.factories";
        AngularAttackConstants.INTERCEPTORS = "angular.attack.interceptors";
        AngularAttackConstants.FILTERS = "angular.attack.filters";
        AngularAttackConstants.FACADES = "angular.attack.facades";
        AngularAttackConstants.CONFIG_JSON_FILE_PATH = "scripts/config.json";
        AngularAttackConstants.CONFIG_CONSTANT = "configConstant";
        return AngularAttackConstants;
    })();
    AngularAttack.AngularAttackConstants = AngularAttackConstants;
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Router = (function () {
        function Router() {
        }
        Router.prototype.initialize = function ($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/departments");
            $stateProvider
                .state('locationSelectorSample', {
                "url": "/locationSelectorSample",
                templateUrl: 'views/locationSelectorSample.html',
                controller: 'LocationSelectorSampleController'
            })
                .state('notificationList', {
                "url": "/notifications",
                templateUrl: 'views/notifications/notificationListKendo.html',
                controller: 'NotificationKendoListController'
            })
                .state('unAuthorizeView', {
                "url": "/unAuthorizeView",
                templateUrl: 'views/UnAuthorizedAccess.html',
                controller: 'NotificationListController'
            }).state('moduleStatus', {
                "url": "/moduleStatus",
                templateUrl: 'views/monitoring/moduleStatusList.html',
                controller: 'ModuleStatusListController'
            });
        };
        return Router;
    })();
    AngularAttack.Router = Router;
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Bootstrapper = (function () {
        function Bootstrapper(module, router) {
            this.module = module;
            this.router = router;
        }
        Bootstrapper.prototype.bootstrap = function () {
            var _this = this;
            this.module.config(["RestangularProvider", "$stateProvider", "$urlRouterProvider", "$httpProvider", function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
                    return _this.initializeConfig(RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider);
                }]);
        };
        Bootstrapper.prototype.initRestangular = function (RestangularProvider) {
            RestangularProvider.setParentless(true, []);
            if (localStorage.getItem("apiKey")) {
                RestangularProvider.setDefaultHeaders({ apiKey: localStorage.getItem("apiKey") });
            }
            else {
                location.href = "index.html#/home";
            }
        };
        Bootstrapper.prototype.initializeConfig = function (RestangularProvider, $stateProvider, $urlRouterProvider, $httpProvider) {
            this.initRestangular(RestangularProvider);
            this.router.initialize($stateProvider, $urlRouterProvider);
        };
        return Bootstrapper;
    })();
    AngularAttack.Bootstrapper = Bootstrapper;
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var DemoController = (function () {
            function DemoController($scope, $document) {
                $scope.showAdvancedSerach = true;
                $scope.clickAdvancedSearch = function () {
                    $scope.showAdvancedSerach = !$scope.showAdvancedSerach;
                };
                $scope.toTheTop = function () {
                    $document.scrollTopAnimated(0, 500).then(function () {
                        console && console.log('You just scrolled to the top!');
                    });
                };
            }
            DemoController.$inject = ["$scope", "$document"];
            return DemoController;
        })();
        Controllers.DemoController = DemoController;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Services;
    (function (Services) {
        var DemoService = (function () {
            function DemoService() {
            }
            DemoService.$inject = ["$injector"];
            return DemoService;
        })();
        Services.DemoService = DemoService;
    })(Services = AngularAttack.Services || (AngularAttack.Services = {}));
})(AngularAttack || (AngularAttack = {}));
angular.module(AngularAttack.AngularAttackConstants.SERVICES, []).service(AngularAttack.Services);
var AngularAttack;
(function (AngularAttack) {
    var Directives;
    (function (Directives) {
        var demoDirective = (function () {
            function demoDirective() {
                return {
                    restrict: "E",
                    template: '<div class="nopadding col-xs-12 col-sm-4 color-gray record-show">    Showing <label class="record-color-label">{{(paginationSettings.currentPage*paginationSettings.pageSize)-(paginationSettings.pageSize-1)}}-{{(paginationSettings.currentPage*paginationSettings.pageSize)>paginationSettings.totalItems?paginationSettings.totalItems:(paginationSettings.currentPage*paginationSettings.pageSize)}}</label> of <label class="record-color-label">{{paginationSettings.totalItems}}</label> records</div>'
                };
            }
            return demoDirective;
        })();
        Directives.demoDirective = demoDirective;
    })(Directives = AngularAttack.Directives || (AngularAttack.Directives = {}));
})(AngularAttack || (AngularAttack = {}));
angular.module(AngularAttack.AngularAttackConstants.DIRECTIVES, []).controller(AngularAttack.Directives);
var AngularAttack;
(function (AngularAttack) {
    "use strict";
    var App = (function () {
        function App() {
            var _this = this;
            this.setModuleUrlConstants = function () {
                $.ajax({
                    url: AngularAttack.AngularAttackConstants.CONFIG_JSON_FILE_PATH,
                    dataType: "json",
                    async: false,
                    success: function (json) {
                        _this.module.value(AngularAttack.AngularAttackConstants.CONFIG_CONSTANT, json);
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            };
            var dependencies = [AngularAttack.AngularAttackConstants.DIRECTIVES, AngularAttack.AngularAttackConstants.CONTROLLERS, AngularAttack.AngularAttackConstants.SERVICES, "restangular", "ui.router"];
            this.module = angular.module(AngularAttack.AngularAttackConstants.MODULE, dependencies);
            var router = new AngularAttack.Router();
            var bootstraper = new AngularAttack.Bootstrapper(this.module, router);
            bootstraper.bootstrap();
            this.setModuleUrlConstants();
        }
        return App;
    })();
    AngularAttack.App = App;
    ;
    new App();
})(AngularAttack || (AngularAttack = {}));
angular.module(AngularAttack.AngularAttackConstants.CONTROLLERS, []).controller(AngularAttack.Controllers);
//# sourceMappingURL=main.js.map