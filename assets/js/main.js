(function($){
    // main slider
    $('.jumbo-slide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    // photo-slide 
    $('.photo-slide').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
    });
    
    // quick-top 관련
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 600) {
            $('.floating-banner').addClass('show');
        } else {
            $('.floating-banner').removeClass('show');
        }
    });
})(jQuery);