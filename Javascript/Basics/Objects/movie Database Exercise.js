var movies = [
		{
			title: "Ironman",
			rating: "4.5",
			hasWatched: true 
		},
		{
			title: "Mad Max Fury Road",
			rating: "5",
			hasWatched: false 
		},
		{
			title: "Zoolander 2",
			rating: "1",
			hasWatched: true 
		}
		
	];

function buildString(movie){//builds string for each movie
	var result = "You have ";
	if (movies.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
};

movies.forEach (function(movie){
	
	console.log(buildString(movie));
});
