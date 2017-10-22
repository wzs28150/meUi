/**
 * 设置dom高度模块
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
define([], function() {
  var initModule, container_aspectratio_responsive;
  /**
   * 判断dom是否存在
   * @param  {[type]} selector [description]
   * @return {[type]}          [description]
   */
  $.exists = function(selector) {
    "use strict";
    return (jQuery(selector).length > 0);
  };
  /**
   * 设置dom高度
   * @return {[type]} [description]
   */
  container_aspectratio_responsive = function() {
    if ($.exists('.container_aspectratio')) {

      $('.container_aspectratio').each(function() {
        var $this = $(this),
          $winwidth = $(window).width(),
          $ratio_type = $(this).attr('data-aspecttype'),
          $ratio_element = $(this).attr('data-aspectelement'),
          $ratio_num;
        if ($(window).width() <= 980) {
          $ratio_num = parseFloat($(this).attr('data-wap-aspectratio'));
        } else {
          $ratio_num = parseFloat($(this).attr('data-aspectratio'));
        }
        switch ($ratio_type) {

          //change window.width, height auto
          case 'winwidth_height_auto':
            $this.height($winwidth / $ratio_num - 2);
            break;
            //change window.width, width auto
          case 'winwidth_width_auto':
            $this.width($winwidth / $ratio_num);
            break;
            //change $this.width, height auto
          case 'thiswidth_height_auto':
            $this.height($this.width() / $ratio_num);
            break;
            //img in container ,change window.width, width auto
          case 'winwidth_incon_imgwidth_auto':
            $this.find('img').each(function() {
              var $conimgratio_num = parseFloat($(this).attr('data-aspectratio'));
              $(this).width($winwidth / $conimgratio_num);
            });
            break;
            //element in container ,change window.width, height auto
          case 'winwidth_incon_elementheight_auto':
            $this.find($ratio_element).each(function() {
              $(this).height($winwidth / $ratio_num);
            });
            break;
          default:
            $this.height($winwidth / $ratio_num - 2);
        }
      });
    }
  }

  initModule = function() {
    container_aspectratio_responsive();
  };
  return {
    initModule: initModule
  };
})
