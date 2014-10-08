var debug = false;
var console;
var $html = $('html');
var $body = $('body');

function debugMe(v) {
	if(debug) {
		//console.log(v);
	}
}

var $js_pageFilters = $('.js_page-filters a');

function pageFilters() {
	var pageFilter = $(this).parent().data('page');
	$body.attr('class','');
	$('.js_page-filters li.active').removeClass('active');
	$(this).parent().toggleClass('active');
	$body.toggleClass(pageFilter);
	return false;
}

$js_pageFilters.on('click',pageFilters);


$(document).ready(function() {

	var jRes = jRespond([
	    {
	        label: 'handheld',
	        enter: 0,
	        exit: 767
	    },{
	        label: 'tablet',
	        enter: 768,
	        exit: 979
	    },{
	        label: 'laptop',
	        enter: 980,
	        exit: 1199
	    },{
	        label: 'desktop',
	        enter: 1200,
	        exit: 10000
	    }
	]);

	jRes.addFunc({
	    breakpoint: 'handheld',
	    enter: function() {
	        $html.removeClass('js_desktop-nav').addClass('js_mobile-nav');
	        debugMe('handheld');
	    }
	});
	jRes.addFunc({
	    breakpoint: ['desktop','laptop','tablet'],
	    enter: function() {
	        $html.removeClass('js_mobile-nav').addClass('js_desktop-nav');
	        debugMe('desktop');
	    }
	});

});