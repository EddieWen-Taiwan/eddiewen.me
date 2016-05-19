/**
 * require 'css/*.css'
 */
var req = require.context("css", true, /^(.*\.(css$))[^.]*$/igm);
req.keys().forEach(function(key){
    req(key);
});

import $ from 'jquery';

$(document).ready( () => {

	$('.first-window > .arrow').on( 'click', () => {
		const windowH = $(window).height();
		$('body').animate({
			scrollTop: windowH+300
		}, 1000);
	});

});
