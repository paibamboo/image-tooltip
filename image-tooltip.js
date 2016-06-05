(function ($) {
    $.fn.imageTooltip = function (options) {

        var defaults = {
            xOffset: 0,
            yOffset: 0
        };

        if (typeof (options) === 'object') {
            options = $.extend(defaults, options);
        } else {
            var tempOptions = {};
            tempOptions.xOffset = arguments[0] || defaults.xOffset;
            tempOptions.yOffset = arguments[1] || defaults.yOffset;
            options = tempOptions;
        }

        function calLeft(x, xOffset, imgWidth) {
            return window.innerWidth - (x + xOffset) > imgWidth ? x + xOffset : x + xOffset - imgWidth;
        }

        return this.each(function () {

            var imgContainer = $('<p>', {
                css: {
                    display: 'none',
                    backgroundColor: '#fff',
                    padding: '5px',
                    position: 'fixed'
                }
            });

            var img = $('<img>', {
                src: $(this).data('image-tooltip') || $(this).attr('src'),
                alt: 'Image Not Available'
            });

            imgContainer.append(img);

            $(this).hover(
                function (e) {
                    imgContainer.css({
                        left: calLeft(e.clientX, options.xOffset, img.width()) + 'px',
                        top: (e.clientY + options.yOffset) + 'px'
                    });
                    $('body').append(imgContainer);
                    imgContainer.fadeIn('fast');
                },
                function () {
                    imgContainer.remove();
                }
            ).mousemove(function (e) {
                imgContainer.css({
                    left: calLeft(e.clientX, options.xOffset, img.width()) + 'px',
                    top: (e.clientY + options.yOffset) + 'px',
                });
            });
        });
    };
}(jQuery));