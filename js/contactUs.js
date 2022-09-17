
$(document).ready(function() {
    var langStr = $.getUrlParam("lang");
    if (!langStr) {
        langStr = "en";
    }

    updateTopUI(langStr);
    updateBottomUI(langStr);
    updateImgUI(langStr);

    $(".aboutall").html(en_about_all);

});