///<reference path="Reference.ts"/>
module AngularAttack.Repositories.Models {
    import constants = AngularAttack.Repositories.Constants;
    export class SortingProperty {
        constructor(public sortingFields: Array<SortingField> = new Array<SortingField>(), public sortingOperator: constants.SortingOperator = constants.SortingOperator.ASCENDING_ORDER) {
        }
        addSortingField(sortingField: SortingField): void {
            this.sortingFields.push(sortingField);
        }
        setSortingOperator(sortingOperator: constants.SortingOperator) {
            this.sortingOperator = sortingOperator;
        }
    }
}