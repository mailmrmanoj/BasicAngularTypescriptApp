///<reference path="Reference.ts"/>
module AngularAttack.Facades {
    import services = AngularAttack.Services;
    export interface ISystemFacade {
        crudService: services.CrudService;
        $qService: ng.IQService;
        restangularService: any;
    }
    export class SystemFacade implements ISystemFacade {
        static $inject = ["CrudService", "$q", "Restangular"
        ];
        constructor(public crudService: AngularAttack.Services.CrudService,
            public $qService: ng.IQService, public restangularService) {
        }
    }
}

