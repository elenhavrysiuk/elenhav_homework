$(document).ready(function () {

    
    $(".menu__list").click(function () {
        $(this)
            .addClass("active")
            .removeClass("disable");
        $(this)
            .siblings()
            .removeClass("active")
            .addClass("disable");
        $(".tab")
            .css("display", "none")
            .eq($(this).index())
            .css("display", "block");
    });
});

