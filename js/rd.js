
$(document).ready(function() {
    var langStr = $.getUrlParam("lang");
    if (!langStr) {
        langStr = "en";
    }

    updateTopUI(langStr);
    updateBottomUI(langStr);

    $(".rdTxt").html(en_rd_all);
});