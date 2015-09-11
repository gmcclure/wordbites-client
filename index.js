(function($, window, document, undefined) {
  'use strict';
  
  $.getScript('https://platform.twitter.com/widgets.js');

  fillQuote();

  $('#new-quote-button').on('click', function() {
    fillQuote();
  });

  $('#audio-control-button').on('click', function() {
    var audioplayer = document.getElementById('horror-audio');
    if (audioplayer.paused) {
      $('#audio-control-button').html('Silence');
      audioplayer.play();
    } else {
      $('#audio-control-button').html('Sound');
      audioplayer.pause();
    }
  });

  function fillQuote() {
    $.getJSON('http://safe-temple-2637.herokuapp.com/quotes/random', function(data) {
      $('#quote-box p#quote').html(data['text']);
      $('#quote-box attrib').html('&mdash; ' + data['author']);

      $('#twitter-button').empty();

      var twttrBtn = $('<a></a>').attr('href', 'https://twitter.com/intent/tweet').attr('class', 'twitter-share-button').attr('data-text', data['text'] + '--' + data['author']).attr('data-url', 'http://codepen.io/gmcclure/pen/QbBGEm').html('Tweet');

      $('#twitter-button').append(twttrBtn);
      twttr.widgets.load();
    });
  }
})(jQuery, window, document);
