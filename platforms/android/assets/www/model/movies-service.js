app.factory('MoviesService', function() {
    return new (function() {
        var service = this;
        service.data = {};
        service.data.movies = [
            {
                "title": "The Hateful Eight",
                "release_date": "2015-12-25",
                "vote_averadge": "7.12",
                "vote_count": "497",
                "imdbID": "tt3460252"
            },
            {
                "title": "The Revenant",
                "release_date": "2015-12-27",
                "vote_averadge": "7.2",
                "vote_count": "567",
                "imdbID": "tt1663202"
            },
            {
                "title": "Batman",
                "release_date": "1989-6-23",
                "vote_averadge": "7.6",
                "vote_count": "258,048",
                "imdbID": "tt0096895"
            },

// http://imdb.wemakesites.net/api/nm0000151
            { "title": "Cold Warriors", "release_date": "2016", "imdbID": "tt4022670" },
            { "title": "Ben-Hur", "release_date": "2016", "imdbID": "tt2638144" },
            { "title": "Now You See Me 2", "release_date": "2016", "imdbID": "tt3110958" },
            { "title": "Going in Style", "release_date": "2016", "imdbID": "tt2568862" },
            { "title": "The Story of God", "release_date": "2016", "imdbID": "tt5242220" },
            { "title": "London Has Fallen", "release_date": "2016", "imdbID": "tt3300542" },
            { "title": "Madam Secretary", "release_date": "2015", "imdbID": "tt3501074" },
            { "title": "Momentum", "release_date": "2015\/I", "imdbID": "tt3181776" },
            { "title": "Ted 2", "release_date": "2015", "imdbID": "tt2637276" },
            { "title": "Last Knights", "release_date": "2015", "imdbID": "tt24934860" },
            { "title": "Yo Gabba Gabba!", "release_date": "2015", "imdbID": "tt08775121" },
            { "title": "Dolphin Tale 2", "release_date": "2014", "imdbID": "tt29784622" },
            { "title": "5 Flights Up", "release_date": "2014", "imdbID": "tt29335443" },
            { "title": "Lucy", "release_date": "2014\/I", "imdbID": "tt28727324" },
            { "title": "Wish Wizard", "release_date": "2014", "imdbID": "tt17098355" },
            { "title": "Transcendence", "release_date": "2014\/I", "imdbID": "tt22097646" },
            { "title": "The Lego Movie", "release_date": "2014", "imdbID": "tt14900177" },
            { "title": "Last Vegas", "release_date": "2013", "imdbID": "tt12049758" },
            { "title": "Now You See Me", "release_date": "2013\/I", "imdbID": "tt16703459" },
            { "title": "Oblivion", "release_date": "2013\/I", "imdbID": "tt14830130" },
            { "title": "Olympus Has Fallen", "release_date": "2013", "imdbID": "tt23027551" },
            { "title": "The Dark Knight Rises", "release_date": "2012", "imdbID": "tt13458362" },
            { "title": "The Magic of Belle Isle", "release_date": "2012", "imdbID": "tt18396543" },
            { "title": "Dolphin Tale", "release_date": "2011", "imdbID": "tt15643494" },
            { "title": "Conan the Barbarian", "release_date": "2011", "imdbID": "tt08164625" },
            { "title": "RED", "release_date": "2010", "imdbID": "tt12455266" },
            { "title": "30 for 30", "release_date": "2010", "imdbID": "tt14084307" },
            { "title": "Invictus", "release_date": "2009", "imdbID": "tt10575008" },
            { "title": "The Maiden Heist", "release_date": "2009", "imdbID": "tt11078609" },
            { "title": "Thick as Thieves", "release_date": "2009\/I", "imdbID": "tt11127820" },
            { "title": "The Dark Knight", "release_date": "2008", "imdbID": "tt04685691" },
            { "title": "Wanted", "release_date": "2008", "imdbID": "tt04934642" },
            { "title": "A Raisin in the Sun", "release_date": "2008", "imdbID": "tt08084353" },
            { "title": "The Bucket List", "release_date": "2007", "imdbID": "tt08252324" },
            { "title": "Feast of Love", "release_date": "2007", "imdbID": "tt08000275" },
            { "title": "Gone Baby Gone", "release_date": "2007", "imdbID": "tt04526236" },
            { "title": "Evan Almighty", "release_date": "2007", "imdbID": "tt04130997" },
            { "title": "The Contract", "release_date": "2006", "imdbID": "tt04459468" },
            { "title": "10 Items or Less", "release_date": "2006", "imdbID": "tt04996039" },
            { "title": "Lucky Number Slevin", "release_date": "2006", "imdbID": "tt04252100" },
            { "title": "Magnificent Desolation: Walking on the Moon 3D", "release_date": "2005", "imdbID": "tt04016231" },
            { "title": "An Unfinished Life", "release_date": "2005", "imdbID": "tt03502612" },
            { "title": "Batman Begins", "release_date": "2005", "imdbID": "tt04503923" },
            { "title": "War of the Worlds", "release_date": "2005", "imdbID": "tt04073044" },
            { "title": "Batman Begins", "release_date": "2005", "imdbID": "tt03727845" },
            { "title": "Edison", "release_date": "2005", "imdbID": "tt03899576" },
            { "title": "Unleashed", "release_date": "2005", "imdbID": "tt03422587" },
            { "title": "Slavery and the Making of America", "release_date": "2005", "imdbID": "tt04722518" },
            { "title": "Million Dollar Baby", "release_date": "2004", "imdbID": "tt04051599" },
            { "title": "A Remarkable Promise", "release_date": "2004", "imdbID": "tt04576100" },
            { "title": "The Big Bounce", "release_date": "2004", "imdbID": "tt03158241" },
            { "title": "Rameses: Wrath of God or Man?", "release_date": "2004", "imdbID": "tt10242342" },
            { "title": "Guilty by Association", "release_date": "2003", "imdbID": "tt03723113" },
            { "title": "Bruce Almighty", "release_date": "2003", "imdbID": "tt03153274" },
            { "title": "Dreamcatcher", "release_date": "2003", "imdbID": "tt02855315" },
            { "title": "Levity", "release_date": "2003", "imdbID": "tt03043286" },
            { "title": "Freedom: A History of Us", "release_date": "2003", "imdbID": "tt03611857" },
            { "title": "The Sum of All Fears", "release_date": "2002", "imdbID": "tt01641848" },
            { "title": "High Crimes", "release_date": "2002", "imdbID": "tt02577569" },
            { "title": "Along Came a Spider", "release_date": "2001", "imdbID": "tt01643340" },
            { "title": "American Masters", "release_date": "2000", "imdbID": "tt03641511" },
            { "title": "Nurse Betty", "release_date": "2000", "imdbID": "tt01715802" },
            { "title": "Under Suspicion", "release_date": "2000", "imdbID": "tt01642123" },
            { "title": "Deep Impact", "release_date": "1998", "imdbID": "tt01206474" },
            { "title": "Hard Rain", "release_date": "1998", "imdbID": "tt01206965" },
            { "title": "Amistad", "release_date": "1997", "imdbID": "tt01186076" },
            { "title": "Kiss the Girls", "release_date": "1997", "imdbID": "tt01194687" },
            { "title": "Chain Reaction", "release_date": "1996", "imdbID": "tt01158578" },
            { "title": "Moll Flanders", "release_date": "1996", "imdbID": "tt01170719" },
            { "title": "Se7en", "release_date": "1995", "imdbID": "tt01143690" },
            { "title": "Outbreak", "release_date": "1995", "imdbID": "tt01140691" },
            { "title": "The Shawshank Redemption", "release_date": "1994", "imdbID": "tt01111612" },
            { "title": "Unforgiven", "release_date": "1992", "imdbID": "tt01056953" },
            { "title": "The Power of One", "release_date": "1992", "imdbID": "tt01051594" },
            { "title": "The Savior Is Born", "release_date": "1992", "imdbID": "tt42019125" },
            { "title": "The True Story of Glory Continues", "release_date": "1991", "imdbID": "tt02507876" },
            { "title": "American Experience", "release_date": "1991", "imdbID": "tt00944167" },
            { "title": "Robin Hood: Prince of Thieves", "release_date": "1991", "imdbID": "tt01027988" },
            { "title": "The Bonfire of the Vanities", "release_date": "1990", "imdbID": "tt00991659" },
            { "title": "The Civil War", "release_date": "1990", "imdbID": "tt00987690" },
            { "title": "Glory", "release_date": "1989", "imdbID": "tt00974411" },
            { "title": "Driving Miss Daisy", "release_date": "1989", "imdbID": "tt00972392" },
            { "title": "Johnny Handsome", "release_date": "1989", "imdbID": "tt00976263" },
            { "title": "Lean on Me", "release_date": "1989", "imdbID": "tt00977224" },
            { "title": "Clean and Sober", "release_date": "1988", "imdbID": "tt00948845" },
            { "title": "Clinton and Nadine", "release_date": "1988", "imdbID": "tt00948856" },
            { "title": "Fight for Life", "release_date": "1987", "imdbID": "tt00930217" },
            { "title": "Street Smart", "release_date": "1987", "imdbID": "tt00940568" },
            { "title": "Resting Place", "release_date": "1986", "imdbID": "tt00918449" },
            { "title": "The Execution of Raymond Graham", "release_date": "1985", "imdbID": "tt00891110" },
            { "title": "The Twilight Zone", "release_date": "1985", "imdbID": "tt00886341" },
            { "title": "Great Performances", "release_date": "1985", "imdbID": "tt01598762" },
            { "title": "That Was Then... This Is Now", "release_date": "1985", "imdbID": "tt00901513" },
            { "title": "Marie", "release_date": "1985", "imdbID": "tt00895554" },
            { "title": "The Atlanta Child Murders", "release_date": "1985", "imdbID": "tt00887505" },
            { "title": "Teachers", "release_date": "1984", "imdbID": "tt00882426" },
            { "title": "Harry & Son", "release_date": "1984", "imdbID": "tt00873867" },
            { "title": "Death of a Prophet", "release_date": "1981", "imdbID": "tt01797578" },
            { "title": "The Marva Collins Story", "release_date": "1981", "imdbID": "tt00827199" },
            { "title": "Ryan's Hope", "release_date": "1981", "imdbID": "tt007255900" },
            { "title": "Texas", "release_date": "1981", "imdbID": "tt008029001" },
            { "title": "Eyewitness", "release_date": "1981", "imdbID": "tt008235302" },
            { "title": "Brubaker", "release_date": "1980", "imdbID": "tt008047403" },
            { "title": "Attica", "release_date": "1980", "imdbID": "tt008039204" },
            { "title": "Coriolanus", "release_date": "1979", "imdbID": "tt007899905" },
            { "title": "Julius Caesar", "release_date": "1979", "imdbID": "tt007937906" },
            { "title": "Hollow Image", "release_date": "1979", "imdbID": "tt007929907" },
            { "title": "Visions", "release_date": "1978", "imdbID": "tt033180508" },
            { "title": "Roll of Thunder, Hear My Cry", "release_date": "1978", "imdbID": "tt007817309" },
            { "title": "The Electric Company", "release_date": "1971-1977", "imdbID": "tt006665110" },
            { "title": "Blade", "release_date": "1973", "imdbID": "tt006979711" },
            { "title": "Who Says I Can't Ride a Rainbow!", "release_date": "1971", "imdbID": "tt006798212" },
            { "title": "Caught in the Middle", "release_date": "1970", "imdbID": "tt162437813" },
            { "title": "Where Were You When the Lights Went Out?", "release_date": "1968", "imdbID": "tt006380114" },
            { "title": "A Man Called Adam", "release_date": "1966", "imdbID": "tt006066015" },
            { "title": "The Pawnbroker", "release_date": "1964", "imdbID": "tt005957516" },
            { "title": "Another World", "release_date": "1964", "imdbID": "tt005773117" }
        ];




        service.removeMovie = function(imdbID) {
            angular.forEach(service.data.movies, function(movie, index) {
                if (movie.imdbID == imdbID)
                    service.data.movies.splice(index, 1);
            });
        };

        service.getMovieTitle = function(imdbID) {
            var title = "";
            angular.forEach(service.data.movies, function(movie, index) {
                if (movie.imdbID == imdbID)
                    title = movie.title;
            });
            return title;
        };

        service.addMovie = function(title) {
            service.data.movies.push({
                'title': title,
                'imdbID': randomString(6)
            });
        }

        function randomString(length) {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        }

    }
    )();
}
);