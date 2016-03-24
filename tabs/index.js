/**
 * Created by 邓波 on 2016/3/24.
 */
window.onload = function(){

    var getId = function(id){
        return document.getElementById.call(document, id);
    };

    var outerBox = getId('notice');
    var titleObj = getId('notice-tit').getElementsByTagName('li');
    var contentObj = getId('notice-con').getElementsByTagName('div');
    var titleArr=[], contentArr=[];
    var timer = null;                 //自动播放定时器
    var index = 0;                    //开始索引
    var length = titleObj.length;


    //将获取到的题目和内容列表的类数组对象转换为真实数组（也可以不转换，但下面的循环就要改成for循环）
    Array.prototype.forEach.call(titleObj, function(ele){
        titleArr.push(ele);
    });
    Array.prototype.forEach.call(contentObj, function(ele){
        contentArr.push(ele);
    });


    //遍历每个tab标题绑定事件
    titleArr.forEach(function(ele, inx, arr){
       ele.addEventListener('mouseenter', function(event){
           index = inx;
           event.preventDefault();
           if(timer)
           clearInterval(timer);

           //setTimeout(switcher, 300);
           switcher();

           //切换函数
           function switcher(){
               for(var i =0; i<length;i++){
                   arr[i].classList.remove('select-tit');
                   contentArr[i].classList.remove('select-con');
               }
               ele.classList.add('select-tit');
               contentArr[inx].classList.add('select-con');
           }

       })
    });


    //离开区域，恢复自动播放
    outerBox.addEventListener('mouseleave', function(){
        index++;
        if(index === length)
            index = 0;
        timer = setInterval(autoSwitcher, 1000);
    });


    timer = setInterval(autoSwitcher, 1000);

    //自动切换函数
    function autoSwitcher(){
        for(var i =0; i < length; i++){
            titleArr[i].classList.remove('select-tit');
            contentArr[i].classList.remove('select-con');
        }
        titleArr[index].classList.add('select-tit');
        contentArr[index].classList.add('select-con');
        index++;
        if(index === length)
            index = 0;
    }
};