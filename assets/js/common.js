(function($){
    // nav 관련
    $(document).on('click', '.btn-nav', function(){
        $(this).addClass('close-nav');
        $('body').addClass('opened');
    });
    $(document).on('click', '.close-nav', function(){
        $(this).removeClass('close-nav');
        $('body').removeClass('opened');
    });
    $(document).on('click', '.nav-content .container > ul > .has-child > a', function(){
        $('.nav-content .container > ul > .has-child').removeClass('active');
        $(this).parent().addClass('active');
    });


    // gnb 관련
    $(document).on('mouseenter focus', '#gnb .container > ul > li > a', function(){
        $('#gnb .container > ul > li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(document).on('mouseleave', '#gnb .container > ul > li', function(){
        $('#gnb .container > ul > li').removeClass('active');
    });

    // quick-top 관련
    $(window).on('scroll', function() {
        if ($(this).scrollTop() >= 100) {
            $('.quick-top').addClass('show');
        } else {
            $('.quick-top').removeClass('show');
        }
    });

    $(document).on('click', '.quick-top .btn-top', function(e) {
        $('html, body').stop().animate({
            scrollTop: 0
        });
        e.preventDefault();
    });
})(jQuery);