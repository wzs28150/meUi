define(['domReady'], function (domReady) {
  var initModule,hr_list;
  hr_list = function(){
    $('.hr .hr-list .item').click(function(){
      $('.hr .hr-list .item').removeClass('on');
      $(this).addClass('on');
    });
  };
  initModule = function (callbak) {
    domReady(function () {
      callbak(7);
      hr_list();
    });
  };
  return {
    initModule: initModule
  };
})