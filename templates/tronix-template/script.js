$( document ).ready(function() {

    var opcionesnav = $('.navoption').length;
    var clickhamb=0;

    $("#hamburger").click(function(){
        clickhamb = 1;
        var header = $("#myTopnav");
        if (header[0].classList.length == 1) {
            header.addClass ("responsive");
            $("header").height((opcionesnav+1)*48);
            $(".navlist a:not(.icon)").css("display", "block");
            setTimeout(
                function()
                {
                    $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
                }, 50);

        } else {
            $(".navlist a:not(.icon)").css("transform", "translateX(600px)");
            header.height(48);
            setTimeout(
                function()
                {
                    header.removeClass("responsive");
                    header.height(48);
                    $(".navlist a:not(.icon)").css("display", "none");
                }, 1600);
        }
    });


    $(window).on('resize', function(){
        console.log(clickhamb);
        if (($(window).width() > 600) && (clickhamb==1)){
            console.log(clickhamb + "     " + $(window).width());
            $("#myTopnav").height(48);
            $(".navlist a:not(.icon)").css("display", "block");
            setTimeout(
                function()
                {
                    $(".navlist a:not(.icon)").css("transform", "translateX(0px)");
                }, 500);
        }
    });

});