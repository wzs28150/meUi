/**
 * 搜索模块
 * dom结构
 * <div class="search" data-url="./search.json" data-method="post" data-jump="true">
 *  <input type="text" id="keywords" placeholder="请输入您要搜索的产品">
 *  <a id="search-submit" href="javascript:void(0);"></a>
 *  <ul></ul>
 * </div>
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
define(['jquery', 'nicescroll'], function($, nicescroll) {
  var initModule, search_focus, search, scroll;

  /**
   * search选中效果
   * @type {[type]}
   */
  search_focus = function() {
    $('.search input').focus(function() {
      $(this).parent().parent('.search').addClass('on');
    }).blur(function() {
      $(this).parent().parent('.search').removeClass('on');
      $(this).parent().parent('.search').find('ul').fadeOut();
    })

    $('.search').mouseleave(function(event) {
      $(this).removeClass('on');
      $('.search input').val('');
      $('.search input').blur();
    });
  }
  /**
   * 搜索模块
   * @return {[type]} [description]
   */
  search = function() {
    $('.search input').unbind("input propertychange");
    $('.search input').bind("input propertychange", function() {
      var e = $(this).val();
      var dataurl = $('.search').attr('data-url');
      var method = $('.search').attr('data-method');
      var jump = $('.search').attr('data-jump');
      if (jump) {
        $('#search-submit').attr('href', '/search?keywords=' + e)
      }

      if (null === e || "" === e) return $(".search ul").fadeOut(), !1;
      if (method == 'get') {
        $.getJSON(dataurl + '?keywords=' + e, function(data) {
          if (data.err_code == '114') {
            $(".search").addClass('on');
            $(".search ul").stop().animate({
              scrollTop: 0,
            }, 400);
            $(".search ul").fadeIn().html(data.err_info);
          } else {
            $(".search").addClass('on');
            $(".search ul").fadeIn().html('<li><a href="javascript:void(0);">未找到搜索结果!</a></li>')
          }
        });
      } else {
        var i = {
          keywords: e
        };
        return $.post(dataurl, i, function(e) {
          "114" === e.err_code ? e.err_info ? $(".search ul").fadeIn().html(e.err_info) : $(".search ul").fadeIn().html('<li><a href="javascript:void(0);">未找到搜索结果!</a></li>') : $(".search ul").fadeOut()
        }, "json"), !1
      }
    });
  }

  /**
   * 滚动条
   * @return {[type]} [description]
   */
  scroll = function() {
    $(".search ul").niceScroll({
      cursorcolor: '#f57921', //#CC0071 光标颜色
      cursorwidth: "2px", // 滚动条的宽度，单位：便素
      horizrailenabled: false,
      zindex: 10,
      scrollspeed: 70, // 滚动速度
      mousescrollstep: 70, // 鼠标滚轮的滚动速度 (像素)
      hwacceleration: true, // 激活硬件加速
      directionlockdeadzone: 0,
      oneaxismousemode: false,
      preventmultitouchscrolling: true, // 防止多触点事件引发滚动
      // autohidemode: "hidden",
      cursordragontouch: true,
      directionlockdeadzone: 1, // 设定死区，为激活方向锁定（像素）
    });
  };

  initModule = function() {
    search_focus();
    search();
    scroll();
  };
  return {
    initModule: initModule
  };
})
