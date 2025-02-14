
var isSelectable = false;

function makeSelectable(){
  isSelectable = true;
  console.log(isSelectable);
}

function secondClickOnGrid(){
  isSelectable = false;
}

function clickOnSelectableObject(){
  isSelectable = true;

  setTimeout(function(){
    isSelectable = false;
  }, 500);
}


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
  $('.item-wrap a').magnificPopup({

    type:'inline',
    fixedContentPos: false,
    removalDelay: 0,
    showCloseBtn: false,
    mainClass: 'mfp-fade',
  closeOnBgClick: true,
  enableEscapeKey: false
 });

 $(document).on('click', '.popup-modal-dismiss', function (e) {
     e.preventDefault();
  secondClickOnGrid();
     $.magnificPopup.close();
});


  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);





  
	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
  $('.projects-thumb a').magnificPopup({

    type:'inline',
    fixedContentPos: false,
    removalDelay: 0,
    showCloseBtn: false,
    mainClass: 'mfp-fade',
  closeOnBgClick: true,
  enableEscapeKey: false
 });

 $(document).on('click', '.popup-modal-dismiss', function (e) {
     e.preventDefault();
  secondClickOnGrid();
     $.magnificPopup.close();
});


  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


