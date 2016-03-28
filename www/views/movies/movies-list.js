app.controller('MovieslistCtrl', function ($scope, MoviesService,$ionicPopup,$ionicListDelegate){
    $scope.data = MoviesService.data;
    
    $scope.removeMovie = function(imdbID){        
        var confirmPopup = $ionicPopup.confirm({
            title: MoviesService.getMovieTitle(imdbID),
            template: 'Are you sure you want to remove movie from list?'
        });

        confirmPopup.then(function(res) {
            if(res) {
                MoviesService.removeMovie(imdbID);
            } else {
                $ionicListDelegate.closeOptionButtons();
            }
        });
    }
  }
);