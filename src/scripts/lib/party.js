define(['domReady'], function (domReady) {
  var initModule, party_list, party_content;
  party_list = function () {

  };
  party_content = function () {

  };
  initModule = function (callbak) {
    domReady(function () {
      callbak(6);
    });
  };
  return {
    initModule: initModule,
    party_list: party_list,
    party_content: party_content
  };
})