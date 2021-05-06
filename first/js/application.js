

$(document).ready(function(){

	var $left_column = $('#leftcol')
	  , $right_column = $('#rightcol')
	  , $nav = $('#navbox');
	//, path = window.location.pathname;
	  
	 // path = path.replace(/^.*[\\\/]/, '');
	
	var patterns = ["blackpattern"]
	  , colors = ["white"]
	
	  , index = Math.floor(Math.random() * patterns.length) % patterns.length
	  , pattern = patterns[index]
	  , color = colors[index];
	  
	$left_column.addClass(pattern);
	$right_column.addClass(pattern);
	$nav.addClass(pattern);
	$('nav a').css({'color':color});
	 
	

});