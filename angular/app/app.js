var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

  $scope.removeNinja = function(ninja){
  var removedNinja = $scope.ninjas.indexOf(ninja);
  $scope.ninjas.splice(removedNinja, 1);
 }

 $scope.addNinja = function(){
   $scope.ninjas.push({
     name: $scope.newninja.name,
     belt: $scope.newninja.belt,
     rate: parseInt($scope.newninja.rate),
     available: true
   });

   $scope.newninja.name ="";
   $scope.newninja.belt ="";
   $scope.newninja.rate ="";
 };


 $scope.ninjas = [
   {
    name: "nani",
    belt: "green",
    rate: 50,
    available: true,
    thumb: "content/img/nag.jpg"
  },

  {
   name: "tiger",
   belt: "yellow",
   rate: 30,
   available: true,
   thumb: "content/img/Maheshbabu.jpg"
 },

 {
  name: "lion",
  belt: "orange",
  rate: 10,
  available: false,
  thumb: "content/img/Prabhas.png"
},

{
 name: "jack",
 belt: "black",
 rate: 1000,
 available: true,
 thumb: "content/img/Prabhas.jpg"
}
];

}]);
