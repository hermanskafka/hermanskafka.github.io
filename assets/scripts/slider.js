
$(document).ready(function () {
    if($(window).width()> 768){
var arrow = $('.a-l'),
    w = $(window).width(),
    h = $(window).height(),
    body = $('body'),
    i = 1,
    length = $('.mouse-evt').length;


        $( ".mouse-b" ).mousemove(function( event ) {
    y = event.pageY,
        x = event.pageX;

    if((x < (w / 2)) && (i > 1) ){
        arrow.addClass('rotate-180');
        body.addClass('left');
        body.removeClass('right')
    }else{
        if(i < length) {
            arrow.removeClass('rotate-180');
            body.removeClass('left');
            body.addClass('right');
        }
    }
    if((y <= (h - 60)) && (x <= (w - 50)) )
        arrow.css('top', y + 'px').css('left', x + 'px');
});

$('.pr-body').click(function () {

    if($(this).hasClass('right')){
        i++;
        var current = $(this).find('[title=' + i + ']').addClass('animate-l');
        if(current.length === 0){
            i--
        }
    }else if($(this).hasClass('left')){
        if(i >1){
            i--;
            var prev = i+1;
            var current = $(this).find('[title=' + prev + ']').removeClass('animate-l')

        }
    }
    if((i ===2) && (x < (w/2))) {
        arrow.addClass('rotate-180');
        body.removeClass('right');
        body.addClass('left')
    }
    if(i === length){
        arrow.addClass('rotate-180');
        body.removeClass('right');
        body.addClass('left')
    }

});


$('[title=2]').click(function () {
    arrow.removeClass('rotate-180');
    setTimeout(function () {
        body.removeClass('left');
        body.addClass('right')
    },1)

});

$('[title=' + length + ']').click(function () {
    if(x > (w/2)){
        arrow.removeClass('rotate-180');
        setTimeout(function () {
            body.removeClass('left');
            body.addClass('right')
        },1)
    }})

        }else{
        window.mySwipe = Swipe(document.getElementById('slider'));
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
    }
    })

