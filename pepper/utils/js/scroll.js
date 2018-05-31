(function ($){
	$(document).ready(function(){

		//hide navbar
		$(".navbar").hide();

		$(function(){
			$(window).scroll(function(){
				//set the distance
				if ($(this).scrollTop()>100) {
					$('.navbar').fadeIn();
				}
				else{
					$('.navbar').fadeOut();

				}
			});
		});
	});
}(jQuery));
