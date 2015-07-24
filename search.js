
var app = angular.module("instantSearch", []);


app.filter('searchFor', function(){


	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});


function InstantSearchController($scope){


	$scope.items = [
		{
			url: https://123thought.wordpress.com/'',
			title: 'shailendra_pathak_website',
			image: 'shail.jpg'
		},
		{
			url: https://123thought.wordpress.com/'',
			title: 'shailendra_pathak_website',
			image: 'shail.jpg'
		},
		{
		url: https://123thought.wordpress.com/'',
			title: 'shailendra_pathak_website',
			image: 'shail.jpg'
		},
		{
			url: https://123thought.wordpress.com/'',
			title: 'shailendra_pathak_website',
			image: 'shail.jpg'
		},
		{
			url: https://123thought.wordpress.com/'',
			title: 'shailendra_pathak_website',
			image: 'shail.jpg'
		},
		{
			url: https://123thought.wordpress.com/'',
			title: 'shailendra_pathak_website',
			image: 'shail.jpg'
		},
		{
			url: https://123thought.wordpress.com/'',
			title: 'shailendra_pathak_website',
			image: 'shail.jpg'
		}
	];

}
