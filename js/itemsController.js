var app = angular.module('fusionApp',[]);

app.controller('itemCtrl',['$scope','$http',function($scope,$http){
    $http.get('productsData.json').success(function(data){
        if(data.products.category == 0){
             $scope.category = "Apparel";
        }
        else{
              $scope.category = "Accessories";
        }
        
        $scope.productList = data.products;
    })
}]);
