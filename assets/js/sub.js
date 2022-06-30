(function($){
    // 공유 dropdwon
    $(document).on('click', '.btn-drop', function(e){
        e.stopPropagation();
        $(this).parent().toggleClass('show');
    });
    $(document).click(function(){
        $('.dropdown').removeClass('show');
    });
})(jQuery);