import './assets/scss/common.scss'
//Require this, window.$ is then available in the browser console.
//https://webpack.js.org/loaders/expose-loader/
require("expose-loader?$!jquery");
require("./assets/css/biandan.css");
console.log($('#aroot'))

$("#send").click(function(){
  var name1 = $("#o").val();
  var hero1 = $("#1").val();
  var des1 = $("#2").val();
  var z_1 = $("#z-1").val();
  var z_2 = $("#z-2").val();
  var z_3 = $("#z-3").val();
  var z_4 = $("#z-4").val();
  var z_5 = $("#z-5").val();
  var z_6 = $("#z-6").val();
  var eqi1 = z_1+"，"+z_2+"，"+z_3+"，"+z_4+"，"+z_5+"，"+z_6;
  var i_1 = $("#i-1").val();
  var i_2 = $("#i-2").val();
  var i_3 = $("#i-3").val();
  var i_1_num = $("#i_1_num").val();
  var i_2_num = $("#i_2_num").val();
  var i_3_num = $("#i_3_num").val();
  var Ins1 = i_1+"："+i_1_num+"；"+i_2+"："+i_2_num+"；"+i_3+"："+i_3_num+"；";
  
 

  hyExt.request({
    header: {
      
    },
    url: 'http://39.108.132.153:8080/api/wangzhe/',
    method: 'POST',
    dataType: 'json',
    data: {
      'name':name1,'hero':hero1,'des':des1,'eqi':eqi1,'Ins':Ins1,
    }
  }).then(({ data, statusCode, header }) => {
    hyExt.logger.info('调用成功', data, statusCode, header);
    location.reload();
  }).catch(err => {
    hyExt.logger.warn('调用失败', err)
  })

  
})

