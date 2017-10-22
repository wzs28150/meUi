define(['domReady'], function (domReady) {
  var initModule, service_index, service_ask, service_download;
  service_ask = function () {
    console.log('ask is load');
    $('.service .ask-list .item label').click(function () {
      var lable = $(this);
      var item = lable.parent()
      var input = lable.prev('input');
      item.siblings().find('input').attr("checked", false);
    });
  };
  
  service_index = function () {

  };

  service_download = function(){
    
  };

  initModule = function (callbak) {
    domReady(function () {
      callbak(5);
    });
  };
  return {
    initModule: initModule,
    service_index: service_index,
    service_ask: service_ask,
    service_download: service_download

  };
})