/**
 * Expanding form plugin for jQuery
 * ---
 * VodkaBears(https://github.com/VodkaBears)
*/
(function ($) {
    "use strict";

    $.fn.expandingForm = function (options) {
        var defaults = {
            from: 'top'
        };
        var opts = $.extend(defaults, options);

        var self = this,
            $inputs = this.find('input');

        var wrap = function(){
            self.addClass('exp_form');
            $inputs.wrap('<div class="exp_form-row" />')
                .parent()
                .addClass('hidden');

            if(opts.from === 'top'){
                $inputs.parent().first().removeClass('hidden');
            } else if(opts.from === 'down'){
                $inputs.parent().last().removeClass('hidden');
            }
        };

        var createEventListeners = function(){
            var handler = function(){
                var next;
                if ($(this).val().length > 0) {
                    if(opts.from === 'top'){
                        next = $(this).parent().next('.exp_form-row.hidden');
                    } else if(opts.from === 'down'){
                        next = $(this).parent().prev('.exp_form-row.hidden');
                    }
                    next.slideDown('fast', function () {
                        $(this).find('input').focus();
                    });
                }
            };

            $inputs.focusout(handler)
                .keypress(function (e) {
                    if (e.which === 13) {
                        e.preventDefault();

                        handler.call(this);
                    }
                });
        };

        var constructor = function(){
            wrap();
            createEventListeners();
            $inputs.filter(':not([type=reset], [type=hidden], [type=submit])').val('');
        };

        constructor();
    };
})(jQuery);