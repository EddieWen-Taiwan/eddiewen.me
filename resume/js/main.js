$(document).ready( function(){

	// show the name
	setTimeout( function() {
		$('#name-wrapper').addClass('show');
		setTimeout( function() {
			$('#name-wrapper .tag-box').addClass('show animated fadeInUp');
		}, 500);
	}, 1000);

	$('#first-window .arrow').on( 'click', function() {
		const windowH = $(window).height();
		$('body').animate({
			scrollTop: windowH+300
		}, 1000);
	});



	const today = new Date();
	const FINAL_DAY = new Date('2016/05/27');
	const MS_PER_DAY = 24 * 60 * 60 * 1000;

	const damnDayLeft = ( FINAL_DAY.getTime() - today.getTime() ) / MS_PER_DAY;
	if( damnDayLeft > 0 ) {
		$('.damn').text(`還有 ${Math.floor(damnDayLeft+1)} 天登出`);
	}

});

$(window).load( function() {

	const windowH = $(window).height();

	const about_top = $('.section#about').offset().top;
	const quote_top = $('.section#about .quote_wrapper').offset().top;
	const portfolio_top = $('.section#portfolio').offset().top;

	$(window).scroll( function() {

		var scrollNow = $(window).scrollTop();

		$('#first-window .arrow').css( 'opacity', ( scrollNow >= windowH *0.5 ) ? '0' : '1' );

		if( !$('.section#about .title').hasClass('show') && scrollNow >= about_top - windowH *0.6 ) {
			$('.section#about .title').addClass('show');
		}

		if( !$('.section#about .quote_wrapper').hasClass('show') && scrollNow >= quote_top - windowH *0.6 ) {
			$('.section#about .quote_wrapper').addClass('show animated bounceInRight');
		}

		if( !$('.section#portfolio .title').hasClass('show') && scrollNow >= portfolio_top - windowH *0.6 ) {
			$('.section#portfolio .title').addClass('show');
		}

	});

});
