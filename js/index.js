/*
 * @Description: 优化触发秒钟点的显示时间，触发方式
 * @Version: 2.0
 * @Autor: Pony
 * @Date: 2020-10-09 09:30:20
 * @LastEditors: Pony
 * @LastEditTime: 2020-10-12 22:28:16
 */
let visibleDate = true; //显示时间点

function disptime() {
    //1.组装需要的时间
    let now = new Date(); //现在的时间
    let months = now.getMonth() + 1 >= 10? `${now.getMonth() + 1}月` : `0${now.getMonth() + 1}月`;//获取月
    let Dates = `${now.getDate()>=10?now.getDate():'0'+now.getDate()}日`;//日

    //2.获取时间
    let hours = now.getHours() >= 10 ? now.getHours() : `0${now.getHours()}`;//小时
    let min = now.getMinutes() >= 10 ? now.getMinutes() : `0${now.getMinutes()}`;//分钟

    //3.小数点一秒钟闪动一次
    let points = document.querySelector('.point'); //点元素
    let mHours = document.querySelector('.hours'); //小时元素
    let mMins = document.querySelector('.mins'); //分钟元素

    //日期
    let DateInfos = document.querySelector('.dateInfos');//日期元素

    DateInfos.innerHTML = `${months}${Dates}`;//显示日期
    mHours.innerHTML = hours;//显示小时
    mMins.innerHTML = min;//显示分钟


    !visibleDate?(points.style.visibility = 'hidden') : (points.style.visibility = 'visible');
    //自动显示隐藏
    visibleDate = !visibleDate;

    let myTime = setTimeout("disptime()", 1000);
};

//触发回掉
disptime();