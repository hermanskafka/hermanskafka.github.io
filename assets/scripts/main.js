$(document).ready(function () {
    var arrs = ['a','b','c','d','e'];
    $('.index-nav').find('svg').each(function (i) {
        $(this).on('mouseenter', function () {
            var current  =  $(this).attr('alt');
            $('.' + current).addClass('display-for-nav')
        })

        $(this).on('mouseleave',function () {
            var current  =  $(this).attr('alt');
            $('.' + current).removeClass('display-for-nav')
        })
    })
    if($(window).width() > 1024) {
        $('svg').on('mouseenter', function () {
            $(this).children().each(function (i) {
                $(this).addClass('load')
            })
        })
        $('svg').on('mouseleave', function () {
            $(this).children().each(function (i) {
                $(this).removeClass('load')
            })
        })
    }
    let  mContainer =  $('.m-nav'),
        line = $('.m-line');
    $('.m-open').click(function () {
        mContainer.hasClass('m-width') ?
            mContainer.removeClass('m-width') :
            mContainer.addClass('m-width')
        line.hasClass('x') ?
            line.removeClass('x') :
            line.addClass('x')
    })
});

