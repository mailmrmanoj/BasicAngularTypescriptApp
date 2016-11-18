///<reference path="Reference.ts"/>
module AngularAttack.Services {
    import constants = AngularAttack;
    import facades = AngularAttack.Facades;
    export class BaseApi extends AngularAttack.Repositories.BaseCrudRepository {
        constructor($injector, entityName: string) {
            var systemFacade = $injector.get("SystemFacade")
            super(systemFacade, AngularAttackConstants.serverUrl, entityName, $injector);
        }
    }
}