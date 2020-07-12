  $(function() {
    // Owl Carousel
    let owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 4,
      margin: 43,
      loop: true,
      nav: true,
      navContainerClass: 'owl-nav slider-nav',
      navText: [
    '<span class="carousel-nav-left"><img class="icon-left" src="next.svg"></span>',
    '<span class="carousel-nav-right"><img class="icon-right" src="prev.svg"></span>'
    ],
        });
        $(".owl-nav").css('display', 'block');
   });
