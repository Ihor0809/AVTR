$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow arrow-left" src="img/arrow-left.svg" alt=""></img>',
        nextArrow: '<img class="arrow arrow-right" src="img/arrow-right.svg" alt=""></img>',
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
});