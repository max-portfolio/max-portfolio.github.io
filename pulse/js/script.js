$(document).ready(function(){
 /*    $('.carousel__inner').slick({
      speed: 1200,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
      nextArrow: '<button class="slick-next" type="button"><img src="icons/right.png"></button>',
      responsive: [
        { 
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }
      ]
    }); */
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // Modal

    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      });
    });

    function valideForms(form){
      $(form).validate({
        rules:{
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email:{
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Пожалуйста, введите свое имя",
            minlength: jQuery.validator.format("Введите не менее {0} символов!")
          },
          phone: "Пожалуйста, введите свой телефон",
          email: {
            required: "Пожалуйста, введите свой email",
            email: "Неправильно введен email-адрес"
          }
        }
      });
    };
    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    //маска ввода номера
    $('input[name=phone]').mask("+38 (999) 999-99-99");

    //настройка отправки писем
    $('form').submit(function(e) {
      e.preventDefault();
      if(!$(this).valid()){
        return;
      }
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()  
      }).done(function(){
        $(this).find("input").val("");

        $('form').trigger('reset');
      });
      return false;
    });

    //Smooth scroll and pageup
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
      } else {
        $('.pageup').fadeOut();
      }
    });

    $("a[href^='#up']").click(function(){
      const _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
  });

  new WOW().init();

});

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  responsive: {
    320: {
      items: 1,
      nav: true
    },
    768: {
      nav: false
    }
  }

});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});


  