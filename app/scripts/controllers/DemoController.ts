///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class DemoController {
        static $inject = ["$scope", "$document", "$injector", "DemoService"];

        constructor($scope, $document, $injector, DemoService) {
            $scope.showAdvancedSerach = true;
            $scope.clickAdvancedSearch = () => {
                $scope.showAdvancedSerach = !$scope.showAdvancedSerach;
            };
            $scope.toTheTop = function () {
                $document.scrollTopAnimated(0, 500).then(function () {
                    console && console.log('You just scrolled to the top!');
                });
            }
            $scope.addTodo = () => {
                DemoService.getById(1).then((data) => {
                    alert(data);
                })
            }

        }
    }
}