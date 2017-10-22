define(['domReady', 'loadmore'], function (domReady, loadmore) {
  var initModule, news_list, news_content, loadmore = loadmore.initModule;
  news_list = function () {
    loadmore(5, 1, '.pic-news-list .item', '.loadmore');
  };
  news_content = function () {

  };
  initModule = function (callbak) {
    domReady(function () {
      callbak(1);
    });
  };
  return {
    initModule: initModule,
    news_list: news_list,
    news_content: news_content
  };
})