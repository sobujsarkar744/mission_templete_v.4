$(document).ready(function(){

        //Sticky Top Menu
    $(window).scroll(function(){

    var scrolling = $(this).scrollTop();
    var stickyMenu = $('.navbar-light');
    
    if (scrolling >=100) {

        stickyMenu.addClass('nav-bg');

    } else {
        stickyMenu.removeClass('nav-bg'); 
    }
    });
 
    //AOS Plugin
    AOS.init({
        duration: 2000,
    });

    //Counter Up Plugin
    $('.count-item').counterUp({
        time: 1000,
    });

    // ProgressBar
    $('.circlechart').circlechart();

    // popup
    $('.gallery-popup').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });

    // Video Popup
    $('.video').magnificPopup({
        type: 'iframe'
      });

    // isotope plugin
    // init Isotope
    var $grid = $('.gallery-container').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
        }
    });

    // filter items on button click
    $('.filter-bar').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // filter items on button active
    $('.filter-bar').on( 'click', 'button', function() {
       $(this).addClass('active').siblings().removeClass('active')
    });







});