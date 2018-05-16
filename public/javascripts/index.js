(function () {
    var $body = document.body;
    var str = '动态内容：';
    for (var i = 1; i <= 12; i++) {  
        (function(T) {  
            setTimeout( function timer() {
                var $p = document.createElement('p')
                $p.innerHTML = '<p>' + str + '页面加载'  + T * 1000 + 'ms后展示</p>';
                $body.appendChild($p);  
            }, i*1000 );  
        })(i);  
    }  
})();