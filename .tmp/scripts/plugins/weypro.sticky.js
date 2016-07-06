//Init Plugins
$(document).ready(function(){
	$(".sticker").sticky({
		topSpacing:0
	});
	$(window).resize(function(){
		$(".sticker").sticky('update');
	})
});