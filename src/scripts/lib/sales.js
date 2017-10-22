define(['domReady'], function (domReady) {
  var initModule, sales_map;
  sales_map = function(){

  };
  initModule = function (callbak) {
    domReady(function () {
      callbak(4);
    });
  };
  return {
    initModule: initModule,
    sales_map: sales_map
  };
})