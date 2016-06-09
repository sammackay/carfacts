 $(document).ready(function() {
     $('.slideshow1').slick({
       infinite: true,
       speed: 1000,
       slidesToShow: 1,
       adaptiveHeight: true,
       autoplay: true,
       autoplaySpeed: 2000,
       infinite: false,
       dots: false,

	
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
});				