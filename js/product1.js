(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery);

var itemIndex = $.getUrlParam("item");
var imgName = "";
var imgName1 = "";
var pname = "";
var txt = ""
var txt1 = ""
var txt2 = ""
var videoSrc = ""
if (itemIndex == 0) {
    imgName = "../res/products1.png";
    pname = 'glass frit';
    txt = 'ultra-thin glass fiber raw materials';
} else if (itemIndex == 1) {
    imgName = "../res/products3.png";
    imgName1 = "../res/p11.jpg"
    pname = '253 ultra-thin fiber glass';
    txt = 'Specification: 29SR, 34SR, 44SR, other as request';
    txt1 = 'Application: AGM Separator, energy storage cell, thermal insulation, VIP (vacuum insulation panel) products refrigeration equipment, energy saving and environmental protection, air purification industry, fire suit, cigarette filter, cell phone insulator';
    txt2 = "products has exported to more than 20 countries, including Asia, America, Europe etc.";
    videoSrc = '../res/p1.mp4'
} else if (itemIndex == 2) {
    imgName = "../res/products5.png";
    imgName1 = "../res/p21.jpg"
    pname = '475 ultra-thin fiber glass';
    txt = 'Specification: 39SR, 44SR,';
    txt1 = 'Application: high-end industry, filter, PM2.5';
    txt2 = "products has exported to more than 20 countries, including Asia, America, Europe etc.";
    videoSrc = '../res/p2.mp4'
}
$('#productInfoImg1').attr("src", imgName);
// $('#productInfoImg1').attr("src", imgName1);
$('#productInfoImg2').attr("src", imgName1);
$('#productInfoName').text(pname);
$('#productInfoTxt').text(txt);
$('#productInfoTxt1').text(txt1);
$('#productInfoTxt2').text(txt2);

document.getElementById("productVideo").src=videoSrc ;
document.getElementById("productVideo").play();
