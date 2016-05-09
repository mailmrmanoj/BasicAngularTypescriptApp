///<reference path="Reference.ts"/>
module AngularAttack {
    "use strict";
    // import commonConstants = Reactore.Common.Constants.CommonConstants;
    // import globalConstants = Reactore.Constants.GlobalConstants;
    export class App {
        module: ng.IModule;

        constructor() {
            var dependencies = [AngularAttack.AngularAttackConstants.DIRECTIVES, AngularAttack.AngularAttackConstants.CONTROLLERS, AngularAttack.AngularAttackConstants.SERVICES,"restangular","ui.router"];

            //dependencies = dependencies.concat(window.reactoreConfigurations.moduleConfig.dependencies);
            this.module = angular.module(AngularAttack.AngularAttackConstants.MODULE, dependencies);
            var router = new AngularAttack.Router();
            var bootstraper = new AngularAttack.Bootstrapper(this.module, router);
            bootstraper.bootstrap();
            this.setModuleUrlConstants();
        }
        setModuleUrlConstants = () => {
            $.ajax({
                url: AngularAttack.AngularAttackConstants.CONFIG_JSON_FILE_PATH,
                dataType: "json",
                async: false,
                success: (json) => {
                    this.module.value(AngularAttack.AngularAttackConstants.CONFIG_CONSTANT, json);
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    };
    new App();
}
