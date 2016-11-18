///<reference path="Reference.ts"/>
module AngularAttack.Repositories.Models {
    import constants = AngularAttack.Repositories.Constants;
    export class FilterProperty {
        constructor(public propertyName: string, public operator: constants.FilterOperator, public value1?: any, public value2?: any, public valueList?: Array<any>) {
        }
    }
}