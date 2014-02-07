//jQuery Usage
	
	
$(document).ready(function() {

	$('p').hide(); 
	$('#newsFirst p').show();
	$('.morelink').click(function() {
		 $(this).next('p').slideToggle('fast').siblings('p:visible').slideUp('fast');
	
		//var $nextP = $(this).next();
		//var $visibleSiblings = $nextP.siblings('p:visible');
		//if ($visibleSiblings.length ) {
		//	$visibleSiblings.slideUp('fast', function() {
		//		$nextP.slideToggle('fast');
		//	});
		//} else {
		//	$nextP.slideToggle('fast');
		//}
	});

	
});

