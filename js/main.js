/*
 * @Author: your name
 * @Date: 2021-07-14 11:18:14
 * @LastEditTime: 2021-07-14 11:18:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /msnm/js/main.js
 */
// import "langString.js"



var lang = "en";

var updateByLanugage = function() {
    var langStr = $.getUrlParam("lang");
    if (!langStr) {
        langStr = "en";
    }

    updateTopUI(langStr);


    $(".lang" + langStr).css("color", "#FF0000")

    // 
    $(".abouttxt").html(en_about)
    $(".chanpintitle").html(en_product_title);
    for(let i=0; i<productsInfo.length; i++) {
        if (i<6) {
            var name = "<li><div onclick=\"window.location.href=\'src/product.html?item=" + i+"\'\" class=\"item\"><img src=\"res/"+ productsInfo[i].img +"\" class=\"chanpinImg\"/><p class=\"chanpinName\">"+ productsInfo[i]["name_"+langStr]+"</p></div></li>";
            $(".chanpinUl").append(name);
        } else {
            var name = "<li><div  class=\"item\"><img src=\"res/"+ productsInfo[i].img +"\" class=\"chanpinImg\"/><p class=\"chanpinName\">"+ productsInfo[i]["name_"+langStr]+"</p></div></li>";
            $(".chanpinUl").append(name);
        }


    }

    updateBottomUI(langStr);

}


$(document).ready(function() {
    updateByLanugage();

    // setTimeout(function() {
    //     var winW = $(window).width()//获取窗口宽度
    //     $(".chanpinUl").children().each(function(i,n){
    //         $(n).height(winW*0.3*1.1);
    //     });
    // }, 300);

    // $(window).resize(function()//窗口变化后重新获取值   
    // {
    //     var winW = $(window).width()//获取窗口宽度
    //     $(".chanpinUl").children().each(function(i,n){
    //         $(n).height(winW*0.3*1.1);
    //     });
    // })


});
  

  
