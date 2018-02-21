/**
 * Created by Sam on 10/8/2016.
 */

$(document).ready(function () {



    $('.col').each(function (i) {
        $(this).on('mouseenter', function () {
            this.isActive = true
            var that = this
            var current = $(this).data('icon')

            var icon = ($('.ICONS').find('.' + current))[0]
            var ii = $(icon)[0]
            $(ii).addClass('display')
            setTimeout(function () {
                if(that.isActive === true) {
                    $(ii).children().each(function (i) {
                        $(this).addClass('load')
                    })

                }

            },10)

        })
        $(this).on('mouseleave', function () {
            this.isActive = false
            var current = $(this).data('icon')

            var icon = ($('.ICONS').find('.' + current))[0]
            var ii = $(icon)[0]
            $(ii).removeClass('display')
            $(ii).children().each(function (i) {
                $(this).removeClass('load')
            })
        })


    })



})

