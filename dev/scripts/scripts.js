
new WOW().init(); 

$('a').click(function() {
    var link = $(this.hash);
    if (link.length > 0) {
        $('html,body').animate({
            scrollTop: link.offset().top
        }, 1000);
        return false;
    }
});
