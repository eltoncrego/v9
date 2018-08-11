$('document').ready(function() {
  $('.hero').addClass('slide-in');
  $('.hero').addClass('fade-in');
});

function navigateTo(page) {
  $('.hero').addClass('slide-out');
  $('.hero').removeClass('fade-in');
  setTimeout(function() {
    if(page == 'back') {
      window.location.href = './../index.html';
    } else {
      window.location.href = page + '/index.html';
    }
  }, 500);
}
