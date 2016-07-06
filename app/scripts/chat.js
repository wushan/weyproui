$( document ).ready(function( ) {
	/*---- Iframe Init ----*/
	function ifarmeInit() {    
        if (!('parentIFrame' in window)) {
            setTimeout(ifarmeInit, 16);
        } else {
        	parentIFrame.size(72,80);
            $('#chat-body').addClass('done');
            return false;
        }
    }
    ifarmeInit();

	/*---- Chat Scaling ----*/
	$(document).on('click', '#chat-open', function(event){
		event.preventDefault();
		$(this).fadeOut().promise().done( function() {
			parentIFrame.size('',320);

			$('#chat-toggle').addClass('active').children('i').attr('class', 'fa fa-chevron-down');
	    	$('#chat-main').addClass('active');
			$('#chat-count').removeClass('active');

			$('#chat-container').fadeIn();
			
			dialogueScrollBottom();
		});
	});

	$(document).on('click', '#chat-shrink', function(event) {
		event.preventDefault();
		$('#chat-container').fadeOut().promise().done( function() {
			parentIFrame.size(72,80);

			$('#chat-open').fadeIn();
		});
	});

	/*---- Chat Toggle ----*/
	$(document).on('click', '#chat-toggle', function(event){
		event.preventDefault();
		var icon = $(this).children('i');

		if($(this).hasClass('active')) {
			icon.attr('class', 'fa fa-chevron-up');
			$(this).removeClass('active');
		} else {
			icon.attr('class', 'fa fa-chevron-down');
			$(this).addClass('active');

			$('#chat-count').removeClass('active');
		}

		$('#chat-main').toggleClass('active');

		parentIFrame.size();

		dialogueScrollBottom();
	});

	/*---- Chat Close ----*/
	$(document).on('click', '#chat-close', function(event){
		event.preventDefault();
	    $('#chat-toggle').addClass('active').children('i').attr('class', 'fa fa-chevron-down');
	    $('#chat-main').addClass('active');
	    $('#chat-count').removeClass('active');

	    parentIFrame.size();

	    dialogueScrollBottom();

	    $(this).modal({
	    	escapeClose: false,
	    	clickClose: false,
			showClose: false,
			fadeDuration: 250,
	    	fadeDelay: 0.50
		});
	});

	/*---- Options ----*/
	$(document).on('click', '#options-controls .btn-options', function(event){
		event.preventDefault();
		if($(this).hasClass('active')) {
			$(this).text('選項').removeClass('active');
		} else {
			$(this).text('關閉Ｘ').addClass('active');
		}

		$('#options-controls .options-list').slideToggle().toggleClass('active');
	});

	$(document).on('click', '#options-controls .options-list a', function(event){
		event.preventDefault();
		$('#options-controls .btn-options').text('選項').removeClass('active');
		$('#options-controls .options-list').slideUp().removeClass('active');
	});

	$(document).click(function(e) {
        if(!$(e.target).is('#options-controls, #options-controls *')) {
        	if($('#options-controls .btn-options').hasClass('active')) {
        		$('#options-controls .btn-options').text('選項').removeClass('active');
            	$('#options-controls .options-list').slideUp().removeClass('active');
            }
        }
    });

	/*---- Popup Block ----*/
	$(document).on('click', '.btn-open', function(event){
		event.preventDefault();

		var blockID = $(this).attr('href');

		$('.popup-block').removeClass('active');
		$(blockID).addClass('active');
	});

	$(document).on('click', '.btn-close', function(event){
		event.preventDefault();

		$(this).parents('.popup-block').removeClass('active');
	});
});

/*---- Custom Scrollbar ----*/
(function($){
    $(window).load(function(){
        $(".scroll-block").mCustomScrollbar({
        	theme: "minimal-dark"
        });

        $(".dialogue-frame").mCustomScrollbar({
        	theme: "minimal-dark",
        });
    });
})(jQuery);


/*---- dialogue Scroll To Bottom ----*/
function dialogueScrollBottom() {
	$(".dialogue-frame").mCustomScrollbar("scrollTo","bottom",{
		scrollInertia: 0
	});
}