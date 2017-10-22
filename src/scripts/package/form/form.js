define(['domReady'], function(domReady) {
  var initModule;
  var selectDivNow = 0;

  function selectLiClick() {
    //console.log(1);
    $('#pro_select').find('option').remove();
    $('#product span').html('Please choose');
    $('.selectLayer').find('li').each(function(i) {
      $(this).click(function() {
        $('.selectDiv').eq(selectDivNow).find('span').text($(this).text());
        var classid = $('.selectDiv').eq(selectDivNow).find('option').eq(i).attr('selected', true).attr('classid'); //点击的option的classid
        $('.selectDiv').eq(selectDivNow).find('span').attr('classid', classid);
        $('.selectDiv').eq(selectDivNow).find('option').attr('selected', false);
        $('.selectDiv').eq(selectDivNow).find('option').eq(i).attr('selected', true);
        if ($(this).parent('ul').parent().hasClass('division')) {
          $.ajax({
            url: 'index.php/index/propost',
            type: 'get',
            dataType: 'json',
            data: {
              classid: classid
            },
            success: function(item) {
              if (item) {
                $('#pro_select').find('option').remove();
                for (var i = 0; i < item.length; i++) {
                  $('#pro_select').append('<option value=' + item[i].catname + '>' + item[i].catname + '</option>');
                }
              } else if (item == '0') {
                alert('提交的数据错误');
              }
            },
            error: function() {
              alert('有错');
            }
          })
        }
      })
    })
  }

  function selectLiFun() {
    $('.selectLayer').find('li').hover(
      function() {
        $(this).css('background', '#f2f2f2');
      },
      function() {
        $(this).css('background', 'none');
      }
    )
  }
  //--
  function selectLiClick2() {
    $('.selectLayer').find('li').each(function(i) {
      if ($('.ForgotStep2Div').length > 0) {
        $(this).click(function() {
          $('.ForgotStep2Div').hide();
          $('.ForgotStep2Div').eq(i).show();
        })
      }
      //--
    })
  }

  initModule = function(callbak) {
    domReady(function() {
      //--
      $('.selectDiv').each(function(i) {

        $(this).find('span').text($(this).find('option:first').text());
        $(this).click(function() {
          selectDivNow = i;
          var selectList = "";
          $(this).find('option').each(function() {
            selectList = selectList + "<li data-value='" + $(this).val() + "'>" + $(this).text() + "</li>"
          })
          console.log($(this).offset().top);
          $('.selectLayer').find('ul').attr('data-type', $(this).find('span').attr('class')).html(selectList);
          $('.selectLayer').removeClass('division').addClass($(this).attr('id'))
          $('.selectLayer').width($(this).width());
          $('.selectLayer').css('left', $(this).offset().left);
          $('.selectLayer').css('top', $(this).offset().top + $(this).height() + 1);
          var sss = $(this);
          $('main').scroll(function(event) {
            $('.selectLayer').css('top', sss.offset().top + sss.height() + 1);
          });
          $('.selectLayer').attr('name', $(this).find('span').attr('class'));
          $('.selectLayer').show();
          selectLiFun();
          selectLiClick();
          selectLiClick2();
        })
      })
      $('.selectLayer').hover(
        function() {
          $(this).show();
        },
        function() {
          $(this).hide();
        }
      )
      //--复杂框
      $('.check').toggle(
        function() {
          $(this).addClass('checkNow');
          $(this).find('input').val(1);
        },
        function() {
          $(this).removeClass('checkNow');
          $(this).find('input').val(0);
        }
      )
      //--单选
      $('.radio').click(
        function() {
          $('.radio').removeClass('radioNow');
          $(this).addClass('radioNow');
          $('.radio').find('input').val(0);
          $(this).find('input').val(1);
        }
      )
      //-------文本输入框文字消失显示
      $('.input_hover').focus(function() {
        if ($(this).attr('value') == $(this).attr('title')) {
          $(this).attr('value', '');
        }
      })
      $('.input_hover').blur(function() {
        if ($(this).attr('value') == $(this).attr('title') || $(this).attr('value') == "") {
          $(this).attr('value', $(this).attr('title'));
        }
      })
      //-------文本输入框文字消失显示2
      $('.liInput').each(function(i) {
        $(this).find('.input1').focus(function() {
          $('.liInput').eq(i).find('label').hide();
        })
        $(this).find('.input1').blur(function() {
          if ($(this).attr('value') == "") {
            $('.liInput').eq(i).find('label').show();
          }
        })
        $(this).find('label').click(function() {
          $('.liInput').eq(i).find('label').hide();
          $('.liInput').eq(i).find('.input1').focus();
        })
      })
      //--数字框
      $('.numInput').each(function(i) {
        $(this).find('.num').html($(this).find('input').val());
        $(this).find('.jiaBtn').click(function() {
          $('.numInput').eq(i).find('input').val(Number($('.numInput').eq(i).find('input').val()) + 1);
          $('.numInput').eq(i).find('.num').html($('.numInput').eq(i).find('input').val());
        })
        $(this).find('.jianBtn').click(function() {
          if (Number($('.numInput').eq(i).find('input').val()) > 0) {
            $('.numInput').eq(i).find('input').val(Number($('.numInput').eq(i).find('input').val()) - 1);
          }
          $('.numInput').eq(i).find('.num').html($('.numInput').eq(i).find('input').val());
        })
      })
      //--
      $('.input1').focus(function() {
        $(this).addClass('inputNow');
      })
      $('.input1').blur(function() {
        $(this).removeClass('inputNow');
      })
    });
  }

  return {
    initModule: initModule
  };
})
