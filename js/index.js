// 等待页面加载结束后在进行js特效操作
window.addEventListener('load', function () {

    // 1.头部背景色渐变js
    // 获取头部元素 
    var header = document.querySelector("#header");
    // 会有一个bug：当页面突然刷新且页面不在顶部时，头部背景色出不来，因为没有滚动鼠标
    // 解决方案：将其封装成一个函数，页面加载完就无条件自动调用
    window.addEventListener('scroll', scroll);
    scroll();
    seckill();
    slide();

});
 
// 注意函数不要写在onload事件内部，否则会不断刷新页面
function scroll() {
    // 获取滚动出去的距离
    // 注意：现在主流浏览器都是用document.documentElement的滚动事件
    var scrollHeight = document.documentElement.scrollTop;
    // 获取轮播图的高度
    var slideHeight = document.querySelector('#slide').offsetHeight;
    // 计算当前滚动里面的透明度值 距离/轮播图高度
    var opacity = scrollHeight / slideHeight;
    if (opacity > 1) {
        header.style.backgroundColor = 'rgba(222, 24, 27, 1)';
    } else {
        header.style.backgroundColor = 'rgba(222, 24, 27, ' + opacity + ')';
    }
}

function seckill() {
    // 2.秒杀时间显示js
    // 获取装时间的span标签
    // 注意：这里用选择器获取标签需要加上all，获取所有的
    var span = document.querySelectorAll(".seckill-time span");
    // 获取未来时间的秒数：从1970.1.1.00.00到设置时间的时间差
    // 给参数，并使用gettime方法即可
    var futureTime = Math.floor(new Date(2018, 08, 22, 14, 00, 00).getTime() / 1000); //毫秒变秒数
    console.log(futureTime);

    // 获取当前时间的秒数，直接调用内置对象Date，不给参数即可
    var nowTime = Math.floor(new Date().getTime() / 1000); //毫秒变秒数
    console.log(nowTime);

    // 倒计时的总秒数
    var time = futureTime - nowTime;

    setInterval(function () {
        time--;

        if (time < 0) {
            time = 7200;
        }

        // 获取时
        var hour = Math.floor(time / 3600);
        // 获取分
        var minute = Math.floor(time % 3600 / 60);
        // 获取秒
        var second = Math.floor(time % 60);

        // 设置时
        span[0].innerHTML = Math.floor(hour / 10);
        span[1].innerHTML = Math.floor(hour % 10);
        // 设置分
        span[3].innerHTML = Math.floor(minute / 10);
        span[4].innerHTML = Math.floor(minute % 10);
        // 设置秒
        span[6].innerHTML = Math.floor(second / 10);
        span[7].innerHTML = Math.floor(second % 10);
    }, 1000);
}

function slide() {
    // 3.初始化轮播图
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true, //开启自动轮播     
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
}


