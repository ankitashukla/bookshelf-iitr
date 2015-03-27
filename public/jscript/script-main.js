$(document).ready(function() {
	var height = $(window).height();
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 700);
	    return false;
	});

	$("#screenshot-cont1 div img ").mouseover(function(){
		$(this).animate({opacity:0},
			{
				duration:1000,
				easing:'easeInOutCubic'
			});

	})
	$("#screenshot-cont1 div img ").mouseout(function(){
		$(this).animate({opacity:1},
			{
				duration:700,
				easing:'easeInOutCubic'
			});
	})

});