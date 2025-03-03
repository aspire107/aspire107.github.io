
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


  /* choose the elements */
const button1 = document.getElementById("button-projects_1");
const details1 = document.getElementById("modal-32");

const button2 = document.getElementById("button-projects_2");
const details2 = document.getElementById("modal-33");

const button3 = document.getElementById("button-projects_3");
const details3 = document.getElementById("modal-34");

const button4 = document.getElementById("button-education");
const details4 = document.getElementById("modal-41");

const button5 = document.getElementById("button-experience");
const details5 = document.getElementById("modal-42");

/* add callback function, which will be executed after clicking on the button */
const callback1 = () => {

  details1.classList.remove("onclick");
  details1.classList.remove("clicked");

  details1.classList.add("onclick");
  setTimeout(() => {
    details1.classList.add("clicked")
  }, 500);
};

const callback2 = () => {

  details2.classList.remove("onclick");
  details2.classList.remove("clicked");

  details2.classList.add("onclick");
  setTimeout(() => {
    details2.classList.add("clicked")
  }, 500);
};

const callback3 = () => {

  details3.classList.remove("onclick");
  details3.classList.remove("clicked");

  details3.classList.add("onclick");
  setTimeout(() => {
    details3.classList.add("clicked")
  }, 500);
};

const callback4 = () => {

  details4.classList.remove("onclick");
  details4.classList.remove("clicked");

  details4.classList.add("onclick");
  setTimeout(() => {
    details4.classList.add("clicked")
  }, 500);
};

const callback5 = () => {

  details5.classList.remove("onclick");
  details5.classList.remove("clicked");

  details5.classList.add("onclick");
  setTimeout(() => {
    details5.classList.add("clicked")
  }, 500);
};

/* add event listener */
button1.addEventListener("click", callback1);
button2.addEventListener("click", callback2);
button3.addEventListener("click", callback3);
button4.addEventListener("click", callback4);
button5.addEventListener("click", callback5);