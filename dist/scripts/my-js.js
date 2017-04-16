
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



// Форма на 11 экране

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
