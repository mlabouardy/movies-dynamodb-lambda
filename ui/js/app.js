angular.module('app', [])
  .controller('MainCtrl', function($scope, $http){
    var self = $scope;
    var apiUrl = 'https://kbouwyuvoc.execute-api.us-east-1.amazonaws.com/prod/movies';

    self.movies = [];
    self.movie = {};
    self.error = '';

    self.getMovies = function(){
      $http.get(apiUrl).then(function(res){
        self.movies = res.data;
      })
    }

    self.create = function(){
      $http.post(apiUrl, self.movie).then(function(res){
        self.getMovies();
        self.movie = '';
        self.error = '';
      }, function(err){
        self.error = err.data.status;
      });
    }

    self.getMovies();
  });