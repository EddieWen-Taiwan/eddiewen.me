require('css/reset');
/**
 * require 'css/*.css'
 */
var req = require.context("css/components", true, /^(.*\.(css$))[^.]*$/igm);
req.keys().forEach(function(key){
    req(key);
});
require('css/helpers');
require('css/responsive');

import $ from 'jquery';

$(document).ready( () => {

	/**
	 * move screen after pressing .arrow
	 */
	$('.first-window > .arrow').on( 'click', () => {
		$('body').animate({
			scrollTop: $(window).height()+300
		}, 1000);
	});



	/**
	 * calculate how many days remains
	 * delete this after 2016/05/27
	 */
	const today = new Date();
	const FINAL_DAY = new Date('2016/05/27');
	const MS_PER_DAY = 24 * 60 * 60 * 1000;

	const damnDayLeft = ( FINAL_DAY.getTime() - today.getTime() ) / MS_PER_DAY;
	if( damnDayLeft > 0 ) {
		$('.damn').text(`還有 ${Math.floor(damnDayLeft+1)} 天登出`);
	}

});

$(window).load( () => {

	const windowH = $(window).height();

	const about_top = $('.white-section.-about').offset().top;
	const quote_top = $('.white-section.-about .quote-wrapper').offset().top;
	const portfolio_top = $('.white-section.-portfolio').offset().top;

	$(window).scroll( () => {

		let scrollNow = $(window).scrollTop();

		$('.first-window > .arrow').css( 'opacity', ( scrollNow >= windowH *0.5 ) ? '0' : '1' );

		if( !$('.white-section.-about > .section-title').hasClass('-show') && scrollNow >= about_top - windowH *0.6 ) {
			$('.white-section.-about > .section-title').addClass('-show');
		}

		if( !$('.white-section.-about .quote-wrapper').hasClass('bounceInRight') && scrollNow >= quote_top - windowH *0.6 ) {
			$('.white-section.-about .quote-wrapper').addClass('_animated bounceInRight');
		}

		if( !$('.white-section.-portfolio > .section-title').hasClass('-show') && scrollNow >= portfolio_top - windowH *0.6 ) {
			$('.white-section.-portfolio > .section-title').addClass('-show');
		}

	});

});
