///<reference path="Reference.ts"/>
module AngularAttack.Controllers {
    import globalConstants = AngularAttack.AngularAttackConstants;
    export class DemoController {
        static $inject = ["$scope", "$document"];

        constructor($scope, $document) {
            $scope.showAdvancedSerach = true;
            $scope.clickAdvancedSearch = () => {
                $scope.showAdvancedSerach = !$scope.showAdvancedSerach;
            };
            $scope.toTheTop = function () {
                $document.scrollTopAnimated(0, 500).then(function () {
                    console && console.log('You just scrolled to the top!');
                });
            }

        }
    }
}