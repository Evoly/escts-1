

// Маска для поля ввода телефона
$(document).ready(function(){
   $("input[name='tel']").inputmask("8 (999) 999-99-99");
});

// screen-2 video

// poster frame click event
$(document).on('click','.js-videoPoster',function(ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');
  // hide poster
  $wrapper.addClass('videoWrapperActive');
  // add iframe src in, starting the video
  $iframe.attr('src',src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
  // if we're stopping all videos on page
  if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
  // if we're stopping a particular video
  } else {
    var $iframe = $wrapper.find('.js-videoIframe');
  }
  // reveal poster
  $wrapper.removeClass('videoWrapperActive');
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr('src','');
}

// screen 7 form

$('a.form-nextbutton').click(function(e){

  e.preventDefault();
  // $(this).parents('.screen-7-form_step').removeClass('active');
  // $('.screen-7-form_step').next().addClass('active');
  $(this).parents('.screen-7-form_step').removeClass('active');
	$(this).parents('.screen-7-form_step').next().addClass('active');

  });

  $('a.form-prevbutton').click(function(e){

    e.preventDefault();

    $(this).parents('.screen-7-form_step').removeClass('active');
    $(this).parents('.screen-7-form_step').prev().addClass('active');

    });


// screen 11 form

$('a.modal').click(function(e){

  e.preventDefault();

  $('a.modal').not(this).addClass('fade')
  $('#'+$(this).attr('data-id')).addClass('active');

    $('.button_yes').click(function(e) {
      e.preventDefault();
      $(this).parents().removeClass('active');
      $('#modal-5').addClass('active');
    });

    $('.button_no').click(function(e) {
      e.preventDefault();
      $(this).parents().removeClass('active');
      $('#modal-6').addClass('active');
    });

    $('.form-grey-button').click(function(e) {
      e.preventDefault();
      $(this).parents().removeClass('active');
      $('a.modal').removeClass('fade')

    });


$(document).mouseup(function (e) {
  var container = $(".content_modal");
  if (e.target!=container[0]&&container.has(e.target).length===0){
      container.removeClass('active');
      $('a.modal').removeClass('fade')
    }
});
});

// screen 16 images
$('div.screen-16-right-col_img').click(function(e) {
  e.preventDefault();

  $(this).toggleClass('big-img screen16-lens-hide');
  $('.screen16-pointer').toggle();





  // $('body').click(function(e) {
  //   e.preventDefault();
  //
  //   $('div.screen-16-right-col_img').removeClass('big-img');
  //   $('.screen16-pointer').css('display','block');
  //
  // });

});




//screen-16 yandex map

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.717873, 37.688944],
            controls: ['trafficControl'],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true

        });

      myMap.geoObjects
          .add(new ymaps.Placemark([55.717873, 37.688944], {
            balloonContent: ''
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#1e1a63'
        }))
});
