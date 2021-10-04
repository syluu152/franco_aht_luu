$(document).ready(function () {
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar-res').addClass('active');
        $('.cover').addClass('active');
    });
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar-res').removeClass('active');
        $('.cover').removeClass('active');
    });
    $('.news-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              infinite: true
            }
          }, 
          {
            breakpoint: 800,
            settings: {
            slidesToShow: 2,
            dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            dots: true
            }
          },
          {
            breakpoint: 300,
            settings: "unslick" 
          }]
    });
});