!function($) {
	if($(".page2")[0].hasClass("dark-pagination") === true) {
	  	$(".onepage-pagination li a").css({"background-color":"rgba(0,0,0,0.85)"});
		$(".onepage-pagination li a.active").css({"border":"1px solid black"});
    }
};