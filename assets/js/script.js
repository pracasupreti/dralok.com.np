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

//     image slider in home page 
document.addEventListener('DOMContentLoaded', () => {
     const carousel = document.querySelector('#default-carousel');
     let intervalTime = 5000; // Set your custom interval time in milliseconds
 
     const items = carousel.querySelectorAll('[data-carousel-item]');
     let currentIndex = 0;
 
     const showItem = (index) => {
       items.forEach((item, i) => {
         item.classList.toggle('hidden', i !== index);
       });
     };
 
     const nextItem = () => {
       currentIndex = (currentIndex + 1) % items.length;
       showItem(currentIndex);
     };
 
     let interval = setInterval(nextItem, intervalTime);
 
     const prevButton = carousel.querySelector('[data-carousel-prev]');
     const nextButton = carousel.querySelector('[data-carousel-next]');
     const indicators = carousel.querySelectorAll('[data-carousel-slide-to]');
 
     prevButton.addEventListener('click', () => {
       clearInterval(interval);
       currentIndex = (currentIndex - 1 + items.length) % items.length;
       showItem(currentIndex);
       interval = setInterval(nextItem, intervalTime);
     });
 
     nextButton.addEventListener('click', () => {
       clearInterval(interval);
       nextItem();
       interval = setInterval(nextItem, intervalTime);
     });
 
     indicators.forEach((indicator, index) => {
       indicator.addEventListener('click', () => {
         clearInterval(interval);
         currentIndex = index;
         showItem(currentIndex);
         interval = setInterval(nextItem, intervalTime);
       });
     });
 
     showItem(currentIndex); // Initial display
   });