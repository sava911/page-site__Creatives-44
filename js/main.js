$(function () {

    let vh = window.innerHeight * 0.01;

    // Затем устанавливаем значение свойства --vh
    // для корневого элемента
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener('resize', () => {
        // получаем текущее значение высоты
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    $(".maintitle__scrollbutton-link").first().click(function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".agency").offset().top
        }, 800);
    });

    $('.header__burger').first().click(function () {
        $(this).toggleClass('active');
        $('body').toggleClass('overflow-hidden');
        $('.header__menu').first().toggleClass('header__menu_hidden');
    });

    var underline;
    var T = Math.sign($('body').first().outerWidth() - 768);

    var menufeatures = function () {
        if (T > 0) {
            underline = $('<div id=\"link-underline\">');
            setTimeout(function(){
            underline.css('width', $('.header__menu-link_active').first().outerWidth() + 'px');
            underline.appendTo($('.header__menu').first());}, 200);
        }
        else $(underline).remove();
    }

    menufeatures();
    
    const targetElement = document.querySelector('#body');
    $('.header__menu-link').click(function () {
        if (T == 1) {
            $('.header__menu-link_active').first().removeClass('header__menu-link_active');
            $(this).addClass('header__menu-link_active');
            let TransitOffset = $(this).offset().left - underline.parent().offset().left;
            underline.transition({ x: TransitOffset, width: $(this).outerWidth() + 'px' }, 400, 'ease');
        }
        else {
            $('.header__burger').first().toggleClass('active');
            $('body').toggleClass('overflow-hidden');
            $('.header__menu').first().toggleClass('header__menu_hidden');
            setTimeout( () => $('body').hasClass('overflow-hidden')?bodyScrollLock.disableBodyScroll(targetElement):bodyScrollLock.enableBodyScroll(targetElement), 200);
        }
    });


    

window.addEventListener("resize", function () {
    let a = Math.sign($('body').first().outerWidth() - 768);
    if (a != T && a != 0) {
        T = a;
        menufeatures();
    }
}, false);
    new WOW().init();


function ibg() {

    $.each($('.ibg'), function (index, val) {
        if ($(this).find('img').length > 0) {
            $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        }
    });
}

ibg();
});