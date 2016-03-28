app.controller('MovieslistCtrl', function($scope, MoviesService, $ionicPopup, $ionicListDelegate, $ionicModal, $ionicSlideBoxDelegate) {
    $scope.data = MoviesService.data;

    $scope.removeMovie = function(imdbID) {
        var confirmPopup = $ionicPopup.confirm({
            title: MoviesService.getMovieTitle(imdbID),
            template: 'Are you sure you want to remove movie from list?',
            okType: 'button-assertive'
        });

        confirmPopup.then(function(res) {
            if (res) {
                MoviesService.removeMovie(imdbID);
            } else {
                $ionicListDelegate.closeOptionButtons();
            }
        });
    }

    $scope.addMovie = function(movie) {
        if (movie && movie.title) {
            MoviesService.addMovie(movie.title);
            $scope.closeModal('addMovie');
            movie.title = '';
        }
    }

    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
    }

    $ionicModal.fromTemplateUrl('/views/wizard/wizard-modal.html', {
        scope: $scope,
        id: 'wizard',
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalWizard = modal;
    })

    $ionicModal.fromTemplateUrl('movie-add-modal.html', {
        scope: $scope,
        id: 'addMovie',
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalAddMovie = modal;
    })

    $scope.openModal = function(modalId) {
        if (modalId == 'wizard')
            $scope.modalWizard.show();
        else
            $scope.modalAddMovie.show();
    }

    $scope.closeModal = function(modalId) {
        if (modalId == 'wizard')
            $scope.modalWizard.hide();
        else
            $scope.modalAddMovie.hide();
    };

    $scope.$on('$destroy', function() {
        $scope.modalAddMovie.remove();
        $scope.modalWizard.remove();
    });

});