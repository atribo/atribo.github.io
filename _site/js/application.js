$( document ).ready(function(){
  $('.open-navegation').on('click', function() {
    $('.navegation').fadeIn();
    console.log("Clicado in");
  });
  $('.close-navegation').on('click', function() {
    $('.navegation').fadeOut();
    console.log("Clicado out");
  });

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
    onChange: () => {
      // showSkillItem();
    },
  });

  const page = window.location;
  if (page.pathname == '/index') {
    showCharacters();
  }

  function showCharacters(){
    $('.characters-select-list li').css('display','none');
    $('.characters-select-list li').each(function(index){
      var that = this;
      var t = setTimeout(function() {
          $(that).css('display','inline-block');
      }, 100 * index);
    });
  }

  // function showSkillItem(){
  //   $('.character-skill-list .skill-item').each(function(index){
  //     var that = this;
  //     var t = setTimeout(function() {
  //         $(that).addClass("icon");
  //     }, 100 * index);
  //   });
  // }

});
