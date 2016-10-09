var app = angular.module('nitroApp',[]);

app.controller('itemsController',function($scope,$http){  
    $http.get('products.json').success(function(data){
        $scope.itemList = data.result;
    });

   $scope.sortByRating = "rating"
});


app.controller('ratingController',function($scope,$http){  
    $scope.stars = 3;
    $scope.getStars = function(num){
    	return new Array(num);
    }
});



