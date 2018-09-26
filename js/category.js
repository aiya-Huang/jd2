window.addEventListener('load', function () {
  var jdCategory = new JdCategory();
  jdCategory.initLeftSlide();
  jdCategory.initRightSlide();
  jdCategory.leftCeiling();

})
var JdCategory = function () {

};

JdCategory.prototype = {
  // 初始化左侧分类
  initLeftSlide: function () {
    // 初始化左边swiper局部滑动内容
    // 大容器的名称
    var swiper = new Swiper('.container1', {
      // 设置方向
      direction: 'vertical',
      // 设置内容的高度或宽度自适应
      slidesPerView: 'auto',
      // 是否有弹跳效果
      freeMode: true,
      // 是否出现滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      // 是否鼠标滚轮可以滚动，前提是先点击需要滚动的内容
      mousewheel: true,
    });
  },
  // 初始化右侧分类
  initRightSlide: function () {
    // 初始化右边swiper局部滑动内容
    var swiper = new Swiper('.container2', {
      // 设置方向
      direction: 'vertical',
      // 设置内容的高度或宽度自适应
      slidesPerView: 'auto',
      // 是否有弹跳效果
      freeMode: true,
      // 是否出现滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      // 是否鼠标滚轮可以滚动，前提是先点击需要滚动的内容
      mousewheel: true,
    });
  },
  // 左侧点击置顶效果
  leftCeiling:function(){
    var ul = document.querySelector('.category-left ul');
    console.log(ul);
    
    var lis = ul.children;
    for (var i = 0 ;i < lis.length; i++) {
        lis[i].index = i;
    }

    // 事件的捕获，所有子元素都有同名事件，就可以给父元素添加，
    // 而不是遍历子元素给每一个子元素添加点击事件，这样比较节省性能
    ul.addEventListener('click',function(e){
      // e.target指的是li里面的a标签
      var li = e.target.parentNode;
      var index = li.index;
      console.log(index);
      
      // 获取li标签的高度
      var liHeight = li.offsetHeight;
      console.log(liHeight);
      
      // 获取到需要位移的距离
      var distanceY = -index * liHeight;
      console.log(distanceY);
      
      // 边界检测
      // 计算最大位移距离
      var maxDistanceY = document.querySelector('.category-left').offsetHeight - ul.offsetHeight;
      console.log(maxDistanceY);
      
      // 判断当前位移的距离是否大于最大位移距离
      if(distanceY > maxDistanceY){
        // 当 |需要位移的距离| 小于 |最大位移距离| ，此时ul的位移距离就是 需要位移的距离
        ul.parentNode.parentNode.style.transform = 'translate3d(0px,'+ distanceY +'px,0px)';
      }else{
        // 当 |需要位移的距离| 大于 |最大位移距离|，此时ul的位移距离就是 最大位移距离
        ul.parentNode.parentNode.style.transform = 'translate3d(0px,'+ maxDistanceY +'px,0px)';
      };

      //给当前点击的标签一个过渡的效果，并且添加一个高亮类名
      // swiper插件默认将过渡属性添加到 所有滚动内容的容器，图片容器 ，所以我们也把这个属性添加到它上面
      ul.parentNode.parentNode.style.transformDuration = '300ms';
      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active');    
      }
      li.classList.add('active');
    });
  }




}