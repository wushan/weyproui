(function($) {
  $.fn.tabber = function(method) {

    if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
    } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }
  };

  //Methods
  var methods = {
    init : function( options ) {
      // Settings
      var _defaultSettings = {
          'anchor': '.tabber-anchor',
          'content' : '.tabber-content'
      };

      var _settings = $.extend(_defaultSettings, options);

      //Var
      var tabber,
          tabberSelectorWrapper,
          tabberAnchor,
          tabberContentWrapper,
          tabberContent,
          tabberAnchorSelected,
          tabberContentSelected;

      tabber = this;
      tabberSelectorWrapper = this.find('.tabber-selectors');
      tabberAnchor = $(_settings.anchor);
      tabberContentWrapper = this.find('.tabber-contents');
      tabberContent = $(_settings.content);

      return this.each(function(){
        console.log('Tabber Starting');
        //Check Amount
        if (tabberAnchor.length != tabberContent.length) {
          return console.error('Amount of Selector & Content is not equal. Please check DOM.');
        }
        //Set rel attributes.
        tabberAnchor.each(function(index){
          $(this).attr('rel',index);
        });

        tabberContent.each(function(index){
          $(this).attr('rel',index);
        });

        //Bind Events
        tabberAnchor.on('click', function(event){
          tabberAnchor = $(this);
          tabberAnchorSelected = $(this).attr('rel');
          tabberContent.each(function(index){
            tabberContentSelected = $(this).attr('rel');
            console.log('a');
            if (tabberAnchorSelected === tabberContentSelected) {
              tabberAnchor.parent().siblings().find(_settings.anchor).removeClass('active');
              tabberAnchor.addClass('active');
              $(this).siblings().hide();
              $(this).fadeIn();
              return false;
            }
          });
        })
        console.log('Tabber initialized.');
      });
    }
  };

  //Private Function
  
})(jQuery);
