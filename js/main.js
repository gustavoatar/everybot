jQuery(window).scroll(function(){
	var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
	var scrolltrigger = 0.95;
	var percentageScrolled= (wintop/(docheight-winheight))*(100);

	console.log('wintop='+wintop);
	console.log('docheight='+docheight);
	console.log('winheight='+winheight);
	console.log(wintop+'=='+(docheight-winheight));
	console.log(wintop==(docheight-winheight));
	console.log(percentageScrolled);

// 	if (percentageScrolled >= 18) {
// 		$(".holder-canvas").addClass('grow');
// 		$("#expand").addClass('hide hidemobile');	
// 		$("#collapse").removeClass('hide hidemobile');
// 	} else if(percentageScrolled < 18){
// 		$(".holder-canvas").removeClass('grow');
// 		$("#expand").removeClass('hide hidemobile');	
// 		$("#collapse").addClass('hide hidemobile');	
// 	}
}); 
jQuery(document).ready(function($){
	jQuery('.new').click(function() {
			jQuery('.page-header').toggleClass('grow');
			jQuery('.page-header .new i').toggleClass('fa-rotate-45');
			jQuery(this).toggleClass('inverse');
	});
});
