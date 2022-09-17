$(document).ready(function() {
    var langStr = $.getUrlParam("lang");
    if (!langStr) {
        langStr = "en";
    }

    updateTopUI(langStr);
    updateBottomUI(langStr);
    updateImgUI(langStr);

    $(".maketingtxt").html(en_marketing);
});