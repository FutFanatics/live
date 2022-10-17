
(function($){

	// new Progressive({
	// 	el: '.copa-do-mundo',
	// 	lazyClass: 'lazy',
	// }).fire();
	var containerTech = $('.tech__slick')	
	var containerWarm = $('.warm__slick')

    containerTech.slick({
		autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

	containerWarm.slick({
		autoplay: false,
        autoplaySpeed: 4000,
        pauseOnFocus: false,
        pauseOnHover: false,
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 5,

		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: true,
				adaptiveHeight: false,
                vertical: false,
                verticalSwiping: false,
                
			}
		}]
	})

	
	document.querySelector('.c-home-video').play();

    $('.c-home-replay').on('click', function(){
    	document.querySelector('.c-home-video').play();
		document.querySelector('.c-home-video__desk').play();
	});

	$('.c-home-mute').on('click', function(){
    	var muted = document.querySelector('.c-home-video').muted;
		if (muted) {
			document.querySelector('.c-home-video').muted = false;
			$(this).css('background-image', "url('https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/brasileirao/topo/icon_sound.svg')" );
			$(this).css('background-position', "left center" );
			$(this).css('background-size', "21px 21px" );
		} else {
			document.querySelector('.c-home-video').muted = true;
			$(this).css('background-image', "url('https://cdn.futfanatics.com.br/futfanatics-nacional/paginas-personalizadas/brasileirao/topo/icon_no-sound.svg')" )
            $(this).css('background-position', "center" );
			$(this).css('background-size', "25px 25px" );
        }
	});

	$('.c-home-button').on('click', function(){
    	$('#videoLP').attr('src', $('#videoLP').attr('src') + '?autoplay=1');
	});

    $('.c-home-video').on('ended', function (e) {
        $('.c-home-button').removeClass('d-none');
    });


	$('body').on('click', '.seemore-button', function(){
            
		$(this).parents('.seemore-container').toggleClass('seemore-close');
		multiSlideAdaptiveHeight($('.container-slick'))

		if ($(this).parents('.seemore-container').hasClass('seemore-close')) {
			$(this).html('Ver mais +');
		} else {
			$(this).html('Ver menos -');
		}
		return false;
	});

	var now = new Date().getTime();
	var live1 = new Date(2022,11,04).getTime();
	var live2 = new Date(2022,11,11).getTime();
	var live3 = new Date(2022,11,18).getTime();
	var live4 = new Date(2022,11,25).getTime();

	if(now>=live3){
		$('.live__4').addClass('show');
		$('.live__3').removeClass('show');

	}else if(now<=live3 && now>live2){
		console.log('live3');
		$('.live__3').addClass('show');
		$('.live__2').removeClass('show');
	}else if(now<=live2 && now>live1){
		console.log('live2')
		$('.live__2').addClass('show');
		$('.live__1').removeClass('show');
	}else{
	console.log('live1')
	$('.live__1').addClass('show');
	}

	function multiSlideAdaptiveHeight(slider) {

        var activeSlides = [];
        var tallestSlide = 0;
        
        setTimeout(function() {
        
            $('.slick-track .slick-active', slider).each(function(item) {
                activeSlides[item] = $(this).outerHeight();
            });
        
            activeSlides.forEach(function(item) {
            if (item > tallestSlide) {
				tallestSlide = item;
			}
			});
        
			$('.slick-list', slider).height(tallestSlide);
        }, 10);
    }

	$('[data-countdown-day]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown-day');
		$this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('%D')); 
		});
	  });
	  $('[data-countdown-hour]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown-hour');  
		$this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('%H')); 
		});
	  });
	  $('[data-countdown-minute]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown-minute');  
		$this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('%M')); 
		});
	  });
	  $('[data-countdown-seconds]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown-seconds');  
		$this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('%S')); 
		});
	  });
})(jQuery);

