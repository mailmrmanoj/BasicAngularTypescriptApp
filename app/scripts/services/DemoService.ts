///<reference path="Reference.ts"/>
module AngularAttack.Services {
    export class DemoService extends BaseApi {
        static $inject = ["$injector"];
        constructor($injector) {
            super($injector, "customerAddress");
        }

    }
}