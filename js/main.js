(function ($) {

    // loading

    $(window).load(function () {
        $("#loading").delay(2000).fadeOut(500);
        $("#loading-center").click(function () {
            $("#loading").fadeOut(500);
        })
    })

    // menu

    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        onePage: true
    });


    // stiky menu

    var wind = $('window');
    var stiky = $('.header-area');
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 3) {
            stiky.removeClass("scroll-header");
        } else {
            stiky.addClass("scroll-header");
        }
    });



    // one page nav

    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });


    // skill-area

    new WOW().init();




    // counterUp

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



    // scrollUp

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });







})(jQuery);