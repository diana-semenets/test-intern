$(".single-item").slick({
  dots: true,
  dotsClass: 'dots-style',
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
