///<reference path="Reference.ts"/>
 module AngularAttack {
    // interface IRouter {
    //     initialize: ($stateProvider, $urlRouteProvider) => void;
    // }
     export class Router implements AngularAttack.IRouter {
        initialize($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/test");
            $stateProvider
                //region common navigation
                .state('test', {
                    "url": "/test",
                    templateUrl: 'views/default.html',
                    controller: 'TestController'
                 
                })       
                      //endregion
        }
    }
}
