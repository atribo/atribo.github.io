new Siema({
  selector: '.character',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
$( document ).ready(function() {
  $('.open-navegation').on('click', function() {
    $('.navegation').fadeIn();
  });
  $('.close-navegation').on('click', function() {
    $('.navegation').fadeOut();
  });
});
