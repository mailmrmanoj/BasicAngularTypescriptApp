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
        AngularAttackConstants.serverUrl = "http://192.168.1.165:90/app";
        return AngularAttackConstants;
    })();
    AngularAttack.AngularAttackConstants = AngularAttackConstants;
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var Models;
        (function (Models) {
            var FilterProperty = (function () {
                function FilterProperty(propertyName, operator, value1, value2, valueList) {
                    this.propertyName = propertyName;
                    this.operator = operator;
                    this.value1 = value1;
                    this.value2 = value2;
                    this.valueList = valueList;
                }
                return FilterProperty;
            })();
            Models.FilterProperty = FilterProperty;
        })(Models = Repositories.Models || (Repositories.Models = {}));
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var Models;
        (function (Models) {
            var SortingField = (function () {
                function SortingField(field, priority) {
                    this.field = field;
                    this.priority = priority;
                }
                return SortingField;
            })();
            Models.SortingField = SortingField;
        })(Models = Repositories.Models || (Repositories.Models = {}));
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var Models;
        (function (Models) {
            var PageProperties = (function () {
                function PageProperties(pageNumber, pageSize) {
                    if (pageNumber === void 0) { pageNumber = 1; }
                    if (pageSize === void 0) { pageSize = "10"; }
                    this.pageNumber = pageNumber;
                    this.pageSize = pageSize;
                }
                PageProperties.prototype.setPageProperties = function (pageNumber, pageSize) {
                    if (pageNumber) {
                        this.pageNumber = pageNumber;
                    }
                    if (pageSize) {
                        this.pageSize = pageSize;
                    }
                };
                return PageProperties;
            })();
            Models.PageProperties = PageProperties;
        })(Models = Repositories.Models || (Repositories.Models = {}));
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var Models;
        (function (Models) {
            var constants = AngularAttack.Repositories.Constants;
            var SortingProperty = (function () {
                function SortingProperty(sortingFields, sortingOperator) {
                    if (sortingFields === void 0) { sortingFields = new Array(); }
                    if (sortingOperator === void 0) { sortingOperator = constants.SortingOperator.ASCENDING_ORDER; }
                    this.sortingFields = sortingFields;
                    this.sortingOperator = sortingOperator;
                }
                SortingProperty.prototype.addSortingField = function (sortingField) {
                    this.sortingFields.push(sortingField);
                };
                SortingProperty.prototype.setSortingOperator = function (sortingOperator) {
                    this.sortingOperator = sortingOperator;
                };
                return SortingProperty;
            })();
            Models.SortingProperty = SortingProperty;
        })(Models = Repositories.Models || (Repositories.Models = {}));
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var Models;
        (function (Models) {
            var constants = AngularAttack.Repositories.Constants;
            var AdvancedFilter = (function () {
                function AdvancedFilter(includeRemovedItems, logicalOperator) {
                    if (includeRemovedItems === void 0) { includeRemovedItems = "false"; }
                    this.logicalOperator = logicalOperator;
                    this.filterProperties = new Array();
                    this.sortingProperties = new Models.SortingProperty();
                    this.pageProperties = new Models.PageProperties();
                    this.filterProperties.push(new Models.FilterProperty("isRemoved", constants.FilterOperator.EQUALS, includeRemovedItems));
                }
                AdvancedFilter.prototype.addFilterProperty = function (filterProperty) {
                    this.filterProperties.push(filterProperty);
                };
                AdvancedFilter.prototype.setLogicalOperator = function (logicalOperator) {
                    this.logicalOperator = logicalOperator;
                };
                return AdvancedFilter;
            })();
            Models.AdvancedFilter = AdvancedFilter;
        })(Models = Repositories.Models || (Repositories.Models = {}));
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Facades;
    (function (Facades) {
        var SystemFacade = (function () {
            function SystemFacade(crudService, $qService, restangularService) {
                this.crudService = crudService;
                this.$qService = $qService;
                this.restangularService = restangularService;
            }
            SystemFacade.$inject = ["CrudService", "$q", "Restangular"
            ];
            return SystemFacade;
        })();
        Facades.SystemFacade = SystemFacade;
    })(Facades = AngularAttack.Facades || (AngularAttack.Facades = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Facades;
    (function (Facades) {
        angular.module(AngularAttack.AngularAttackConstants.FACADES, []).service(AngularAttack.Facades);
    })(Facades = AngularAttack.Facades || (AngularAttack.Facades = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var Constants;
        (function (Constants) {
            var FilterOperator = (function () {
                function FilterOperator() {
                }
                FilterOperator.EQUALS = "EQUALS";
                return FilterOperator;
            })();
            Constants.FilterOperator = FilterOperator;
        })(Constants = Repositories.Constants || (Repositories.Constants = {}));
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var Constants;
        (function (Constants) {
            (function (LogicalOperator) {
                LogicalOperator[LogicalOperator["AND"] = 0] = "AND";
                LogicalOperator[LogicalOperator["OR"] = 1] = "OR";
            })(Constants.LogicalOperator || (Constants.LogicalOperator = {}));
            var LogicalOperator = Constants.LogicalOperator;
        })(Constants = Repositories.Constants || (Repositories.Constants = {}));
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var Constants;
        (function (Constants) {
            var SortingOperator = (function () {
                function SortingOperator() {
                }
                SortingOperator.DESCENDING_ORDER = "DESC";
                SortingOperator.ASCENDING_ORDER = "ASC";
                return SortingOperator;
            })();
            Constants.SortingOperator = SortingOperator;
        })(Constants = Repositories.Constants || (Repositories.Constants = {}));
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var BaseReadonlyRepository = (function () {
            function BaseReadonlyRepository(systemFacade, baseUrl, entityName, $injector) {
                var _this = this;
                this.systemFacade = systemFacade;
                this.baseUrl = baseUrl;
                this.entityName = entityName;
                this.$injector = $injector;
                var dataManager = new AngularAttack.Repositories.Helpers.DataManager(systemFacade);
                this.restangularConfigurationService = systemFacade.restangularService.withConfig(function (restangularConfigurer) {
                    restangularConfigurer.setBaseUrl(baseUrl);
                });
                this.resource = this.restangularConfigurationService.all(entityName);
                function getObjectPropertyName(propertyName) {
                    return propertyName.substring(0, propertyName.length - 2);
                }
                this.getById = function (id) {
                    var deferred = _this.systemFacade.$qService.defer();
                    _this.resource.get(id).then(function (responseData) {
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
            }
            return BaseReadonlyRepository;
        })();
        Repositories.BaseReadonlyRepository = BaseReadonlyRepository;
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var BaseCrudRepository = (function (_super) {
            __extends(BaseCrudRepository, _super);
            function BaseCrudRepository(systemFacade, baseUrl, entityName, $injector) {
                var _this = this;
                _super.call(this, systemFacade, baseUrl, entityName, $injector);
                this.systemFacade = systemFacade;
                this.baseUrl = baseUrl;
                this.entityName = entityName;
                this.add = function (entity) {
                    var deferred = _this.systemFacade.$qService.defer();
                    _this.resource.post(entity).then(function (responseData) {
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
            }
            return BaseCrudRepository;
        })(Repositories.BaseReadonlyRepository);
        Repositories.BaseCrudRepository = BaseCrudRepository;
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Repositories;
    (function (Repositories) {
        var Helpers;
        (function (Helpers) {
            var Describer = (function () {
                function Describer() {
                }
                Describer.getName = function (inputClass) {
                    var funcNameRegex = /function (.{1,})\(/;
                    var results = (funcNameRegex).exec(inputClass.constructor.toString());
                    return (results && results.length > 1) ? results[1] : "";
                };
                return Describer;
            })();
            var DataManager = (function () {
                function DataManager(systemFacader) {
                    this.systemFacader = systemFacader;
                    this.getUnRestangularData = function (data) {
                        var unRestangularisedData;
                        if (data instanceof Object) {
                        }
                        else {
                            unRestangularisedData = data;
                        }
                        return unRestangularisedData;
                    };
                }
                return DataManager;
            })();
            Helpers.DataManager = DataManager;
        })(Helpers = Repositories.Helpers || (Repositories.Helpers = {}));
    })(Repositories = AngularAttack.Repositories || (AngularAttack.Repositories = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Router = (function () {
        function Router() {
        }
        Router.prototype.initialize = function ($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/test");
            $stateProvider
                .state('test', {
                "url": "/test",
                templateUrl: 'views/default.html',
                controller: 'TestController'
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
    var Services;
    (function (Services) {
        var BaseApi = (function (_super) {
            __extends(BaseApi, _super);
            function BaseApi($injector, entityName) {
                var systemFacade = $injector.get("SystemFacade");
                _super.call(this, systemFacade, AngularAttack.AngularAttackConstants.serverUrl, entityName, $injector);
            }
            return BaseApi;
        })(AngularAttack.Repositories.BaseCrudRepository);
        Services.BaseApi = BaseApi;
    })(Services = AngularAttack.Services || (AngularAttack.Services = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Services;
    (function (Services) {
        var CrudService = (function () {
            function CrudService($q, restangular) {
                var _this = this;
                this.$q = $q;
                this.executeDeleteByFunctionWithPropertyName = function (id, propertyName, entityList, functionToExecute) {
                    var deferred = _this.$q.defer();
                    functionToExecute(id).then(function (responseData) {
                        if (responseData.status === true) {
                            _this.arrayHelper.removeItemFromArrayByPropertyName(entityList, propertyName, id);
                        }
                        deferred.resolve(responseData);
                    }, function (error) {
                        deferred.reject(error);
                    });
                    return deferred.promise;
                };
                this.restangular = restangular;
            }
            CrudService.prototype.deleteByFunctionWithPropertyName = function (id, propertyName, entityList, entityName, functionToExecute) {
                var _this = this;
                var deferred = this.$q.defer();
                var dialogOptions = {
                    closeButtonText: "No",
                    actionButtonText: "Yes",
                    headerText: "Confirm Delete",
                    bodyText: "Are you sure you want to delete this " + entityName + "?",
                    callback: function () { return _this.executeDeleteByFunctionWithPropertyName(id, propertyName, entityList, functionToExecute).then(function (responseData) {
                        deferred.resolve(responseData);
                    }, function (error) {
                        deferred.reject(error);
                    }); }
                };
                this.dialogService.showModalDialog({}, dialogOptions);
                return deferred.promise;
            };
            CrudService.$inject = ["$q", "Restangular"];
            return CrudService;
        })();
        Services.CrudService = CrudService;
    })(Services = AngularAttack.Services || (AngularAttack.Services = {}));
})(AngularAttack || (AngularAttack = {}));
var AngularAttack;
(function (AngularAttack) {
    var Services;
    (function (Services) {
        var DemoService = (function (_super) {
            __extends(DemoService, _super);
            function DemoService($injector) {
                _super.call(this, $injector, "customerAddress");
            }
            DemoService.$inject = ["$injector"];
            return DemoService;
        })(Services.BaseApi);
        Services.DemoService = DemoService;
    })(Services = AngularAttack.Services || (AngularAttack.Services = {}));
})(AngularAttack || (AngularAttack = {}));
angular.module(AngularAttack.AngularAttackConstants.SERVICES, []).service(AngularAttack.Services);
var AngularAttack;
(function (AngularAttack) {
    var Controllers;
    (function (Controllers) {
        var DemoController = (function () {
            function DemoController($scope, $document, $injector, DemoService) {
                $scope.showAdvancedSerach = true;
                $scope.clickAdvancedSearch = function () {
                    $scope.showAdvancedSerach = !$scope.showAdvancedSerach;
                };
                $scope.toTheTop = function () {
                    $document.scrollTopAnimated(0, 500).then(function () {
                        console && console.log('You just scrolled to the top!');
                    });
                };
                $scope.addTodo = function () {
                    DemoService.getById(1).then(function (data) {
                        alert(data);
                    });
                };
            }
            DemoController.$inject = ["$scope", "$document", "$injector", "DemoService"];
            return DemoController;
        })();
        Controllers.DemoController = DemoController;
    })(Controllers = AngularAttack.Controllers || (AngularAttack.Controllers = {}));
})(AngularAttack || (AngularAttack = {}));
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
            var dependencies = [AngularAttack.AngularAttackConstants.DIRECTIVES, , AngularAttack.AngularAttackConstants.FACADES, AngularAttack.AngularAttackConstants.SERVICES, AngularAttack.AngularAttackConstants.CONTROLLERS, "restangular", "ui.router"];
            this.module = angular.module(AngularAttack.AngularAttackConstants.MODULE, dependencies);
            var router = new AngularAttack.Router();
            var bootstraper = new AngularAttack.Bootstrapper(this.module, router);
            bootstraper.bootstrap();
        }
        return App;
    })();
    AngularAttack.App = App;
    ;
    new App();
})(AngularAttack || (AngularAttack = {}));
angular.module(AngularAttack.AngularAttackConstants.CONTROLLERS, []).controller(AngularAttack.Controllers);
//# sourceMappingURL=main.js.map