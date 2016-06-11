(function ($) {
    $.fn.imageTooltip = function (options) {

        var defaults = {
        };

        if (typeof (options) === 'object') {
            options = $.extend(defaults, options);
        } else {
            var tempOptions = {};
            options = tempOptions;
        }

        function calLeft(x, imgWidth) {
        }

        function calTop(y, imgHeight) {
        }

        return this.each(function () {

            var imgContainer = $('<p>', {
                css: {
                    display: 'none',
                    backgroundColor: options.backgroundColor,
                    padding: '5px',
                    position: 'fixed'
                }
            });

            var img = $('<img>', {
                src: $(this).data('image-tooltip') || $(this).attr('src'),
                alt: 'Image Not Available',
                width: options.imgWidth
            });

            imgContainer.append(img);

            $(this).hover(
                function (e) {
                    imgContainer.css({
                    });
                    $('body').append(imgContainer);
                    imgContainer.fadeIn('fast');
                },
                function () {
                    imgContainer.remove();
                }
            ).mousemove(function (e) {
                imgContainer.css({
                });
            });
        });
    };
}(jQuery));