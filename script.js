// const hamburger = document.getElementById("hamburger");
// const sideMenu = document.getElementById("side-menu");
// const overlay = document.getElementById("overlay");
// const closeBtn = document.getElementById("closeBtn");

// // Toggle menu
// hamburger.addEventListener("click", () => {
//   sideMenu.classList.add("active");
//   overlay.classList.add("active");
// });

// // Close menu with close button
// closeBtn.addEventListener("click", () => {
//   sideMenu.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Close when clicking outside
// overlay.addEventListener("click", () => {
//   sideMenu.classList.remove("active");
//   overlay.classList.remove("active");
// });






// const hamburger = document.getElementById("hamburger");
// const sideMenu = document.getElementById("side-menu");
// const overlay = document.getElementById("overlay");

 
// hamburger.addEventListener("click", (e) => {
//   e.stopPropagation();  
//   sideMenu.classList.toggle("active");
//   overlay.classList.toggle("active");
//   document.body.classList.toggle("no-scroll");
// });

 
// overlay.addEventListener("click", () => {
//   sideMenu.classList.remove("active");
//   overlay.classList.remove("active");
//   document.body.classList.remove("no-scroll");
// });

 
// const menuLinks = document.querySelectorAll(".side-menu a");
// menuLinks.forEach(link => {
//   link.addEventListener("click", () => {
//     sideMenu.classList.remove("active");
//     overlay.classList.remove("active");
//     document.body.classList.remove("no-scroll");
//   });
// });

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side-menu");
const overlay = document.getElementById("overlay");

// Toggle menu
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent event bubbling
  sideMenu.style.right="0";
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// Close menu when clicking overlay
overlay.addEventListener("click", () => {
  sideMenu.style.right="-1300px";
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

// Close menu when clicking a link
const menuLinks = document.querySelectorAll(".side-menu.navbar-options a");
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});



document.addEventListener('DOMContentLoaded', function() {
    const wavesElement = document.getElementById('waves-des-2');
    let ticking = false;
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
          
          // Only hide when scrolling down past 50px
          if (scrollPosition > 50) {
            wavesElement.style.opacity = '0';
            wavesElement.style.transform = 'translateY(-20px)';
          } 
          // Only show when returned to top (0px)
          else if (scrollPosition === 0) {
            wavesElement.style.opacity = '1';
            wavesElement.style.transform = 'translateY(0)';
          }
          
          ticking = false;
        });
        ticking = true;
      }
    });
  });



  /* shrink ka script */
 