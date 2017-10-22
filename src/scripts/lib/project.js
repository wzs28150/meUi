define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule, project_list, loadmore = loadmore.initModule,
    project_content;
  project_list = function () {
    loadmore(6, 3, '.project .project-list .item', '.loadmore');
  };
  project_content = function () {

  };
  initModule = function (callbak) {
    domReady(function () {
      callbak(3);
    });
  };
  return {
    initModule: initModule,
    project_list: project_list,
    project_content: project_content
  };
})