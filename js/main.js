$(function(){
	// Menu mobile 
	$('#menu-button, #menu-wrapper').click(function(e){
		if(!$(e.target).hasClass('menu') || $(e.target).closest('menu').length){
			$('#menu-button, #menu-wrapper, html').toggleClass('menu-active');

			if(!$('.menu-bar.fixed').length){
				$('html').scrollTop(0);
			}
		}
	});

	// Ajuste no resize
	$(window).on('load resize', function(){
		if($(window).width() > 768){
			$('#menu-button, #menu-wrapper, html').removeClass('menu-active');
		}
	});

	// Topbar fixed
	$(window).on('load scroll', function () {
		if($(window).scrollTop() >= $('.header').height()){
			$('.topbar').addClass('fixed');
		} else {
			$('.topbar').removeClass('fixed');
		}
	});

	// Menu dropdown	
	$('#menu-collapse').on('shown.bs.collapse', function () {
		$('.js-menu-button').html("<i class='ns-icon'>close</i>");
	});
	
	$('#menu-collapse').on('hidden.bs.collapse', function () {
		$('.js-menu-button').html("<i class='ns-icon'>menu</i>");
	});

	// Links na lateral/Links da página Curso
	$('.js-toggle-links a').click(function(){
		$(this).closest('.js-toggle-links').find('li.active').removeClass('active');
		
		$(this).parent().addClass('active');
	});
});

// Swiper de Avaliações: Inicializando
if($('.swiper-container').length){
	var swiperSkills = new Swiper('#skills-swiper', {
	    slidesPerView: 3,
	    spaceBetween: 30,
	    pagination: {
	    	el: '.swiper-pagination',
	    	clickable: true,
	    },
	    navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
		    576: {
		      slidesPerView: 1,
		      spaceBetween: 10
		    }
		}
	});

	var swiperProjects = new Swiper('#projects-swiper', {
	    slidesPerView: 'auto',
	    pagination: {
	    	el: '.swiper-pagination',
	    	clickable: true,
	    }
	});
}