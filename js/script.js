$(document).ready(function(){
	
	$("#nav-button").click(function(){
		$("#nav-button").toggleClass("active");
		$(".main-nav").slideToggle();
	});
	
	$(".gift").click(function(){
		console.log("success");
		$(this).clone().appendTo(".favourites");
	});
	
	$(".fa-heart").click(function(){
		$(".favourites").toggle();
	});
	
});