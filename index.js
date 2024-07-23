$(document).ready(function () { 
    
    $(".header_burger").on("click",  function () {
        if($('.lines_container').hasClass('active')){            
            $('.lines_container').toggleClass('active');
            $('.menu_elements').css('left', '-100%');
            return;
        }
        if(!$('.lines_container').hasClass('active')){
            $('.lines_container').toggleClass('active');
            $('.menu_elements').css('left', '0px');
            return;
        }
    });
});