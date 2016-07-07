//Init Plugins
$(document).ready(function(){
	$(".sticker").sticky({
		topSpacing:0,
		zIndex: 99
	});
	$(window).resize(function(){
		$(".sticker").sticky('update');
	})
});