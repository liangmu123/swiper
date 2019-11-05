// 请求的数据
var data = [
    {src:'img/lunbo1.jpg',speed:3000},
    {src:'img/lunbo2.jpg',speed:5000},
    {src:'img/lunbo3.jpg',speed:10000}
]

// 对数据进行处理
var currentData = data.concat(data.slice(0,1))

// 起始下标
var index = 0

// 容器高度
var swiperHeight = 0

// 布局
function commonLayout(currentData){
    var str = ''
    str += '<div id="show-area">'
    str += '<ul id="imgOuter">'
    // 图片
    for(var i=0; i<currentData.length;i++){
        str += '<li>'
        str += '<img src="'+ currentData[i].src +'" alt="图片"/>'
        str += '</li>'
    }
    str += '</ul class="clearfix">'
    // str += '<ul id="indicator">'
    // // 按钮
    // for(var i=0; i<currentData.length - 1;i++){
    //     str += '<li></li>'
    // }
    // str += '</ul>'
    str += '</div>'
    $("#swiper").append(str)
}
// css布局
function cssLayout(){
    $('#imgOuter img')[0].onload = function() {
        swiperHeight = $('#imgOuter img')[0].offsetHeight
        $("#show-area").css({
            height:swiperHeight
        })
        $("#imgOuter li").css({
            height:swiperHeight + 'px'
        })
    }
}

// 上下滑动
function swiper(){
    index ++
    $("#imgOuter").animate({ top:-index * swiperHeight},500,function(){
        if(index == currentData.length - 1){
            $("#imgOuter").css({ top:0})
            index = 0
        }
        setTimeout(swiper,currentData[index].speed)
    })
}

commonLayout(currentData)

cssLayout()

setTimeout(swiper,currentData[index].speed)