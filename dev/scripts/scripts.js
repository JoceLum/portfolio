$(function() {

    //effect that changes appearance of nav bar as user scrolls down page   
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > $('.hero-section').position().top) {
            $('.nav').css('background-color', 'rgba(222, 222, 222, 0.9)');
            $('.nav li').css('padding', '10px 20px')

        } else {
            $('.nav').css('background-color', 'transparent');
            $('.nav li').css('padding', '20px')
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
    $('#nav-icon').on('click', function() {
        $(this).toggleClass('open');
        if ($('.nav-mobile').css('display') == "flex") {
            $('.nav-mobile').css('display', 'none');
        } else {
            $('.nav-mobile').css('display', 'flex');
        }
    })

    //to initialize wow.js for transition effects in portfolio section    
    new WOW().init();
});