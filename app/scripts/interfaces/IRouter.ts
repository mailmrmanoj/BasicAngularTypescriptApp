module AngularAttack {
    export interface IRouter {
        initialize:($stateProvider, $urlRouteProvider) => void;
    }
}