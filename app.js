var displayWikipediaData = function() {

	var $linksElement = $('#links');
	var searchString = $('#searchString').val();	
	console.log(searchString);
	var wikipediaUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + searchString + '&format=json&callback=wikiCallback';

	$.ajax({
		url: wikipediaUrl,
		dataType: "jsonp",
		jsonp: "callback",
		success: function(res) {
			var linkList = res[1];
			linkList.forEach(function(item){
				var url = 'http://en.wikipedia.org/wiki/' + item;
				$linksElement.append('<li><a href="' + url +'">' + item + '</a></li>');
				return url;
			})
		}

	});
	
	return false;

};

$('#form').submit(displayWikipediaData);