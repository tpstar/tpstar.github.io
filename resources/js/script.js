$(document).ready(function() {

    /// radiate social icons ///

    let items = $('.icons a');

    for(let i = 0, l = items.length; i < l; i++) {
      items[i].style.left = (54 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";

      items[i].style.top = (32 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI)).toFixed(4) + "%";
    }

    $('.js--section-about').waypoint(function(direction) {
        $('.icons').addClass('open');
    }, {
        offset: '50%'
    });

    // $('#selfie').hover(function(){
    //    $('.icons').addClass('open');
    // });

    /// smooth scrolling ///
        // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

      /* For the sticky navigation */
    $('.js--section-about').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });

    /* For Grid Masonry (Blog) */

    function resizeGridItem(item){
       grid = document.getElementsByClassName("grid")[0];
       rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
       rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
       rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
       item.style.gridRowEnd = "span "+rowSpan;
    }

    function resizeAllGridItems(){
       allItems = document.getElementsByClassName("item");
       for(x=0;x<allItems.length;x++){
          resizeGridItem(allItems[x]);
       }
    }

    window.onload = resizeAllGridItems();

    window.addEventListener("resize", resizeAllGridItems);

    // allItems = document.getElementsByClassName("item");
    // for(x=0;x<allItems.length;x++){
    //    imagesLoaded( allItems[x], resizeInstance);
    // }
    //
    // function resizeInstance(instance){
    //    item = instance.elements[0];
    //    resizeGridItem(item);
    // }

});
