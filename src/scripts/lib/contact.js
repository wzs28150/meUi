define(['domReady', 'alertinfo', 'async!BMap'], function (domReady, alertinfo) {
  var initModule, contact_index, createMap, setMapEvent, addMapControl, contact_msg, alertinfo = alertinfo.initModule;

  createMap = function () {
    var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
    var point = new BMap.Point(126.699645, 45.748256); //定义一个中心点坐标
    map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
    window.map = map; //将map变量存储在全局
  }

  //地图事件设置函数：
  setMapEvent = function () {
    map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
    //map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
    //map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
    map.enableKeyboard(); //启用键盘上下左右键移动地图
  }

  //地图控件添加函数：
  addMapControl = function () {
    //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({
      anchor: BMAP_ANCHOR_TOP_LEFT,
      type: BMAP_NAVIGATION_CONTROL_LARGE
    });
    map.addControl(ctrl_nav);
    //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({
      anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: 1
    });
    map.addControl(ctrl_ove);
    //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({
      anchor: BMAP_ANCHOR_BOTTOM_LEFT
    });
    map.addControl(ctrl_sca);
  }

  contact_index = function () {
    createMap(); //创建地图
    setMapEvent(); //设置地图事件
    addMapControl(); //向地图添加控件
  }


  contact_msg = function () {
    require(["idcode"], function (idcode) {
      $.idcode.setCode();
      $('.submit').click(function () {
        var IsBy = $.idcode.validateCode(),
          name = $('#name').val(),
          tel = $('#tel').val(),
          email = $('#email').val(),
          title = $('#title').val(),
          content = $('#content').val(),
          url = $('.msg-list').attr('data-url');
        if (!name) {
          alertinfo('姓名不能为空！');
          return false;
        }
        if (!tel) {
          alertinfo('联系电话不能为空！');
          return false;
        }
        if (!email) {
          alertinfo('电子邮箱不能为空！');
          return false;
        }
        if (!title) {
          alertinfo('留言标题不能为空！');
          return false;
        }
        if (!content) {
          alertinfo('留言内容不能为空！');
          return false;
        }
        if (!IsBy) {
          alertinfo('验证码错误！');
          return false;
        } else {
          var arrData = {
            'name': name,
            'tel': tel,
            'email': email,
            'title': title,
            'content': content
          };
          $.post(url, arrData,
            function (data) {
              if ('118' == data.err_code) {
                alertinfo(data.err_info);
              } else {
                alertinfo(data.err_info);
              }
            }, "json"
          );
        }

      });
    });
  };

  initModule = function (callbak) {
    domReady(function () {
      callbak(8);
    });
  };
  return {
    initModule: initModule,
    contact_index: contact_index,
    contact_msg: contact_msg
  };
})