     // Get the current year
     var currentYear = new Date().getFullYear();

     // Display it in the HTML element with id="current-year"
     document.getElementById("current-year").textContent = currentYear;

     // mobile-menu 
     document.addEventListener("DOMContentLoaded", function() {
          const hamburger = document.querySelector('.hamburger');
          const menu = document.querySelector('#navbar-sticky');
        
          hamburger.addEventListener('click', function() {
            menu.classList.toggle('hidden');
          });
        });

         // Get the 'to top' button element by ID
    var toTopButton = document.getElementById("to-top-button");

    // Check if the button exists
    if (toTopButton) {

        // On scroll event, toggle button visibility based on scroll position
        window.onscroll = function() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        };

        // Function to scroll to the top of the page smoothly
        window.goToTop = function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }