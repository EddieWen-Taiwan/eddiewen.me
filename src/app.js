/**
 * require 'css/*.css'
 */
var req = require.context("css", true, /^(.*\.(css$))[^.]*$/igm);
req.keys().forEach(function(key){
    req(key);
});

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
