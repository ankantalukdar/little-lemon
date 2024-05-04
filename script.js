// Bring to top function start!!!
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

// Bring to top function end!!!
// ----------------------------


// Login popup start!
// Get the login button element
var loginBtn = document.getElementById('loginBtn');
var loginModal = document.getElementById('loginModal');
// Get the signup button element
var signupBtn = document.getElementById('signupBtn');
var signupModal = document.getElementById('signupModal');

// Show login modal when login button is clicked
loginBtn.addEventListener('click', function() {
  var modal = new bootstrap.Modal(loginModal);
  modal.show();
});

// Show signup modal when signup button is clicked
signupBtn.addEventListener('click', function() {
  var signupModalInstance = new bootstrap.Modal(signupModal);
  signupModalInstance.show();

  // Hide the login modal if it's open
  var loginModalInstance = bootstrap.Modal.getInstance(loginModal);
  if (loginModalInstance) {
    loginModalInstance.hide();
  }
});

// Show login modal when login button is clicked
function showLoginModal() {
  var loginModalInstance = new bootstrap.Modal(loginModal);
  loginModalInstance.show();

  // Hide the signup modal if it's open
  var signupModalInstance = bootstrap.Modal.getInstance(signupModal);
  if (signupModalInstance) {
    signupModalInstance.hide();
  }
}

// Close the modal when google and facebook button is clicked
function closeModal() {
  var modal = document.getElementById('loginModal');
  var modalInstance = bootstrap.Modal.getInstance(modal);
  modalInstance.hide();
}

// Login popup function end!!!
// ----------------------------