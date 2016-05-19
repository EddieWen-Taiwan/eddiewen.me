/**
 * require 'css/*.css'
 */
var req = require.context("css", true, /^(.*\.(css$))[^.]*$/igm);
req.keys().forEach(function(key){
    req(key);
});

import $ from 'jquery';

$(document).ready( () => {

});
