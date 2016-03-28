app.factory('MoviesService',function(){
    return new (function()
        {
            var service = this;
            service.data = {};
            service.data.movies = [
                {
                    "title":"The Hateful Eight",
                    "release_date": "2015-12-25",
                    "vote_averadge": "7.12",
                    "vote_count": "497",
                    "imdbID":"tt3460252"
                },
                {
                    "title":"The Revenant",
                    "release_date": "2015-12-27",
                    "vote_averadge": "7.2",
                    "vote_count": "567",
                    "imdbID":"tt1663202"
                },
                {
                    "title":"Batman",
                    "release_date": "1989-6-23",
                    "vote_averadge": "7.6",
                    "vote_count": "258,048",
                    "imdbID":"tt0096895"
                },    
            ];
            
            service.removeMovie = function (imdbID){
                angular.forEach(service.data.movies, function(movie,index){
                 if(movie.imdbID==imdbID) 
                    service.data.movies.splice(index,1);  
                });
            };
            
            service.getMovieTitle = function (imdbID){
               var title = "";
               angular.forEach(service.data.movies, function(movie,index){
                 if(movie.imdbID==imdbID) 
                    title =  movie.title;  
                });
                return title;
            };
        }
        )();
}
);