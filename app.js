
var module = angular.module("myApp", []);
module.controller("MainCtrl", Main);

function Main($scope) {
            
    var d = new Date();
    $scope.hourOfDay = 18;
    $scope.currentTime = d.toTimeString();
    //console.log("main called");
    $scope.updateTime = function(){
        var d = new Date();
        $scope.currentTime = d.toTimeString();
    }
    $scope.nameEnter = function(){
        console.log("entering name..");
    }
    $scope.rememberChange = function(){
        if($scope.remember){
            $scope.rememberValue = "Yes";
        }else{
            $scope.rememberValue = "No";
        }
    }
    $scope.datechange = function(){
        console.log($scope.todayDate);
    }

}