$(function($) {
    $('.bg-swicher').bgSwitcher({
        images: ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg'],
        interval: 5000,
        loop: true,
        effect: "drop"
    });

    // $(window).scroll(function () {
    //     var targetElement = $('.fadein').offset().top;
    //     var scroll = $(window).scrollTop();
    //     var windowHeight = $(window).height();
    //     if (scroll > targetElement - windowHeight + 200) {
    //         $('.fadein').css('opacity', '1');
    //         $('.fadein').css('transform', 'translateX(0)');
    //     }
    // });

    document.getElementById("fadein").onclick = function() {
        $('.this').css('opacity', '1');
        $('.this').css('transform', 'translateX(0)');
    };

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '20%',
        pauseOnHover: true,
    });

    $('.more-food-button').on('click', function(){
        if ($('.open-food-box').is(':hidden')) {
            $('.open-food-box').slideDown("fast");
            $(this).text('close');
            $(this).css('background-color', '#808080');
            $(this).css('color', '#fabb51');
        } else {
            $('.open-food-box').slideUp("fast");
            $(this).text('more');
            $(this).css('background-color', '#fabb51');
            $(this).css('color', '#fff');
        }
    });

    $('.more-drink-button').on('click', function(){
        if ($('.drink-food-box').is(':hidden')) {
            $('.drink-food-box').slideDown("fast");
            $(this).css('display', 'none');
        } else {
            $('.drink-food-box').slideUp("fast");
            $(this).text('drink');
            $(this).css('background-color', '#f05454');
            $(this).css('color', '#fff');
        }
    });

    $(".modal-button").modaal();


    const slideimg_src = ['images/slider4.jpg', 'images/slider1.jpg', 'images/slider2.jpg', 'images/slider3.jpg'];
    let number = -1;
    function slideshow_timer() {
        if (number === 3) {
            number = 0;
        } else {
            number ++;
        }
        document.getElementById("slideshow").src = slideimg_src[number];
    }
    setTimeout("slideshow_timer()", 4000);
    // setInterval(slideshow_timer, 4000);

});