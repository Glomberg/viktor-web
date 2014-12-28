$(document).ready(function(){
	var sliderWidth = 560;
	var numOfSlides = $('.slide').length;
	var currentPosition = 1;
	$('.slide').wrapAll('<div class="slidersInner"></div>');
	$('.slidersInner').css('width', numOfSlides * sliderWidth);
	$('.slide').css('float', 'left');
	$('#slider-content').css('overflow','hidden');
	$('.slidersInner').css('position', 'absolute');
	$('.slidersInner').bind('click', function(){
		if (currentPosition < numOfSlides) {
			var move = sliderWidth * currentPosition;
			$('.slidersInner').animate({'left': -move});
			currentPosition = currentPosition + 1;
		}
		else {
			$('.slidersInner').animate({'left': 0});
			currentPosition = 1;
		}
	});

});