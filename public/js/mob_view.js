window.addEventListener('load', function(e){
    var body_width = document.getElementById('body').offsetWidth;
    if (body_width <= 425) {
        var cont_box = document.getElementsByClassName('contact_box');
        [].forEach.call(cont_box, function(el) {
            el.addEventListener('click', function() {
                var left_box = document.getElementById('left_box');
                var chat_box = document.getElementById('chat_box');
                
                var box_width = left_box.offsetWidth;
                left_box.style.width = box_width;
                chat_box.style.width = box_width;
                chat_box.style.display = 'block';
                chat_box.style.filter = 'blur(1px)';
                var margin_left = 0;
                var anim = setInterval(() => {
                    if (margin_left <= -box_width) {
                        left_box.style.marginLeft = -box_width;
                        left_box.style.display = 'none';
                        chat_box.style.filter = 'blur(0px)';
                        clearInterval(anim);
                    } else {
                        if (margin_left < (-box_width / 2) && chat_box.style.filter != 'blur(0.5px)') {chat_box.style.filter = 'blur(0.5px)';}
                        left_box.style.marginLeft = margin_left+'px';
                        margin_left -= 10;
                    }
                }, 8);
            })
        });

        document.getElementById('chat_back_ico').addEventListener('click', function(e) {
            var chat_box = document.getElementById('chat_box');
            var left_box = document.getElementById('left_box');
            if (left_box.style.display == '' || left_box.style.display == 'none') {
                left_box.style.display = 'block';
                left_box.style.filter = 'blur(1px)';
                var box_width = left_box.offsetWidth;
                var marginLeft = -box_width;
                var anim = setInterval(() => {
                    if (marginLeft >= 0) {
                        left_box.style.marginLeft = '0px';
                        left_box.style.filter = 'none';
                        clearInterval(anim);
                    } else {
                        if (marginLeft < (-box_width / 2) && left_box.style.filter != 'blur(0.5px)') {left_box.style.filter = 'blur(0.5px)';}
                        left_box.style.marginLeft = marginLeft + 'px';
                        marginLeft += 10;
                    }
                }, 8);
            } else {
                chat_box.style.display = 'block';
                left_box.style.display = 'none';
            }
        });
    } else {
        return;
    }
});