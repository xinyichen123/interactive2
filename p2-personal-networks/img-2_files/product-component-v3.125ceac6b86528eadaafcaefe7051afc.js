(function($){

    $(function (){
        if($(".feature-section-background-v2").length > 0 && $(".AEM-Edit").length == 0){
            $(window).on("resize",function(){
                bg_textComponentResize();
                bgc_initIcon();
            }).resize();
        }
        bg_textComponentResize();
        bgc_initIcon();
    })

    function bg_textComponentResize(){
        var devicePixelRatio = window.devicePixelRatio ? window.devicePixelRatio : window.screen.deviceXDPI / window.screen.logicalXDPI;
        var _width = $(window).width();
        $(".cnx-feature-section-background-v2").each(function () {
            var _this = this;
            //计算背景
            var _bgimg;
            if(devicePixelRatio < 1.5) {
                if(_width>1023) {
                    _bgimg = $(this).find('.normal-image').attr('value');
                }else if(_width>767) {
                    _bgimg = $(this).find('.pad-image').attr('value');
                }else {
                    _bgimg = $(this).find('.mobile-image').attr('value');
                }
            }else {
                if(_width>1023) {
                    _bgimg = $(this).find('.normal-image-2x').attr('value');
                }else if(_width>767) {
                    _bgimg = $(this).find('.pad-image-2x').attr('value');
                }else {
                    _bgimg = $(this).find('.mobile-image').attr('value');
                }
            };
            if(!_bgimg){
                _bgimg = $(this).find('.normal-image').attr('value');
            }
            //计算高度
            var _image = new Image();
            _image.src = _bgimg;
            _image.onload = function(){
               _height = _image.height / _image.width * _width;
               $(_this).attr("style",";background-image:url('" + _bgimg + "');height:"+ _height + "px;");
            };
         });
    };


    function bgc_initIcon(){
        $(".cnx-feature-section-background-v2").each(function(){
            var _width = $(window).width();
            if($(this).find(".icon-contain.mode-auto").length > 0){
                $(this).find(".mode-row").addClass("icon-initial");
                var _tmpW = 0;
                $(this).find(".mode-row .kv-icon").each(function(){
                    _tmpW = ($(this).outerWidth() > _tmpW) ? $(this).outerWidth() : _tmpW;
                });
                $(this).find(".mode-row").removeClass("icon-initial");
                _tmpW = _tmpW * 0.6;
                var _index = 1;
                _tmpW = bgc_iconWidth($(this),_tmpW,_index);
                $(this).find(".mode-row .kv-icon").each(function(){
                    $(this).css("width",_tmpW + "px");
                });
            }else{
                var _list= $(this).find(".icon-contain .kv-icon-list");
                if(_width > 1079){
                    var i_w = _list.data("lg-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }else if(_width > 599){
                    var i_w = _list.data("md-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }else{
                    var i_w = _list.data("sm-w");
                    _list.find(".kv-icon").each(function(){
                        $(this).css("width",i_w);
                    });
                }
            }
        });
    }

    function bgc_iconWidth(_selector,tmpW,index){
        var _width = $(window).width();
        var s_w = _selector.find(".content-contain .icon-contain .row").width() -30 ;
        if(tmpW * _selector.find(".mode-row .kv-icon").length < s_w){
            return tmpW;
        }
        var iconN = 0;
        iconN = bgc_mathRow(_selector,index + 1);
        if(_width >= 600){
            if(tmpW * iconN < s_w){
                _selector.find(".content-contain .icon-contain .kv-icon-list").css("width",tmpW * iconN + 10);
                _selector.find(".content-contain .icon-contain .kv-icon-list").css("margin","0 auto");
                return tmpW;
            }else{
                return bgc_iconWidth(_selector,tmpW,index + 1);
            }
        }else{
            if(iconN <= 3 && _selector.find(".mode-row .kv-icon").length <= 4){
                return s_w / 2;
            }
            if(iconN <= 3){
                return s_w / 3;
            }
            if(tmpW * iconN < s_w){
                return s_w / iconN;
            }else{
                return bgc_iconWidth(_selector,tmpW,index + 1);
            }
        }
    }

    function bgc_mathRow(_selector,_index){
        return Math.ceil(_selector.find(".mode-row .kv-icon").length / _index);
    }
})(jQuery);

