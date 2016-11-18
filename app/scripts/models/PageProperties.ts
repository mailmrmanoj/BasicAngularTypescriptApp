///<reference path="Reference.ts"/>
/// "@author:santhi"
module AngularAttack.Repositories.Models {
    export class PageProperties {
        constructor(public pageNumber: number = 1, public pageSize: string = "10") {
        }
        setPageProperties(pageNumber?: number, pageSize?: string) {
            if (pageNumber) {
                this.pageNumber = pageNumber;
            }
            if (pageSize) {
                this.pageSize = pageSize;
            }
        }
    }
}