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
            sb.innerHTML = "﹀";
        } else {
            $D(targetid);
            d.style.display = "block";
            sb.innerHTML = '︿';
        }
    }