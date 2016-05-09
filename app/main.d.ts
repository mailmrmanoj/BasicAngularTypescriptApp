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
declare module AngularAttack.Controllers {
    class DemoController {
        static $inject: string[];
        constructor($scope: any, $document: any);
    }
}
declare module AngularAttack.Services {
    class DemoService {
        static $inject: string[];
        constructor();
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
        setModuleUrlConstants: () => void;
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
