$(function() {

//effect that changes appearance of nav bar as user scrolls down page	
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > $('#about').position().top) {
            $('.nav').css('background-color', 'rgba(222, 222, 222, 0.9)');

        } else {
            $('.nav').css('background-color', 'transparent');
        }
    });

//smooth scroll
    $('a').click(function() {
        var link = $(this.hash);
        if (link.length > 0) {
            $('html,body').animate({
                scrollTop: link.offset().top
            }, 1000);
            return false;
        }
    });

//Hamburger menu for mobile mode
    $('.fa-bars').on('click', function(){
    	if ($('.nav-mobile').css('display') == "flex"){
    		$('.nav-mobile').css('display', 'none');
    	} else {
    		$('.nav-mobile').css('display', 'flex');
    	}
    })

//to initialize wow.js for transition effects in portfolio section    
    new WOW().init();
});