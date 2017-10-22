define(['loadmore', 'debug'], function (loadmore, debug) {
  var initModule, debug = debug.initModule, about_index, about_chairman, about_honor, about_team;
  about_index = function (callbak) {
    callbak(0);
    debug('公司介绍已加载');
  };
  about_chairman = function (callbak) {
    callbak(1);
    debug('董事长致辞已加载');
  };
  about_team = function (callbak){
    callbak(2);
    debug('领导团队已加载');
  }
  about_timer = function(callbak){
    callbak(3);
    debug('大事记已加载');
    
    require(["timeline"], function (timelinr) {
      $().timelinr({
        startAt: 5
      })

    });
  };
  about_honor = function (callbak) {
    callbak(4);
    debug('光荣榜已加载');
  };
  about_media = function(callbak){
    callbak(5);
    debug('宣传片展播已加载');
  };
  //__initialize
  initModule = function (callbak) {
    callbak(1);
  };
  return {
    initModule: initModule,
    about_index: about_index,
    about_chairman: about_chairman,
    about_team: about_team,
    about_timer: about_timer,
    about_honor: about_honor,
    about_media: about_media
  };
})