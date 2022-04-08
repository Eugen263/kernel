navigator.userAgent = '1';
navigator.appVersion = '0.0.1';
navigator.platform = 'html';

window.addEventListener("load", function(event) {
    var body_width = document.getElementById('body').offsetWidth;
    var loader = document.getElementById('overflow_box');
    loader.style.display = 'none';
    if (body_width > 425) {
        var profile_width = document.getElementById('right_box').offsetWidth;
        var left_box = document.getElementById('left_box').offsetWidth;
        var chat_width = body_width - profile_width;
        chat_width = chat_width - left_box;
        var chat_box = document.getElementById('chat_box');
        chat_box.style.width = chat_width + 'px';
    } else {
        return;
    }
  });

document.getElementById('menu_btn').addEventListener('click', function(e) {
    var main_menu_popup = document.getElementById('menu_popup_overflow');
    if (main_menu_popup.style.display == '' || main_menu_popup.style.display == 'none') {
        main_menu_popup.style.display = 'block';
    } else {
        main_menu_popup.style.display = 'none';
    }
});

document.getElementById('chat_cont_btn').addEventListener('click', function(e) {
    var chat_cont_popup = document.getElementById('chat_sett_popup_overflow');
    if (chat_cont_popup.style.display == '' || chat_cont_popup.style.display == 'none') {
        chat_cont_popup.style.display = 'block';
    } else {
        chat_cont_popup.style.display = 'none';

    }
});

document.getElementById('chat_stats').addEventListener('click', function(e) {
    var right_box = document.getElementById('right_box');
    if (document.getElementById('body').offsetWidth > 425) {
        if (right_box.style.display == '' || right_box.style.display == 'none') {
            var opas = 1;
            right_box.style.display = 'block';
            right_box.style.opacity = opas;
            var mar = -right_box.offsetWidth;
            right_box.style.marginRight = mar + 'px';
            var id = null;
            id = setInterval(show, 14);
            function show() {
                if (mar >= -13) {
                    right_box.style.marginRight = '0px';
                    //right_box.style.opacity = '1';
                    clearInterval(id);
                } else {
                    opas = opas + 0.02;
                    mar = mar + 20;
                    //console.log(mar);
                    right_box.style.marginRight = mar + 'px';
                    //right_box.style.opacity = opas;
                }
            }

        } else {
            var opas = 1;
            right_box.style.opacity = opas;
            var marg = right_box.style.marginLeft;
            var id_h = null;
            id_h = setInterval(hide, 7);
            function hide() {
                if (-marg >= right_box.offsetWidth) {
                    right_box.style.marginRight = -right_box.offsetWidth+'px';
                    //right_box.style.opacity = '0';
                    right_box.style.display = 'none';
                    clearInterval(id_h);
                } else {
                    opas = opas - 0.02;
                    marg = marg - 10;
                    right_box.style.marginRight = marg + 'px';
                    //right_box.style.opacity = opas;
                }
            }
        }
    } else {
        var chat_box = document.getElementById('chat_box');
        if (right_box.style.display == '' || right_box.style.display == 'none') {
            var opas = 1;
            right_box.style.display = 'block';
            right_box.style.opacity = opas;
            var mar = -right_box.offsetWidth;
            right_box.style.marginRight = mar + 'px';
            var id = null;
            id = setInterval(show, 7);
            function show() {
                if (mar >= -3) {
                    right_box.style.marginRight = '0px';
                    //right_box.style.opacity = '1';
                    chat_box.style.display = 'none';
                    clearInterval(id);
                } else {
                    opas = opas + 0.02;
                    mar = mar + 10;
                    right_box.style.marginRight = mar + 'px';
                    //right_box.style.opacity = opas;
                }
            }
        } else {
            var chat_box = document.getElementById('chat_box');
            var opas = 1;
            right_box.style.opacity = opas;
            var marg = right_box.style.marginLeft;
            var id_h = null;
            id_h = setInterval(hide, 7);
            function hide(chat_box) {
                if (-marg >= right_box.offsetWidth) {
                    right_box.style.marginRight = -right_box.offsetWidth+'px';
                    //right_box.style.opacity = '0';
                    right_box.style.display = 'none';
                    chat_box.style.display = 'block';
                    clearInterval(id_h);
                } else {
                    opas = opas - 0.02;
                    marg = marg - 10;
                    right_box.style.marginRight = marg + 'px';
                    //right_box.style.opacity = opas;
                }
            }
        }
    }
});

