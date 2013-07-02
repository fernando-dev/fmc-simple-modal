/*!
 * jQuery simple fmcmodal Plugin 1.0
 *
 * http://fernandomoreiraweb.com/
 *
 * Copyright 2013 Fernando Moreira
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($){

    $.fn.fmcmodal = function(options) {

        var defaults = {
          'close' : '.modal-close'
        };
 
        var settings = $.extend( {}, defaults, options );

        return this.each (function() {
            
            $(this).click(function() {
        
                var _modal = $(this).attr("href"),
                    _modal = $("#"+_modal.replace("#!", ""));

                _modal.fadeIn(500);
                
                return false;
         
            });

            $(settings.close).click(function(){
                var _parent = $(this).parent();
                _parent.fadeOut();
                return false;
            });

        });

    };

})(jQuery);