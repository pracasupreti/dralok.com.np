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