document.getElementById('back_box_ico').addEventListener('click', function(e) {
    var right_box = document.getElementById('right_box');
    if (document.getElementById('body').offsetWidth > 425) {
        if (right_box.style.display == '' || right_box.style.display == 'none') {
            right_box.style.display = 'block';
        } else {
            var opas = 1;
            right_box.style.opacity = opas;
            var marg = right_box.style.marginLeft;
            var id_h = null;
            id_h = setInterval(hide, 7);
            function hide() {
                if (-marg >= right_box.offsetWidth) {
                    right_box.style.marginRight = -right_box.offsetWidth+'px';
                    //right_box.style.opacity = '0';
                    right_box.style.display = 'none';
                    clearInterval(id_h);
                } else {
                    opas = opas - 0.02;
                    marg = marg - 10;
                    right_box.style.marginRight = marg + 'px';
                    //right_box.style.opacity = opas;
                }
            }
        }
    } else {
        var chat_box = document.getElementById('chat_box');
        if (right_box.style.display == '' || right_box.style.display == 'none') {
            chat_box.style.display = 'none';
            right_box.style.display = 'block';
        } else {
            chat_box.style.display = 'block';
            right_box.style.display = 'none';
        }
    }
});

//profile menu

window.addEventListener('load', function(e){
    var menu_item = document.getElementsByClassName('extra_menu_text');
    var margin_speed = 10;
    var mar_st = 2;
    for (i = 0; i <= 4; i++) {
        if (i == 0) {
            //media
            menu_item[i].addEventListener('click', function(){
                var media_block = document.getElementById('pr_media_box');
                if (document.getElementById('pr_files_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var media_underline = menu_item[0].getElementsByClassName('extra_active')[0];
                        var file_underline = menu_item[1].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            media_underline.style.opacity = '1';
                            file_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            media_underline.style.opacity = one_underline_opac;
                            file_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var files_block = document.getElementById('pr_files_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -files_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        media_block.style.marginLeft = margin_left+'px';
                        media_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            media_block.style.marginLeft = '0px';
                            files_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            media_block.style.marginLeft = margin_left+'px';
                            files_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else if (document.getElementById('pr_links_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var media_underline = menu_item[0].getElementsByClassName('extra_active')[0];
                        var links_underline = menu_item[2].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            media_underline.style.opacity = '1';
                            links_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            media_underline.style.opacity = one_underline_opac;
                            links_underline.style.opacity = two_underline_opac;
                        }
                    }
                    
                    var links_block = document.getElementById('pr_links_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -links_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        media_block.style.marginLeft = margin_left+'px';
                        media_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            media_block.style.marginLeft = '0px';
                            links_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            media_block.style.marginLeft = margin_left+'px';
                            links_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else if (document.getElementById('pr_music_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var media_underline = menu_item[0].getElementsByClassName('extra_active')[0];
                        var music_underline = menu_item[3].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            media_underline.style.opacity = '1';
                            music_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            media_underline.style.opacity = one_underline_opac;
                            music_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var music_block = document.getElementById('pr_music_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -music_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        media_block.style.marginLeft = margin_left+'px';
                        media_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            media_block.style.marginLeft = '0px';
                            music_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            media_block.style.marginLeft = margin_left+'px';
                            music_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else if (document.getElementById('pr_voise_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var media_underline = menu_item[0].getElementsByClassName('extra_active')[0];
                        var voise_underline = menu_item[4].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            media_underline.style.opacity = '1';
                            voise_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            media_underline.style.opacity = one_underline_opac;
                            voise_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var voise_block = document.getElementById('pr_voise_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -voise_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        media_block.style.marginLeft = margin_left+'px';
                        media_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            media_block.style.marginLeft = '0px';
                            voise_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            media_block.style.marginLeft = margin_left+'px';
                            voise_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else {
                    return;
                }
            })
        } else if (i == 1) {
            //files
            menu_item[i].addEventListener('click', function(){
                var files_block = document.getElementById('pr_files_box');
                if (document.getElementById('pr_media_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var file_underline = menu_item[1].getElementsByClassName('extra_active')[0];
                        var media_underline = menu_item[0].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            file_underline.style.opacity = '1';
                            media_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            file_underline.style.opacity = one_underline_opac;
                            media_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var media_block = document.getElementById('pr_media_box');
                    var margin_left = 0;
                    var margin_right = -media_block.offsetWidth;
                    files_block.style.marginRight = margin_right+'px';
                    files_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            files_block.style.marginRight = '0px';
                            media_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            files_block.style.marginRight = margin_right+'px';
                            media_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else if (document.getElementById('pr_links_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var file_underline = menu_item[1].getElementsByClassName('extra_active')[0];
                        var links_underline = menu_item[2].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            file_underline.style.opacity = '1';
                            links_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            file_underline.style.opacity = one_underline_opac;
                            links_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var links_block = document.getElementById('pr_links_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -links_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        files_block.style.marginLeft = margin_left+'px';
                        files_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            files_block.style.marginLeft = '0px';
                            links_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            files_block.style.marginLeft = margin_left+'px';
                            links_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else if (document.getElementById('pr_music_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var file_underline = menu_item[1].getElementsByClassName('extra_active')[0];
                        var music_underline = menu_item[3].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            file_underline.style.opacity = '1';
                            music_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            file_underline.style.opacity = one_underline_opac;
                            music_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var music_block = document.getElementById('pr_music_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -music_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        files_block.style.marginLeft = margin_left+'px';
                        files_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            files_block.style.marginLeft = '0px';
                            music_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            files_block.style.marginLeft = margin_left+'px';
                            music_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else if (document.getElementById('pr_voise_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var file_underline = menu_item[1].getElementsByClassName('extra_active')[0];
                        var voise_underline = menu_item[4].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            file_underline.style.opacity = '1';
                            voise_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            file_underline.style.opacity = one_underline_opac;
                            voise_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var voise_block = document.getElementById('pr_voise_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -voise_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        files_block.style.marginLeft = margin_left+'px';
                        files_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            files_block.style.marginLeft = '0px';
                            voise_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            files_block.style.marginLeft = margin_left+'px';
                            voise_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else {
                    return;
                }
            })
        } else if (i == 2) {
            //links
            menu_item[i].addEventListener('click', function(){
                var links_block = document.getElementById('pr_links_box');
                if (document.getElementById('pr_media_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var links_underline = menu_item[2].getElementsByClassName('extra_active')[0];
                        var media_underline = menu_item[0].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            links_underline.style.opacity = '1';
                            media_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            links_underline.style.opacity = one_underline_opac;
                            media_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var media_block = document.getElementById('pr_media_box');
                    var margin_left = 0;
                    var margin_right = -media_block.offsetWidth;
                    links_block.style.marginRight = margin_right+'px';
                    links_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            links_block.style.marginRight = '0px';
                            media_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            links_block.style.marginRight = margin_right+'px';
                            media_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else if (document.getElementById('pr_files_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var links_underline = menu_item[2].getElementsByClassName('extra_active')[0];
                        var files_underline = menu_item[1].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            links_underline.style.opacity = '1';
                            files_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            links_underline.style.opacity = one_underline_opac;
                            files_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var files_block = document.getElementById('pr_files_box');
                    var margin_left = 0;
                    var margin_right = -files_block.offsetWidth;
                    links_block.style.marginRight = margin_right+'px';
                    links_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            links_block.style.marginRight = '0px';
                            files_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            links_block.style.marginRight = margin_right+'px';
                            files_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else if (document.getElementById('pr_music_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var links_underline = menu_item[2].getElementsByClassName('extra_active')[0];
                        var music_underline = menu_item[3].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            links_underline.style.opacity = '1';
                            music_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            links_underline.style.opacity = one_underline_opac;
                            music_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var music_block = document.getElementById('pr_music_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -music_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        links_block.style.marginLeft = margin_left+'px';
                        links_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            links_block.style.marginLeft = '0px';
                            links_block.style.marginRight = '0px';
                            music_block.style.marginRight = '0px';
                            music_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            links_block.style.marginLeft = margin_left+'px';
                            music_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else if (document.getElementById('pr_voise_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var links_underline = menu_item[2].getElementsByClassName('extra_active')[0];
                        var voise_underline = menu_item[4].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            links_underline.style.opacity = '1';
                            voise_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            links_underline.style.opacity = one_underline_opac;
                            voise_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var voise_block = document.getElementById('pr_voise_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -voise_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        links_block.style.marginLeft = margin_left+'px';
                        links_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            links_block.style.marginLeft = '0px';
                            voise_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            links_block.style.marginLeft = margin_left+'px';
                            voise_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else {
                    return;
                }
            })
        } else if (i == 3) {
            //music
            menu_item[i].addEventListener('click', function(){
                var music_block = document.getElementById('pr_music_box');
                if (document.getElementById('pr_media_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var music_underline = menu_item[3].getElementsByClassName('extra_active')[0];
                        var media_underline = menu_item[0].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            music_underline.style.opacity = '1';
                            media_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            music_underline.style.opacity = one_underline_opac;
                            media_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var media_block = document.getElementById('pr_media_box');
                    var margin_left = 0;
                    var margin_right = -media_block.offsetWidth;
                    music_block.style.marginRight = margin_right+'px';
                    music_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            music_block.style.marginRight = '0px';
                            media_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            music_block.style.marginRight = margin_right+'px';
                            media_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else if (document.getElementById('pr_files_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var music_underline = menu_item[3].getElementsByClassName('extra_active')[0];
                        var files_underline = menu_item[1].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            music_underline.style.opacity = '1';
                            files_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            music_underline.style.opacity = one_underline_opac;
                            files_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var files_block = document.getElementById('pr_files_box');
                    var margin_left = 0;
                    var margin_right = -files_block.offsetWidth;
                    music_block.style.marginRight = margin_right+'px';
                    music_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            music_block.style.marginRight = '0px';
                            files_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            music_block.style.marginRight = margin_right+'px';
                            files_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else if (document.getElementById('pr_links_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var music_underline = menu_item[3].getElementsByClassName('extra_active')[0];
                        var links_underline = menu_item[2].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            music_underline.style.opacity = '1';
                            links_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            music_underline.style.opacity = one_underline_opac;
                            links_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var links_block = document.getElementById('pr_links_box');
                    var margin_left = 0;
                    var margin_right = -links_block.offsetWidth;
                    music_block.style.marginRight = margin_right+'px';
                    music_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            music_block.style.marginRight = '0px';
                            links_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            music_block.style.marginRight = margin_right+'px';
                            links_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else if (document.getElementById('pr_voise_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var music_underline = menu_item[3].getElementsByClassName('extra_active')[0];
                        var voise_underline = menu_item[4].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            music_underline.style.opacity = '1';
                            voise_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            music_underline.style.opacity = one_underline_opac;
                            voise_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var voise_block = document.getElementById('pr_voise_box');
                    var anim = setInterval(change, 7);
                    var margin_left = -voise_block.offsetWidth;
                    var margin_right = 0;
                    function change() {
                        music_block.style.marginLeft = margin_left+'px';
                        music_block.style.display = 'block';
                        if (margin_left >= mar_st) {
                            music_block.style.marginLeft = '0px';
                            voise_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left += margin_speed;
                            margin_right -= margin_speed;
                            music_block.style.marginLeft = margin_left+'px';
                            voise_block.style.marginRight = margin_right+'px';
                        }
                    }
                } else {
                    return;
                }
            })
        } else if (i == 4) {
            //voise
            menu_item[i].addEventListener('click', function(){
                var voise_block = document.getElementById('pr_voise_box');
                if (document.getElementById('pr_media_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var voise_underline = menu_item[4].getElementsByClassName('extra_active')[0];
                        var media_underline = menu_item[0].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            voise_underline.style.opacity = '1';
                            media_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            voise_underline.style.opacity = one_underline_opac;
                            media_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var media_block = document.getElementById('pr_media_box');
                    var margin_left = 0;
                    var margin_right = -media_block.offsetWidth;
                    voise_block.style.marginRight = margin_right+'px';
                    voise_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            voise_block.style.marginRight = '0px';
                            media_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            voise_block.style.marginRight = margin_right+'px';
                            media_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else if (document.getElementById('pr_files_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var voise_underline = menu_item[4].getElementsByClassName('extra_active')[0];
                        var files_underline = menu_item[1].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            voise_underline.style.opacity = '1';
                            files_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            voise_underline.style.opacity = one_underline_opac;
                            files_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var files_block = document.getElementById('pr_files_box');
                    var margin_left = 0;
                    var margin_right = -files_block.offsetWidth;
                    voise_block.style.marginRight = margin_right+'px';
                    voise_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            voise_block.style.marginRight = '0px';
                            files_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            voise_block.style.marginRight = margin_right+'px';
                            files_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else if (document.getElementById('pr_links_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var voise_underline = menu_item[4].getElementsByClassName('extra_active')[0];
                        var links_underline = menu_item[2].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            voise_underline.style.opacity = '1';
                            links_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            voise_underline.style.opacity = one_underline_opac;
                            links_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var links_block = document.getElementById('pr_links_box');
                    var margin_left = 0;
                    var margin_right = -links_block.offsetWidth;
                    voise_block.style.marginRight = margin_right+'px';
                    voise_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            voise_block.style.marginRight = '0px';
                            links_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            voise_block.style.marginRight = margin_right+'px';
                            links_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else if (document.getElementById('pr_music_box').style.display == 'block') {
                    //opacity animation on profile menu buttons
                    var one_underline_opac = 0;
                    var two_underline_opac = 1;
                    var opac_anim = setInterval(opac_anim_func, 7);
                    function opac_anim_func() {
                        var voise_underline = menu_item[4].getElementsByClassName('extra_active')[0];
                        var music_underline = menu_item[3].getElementsByClassName('extra_active')[0];
                        if (one_underline_opac >= 1) {
                            voise_underline.style.opacity = '1';
                            music_underline.style.opacity = '0';
                            clearInterval(opac_anim);
                        } else {
                            one_underline_opac += 0.1;
                            two_underline_opac -= 0.1;
                            voise_underline.style.opacity = one_underline_opac;
                            music_underline.style.opacity = two_underline_opac;
                        }
                    }

                    var music_block = document.getElementById('pr_music_box');
                    var margin_left = 0;
                    var margin_right = -music_block.offsetWidth;
                    voise_block.style.marginRight = margin_right+'px';
                    voise_block.style.display = 'block';
                    var anim = setInterval(change, 7);
                    function change() {
                        if (margin_right >= mar_st) {
                            voise_block.style.marginRight = '0px';
                            music_block.style.display = 'none';
                            clearInterval(anim);
                        } else {
                            margin_left -= margin_speed;
                            margin_right += margin_speed;
                            voise_block.style.marginRight = margin_right+'px';
                            music_block.style.marginLeft = margin_left+'px';
                        }
                    }
                } else {
                    return;
                }
            })
        } else {
            console.log('error on 186 in app.js');
        }
    }
});

window.addEventListener('load', function() {
    var new_mess_butt = document.getElementsByClassName('start_chat_btn_box')[0];
    new_mess_butt.addEventListener('click', function() {
        var loader = document.getElementById('overflow_cont_box');
        var mess_box = document.getElementById('conts_box');
        var start_mess = document.getElementById('conts_start_mess_box');
        var new_mess_but = document.getElementsByClassName('start_chat_btn_box')[0];
        loader.style.display = 'block';
        var opac = 0;

        var anim = setInterval(anim_func, 15);
        function anim_func() {
            new_mess_but.style.opacity = '0';
            new_mess_but.style.display = 'none';

            if (opac >= 1) {
                mess_box.style.display = 'none';
                opac = 1;
                loader.style.opacity = opac;
                clearInterval(anim);
            } else {
                loader.style.opacity = opac;
                opac += 0.1;
            }
        }

        var timeOut = setTimeout(function(){
            var anim_two = setInterval(anim_func_two, 15);
            function anim_func_two() {
                loader.style.opacity = opac;
                if (opac <= 0) {
                    start_mess.style.display = 'block';
                    loader.style.opacity = '0';
                    loader.style.display = 'none'
                    clearInterval(anim_two);
                } else {
                    opac -= 0.1;
                    loader.style.opacity = opac;
                }
            }
        }, 1000);
    });
});

window.addEventListener('load', function() {
    var new_mess_back_but = document.getElementsByClassName('start_mess_back_btn')[0];
    new_mess_back_but.addEventListener('click', function() {
        var loader = document.getElementById('overflow_cont_box');
        var mess_box = document.getElementById('conts_box');
        var start_mess = document.getElementById('conts_start_mess_box');
        var new_mess_but = document.getElementsByClassName('start_chat_btn_box')[0];
        loader.style.display = 'block';
        var opac = 0;

        var anim = setInterval(anim_func, 15);
        function anim_func() {
            if (opac >= 1) {
                start_mess.style.display = 'none';
                opac = 1;
                loader.style.opacity = opac;
                clearInterval(anim);
            } else {
                loader.style.opacity = opac;
                opac += 0.1;
            }
        }

        var timeOut = setTimeout(function(){
            var anim_two = setInterval(anim_func_two, 15);
            function anim_func_two() {
                loader.style.opacity = opac;
                new_mess_but.style.display = 'block';
                var op_t = 0;
                if (opac <= 0) {
                    mess_box.style.display = 'block';
                    loader.style.opacity = '0';
                    loader.style.display = 'none'
                    new_mess_but.style.opacity = '1';
                    clearInterval(anim_two);
                } else {
                    loader.style.opacity = opac;
                    op_t += 0.1;
                    opac -= 0.1;
                }
            }
        }, 1000);
    });
});