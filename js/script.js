let $slideNavNext = $('.slider-next'),
	$slideNavPrev = $('.slider-prev'),
	$slides = $('.a-slide'),
	width = $('.a-slide.active')[0].offsetWidth,
	$activeIndicator = $('.active-indicator'),
	$pagination = $('.a-pagination'),
	time = 0.6


let paginationTop = 0,
	paginationLeft = 0;

function positionActiveIndicator(nextIndicator) {
	if (nextIndicator.length !== 0) {
		let magicNumber = 0,
			indicatorActiveTop = nextIndicator.offset().top - paginationTop,
			indicatorActiveLeft = nextIndicator.offset().left - paginationLeft - magicNumber;

		$activeIndicator.css('transform', 'translate(' + indicatorActiveLeft + 'px ,' + indicatorActiveTop + 'px)');
	}
}


// create indicators
function createIndicators() {
	let indicator = '<span class="indicator">•</span>',
		indicatorActive = '<span class="indicator active">•</span>',
		len = $slides.length;

	for (i = 0; i < len; i++) {
		(i == 0) ? $pagination.append(indicatorActive) : $pagination.append(indicator);
	}



	paginationTop = $pagination.offset().top;
	paginationLeft = $pagination.offset().left;
}

function init() {
	// Position all slides
	$slides.each(function (index, slide) {
		slide.style.left = (width * index) + 'px';
	});

	TweenLite.set($slideNavPrev, { autoAlpha: 0.5 })

	createIndicators()
	positionActiveIndicator($('.indicator.active'));

}

init();

// Next Slide
function goToNextSlide(slideIn, slideOut, textIn, textOut, indicatorIn, indicatorOut) {
	var tl = new TimelineLite(),
		index = slideIn.index(),
		size = $('.a-wrapper .a-slide').length

	if (slideIn.length !== 0) {
		tl.to(slideOut, time, { left: (width * index), ease: Sine.easeInOut }, 0)
			.to(slideIn, time, { left: 0, ease: Sine.easeInOut }, 0)

		slideOut.removeClass('active');
		slideIn.addClass('active');

		textOut.removeClass('active');
		textIn.addClass('active');

		indicatorOut.removeClass('active');
		indicatorIn.addClass('active');
	}

	TweenLite.set($slideNavPrev, { autoAlpha: 1 })

	if (index === size - 1) {
		TweenLite.set($slideNavNext, { autoAlpha: 0.5 })
	}

};


$slideNavNext.click(function (e) {
	console.log('next');
	e.preventDefault();

	var slideOut = $('.a-slide.active'),
		slideIn = $('.a-slide.active').next('.a-slide'),
		textOut = $('.text-block.active'),
		textIn = $('.text-block.active').next('.text-block'),
		indicatorOut = $('.indicator.active'),
		indicatorIn = $('.indicator.active').next('.indicator');

	goToNextSlide(slideIn, slideOut, textIn, textOut, indicatorIn, indicatorOut);
	positionActiveIndicator(indicatorIn);
})


// Prev Slide
function goToPrevSlide(slideIn, slideOut, textIn, textOut, indicatorIn, indicatorOut) {
	var tl = new TimelineLite(),
		index = slideIn.index(),
		size = $('.a-wrapper .a-slide').length

	if (slideIn.length !== 0) {

		tl.to(slideOut, time, { left: (width * (index + 1)), ease: Sine.easeInOut }, 0)
			.to(slideIn, time, { left: 0, ease: Sine.easeInOut }, 0)

		slideOut.removeClass('active');
		slideIn.addClass('active');

		textOut.removeClass('active');
		textIn.addClass('active');

		indicatorOut.removeClass('active');
		indicatorIn.addClass('active');
	}

	TweenLite.set($slideNavNext, { autoAlpha: 1 })

	if (index === 0) {
		TweenLite.set($slideNavPrev, { autoAlpha: 0.5 })
	}

};

$slideNavPrev.click(function (e) {
	console.log('prev');
	e.preventDefault();

	var slideOut = $('.a-slide.active'),
		slideIn = $('.a-slide.active').prev('.a-slide'),
		textOut = $('.text-block.active'),
		textIn = $('.text-block.active').prev('.text-block'),
		indicatorOut = $('.indicator.active'),
		indicatorIn = $('.indicator.active').prev('.indicator');

	goToPrevSlide(slideIn, slideOut, textIn, textOut, indicatorIn, indicatorOut);
	positionActiveIndicator(indicatorIn);
})
