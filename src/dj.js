import './assets/scss/common.scss'
require("expose-loader?$!jquery");
require("./id.js");
require("./assets/css/dj.css");

//Require this, window.$ is then available in the browser console.
//https://webpack.js.org/loaders/expose-loader/
// require("expose-loader?$!jquery");
console.log($('#root'))




hyExt.requestEbs({
    host: '39.108.132.153',
    port: 8080,
    path: '/api/wangzhe/',
    httpMethod: 'GET',
    param: { }
}).then(({ res, msg, ebsResponse: { entity, statusCode, header } }) => {
    hyExt.logger.info('调用成功')
    var a = UrlParam.paramValues("id");
    var dict1 = JSON.parse(entity);

   
    var heroId=["曜","云中君","瑶","盘古","猪八戒","嫦娥","上官婉儿","李信","沈梦溪","伽罗","盾山","司马懿","孙策","元歌","米莱狄","狂铁","奕星","裴擒虎","杨玉环","公孙离","明世隐","女娲","梦奇","苏烈","百里玄策","百里守约","铠","鬼谷子","干将莫邪","东皇太一","大乔","黄忠","诸葛亮","哪吒","太乙真人","蔡文姬","雅典娜","杨戬","成吉思汗","钟馗","虞姬","李元芳","张飞","刘备","后羿","牛魔","孙悟空","亚瑟","橘右京","娜可露露","不知火舞","张良","花木兰","兰陵王","王昭君","韩信","刘邦","姜子牙","露娜","程咬金","安琪拉","貂蝉","关羽","老夫子","武则天","项羽","达摩","狄仁杰","马可波罗","李白","宫本武藏","典韦","曹操","甄姬","夏侯惇","周瑜","吕布","芈月","白起","扁鹊","孙膑","钟无艳","阿轲","高渐离","刘禅","庄周","鲁班七号","孙尚香","嬴政","妲己","墨子","赵云","小乔","廉颇"];
    console.log(heroId);
    console.log(dict1)



        for (var i = dict1.length-1;i>=0;i--){
            if(dict1[i].hero==heroId[a]){
                var img_str = dict1[i].hero + ".png";
                var eqi_str = dict1[i].eqi;
                var eqi_str_arr = eqi_str.split('，'); 
            var d =
            "<li>"+"&nbsp;"+dict1[i].name+"推荐："+"<span>"+"</span>"+
            "<ul class='"+"sub'>"+
            "<li>"+
            "<div class=' "+" head'>"+
           
            "<div class='"+" hero-name'>"+dict1[i].name+"</div>"+
            "</div>"+
            "<div class=' "+" main'>"+
            "<div class='"+"play'><br> "+'玩法介绍'+"</div>"+
            "<div class='"+" cf'>"+"</div>"+
            "<div class='"+" des'>"+dict1[i].des+"</div>"+
            "</div>"+
            "<div class=' "+" main'>"+
            "<div class='"+"play'><br>"+'铭文介绍'+"</div>"+
            "<div class='"+" cf'>"+"</div>"+
            "<div class='"+" des'>"+dict1[i].Ins+"</div>"+
            "</div>"+
            "<div class=' "+" main'>"+
            "<div class='"+"play'><br>"+'装备介绍'+"</div>"+
            "<div class='"+" cf'>"+"</div>"+
            "<div class='"+" des'>"+dict1[i].eqi+"</div>"+
            "</div>";
            // "</div>"+"</div>"+
            // "</ul>"+"</ul>";

            $("#dog").append(d);
            var Ins_arr = dict1[i].Ins.split(',');
            for (var o = Ins_arr.length -1;o>=0;o--){
                $("#" + i).append(Ins_arr[o]);
            }
            // var c = "<div class='"+"Ins'>"+dict1[i].Ins+"</div>";
        }
    }
    
        $(function(){
            $(".nav>li").click(function(){
                // $(this).children(".sub").slideDown(1000)
                // $(this).siblings().children(".sub").slideUp(1000)


                if ($(this).children(".sub").is(":hidden")) {
                    $(".sub").hide();
                    $(this).children(".sub").slideDown(1000)
                }
                else {
                    $(".sub").hide();
                    $(this).siblings().children(".sub").slideUp(1000)
                }

            })
        });
// $("#dog").append(entity[1]);
document.getElementById('img-1').src=require("./assets/imgs/back1.png");


        
}).catch(err => {
hyExt.logger.warn('调用失败', err)
});

