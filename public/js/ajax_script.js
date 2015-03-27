$(document).ready(function(){
	$('.notification').delay(10000).fadeOut();
	vote();
	unvote();
	function vote(){
		$(".vote").unbind('click').click(function(){
				var elem=$(this);
				//var p=$(this).parent().parent();
				//nov=p.children('span.no_of_votes');
				var nov = $(".no_of_votes"+$(this).attr('id'));
				$.ajax({
				  url: "/vote/"+$(this).attr('id'),
				  datatype: "text",
				  success: function(response){
				  	console.log(response);
				  	if(response=="success")
				  	{
				  		//alert("Voted Successfully!");
						var val=nov.html();
				  		val=(+val)+1;
				  		nov.html(val);
				  		console.log(nov.html());
				  		elem.html('<i class="fa fa-thumbs-down"></i> ');
				  		elem.removeClass("vote");
				  		elem.addClass("unvote");
				  		elem.attr('data-hint','Remove vote');
				  		unvote();
				  	}
				  	else if(response=="error")
				  		alert("You have already voted this product");
				  	else
				  		alert("Some error has occured");
				  },
				  error: function(){
				    console.log("something has gone wrong");
				  }
				});
		});
	}

	function unvote(){
		$(".unvote").unbind('click').click(function(){
				var elem=$(this);
				//var p=$(this).parent().parent();
				//nov=p.children('span.no_of_votes');
				var nov = $(".no_of_votes"+$(this).attr('id'));
				$.ajax({
				  url: "/unvote/"+$(this).attr('id'),
				  datatype: "text",
				  success: function(response){
				  	console.log(response);
				  	if(response=="success")
				  	{
				  		//alert("Unvoted!");
						var val=nov.html();
				  		val=(+val)-1;
				  		nov.html(val);
				  		console.log(nov.html());
				  		elem.html('<i class="fa fa-thumbs-up"></i> ');
				  		elem.removeClass("unvote");
				  		elem.addClass("vote");
				  		elem.attr('data-hint','Vote');
				  		vote();
				  	}
				  	else if(response=="error")
				  		alert("You have already unvoted this product");
				  	else
				  		alert("Some error has occured");
				  },
				  error: function(){
				    console.log("something has gone wrong");
				  }
				});
		});
	}
});