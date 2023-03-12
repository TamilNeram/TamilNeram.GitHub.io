(function () {
    // Use strict prevents silent and common JavaScript errors.
    'use strict';
    window.குழல் = function (url1) {
		document.getElementById('இசை').pause();
		document.getElementById('இசை').setAttribute('src',url1);
		document.getElementById('இசை').load();
//		setTimeout(function() {  document.getElementById('இசை').load()}, 1000);
		document.getElementById('இசை').play();
        return url1;
    };
}());
