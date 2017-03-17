
var module = angular.module("myApp", []);
module.controller("calcCtrl", function($scope){

    $scope.result=0;
    var result_temp=0;;

    $scope.calculate =function(){
        $scope.result = result_temp;
    }

    $scope.add =function(){
        $scope.operator="+";
        result_temp = parseInt($scope.arg1) + parseInt($scope.arg2);
        //console.log(result_temp);
    }

    $scope.sub =function(){
        $scope.operator="-";
        result_temp = parseInt($scope.arg1) - parseInt($scope.arg2);
        //console.log(result_temp);
    }

});
