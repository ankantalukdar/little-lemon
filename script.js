// Get the "bring to top" button element
var bringToTopBtn = document.getElementById('bringToTopBtn');

// Function to check scroll position and show/hide button
function checkScroll() {
  if (window.scrollY > 100) { // Adjust the scroll threshold as needed
    bringToTopBtn.style.bottom = '25px'; // Show the button
  } else {
    bringToTopBtn.style.bottom = '-100px'; // Hide the button
  }
}

// Add event listener for scroll event
window.addEventListener('scroll', checkScroll);


// Function to scroll to the top when button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll behavior
  });
}

// Add event listener for scroll event
window.addEventListener('scroll', checkScroll);

// Add event listener for button click
bringToTopBtn.addEventListener('click', scrollToTop);


// Get the login button element
var loginBtn = document.getElementById('loginBtn');

// Get the login modal element
var loginModal = document.getElementById('loginModal');

// Show login modal when login button is clicked
loginBtn.addEventListener('click', function() {
  var modal = new bootstrap.Modal(loginModal);
  modal.show();
});


function closeModal() {
  var modal = document.getElementById('loginModal'); // Get the modal element
  var modalInstance = bootstrap.Modal.getInstance(modal); // Get the Bootstrap modal instance
  modalInstance.hide(); // Close the modal
}
