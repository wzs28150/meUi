define([], function() {
    var initModule,$config={
        isdebug:true
    };
  
    initModule = function($str) {
      if($config.isdebug){
        console.log($str)
      }
    };
  
    return {
      initModule: initModule
    };
  })
  