///<reference path="angular.js" />
var myApp = angular
            .module("myMod",[])
            .controller("myController",function($scope,$http,$log){
                var vm = this;
                $http.get("https://api.myjson.com/bins/14tv8e").then(function(response){
                    $scope.posts = response.data;
                    $log.info(response);
                },function(reason){
                    $scope.error=reason.data;
                    $log.info(reason);
                });
            });
