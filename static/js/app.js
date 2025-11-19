// Select all navigation links
    const navItems = document.querySelectorAll('.nav-item');

    // Function to update active state based on current hash
    function updateActiveState() {
      // Remove active from all items first
      navItems.forEach(i => i.classList.remove('active')); 
      
      // On page refresh/load with no hash, redirect to hero
      if (!window.location.hash) {
        window.location.hash = '#hero';
      }
      
      const currentHash = window.location.hash;
      // Find and activate the matching nav item
      const activeItem = Array.from(navItems).find(item => item.getAttribute('href') === currentHash);
      if (activeItem) {
        activeItem.classList.add('active');
      } else {
        // If no match found, activate the first (home) item
        navItems[0].classList.add('active');
      }
    }

    // Add click handlers
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      });
    });

    // Listen for both page load and hash changes
    window.addEventListener('load', updateActiveState);
    window.addEventListener('hashchange', updateActiveState); 

    document.addEventListener("DOMContentLoaded", () => {

      const filterBtns = document.querySelectorAll(".filter-btn");
      const items = document.querySelectorAll(".portfolio-item");

      filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {

          /* ----- ACTIVE BUTTON HANDLING ----- */
          filterBtns.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");

          /* ----- FILTER LOGIC ----- */
          const category = btn.textContent.trim().toLowerCase();

          items.forEach(item => {
            const id = item.id.toLowerCase();

            // Show all
            if (category === "all projects") {
              item.style.display = "block";
            }
            // Show only matching
            else if (id === category) {
              item.style.display = "block";
            }
            // Hide the rest
            else {
              item.style.display = "none";
            }
          });
        });
      });

    });