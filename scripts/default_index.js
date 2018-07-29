$('document').ready(function() {
  $('.wrapper').addClass('fade-in');
  setTimeout(function() {
    $('h1').addClass('slide-in');
    $('h1').addClass('fade-in');
  }, 750);
  setTimeout(function() {
    $('h3').addClass('slide-in');
    $('h3').addClass('fade-in');
  }, 800);
  setTimeout(function() {
    $('p').addClass('slide-in');
    $('p').addClass('fade-in');
  }, 850);
  setTimeout(function() {
    $('.button-list').addClass('slide-in');
    $('.button-list').addClass('fade-in');
  }, 900);
  setTimeout(function() {
    $('.socials').addClass('slide-in');
    $('.socials').addClass('fade-in');
  }, 950);
});

function navigateTo(page) {
  setTimeout(function() {
    $('h1').addClass('slide-out');
    $('h1').removeClass('fade-in');
  }, 0);
  setTimeout(function() {
    $('h3').addClass('slide-out');
    $('h3').removeClass('fade-in');
  }, 50);
  setTimeout(function() {
    $('p').addClass('slide-out');
    $('p').removeClass('fade-in');
  }, 100);
  setTimeout(function() {
    $('.button-list').addClass('slide-out');
    $('.button-list').removeClass('fade-in');
  }, 150);
  setTimeout(function() {
    $('.socials').addClass('slide-out');
    $('.socials').removeClass('fade-in');
  }, 200);
  $('.wrapper').removeClass('fade-in');
  setTimeout(function() {
    window.location.href = page + '/index.html';
  }, 1000);
}
