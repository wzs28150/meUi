define(['pajax', 'debouncedresize', 'router', 'smoothscroll', 'scroll'], function(pajax, debouncedresize, router, smoothscroll, scroll) {
  var initModule, animated_contents, minheight, alertinfo, msg, exists, backtotop;
  /**
   * 判断dom是否存在
   * @param  {[type]} selector [description]
   * @return {[type]}          [description]
   */
  exists = function(selector) {
    "use strict";
    return (jQuery(selector).length > 0);
  };

  /**
   * 动画设置
   * @return {[type]} [description]
   */
  animated_contents = function() {
    "use strict";
    if (exists('.animate-element')) {

      $(".animate-element:in-viewport").each(function(i) {

        var $this = $(this);
        if (!$this.hasClass('in-viewport')) {
          setTimeout(function() {
            $this.addClass('in-viewport');
          }, 100 * i);
        }
      });
    }
  }


  /**
   * 弹窗
   * @param  {[type]} info [description]
   * @param  {[type]} aurl [description]
   * @return {[type]}      [description]
   */
  alertinfo = function(info, aurl) {
    $('.alert_player').fadeIn();
    $('.alert_player .info').html(info);
    if (aurl === undefined) {} else {
      $('.alert_player .queren_btn,.alert_player .bg').click(function() {
        location.href = aurl;
      })
    }

  };

  backtotop = function() {
    $("#backtotop").on("click", function() {
      $('body,html').animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  }
  minheight = function() {
    var hh = $('header').height();
    var fh = $('footer').height();
    var wh = $(window).height();
    var nh = $('nav').height();
    var mh;
    if (nh > wh) {
      mh = nh - fh - hh;
    } else {
      mh = $(window).height() - fh - hh;
    }
    $('article').css('min-height', mh + 'px');
  }

  msg = function() {
    $('body').undelegate('.msg a', 'click');
    $('body').delegate('.msg a', 'click', function(event) {
      var name = $('#name').val();
      var tel = $('#tel').val();
      var email = $('#email').val();
      var msg = $('#msg').val();
      var url = $('.msg').attr('data-url');
      if (!name) {
        //用户名不能为空
        alertinfo('Имя пользователя  не может быть пустым！');
      }
      if (!tel) {
        //电话号码不能为空
        alertinfo('номер телефона  не может быть пустым ！');
      }
      if (!email) {
        //邮箱不能为空
        alertinfo('почтовый ящик  не может быть пустым！');
      }
      if (!msg) {
        //内容不能为空
        alertinfo('содержание  не может быть пустым ！');
      }
      arrData = {
        'name': name,
        'tel': tel,
        'email': email,
        'msg': msg
      };
      $.post(url, arrData,
        function(data) {
          if ('118' == data.err_code) {
            alertinfo(data.err_info);
          } else {
            alertinfo(data.err_info);
          }
        }, "json"
      );

    });
  }

  initModule = function() {
    //必须加载模块
    router.initModule('article', false);
    var $ww = $(window).width();
    //scroll.initModule('body');
    scroll.initModule('.scroller');

    msg();
    minheight();
    backtotop();
    //parallaxan();
    require(["viewport"], function(viewport) {
      animated_contents();
      $(window).scroll(function(event) {
        /* Act on the event */
        animated_contents();
      });
    });

    $(window).on('debouncedresize', function() {
      minheight();
    });

    pajax.initModule('main', function() {}, function(targetelement, state) {
      router.initModule('article', state);
      msg();
      backtotop();
      minheight();
      //scroll.resetsize('body');
      require(["viewport"], function(viewport) {
        animated_contents();
        $(window).scroll(function(event) {
          /* Act on the event */
          animated_contents();
        });
      });
      $(window).on('debouncedresize', function() {
        minheight();
      });
      if (targetelement) {
        //console.log(targetelement);
        setTimeout(function() {
          //console.log($('#' + targetelement).offset().top);
          $.smoothScroll({
            offset: -($('header').height()),
            speed: 500,
            scrollTarget: '#' + targetelement
          });
        }, 500);
      }
    });

    $('.alert_player .bg,.alert_player .queren_btn').click(function() {
      $('.alert_player').fadeOut();
    });
  };

  return {
    initModule: initModule,
    alertinfo: alertinfo
  };
})
