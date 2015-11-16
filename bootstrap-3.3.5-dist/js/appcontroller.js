

//this module defines our application 
var myApp = angular.module('myApp' ,[])
//this intializes controller
//$scope is the owner of all variables and functions in a given controller 



 // Service definition
    myApp.controller('myUsers', function($scope){
        $scope.users = [
                   {
    name: "Mike",
    age: 12,
    img_url: 'http://placehold.it/150x150'
  },
  {
    name: "Joan",
    age: 25,
    img_url: 'http://placehold.it/150x150'
  },
  {
    name: "Princeton",
    age: 41,
    img_url: 'http://placehold.it/150x150'
  },
  {
    name: "Billy",
    age: 9,
    img_url: 'http://placehold.it/150x150'
  },
  {
    name: "Angela",
    age: 32,
    img_url: 'http://placehold.it/150x150'
  },
  {
    name: "Max",
    age: 23,
    img_url: 'http://placehold.it/150x150'
  },
  {
    name: "Michelle",
    age: 70,
    img_url: 'http://placehold.it/150x150'
  },
  {
    name: "Kate",
    age: 21,
    img_url: 'http://placehold.it/150x150'
  }









                 ];   
    
    });