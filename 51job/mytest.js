//保存当前焦点元素的索引
	var current_index=0;
	//5000表示调用周期，以毫秒为单位，5000毫秒就是5秒
	var timer=window.setInterval(autoChange, 5000);
	//获取所有轮播按钮
	var button_li=document.getElementById("button").getElementsByTagName("li");
	//获取所有banner图
	var pic_div=document.getElementById("banner_pic").getElementsByTagName("div");
	//遍历元素
	for(var i=0;i<button_li.length;i++){
		//添加鼠标滑过事件
		button_li[i].onmouseover=function(){
			//定时器存在时清除定时器
			if(timer){
				clearInterval(timer);
			}
			//遍历元素
			for(var j=0;j<pic_div.length;j++){
				//将当前索引对应的元素设为显示
				if(button_li[j]==this){
					current_index=j;  //从当前索引位置开始
					button_li[j].className="current";
					pic_div[j].className="current";
				}else{
					//将所有元素改变样式
					pic_div[j].className="pic";
					button_li[j].className="but";
				}
			}
		}
		//鼠标移出事件
		button_li[i].onmouseout=function(){
			//启动定时器，恢复自动切换
			timer=setInterval(autoChange,5000);			
		}
	}
	function autoChange(){
		//自增索引
		++current_index;
		//当索引自增达到上限时，索引归0
		if (current_index==button_li.length) {
			current_index=0;
		}
		for(var i=0;i<button_li.length;i++){
			if(i==current_index){
				button_li[i].className="current";
				pic_div[i].className="current";
			}else{
				button_li[i].className="but";
				pic_div[i].className="pic";
			}
		}
	}

	// 展开
 function $(element) {
        return element = document.getElementById(element);
    }

    function $D(element) {
        var d = $(element);
        var h = d.offsetHeight;
        var maxh = 300;

        function dmove() {
            h += 50; //设置层展开的速度
            if (h >= maxh) {
                d.style.height = '200px';
                clearInterval(iIntervalId);
            } else {
                d.style.display = 'block';
                d.style.height = h + 'px';
            }
        }
        iIntervalId = setInterval(dmove, 2);
    }

    function $D2(element) {
        var d = $(element);
        var h = d.offsetHeight;
        var maxh = 300;

        function dmove() {
            h -= 50; //设置层收缩的速度
            if (h <= 0) {
                d.style.display = 'none';
                clearInterval(iIntervalId);
            } else {
                d.style.height = h + 'px';
            }
        }
        iIntervalId = setInterval(dmove, 2);
    }

    function $use(targetid, objN) {
        var d = $(targetid);
        var sb = $(objN);
        if (d.style.display == "block") {
            $D2(targetid);
            d.style.display = "none";
            sb.innerHTML = "展开";
        } else {
            $D(targetid);
            d.style.display = "block";
            sb.innerHTML = '收缩';
        }
    }