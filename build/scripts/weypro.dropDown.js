//Navigator
(function(){
	var headerMenu = $('header .menu');
	var headerSubMenu = $('header .menu ul');
	var subMenuTimer;
	var asideContainer = $('aside .aside-inner');
	var asideMenu = $('aside .menu');
	var mobileTrigger = $('#mobileMenu-trigger');
	var container = $('main');
	
	topMenu: (function() {
		headerMenu.on('mouseenter','a', function(){
			//Clear Timer
			clearTimeout(subMenuTimer);
			//Remove Others
			$(this).parent().siblings().find('a').removeClass('active');
			$(this).addClass('active');
		})

		headerSubMenu.on('mouseleave', function(){
			subMenuTimer = setTimeout(function(){
				console.log(headerMenu);
				headerMenu.find('a').removeClass('active');
				console.log('success');
			}, 400);
		})
	})();
	sideMenu: (function() {
		// asideContainer Padding Top
		asideContainer.css('padding-top', $('.header-inner').outerHeight());

		asideMenu.on('click','a',function(e){
			if ($(this).siblings('ul').length > 0) {
				e.preventDefault();
				$(this).siblings('ul').stop(true, true).slideToggle();
			}
			$(this).parent().siblings().children('a').removeClass('active');
			$(this).parent().siblings().children('ul').slideUp();
			$(this).addClass('active');
		})
		mobileTrigger.on('click', function(){
			container.stop(true, true).toggleClass('sidebar-active');
		})

		// Aside Controll
		if (getBrowserWidth() > 768) {
			container.addClass('sidebar-active');
		} else {
			container.removeClass('sidebar-active');
		}
		$(window).resize(function(){
			asideContainer.css('padding-top', $('.header-inner').outerHeight());
			if (getBrowserWidth() > 768) {
				container.addClass('sidebar-active');
			} else {
				container.removeClass('sidebar-active');
			}
		})
	}());
})();