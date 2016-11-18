/// <reference path="../types/jquery/jquery.d.ts" />
/// <reference path="../types/angularjs/angular.d.ts" />
/// <reference path="../types/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../types/jasmine/jasmine.d.ts" />
/// <reference path="../types/jqueryui/jqueryui.d.ts" />
/// <reference path="../types/lodash/lodash.d.ts" />
/// <reference path="../types/restangular/restangular.d.ts" />
/// <reference path="../types/moment/moment.d.ts" />
/// <reference path="../types/moment-timezone/moment-timezone.d.ts" />
/// <reference path="../types/leaflet/leaflet.d.ts" />
/// <reference path="scripts/Misc.d.ts" />
declare module AngularAttack {
    class AngularAttackConstants {
        static MODULE: string;
        static DIRECTIVES: string;
        static CONTROLLERS: string;
        static SERVICES: string;
        static FACTORIES: string;
        static INTERCEPTORS: string;
        static FILTERS: string;
        static FACADES: string;
        static CONFIG_JSON_FILE_PATH: string;
        static CONFIG_CONSTANT: string;
        static serverUrl: string;
    }
}
declare module AngularAttack.Repositories.Models {
    import constants = AngularAttack.Repositories.Constants;
    class FilterProperty {
        propertyName: string;
        operator: constants.FilterOperator;
        value1: any;
        value2: any;
        valueList: Array<any>;
        constructor(propertyName: string, operator: constants.FilterOperator, value1?: any, value2?: any, valueList?: Array<any>);
    }
}
declare module AngularAttack.Repositories.Models {
    class SortingField {
        field: string;
        priority: number;
        constructor(field: string, priority: number);
    }
}
declare module AngularAttack.Repositories.Models {
    class PageProperties {
        pageNumber: number;
        pageSize: string;
        constructor(pageNumber?: number, pageSize?: string);
        setPageProperties(pageNumber?: number, pageSize?: string): void;
    }
}
declare module AngularAttack.Repositories.Models {
    import constants = AngularAttack.Repositories.Constants;
    class SortingProperty {
        sortingFields: Array<SortingField>;
        sortingOperator: constants.SortingOperator;
        constructor(sortingFields?: Array<SortingField>, sortingOperator?: constants.SortingOperator);
        addSortingField(sortingField: SortingField): void;
        setSortingOperator(sortingOperator: constants.SortingOperator): void;
    }
}
declare module AngularAttack.Repositories.Models {
    import constants = AngularAttack.Repositories.Constants;
    class AdvancedFilter {
        logicalOperator: constants.LogicalOperator;
        filterProperties: Array<FilterProperty>;
        sortingProperties: SortingProperty;
        pageProperties: PageProperties;
        attributes: Array<FilterProperty>;
        constructor(includeRemovedItems?: string, logicalOperator?: constants.LogicalOperator);
        addFilterProperty(filterProperty: FilterProperty): void;
        setLogicalOperator(logicalOperator: constants.LogicalOperator): void;
    }
}
declare module AngularAttack.Facades {
    import services = AngularAttack.Services;
    interface ISystemFacade {
        crudService: services.CrudService;
        $qService: ng.IQService;
        restangularService: any;
    }
    class SystemFacade implements ISystemFacade {
        crudService: AngularAttack.Services.CrudService;
        $qService: ng.IQService;
        restangularService: any;
        static $inject: string[];
        constructor(crudService: AngularAttack.Services.CrudService, $qService: ng.IQService, restangularService: any);
    }
}
declare module AngularAttack.Facades {
}
declare module AngularAttack.Repositories.Constants {
    class FilterOperator {
        static EQUALS: string;
    }
}
declare module AngularAttack.Repositories.Constants {
    enum LogicalOperator {
        AND = 0,
        OR = 1,
    }
}
declare module AngularAttack.Repositories.Constants {
    class SortingOperator {
        static DESCENDING_ORDER: string;
        static ASCENDING_ORDER: string;
    }
}
declare module AngularAttack.Repositories {
    class BaseReadonlyRepository {
        systemFacade: any;
        baseUrl: string;
        entityName: string;
        $injector: any;
        resource: any;
        restangularConfigurationService: any;
        getById: (id: number) => ng.IPromise<any>;
        constructor(systemFacade: any, baseUrl: string, entityName: string, $injector: any);
    }
}
declare module AngularAttack.Repositories {
    class BaseCrudRepository extends BaseReadonlyRepository {
        systemFacade: any;
        baseUrl: string;
        entityName: string;
        add: (entity: any) => ng.IPromise<any>;
        addWithUrl: (entity: any, url: String) => ng.IPromise<any>;
        update: (entity: any, url: String) => ng.IPromise<any>;
        remove: (url: String) => ng.IPromise<any>;
        constructor(systemFacade: any, baseUrl: string, entityName: string, $injector: any);
    }
}
declare module AngularAttack.Repositories.Helpers {
    class DataManager {
        systemFacader: any;
        getUnRestangularData: (data) => any;
        resolveData: (instance, apiMethod, parameters: Array<any>) => ng.IPromise<any>;
        resolveDataForFilter: (instance: any, apiMethod: any, parameters: Array<any>) => ng.IPromise<any>;
        clearCache: () => ng.IPromise<any>;
        constructor(systemFacader: any);
    }
}
declare module AngularAttack {
    class Router implements AngularAttack.IRouter {
        initialize($stateProvider: any, $urlRouteProvider: any): void;
    }
}
declare module AngularAttack {
    class Bootstrapper implements AngularAttack.IBootstraper {
        module: ng.IModule;
        router: AngularAttack.IRouter;
        constructor(module: ng.IModule, router: AngularAttack.IRouter);
        bootstrap(): void;
        initRestangular(RestangularProvider: any): void;
        initializeConfig(RestangularProvider: restangular.IProvider, $stateProvider: any, $urlRouterProvider: any, $httpProvider: ng.IHttpProvider): void;
    }
}
declare module AngularAttack.Services {
    class BaseApi extends AngularAttack.Repositories.BaseCrudRepository {
        constructor($injector: any, entityName: string);
    }
}
declare module AngularAttack.Services {
    class CrudService {
        $q: ng.IQService;
        restangular: restangular.IService;
        private dialogService;
        private toastr;
        private arrayHelper;
        static $inject: string[];
        constructor($q: ng.IQService, restangular: restangular.IService);
        deleteByFunctionWithPropertyName(id: any, propertyName: string, entityList: any[], entityName: String, functionToExecute: any): ng.IPromise<any>;
        executeDeleteByFunctionWithPropertyName: (id: number, propertyName: string, entityList: any[], functionToExecute: any) => ng.IPromise<{}>;
    }
}
declare module AngularAttack.Services {
    class DemoService extends BaseApi {
        static $inject: string[];
        constructor($injector: any);
    }
}
declare module AngularAttack.Controllers {
    class DemoController {
        static $inject: string[];
        constructor($scope: any, $document: any, $injector: any, DemoService: any);
    }
}
declare module AngularAttack.Directives {
    class demoDirective {
        constructor();
    }
}
declare module AngularAttack {
    class App {
        module: ng.IModule;
        constructor();
    }
}
declare module AngularAttack {
    interface IBootstraper {
        bootstrap: () => void;
    }
}
declare module AngularAttack {
    interface IRouter {
        initialize: ($stateProvider, $urlRouteProvider) => void;
    }
}
