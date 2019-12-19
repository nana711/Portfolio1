//左右の動き
jQuery(function () {
    jQuery(window).scroll(function () {
        jQuery('.fade-in1').each(function () {
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 0) {
                jQuery(this).addClass('scroll-in1');
            }
        });
    });
    jQuery(window).scroll();
});

jQuery(function () {
    jQuery(window).scroll(function () {
        jQuery('.fade-in2').each(function () {
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 0) {
                jQuery(this).addClass('scroll-in2');
            }
        });
    });
    jQuery(window).scroll();
});

//スムーズスクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});

//ハンバーガー

$(function () {
    $('.drawer').drawer();
});
