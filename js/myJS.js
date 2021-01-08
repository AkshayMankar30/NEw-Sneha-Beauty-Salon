// start preloader
//  var preloader = document.getElementById('preloader');
//  function preloaderFunction(){
//     preloader.style.display='none';
//  }

// end preloader
    setTimeout(function preloaderFunction(){
        preloader.style.display='none';
    }, 1000);


// aboutUS img scroll
    $(window).scroll(function(){
        $('div').toggleClass('scrolled', $(this).scrollTop() > 0);
    });

    window.addEventListener(
        "scroll",
        () => {
          document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
          );
        },
        false
      );
// end aboutUS img scroll

//promoBanner
$(document).ready(function(){

    if($('.brands_slider').length)
    {
    var brandsSlider = $('.brands_slider');
    
    brandsSlider.owlCarousel(
    {
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    nav:false,
    dots:false,
    autoWidth:true,
    items:8,
    margin:42
    });
    
    if($('.brands_prev').length)
    {
    var prev = $('.brands_prev');
    prev.on('click', function()
    {
    brandsSlider.trigger('prev.owl.carousel');
    });
    }
    
    if($('.brands_next').length)
    {
    var next = $('.brands_next');
    next.on('click', function()
    {
    brandsSlider.trigger('next.owl.carousel');
    });
    }
    }
    
    
    });





    $(window).scroll(function(){
      $('div').toggleClass('scrollin', $(this).scrollTop() > 1000 );
  });

  window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );