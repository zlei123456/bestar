
var languageData = {
    "en": {
        "home": "HOME",
        "about": "ABOUT",
        "factory": "FACTORY",
        "RD": "R & D",
        "marketing": "MARKETING",
        "contactUs": "CONTACT",
    },
    "zh": {
        "home": "HOME",
        "about": "About us A",
        "factory": "Factory",
        "RD": "R & D",
        "marketing": "Marketing",
        "contactUs": "CONTACT",
    }
};

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

var updateTopUI = function(lang) {
    $(".lan").each(function(index, element) {
        $(this).text(languageData[lang][$(this).attr("key")]);
    });
} 

var updateImgUI = function(lang) {
    $(".imgtxt0").text(en_img0);
    $(".imgtxt1").text(en_img1);
}
var updateBottomUI = function(lang) {
        //底部有关
        $(".bottomAddr").html(en_addr);
        $(".bottomPhone").html(en_phone);
        $(".bottomFax").html(en_fax);
        $(".bottomMail").html(en_mail);
}