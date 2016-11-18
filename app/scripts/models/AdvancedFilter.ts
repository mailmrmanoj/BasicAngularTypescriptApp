///<reference path="Reference.ts"/>
module AngularAttack.Repositories.Models {
    import constants = AngularAttack.Repositories.Constants;
    export class AdvancedFilter {
        filterProperties: Array<FilterProperty>;
        sortingProperties: SortingProperty;
        pageProperties: PageProperties;
        attributes: Array<FilterProperty>;

        constructor(includeRemovedItems: string = "false", public logicalOperator?: constants.LogicalOperator) {
            this.filterProperties = new Array<FilterProperty>();
            this.sortingProperties = new SortingProperty();
            this.pageProperties = new PageProperties();
            this.filterProperties.push(new FilterProperty("isRemoved", constants.FilterOperator.EQUALS, includeRemovedItems));
        }

        addFilterProperty(filterProperty: FilterProperty): void {
            this.filterProperties.push(filterProperty);
        }


        setLogicalOperator(logicalOperator: constants.LogicalOperator): void {
            this.logicalOperator = logicalOperator;
        }
    }
}