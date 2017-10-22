/**
 * 点击加载更多模块 d 默认显示几个 l 每次加载几个  f 循环的item m 点击更多按钮
 * @param   d 默认显示几个 int
 * @param   l 每次加载几个 int
 * @param   f 循环的item string
 * @param   m 点击更多按钮 string
 * @return {[type]}          [description]
 */
define(['viewport'], function(viewport) {
  var initModule;

  var stateMap = {
      _default: '',
      _loading: null,
      _item: '',
      _more: ''
    },
    content = [],
    initModule, init, jqueryMap = {},
    setJqueryMap;
  setJqueryMap = function() {
    var $default = stateMap._default;
    var $loading = stateMap._loading;
    var $item = stateMap._item;
    var $more = stateMap._more;
    jqueryMap = {
      $default: $default,
      $loading: $loading,
      $item: $item,
      $more: $more
    };
  };
  init = function() {
    var lis = $(jqueryMap.$item);
    var mLis = $(jqueryMap.$item).length;
    var aaa
    //console.log(mLis);.
    // console.log(jqueryMap.$more);
    if (mLis > jqueryMap.$default) {
      aaa = jqueryMap.$default;
    } else {
      aaa = mLis;
      $(jqueryMap.$more).addClass('vis');
    }
    for (var n = 0; n < aaa; n++) {
      lis.eq(n).show().addClass('in-viewport');
    }
  };
  loadMore = function() {
    var lis = $(jqueryMap.$item);
    var mLis = $(jqueryMap.$item).length;
    var jcnum = $(jqueryMap.$item + ':visible').length;
    //console.log(jcnum+'/'+mLis);
    if (jcnum == mLis) {
      //$(jqueryMap.$more).html('全部加载完毕');
      $(jqueryMap.$more).addClass('vis');
    }
    for (var i = 0; i < jqueryMap.$loading; i++) {
      lis.eq(jcnum + i).show();
      if (jcnum + i == mLis) {
        //$(jqueryMap.$more).html('全部加载完毕');
        $(jqueryMap.$more).addClass('vis');
      }
    }
    $("article").getNiceScroll().resize();
  }
  listloadmore = function(d, l, f, m) {
    stateMap._default = d;
    stateMap._loading = l;
    stateMap._item = f;
    stateMap._more = m;
    setJqueryMap();
    $(jqueryMap.$item).hide();
    init();
    $(jqueryMap.$more).click(function() {
      loadMore();
    });
  };

  initModule = function(d, l, f, m) {

    //点击加载更多  d 默认显示几个 l 每次加载几个  f 循环的item m 点击更多按钮
    listloadmore(d, l, f, m)
  };
  return {
    initModule: initModule,
  };
})
