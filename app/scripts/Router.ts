///<reference path="Reference.ts"/>
 module AngularAttack {
    // interface IRouter {
    //     initialize: ($stateProvider, $urlRouteProvider) => void;
    // }
     export class Router implements AngularAttack.IRouter {
        initialize($stateProvider, $urlRouteProvider) {
            $urlRouteProvider.otherwise("/departments");
            $stateProvider
                //region common navigation
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


            //endregion
        }
    }
}