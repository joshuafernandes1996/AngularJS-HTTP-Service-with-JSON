///<reference path="angular.js" />
var myApp = angular
            .module("myMod",[])
            .controller("myController",function($scope,myService,$log){
                var vm = this;
                myService.getPost().then(function(response){
                    $scope.posts = response.data;
                    $log.info(response);
                },function(reason){
                    $scope.error=reason.data;
                    $log.info(reason);
                });
            });

            myApp.service("myService",function($http){
                this.getPost = function(){
                    return $http.get("https://api.myjson.com/bins/14tv8e");
                }
            });
