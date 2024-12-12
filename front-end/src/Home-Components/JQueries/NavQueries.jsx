// jqueryFunctions.js
import $ from 'jquery'; // Import jQuery

export function NavQueries() {
  $(document).ready(() => {
    /* For account info */
    $('#account-btn').click((event) => {
      event.stopPropagation();
      let show = $('#account-nav');
      if (show.css('display') === 'none') {
        show.css('z-index', '1000');
        show.fadeIn(50);

        if ($('#three-dots-nav').css('display') !== 'none') {
          $('#three-dots-nav').fadeOut(40, () => {
            $('#three-dots-nav').css('z-index', '0');
          });
        }

      } else {
        show.fadeOut(50, () => {
          show.css('z-index', '0');
        });
      }
    });

    /* For three dots */
    $('#event-caller-dot-id').click((event) => {
      event.stopPropagation();
      let nav = $('#three-dots-nav');
      if (nav.css('display') === 'none') {
        nav.css('z-index', '1000');
        nav.fadeIn(50);
        if ($('#account-nav').css('display') !== 'none') {
          $('#account-nav').fadeOut(40, () => {
            $('#account-nav').css('z-index', '0');
          });
        }
      } else {
        nav.fadeOut(50, () => {
          nav.css('z-index', '0');
        });
      }
    });

    $(document).click(() => {
      let nav = $('#three-dots-nav');
      if (nav.css('display') !== 'none') {
        nav.fadeOut(50, () => {
          nav.css('z-index', '0');
        });
      }
      let navi = $('#account-nav');
      if (navi.css('display') !== 'none') {
        navi.fadeOut(50, () => {
          navi.css('z-index', '0');
        });
      }
    });

    // Other jQuery logic...

    return () => {
      $(document).off(); // Cleanup on unmount
      $(window).off(); // Cleanup window events if any
    };
  });
}
