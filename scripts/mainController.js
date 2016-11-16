

var app = angular.module('taskApp', []);

app.controller('taskCtrl', ['$scope', function ($scope) {
  $scope.taskBoard = [];
  $scope.cardItem = [];
  var cardcount = 0;
  cardcount = cardcount + 1;
  $scope.createTask = function () {
    $scope.taskBoard.push({});
    $scope.count += 1;
  };
  $scope.addCardItem = function () {
    $scope.cardItem.push({ count: cardcount });
  }
}]);

app.controller('commentCtrl', ['$scope', function ($scope) {
  var currentDate = new Date();
  var formatedDate = currentDate.getMonth() + 1 + '/' + currentDate.getDate() + '/' + currentDate.getFullYear();
  $scope.comments = [];

  $scope.addComment = function () {
    console.log('Comment added');
    $scope.comments.push({ text: $scope.commentText, timeStamp: formatedDate });
    $scope.commentText = '';
  }
}]);



