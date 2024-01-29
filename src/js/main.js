$(document).ready(function () {

  $('.main-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: true,
  });

  $("#events").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $(".btn-left"),
    nextArrow: $(".btn-right"),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })

  $(".people").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })

  function calcPercentage(x, y, fixed = 2) {
    const percent = (x / y) * 100
    return percent.toFixed(fixed);
  }


  const goal = 450000;
  const raised = 55000;


  const lineWidth = calcPercentage(raised, goal)


  $(".line").css({
    width: lineWidth + '%'
  });


});

$(".sponsors-slider").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }
  ]
})