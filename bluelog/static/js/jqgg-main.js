//记录轮播的次数
var count = 0;
//轮播的方向,默认向右
var isgo = 0;
//第一计时器对象
var timer;
//获取ul元素
var ul_img = document.getElementsByClassName("ul_img")[0];
//获取所有li图片元素
var li_img = document.getElementsByClassName("li_img");
//第一部分，设置定时器
function showtime() {
    timer = setInterval(function () {
        if (isgo == false) { //isgo为false表示向右轮播
            count++;
            if (count >= li_img.length) { //如果轮播到右边界，往反方向轮播
                count = 0;
                isgo = false;
            }
            //显示轮播到的当前图片，图片轮播的原理就是把图片排成一行，
            //然后准备一个只有一张图片大小的容器，对这个容器设置超出部分隐藏，
            //再控制定时器来让这些图片整体左移或右移，这样呈现出来的效果就是图片在轮播了
            ul_img.style.transform = "translate(" + -550 * count + "px)";
        } else { //isgo为true表示向左轮播
            count--;
            if (count <= 0) { //如果轮播到左边界，往反方向轮播
                count = 0;
                isgo = false;
            }
            //显示轮播到的当前图片
            ul_img.style.transform = "translate(" + -550 * count + "px)";
        }

        for (var i = 0; i < div_btn.length; i++) {
            //这里是给下面的圆角矩形设置颜色，当轮播到这张图片时，显示为深色，否则显示为浅色
            div_btn[i].style.backgroundColor = "aquamarine";
        }
        div_btn[count].style.backgroundColor = "aqua";
    }, 4000); //每次延迟4秒钟
}
showtime();

//第二部分，为箭头添加事件
//获取控制方向的箭头元素
var arrow = document.getElementsByClassName("arrow");
//为箭头绑定事件
for (var i = 0; i < arrow.length; i++) {
    //鼠标悬停时
    arrow[i].onmouseover = function () {
        //停止计时器
        clearInterval(timer);
    }
    //鼠标离开时，开始轮播
    arrow[i].onmouseout = function () {
        showtime();
    }
    //鼠标点击时，轮播一张图片
    arrow[i].onclick = function () {
        //区分左右箭头
        if (this.title == 0) { //点击的是右箭头时，往右轮播
            count++;
            if (count > 3) {
                count = 0;
            }
        } else {
            count--;
            if (count < 0) {
                count = 3;
            }
        }
        //显示轮播到的当前图片
        ul_img.style.transform = "translate(" + -550 * count + "px)";
        for (var i = 0; i < div_btn.length; i++) {
            div_btn[i].style.backgroundColor = "aquamarine";
        }
        div_btn[count].style.backgroundColor = "aqua";
    }
}

//第三部分
//鼠标悬停在底部圆角矩形的操作
var div_btn = document.getElementsByClassName("div_btn");
div_btn[0].style.backgroundColor = "aqua"; //刚开始时，默认在第一张图，下面的圆角矩形应显示为深色
for (var i = 0; i < div_btn.length; i++) { //给每个圆角矩形添加事件
    div_btn[i].index = i;
    div_btn[i].onmouseover = function () {
        //当鼠标落在某个圆角矩形时
        clearInterval(timer); //停止定时器
        for (var j = 0; j < div_btn.length; j++) { //设置矩形的颜色
            div_btn[j].style.backgroundColor = "aquamarine";
        }
        div_btn[this.index].style.backgroundColor = "aqua";
        //控制方向，当鼠标停留在边界时，需设置轮播的方向，便于
        //鼠标离开重新启动定时器时，轮播的方向正确
        if (this.index == 3) {
            isgo = true;
        }
        if (this.index == 0) {
            isgo = false;
        }
        //让count值对应
        count = this.index;
        ul_img.style.transform = "translate(" + -550 * this.index + "px)";
    }
    div_btn[i].onmouseout = function () { //鼠标离开时
        //重新启动计时器
        showtime();
    }
}


