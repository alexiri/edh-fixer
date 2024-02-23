// ==UserScript==
// @name         MERIT fixer
// @namespace    http://cern.ch
// @version      0.1
// @description  Quality of life improvements for EDH
// @author       Alex Iribarren
// @match        https://edh.cern.ch/Document/Personnel/MERIT/*
// @require      http://code.jquery.com/jquery-latest.min.js
// @grant        GM_addStyle
// @downloadURL	 https://raw.githubusercontent.com/alexiri/edh-fixer/master/merit-fixer.user.js
// ==/UserScript==

(function() {
    'use strict';
    var $ = jQuery.noConflict();

    $(document).ready(function() {
        console.log('ready...');

        // Add the person's name to the page title
        var staff = $('div.form-control-static a', $('div.panel-body')[0])[0].text ;
        document.title = 'MERIT ' + staff;


        GM_addStyle('div.col-md-10 div.col-md-6 { width: 75%; }');
    });

})();
