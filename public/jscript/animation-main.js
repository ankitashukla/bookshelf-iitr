$(document).ready(function()
{
	var height = $(window).height();
	var width = $(window).width();
	$('section').css('min-height', height);
	var ht = $('.home div').height();
	var top = (height - ht)*0.40;
	$('.wrapperpage').css('padding-top', top*.50);
	function slidein(elem1,elem2)
	{
		$(elem1).animate({opacity:1},
		{	
			complete:function()
			{
				$(elem1).switchClass( "span12", "span6", 1000, "easeInOutCubic" ).delay(200);
				$(elem2).show();
				var mw = $(elem1).width();
					$(".home").show();
			},
			easing:'linear'
		});
	}
	slidein("#logo-cont","#cat-cont");

	function setTop(elem1,elem2)
	{
		var sectop = $(".home").height();
		$(elem2).css("top",sectop+top*.50);
	}
})