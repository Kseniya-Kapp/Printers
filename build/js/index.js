jQuery(document).ready(function () {
//
//
//
//   var mql = window.matchMedia('(max-width: 992px)');
//
//   function screenTest(e) {
//     if (e.matches) {
//       $('.more-desc').readmore({
//         // embedCSS: false,//вызов плагина
//         speed: 250, //скорость раскрытия скрытого текста (в миллисекундах)
//         maxHeight: 240, //высота раскрытой области текста (в пикселях)
//         moreLink: '<a class="purple-link" href="#">Читать далее</a>', //ссылка "Читать далее", можно переименовать
//         lessLink: '<a class="purple-link" href="#">Скрыть</a>' //ссылка "Скрыть", можно переименовать
//       });
//
//       $.each($('.of-docs__list-items-reg'), function () {
//         var slider = $(this);
//         slider.on('init', function (event, slick) {
//           var total = slick.slideCount,
//             activeTotal;
//
//           if (total < 10) {
//             activeTotal = '0' + total;
//           }
//           else {
//             activeTotal = total;
//           }
//           slider.siblings('.container-arrows').append('<div class="slider-count"><span class="current" id="current2">01</span> <span class="slash">/</span> <span class="total" id="total2">' + activeTotal + '</span></div>');
//         });
//
//
//         $(this).slick({
//           fade: true,
//           slidesToScroll: 1,
//           slidesToShow: 1,
//           arrows: true,
//           dots: false,
//           infinite: false,
//           swipeToSlide: true,
//           prevArrow: '<button type="button" class="prev-button"></button>',
//           nextArrow: '<button type="button" class="next-button"></button>',
//           appendArrows: $(this).parents('.slider__wrap').find('.container-arrows')
//
//         });
//         slider
//           .on('afterChange', function (event, slick, currentSlide, nextSlide) {
//             var activeSlideNumber1;
//
//             if (currentSlide < 9) {
//               activeSlideNumber1 = "0" + (currentSlide + 1);
//             } else {
//               activeSlideNumber1 = currentSlide + 1;
//             }
//
//
//             // finally let's do this after changing slides
//             $('.slider-count #current2').html(activeSlideNumber1);
//           });
//
//       });
//       $.each($('.of-docs__list-items-dec'), function () {
//         var slider = $(this);
//         slider.on('init', function (event, slick) {
//           var total = slick.slideCount,
//             activeTotal;
//
//           if (total < 10) {
//             activeTotal = '0' + total;
//           }
//           else {
//             activeTotal = total;
//           }
//           slider.siblings('.container-arrows').append('<div class="slider-count"><span class="current" id="current3">01</span> <span class="slash">/</span> <span class="total" id="total3">' + activeTotal + '</span></div>');
//         });
//
//         $(this).slick({
//           fade: true,
//           slidesToScroll: 1,
//           slidesToShow: 1,
//           arrows: true,
//           dots: false,
//           infinite: false,
//           swipeToSlide: true,
//           prevArrow: '<button type="button" class="prev-button"></button>',
//           nextArrow: '<button type="button" class="next-button"></button>',
//           appendArrows: $(this).parents('.slider__wrap').find('.container-arrows')
//
//         });
//         slider
//           .on('afterChange', function (event, slick, currentSlide, nextSlide) {
//             var activeSlideNumber1;
//
//             if (currentSlide < 9) {
//               activeSlideNumber1 = "0" + (currentSlide + 1);
//             } else {
//               activeSlideNumber1 = currentSlide + 1;
//             }
//
//
//             // finally let's do this after changing slides
//             $('.slider-count #current3').html(activeSlideNumber1);
//           });
//       });
//
//
//       $.each($('.foto-slider'), function () {
//         var slider = $(this);
//         slider.on('init', function (event, slick) {
//           var total = slick.slideCount,
//             activeTotal;
//
//           if (total < 10) {
//             activeTotal = '0' + total;
//           }
//           else {
//             activeTotal = total;
//           }
//           slider.siblings('.container-arrows').append('<div class="slider-count"><span class="current" id="current4">01</span> <span class="slash">/</span> <span class="total" id="total4">' + activeTotal + '</span></div>');
//         });
//
//         $(this).slick({
//           fade: true,
//           slidesToScroll: 1,
//           slidesToShow: 1,
//           arrows: false,
//           dots: false,
//           infinite: false,
//           swipeToSlide: true,
//           prevArrow: '<button type="button" class="prev-button"></button>',
//           nextArrow: '<button type="button" class="next-button"></button>',
//           appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
//           responsive: [
//             {
//               breakpoint: 991,
//               settings: {
//                 arrows: true,
//
//               }
//             }
//           ]
//
//         });
//         slider
//           .on('afterChange', function (event, slick, currentSlide, nextSlide) {
//             var activeSlideNumber1;
//
//             if (currentSlide < 9) {
//               activeSlideNumber1 = "0" + (currentSlide + 1);
//             } else {
//               activeSlideNumber1 = currentSlide + 1;
//             }
//
//
//             // finally let's do this after changing slides
//             $('.slider-count #current4').html(activeSlideNumber1);
//           });
//
//       });
//
//
//
//
//
//
//     } else {
//       $('.about-desc').readmore('destroy');
//       $('.of-docs__list-items-reg, .of-docs__list-items-dec').filter('.slick-initialized').slick('unslick');
//
//
//       $(function() {
// // Card's slider
//         var $carousel = $('.foto-slider');
//
//         $carousel
//           .slick({
//             fade: true,
//             slidesToScroll: 1,
//             slidesToShow: 1,
//             arrows: false,
//             dots: false,
//             infinite: false,
//             swipeToSlide: true,
//             prevArrow: '<button type="button" class="prev-button"></button>',
//             nextArrow: '<button type="button" class="next-button"></button>',
//             appendArrows: $carousel.parents('.slider__wrap').find('.container-arrows'),
//             responsive: [
//               {
//                 breakpoint: 991,
//                 settings: {
//                   arrows: true
//
//                 }
//               }
//             ]
//
//           })
//           .magnificPopup({
//             type: 'image',
//             delegate: 'a:not(.slick-cloned)',
//             closeOnContentClick: false,
//             tLoading: 'Загрузка...',
//             mainClass: 'mfp-zoom-in mfp-img-mobile',
//             image: {
//               verticalFit: true,
//               tError: '<a href="%url%">Фото #%curr%</a> не загрузилось.'
//             },
//             gallery: {
//               enabled: true,
//               navigateByImgClick: true,
//               tCounter: '<span class="mfp-counter">%curr% из %total%</span>', // markup of counte
//               preload: [0,1] // Will preload 0 - before current, and 1 after the current image
//             },
//             zoom: {
//               enabled: true,
//               duration: 300
//             },
//             removalDelay: 300, //delay removal by X to allow out-animation
//             callbacks: {
//               open: function() {
//                 //overwrite default prev + next function. Add timeout for css3 crossfade animation
//                 $.magnificPopup.instance.next = function() {
//                   var self = this;
//                   self.wrap.removeClass('mfp-image-loaded');
//                   setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
//                 };
//                 $.magnificPopup.instance.prev = function() {
//                   var self = this;
//                   self.wrap.removeClass('mfp-image-loaded');
//                   setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
//                 };
//                 var current = $carousel.slick('slickCurrentSlide');
//                 $carousel.magnificPopup('goTo', current);
//               },
//               imageLoadComplete: function() {
//                 var self = this;
//                 setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
//               },
//               beforeClose: function() {
//                 $carousel.slick('slickGoTo', parseInt(this.index));
//               }
//             }
//           });
//
//
//
//       });
//      
//      
//      
//      
//      
//      
//      
//      
//      
//      
//     }
//   }
//
//   mql.addListener(screenTest);
//
//   screenTest(mql)
//
//
//   ////
//
//
//   $('.accord-title').on('click', function () {
//     var parents = $(this).parents(".accord-wrap");
//     parents.find('.accord-block').slideToggle();
//     parents.toggleClass('active')
//
//   });
//
//
//   $('.header-search').on('click', function () {
//     $(this).toggleClass('active');
//     $('.search__wrap').toggleClass('active');
//
//   });
//
//   $(".tabs-item").on('click', function () {
//     var itemThumbs = $(this).attr('data-thumb'),
//       imgThumbs = $(".tabs__block[data-thumb= '" + itemThumbs + "']");
//     $(this).addClass('active').siblings().removeClass('active');
//     imgThumbs.addClass('active').siblings().removeClass('active');
//   });
//
//
//   $(".traning-link, .card-menu__item, .catalog-menu__item").on('click', function () {
//     $(this).addClass('active').siblings().removeClass('active');
//   });
//
//
//   $.each($('.main-slider'), function () {
//
//     $(this).slick({
//       fade: true,
//       slidesToScroll: 1,
//       slidesToShow: 1,
//       arrows: true,
//       dots: false,
//       infinite: false,
//       swipeToSlide: true,
//       prevArrow: '<button type="button" class="prev-button"></button>',
//       nextArrow: '<button type="button" class="next-button"></button>',
//       appendArrows: $(this).parents('.slider__wrap').find('.container-arrows')
//
//     });
//   });
//
//   $.each($('.news-slider'), function () {
//
//     $(this).slick({
//       slidesToScroll: 1,
//       slidesToShow: 1,
//       arrows: true,
//       dots: false,
//       infinite: false,
//       swipeToSlide: true,
//       variableWidth: true,
//       prevArrow: '<button type="button" class="prev-button"></button>',
//       nextArrow: '<button type="button" class="next-button"></button>',
//       appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
//       responsive: [
//         {
//           breakpoint: 991,
//           settings: {
//             slidesToShow: 2,
//           }
//         },
//         {
//           breakpoint: 800,
//           settings: {
//             slidesToShow: 1,
//
//           }
//         }
//       ]
//
//     });
//
//   });
//
//   $.each($('.reviews-slider'), function () {
//     var slider = $(this);
//     slider.on('init', function (event, slick) {
//       var total = slick.slideCount,
//         activeTotal;
//
//       if (total < 10) {
//         activeTotal = '0' + total;
//       }
//       else {
//         activeTotal = total;
//       }
//       console.log(activeTotal);
//       $('.reviews-slider__wrap').find('.subheader-block_arrow').append('<div class="slider-count"><span class="current" id="current1">01</span> <span class="slash">/</span> <span class="total" id="total1">' + activeTotal + '</span></div>');
//     });
//
//     slider.slick({
//       slidesToScroll: 1,
//       slidesToShow: 1,
//       arrows: true,
//       dots: false,
//       infinite: false,
//       swipeToSlide: true,
//       variableWidth: true,
//       prevArrow: '<button type="button" class="prev-button"></button>',
//       nextArrow: '<button type="button" class="next-button"></button>',
//       appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
//       responsive: [
//         {
//           breakpoint: 991,
//           settings: {
//             variableWidth: false
//           }
//         },
//         {
//           breakpoint: 700,
//           settings: {
//             variableWidth: false
//
//           }
//         }
//       ]
//
//     });
//     slider
//       .on('afterChange', function (event, slick, currentSlide, nextSlide) {
//         var activeSlideNumber1;
//
//         if (currentSlide < 9) {
//           activeSlideNumber1 = "0" + (currentSlide + 1);
//         } else {
//           activeSlideNumber1 = currentSlide + 1;
//         }
//
//
//         // finally let's do this after changing slides
//         $('.slider-count #current1').html(activeSlideNumber1);
//       });
//
//
//   });
//
//
//
//
//
//   $.each($('.card-slider'), function () {
//
//     $(this).slick({
//       fade:true,
//       slidesToScroll: 1,
//       slidesToShow: 1,
//       arrows: true,
//       infinite: true,
//       swipe: false,
//       swipeToSlide: true,
//       prevArrow: '<button type="button" class="prev-button"></button>',
//       nextArrow: '<button type="button" class="next-button"></button>',
//       appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
//       asNavFor: '.card-slider__nav',
//       responsive: [
//         {
//           breakpoint: 991,
//           settings: {
//             swipe: true,
//             fade: true
//           }
//         }
//       ]
//
//     });
//   });
//
//
//   $('.card-slider__nav').slick({
//     slidesToScroll: 1,
//     slidesToShow: 3,
//     arrows: false,
//     dots: true,
//     infinite: false,
//     focusOnSelect: true,
//     vertical: true,
//     asNavFor: '.card-slider'
//   });
//
//
//
//   $('.of-docs__list-item, .popup-img').magnificPopup({
//     type: 'image',
//     closeOnContentClick: true,
//     mainClass: 'mfp-img-mobile',
//     image: {
//       verticalFit: true
//     }
//
//   });
//
//   $('.video-youtube').magnificPopup({
//     type: 'iframe',
//     closeOnContentClick: true,
//     mainClass: 'mfp-img-mobile',
//     image: {
//       verticalFit: true
//     }
//
//   });
//
//   /// mask
//   $(function () {
//     $(".phone").mask("+7 (999) 999 99 99");
//     $(".date").mask("99.99.9999");
//   });
//   ///
//
//
//   //// calendar
//
//   if ($('.input-cal').length > 0) {
//
//
//     $(".input-cal").daterangepicker({
//       "singleDatePicker": true,
//       "locale": {
//         "format": "DD     /     MM     /     YYYY",
//         "separator": "",
//         "applyLabel": "Применить",
//         "cancelLabel": "Отмена",
//         "fromLabel": "От",
//         "toLabel": "До",
//         "parentEl": ".input-cal__wrap",
//         "daysOfWeek": [
//           "Вс",
//           "Пн",
//           "Вт",
//           "Ср",
//           "Чт",
//           "Пт",
//           "Сб"
//         ],
//         "monthNames": [
//           "Январь",
//           "Февраль",
//           "Март",
//           "Апрель",
//           "Май",
//           "Июнь",
//           "Июль",
//           "Август",
//           "Сентябрь",
//           "Октябрь",
//           "Ноябрь",
//           "Декабрь"
//         ],
//         "firstDay": 1
//       }
//     });
//
//   }
//
//
//   setTimeout(function () {
//     $('ul.menu.flex').flexMenu({
//       linkText: "",
//       popupClass: "flexMenu-popup-nav",
//       linkTextAll: "МЕНЮ",
//       cutoff: 0
//     });
//   }, 500);
//
//
// /// formstyler
//
//   $('.select-styler, .input-checkbox').styler()
//
//   ///
//
//   $(".ac-aside__item, .reg-tabs-link").on('click', function () {
//     $(this).addClass('active').siblings().removeClass('active');
//   });
//
//
//   $('.count-minus, .count-plus').click(function () {
//     var $input = $(this).parent().find('.input-count');
//     if ($(this).hasClass("count-minus")) {
//       var count = parseInt($input.val(), 10) - 1;
//     } else {
//       var count = parseInt($input.val(), 10) + 1;
//     }
//     count = count < 1 ? 1 : count;
//     $input.val(count);
//     $input.change();
//     return false;
//   });
//
//
//   if ($("#dropzone").length > 0) {
//
//     $("#dropzone").dropzone({url: "/file/post"});
//
//   }
//
//
//   $('.edit').on('click', function () {
//     var parent = $(this).parents('.data-input__wrap');
//     parent.toggleClass('active');
//     parent.find(".data-input").prop("disabled", false);
//   });
//
//   $('.complete').on('click', function () {
//     var parent = $(this).parents('.data-input__wrap');
//     parent.removeClass('active');
//     parent.find(".data-input").prop("disabled", true);
//   });
//
//
//   $('.cal-icon').on('click', function () {
//     $(this).siblings('.input-cal').trigger('click');
//   });
//
//   // $('#modal-call').modal('show');
//
//   /// scroll
//
//   $("body").on('click', '.card-menu__link', function (e) {
//     var fixed_offset = 0;
//     $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 1000);
//     e.preventDefault();
//   });
//
//
// ///
//
//
//   $('.humb').on('click', function () {
//     $('body').toggleClass('active');
//   });
//
//
//   $('.slide-map__button').on('click', function () {
//     $('.map').slideToggle();
//   });
//
//
//   // slider image count
//   (function () {
//     var slider = $(" .news-slider, .card-slider, .main-slider"),
//       nextSlide = $(".slider-advant [data-slick-index = 1]").html(),
//       totalSlideNumber = slider.slick("getSlick").slideCount;
//     console.log(totalSlideNumber);
//     if (($('.calendar-slider__item').length) < 9) {
//       $(".slider-images__count-total").text(" / " + '0' + totalSlideNumber);
//
//     } else {
//       $(".slider-images__count-total").text(" / " + totalSlideNumber);
//
//     }
//     slider.on("afterChange", function (event, slick, currentSlide) {
//       var activeSlideNumber;
//       activeSlideNumber = currentSlide + 1;
//
//       if (currentSlide < 9) {
//         activeSlideNumber = "0" + (currentSlide + 1);
//       } else {
//         activeSlideNumber = currentSlide + 1;
//       }
//
//       if (currentSlide === slick.slideCount - 1) {
//         nextSlide = $(".slider-advant [data-slick-index=0]").html();
//       } else {
//         nextSlide = $(".slider-advant [data-slick-index=" + (currentSlide + 1) + "]").html();
//       }
//
//       $(".slider-images__count-number").text(activeSlideNumber);
//     });
//   })();
//

  $('.main-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    dots: true,
    // infinite: false,
    // focusOnSelect: true,
    // vertical: true,
    prevArrow: '<a href="#" class="prev-button"></a>',
    nextArrow: '<a href="#" class="next-button"></a>',
    appendArrows: $('.main-slider').parents('.slider__wrap').find('.container-arrows')

  });


  $('.count-minus, .count-plus').click(function () {
    var $input = $(this).parent().find('.input-count');
    if ($(this).hasClass("count-minus")) {
      var count = parseInt($input.val(), 10) - 1;
    } else {
      var count = parseInt($input.val(), 10) + 1;
    }
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });


  $.each($('.slider-small'), function () {
    $(this).slick({
      slidesToScroll: 1,
      slidesToShow: 3,
      arrows: true,
      dots: false,
      infinite: false,
      swipeToSlide: true,
      prevArrow: '<a href="#" class="prev-button-small"></a>',
      nextArrow: '<a href="#" class="next-button-small"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      // responsive: [
      //   {
      //     breakpoint: 991,
      //     settings: {
      //       slidesToShow: 2,
      //     }
      //   },
      //   {
      //     breakpoint: 800,
      //     settings: {
      //       slidesToShow: 1,
      //
      //     }
      //   }
      // ]

    });

  });

  $.each($('.slider-small-cart'), function () {
    $(this).slick({
      slidesToScroll: 1,
      slidesToShow: 2,
      arrows: true,
      dots: false,
      infinite: true,
      swipeToSlide: true,
      variableWidth: true,
      prevArrow: '<a href="#" class="prev-button-small"></a>',
      nextArrow: '<a href="#" class="next-button-small"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      // responsive: [
      //   {
      //     breakpoint: 991,
      //     settings: {
      //       slidesToShow: 2,
      //     }
      //   },
      //   {
      //     breakpoint: 800,
      //     settings: {
      //       slidesToShow: 1,
      //
      //     }
      //   }
      // ]

    });

  });
  
  $.each($('.slider-small-modal'), function () {
    $(this).slick({
      slidesToScroll: 1,
      slidesToShow: 2,
      arrows: true,
      dots: false,
      infinite: true,
      swipeToSlide: true,
      variableWidth: true,
      prevArrow: '<a href="#" class="prev-button-small"></a>',
      nextArrow: '<a href="#" class="next-button-small"></a>',
      appendArrows: $(this).parents('.slider__wrap').find('.container-arrows'),
      // responsive: [
      //   {
      //     breakpoint: 991,
      //     settings: {
      //       slidesToShow: 2,
      //     }
      //   },
      //   {
      //     breakpoint: 800,
      //     settings: {
      //       slidesToShow: 1,
      //
      //     }
      //   }
      // ]

    });

  });
  
// tabs
  $(".tabs-item").on('click', function () {
    $('.select-styler, .checkbox').trigger('refresh');
    var itemThumbs = $(this).attr('data-thumb'),
      imgThumbs = $(".tabs__block[data-thumb= '" + itemThumbs + "']");
    $(this).addClass('active').siblings().removeClass('active');
    imgThumbs.addClass('active').siblings().removeClass('active');
    ;
  });


  /// mask
  $(function () {
    $(".input-phone").mask("+7 (999) 999 99 99");
    // $(".date").mask("99.99.9999");
  });


  $(function () {
    $.mask.definitions['H'] = '[012]';
    $.mask.definitions['M'] = '[012345]';
    $('.input-time').mask('H9:M9', {
        placeholder: "_",
        completed: function () {
          var val = $(this).val().split(':');
          if (val[0] * 1 > 23) val[0] = '23';
          if (val[1] * 1 > 59) val[1] = '59';
          $(this).val(val.join(':'));
        }
      }
    );
  });


  ///


/// formstyler

  $('.select-styler, .checkbox').styler();

  ///


  $('.changepay__block').on('click', function () {
    if ($('#checkbox').is(':checked')) {
      $('.checked-block.courier').addClass('visible');
      $('.select-styler').trigger('refresh');
    } else {
      $('.checked-block.courier').removeClass('visible');

    }
  })

  $('.input-clear').on('click', function () {
    $(this).parents('.input-wrap').find('.input').val('')
  })


  // timer

  function countDown() {
    var seconds = 3600;
    var timer = setInterval(function () {
      if (seconds > 0) {
        seconds--;
        var 
          h = seconds / 3600 ^ 0,
          m = (seconds - h * 3600) / 60 ^ 0,
          s = seconds - h * 3600 - m * 60,
          time = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
        $(".timer").text(time);
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  $(function () {
    countDown()
  });


  function countDownHours() {
    var seconds = 7600;
    var timer = setInterval(function () {
      if (seconds > 0) {
        seconds--;
        var h = seconds / 3600 ^ 0,
          m = (seconds - h * 3600) / 60 ^ 0,
          // s = seconds-h*3600-m*60,
          time = (h < 10 ? "0" + h : h) + " часов " + (m < 10 ? "0" + m : m) + " минут";

        $(".shop-timer").text(time);
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  $(function () {
    countDownHours()
  });

  ///

  // $(".nano").nanoScroller({});
  // $(this).nanoScroller({alwaysVisible: true});

// console.log($('.orders').height());
//
//   if($('.orders').height() > 480){
//     $(this).addClass('orders-nano');
//
//     // setTimeout(function () {
//     //
//     //   $('.orders-nano').nanoScroller({alwaysVisible: true});
//     // }, 500)
//     //
//     $('.nano').nanoScroller({alwaysVisible: true});
//
//   }

  $('.orders-nano').nanoScroller({alwaysVisible: true});


  $('.promo').on('click', function () {
    $(this).parents('.promo-wrap').toggleClass('active')
  }); 
  
  $('.call-wrap .button').on('click', function () {
    $(this).parents('.call-wrap').toggleClass('active')
  });
  
  $('.call-wrap .info').on('click', function () {
    $(this).parents('.call-wrap').toggleClass('active')
  }); 
  
  $('.catalog-filter').on('click', function () {
    $(this).parents('.call-wrap').toggleClass('active')
  });
  
  $('.call-wrap .cart-wrap').on('click', function () {
    $(this).parents('.call-wrap').toggleClass('active')
    $('.cart-tooltip-nano').nanoScroller({alwaysVisible: true});

  });

  // $('#modal-product').modal('show');

  $('.ingredients__item .delete').on('click', function () {
    $(this).parents('.ingredients__item').addClass('active')
  });
  $('.ingredients__item .back').on('click', function () {
    $(this).parents('.ingredients__item').removeClass('active')
  }); 
  
  $('.button-select').on('click', function () {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
  });

  $(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 84 ) {
      $(".header-bottom__wrap").addClass("active");
    }
    if( scrolled <= 84 ) {
      $(".header-bottom__wrap").removeClass("active");
    }
  });

  $('.data-value__link').on('click', function () {
    var parent = $(this).parents('.data-value__wrap');
    parent.toggleClass('active');
    if(parent.hasClass('active')){
      parent.find(".data-input").prop("disabled", false);
    }else{
      parent.find(".data-input").prop("disabled", true);

    }
  });
  $('#modal-product').on('shown.bs.modal', function() {
     $('.nano').nanoScroller({alwaysVisible: true});
  })



});

