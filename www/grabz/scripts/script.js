$(document).ready(function(){
	$('.close').click(function(){
			$('#fixed-enter').css({'display': 'none'});
	});
	$('a#enter').click(function(){
			$('#fixed-enter').css({'display': 'block'});
	});
	$('a#reg').click(function(){
			$('#fixed-reg').css({'display': 'block'});
	});
});