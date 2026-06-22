
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
const details1 = document.getElementById("modal-33");

const button2 = document.getElementById("button-projects_2");
const details2 = document.getElementById("modal-35");

const button3 = document.getElementById("button-projects_3");
const details3 = document.getElementById("modal-34");

const button4 = document.getElementById("button-education");
const details4 = document.getElementById("modal-41");

const button5 = document.getElementById("button-experience");
const details5 = document.getElementById("modal-42");

function openPopupOnMobile(details, buttonEl, modalSelector) {
  if (window.innerWidth <= 400) {
    buttonEl.classList.add("card-animate");
    setTimeout(() => {
      buttonEl.classList.remove("card-animate");
      $.magnificPopup.open({
        items: { src: modalSelector, type: "inline" },
        removalDelay: 0,
        mainClass: "mfp-fade",
        showCloseBtn: false,
        closeOnBgClick: true,
        enableEscapeKey: false
      });
      details.classList.remove("onclick");
      details.classList.remove("clicked");
      details.classList.add("onclick");
      setTimeout(() => {
        details.classList.add("clicked");
      }, 500);
    }, 300);
  } else {
    details.classList.remove("onclick");
    details.classList.remove("clicked");
    details.classList.add("onclick");
    setTimeout(() => {
      details.classList.add("clicked");
    }, 500);
  }
}

/* add callback function, which will be executed after clicking on the button */
const callback1 = (e) => {
  e.stopPropagation();
  openPopupOnMobile(details1, button1, "#modal-33");
};

const callback2 = (e) => {
  e.stopPropagation();
  openPopupOnMobile(details2, button2, "#modal-35");
};

const callback3 = (e) => {
  e.stopPropagation();
  openPopupOnMobile(details3, button3, "#modal-34");
};

const callback4 = (e) => {
  e.stopPropagation();
  openPopupOnMobile(details4, button4, "#modal-41");
};

const callback5 = (e) => {
  e.stopPropagation();
  openPopupOnMobile(details5, button5, "#modal-42");
};

/* add event listener */
button1.addEventListener("click", callback1);
button2.addEventListener("click", callback2);
button3.addEventListener("click", callback3);
button4.addEventListener("click", callback4);
button5.addEventListener("click", callback5);