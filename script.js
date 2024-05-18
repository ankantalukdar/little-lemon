var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Bring to top function start!!!
// Get the "bring to top" button element
var bringToTopBtn = document.getElementById('bringToTopBtn');

// Function to check scroll position and show/hide button
function checkScroll() {
  if (window.scrollY > 100) {
    bringToTopBtn.style.bottom = '25px'; // Show the button
  } else {
    bringToTopBtn.style.bottom = '-100px'; // Hide the button
  }
}

// Function to scroll to the top when button is clicked
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
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

// Show login modal when order button is clicked
// **********************************
// Bug - can't use queryselectorall for some reason
// **********************************
var menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', function() {
  var modal = new bootstrap.Modal(loginModal);
  modal.show();
});

var menuBtn2 = document.getElementById('menuBtn2')
menuBtn2.addEventListener('click', function() {
  var modal = new bootstrap.Modal(loginModal);
  modal.show();
});

var menuBtn3 = document.getElementById('menuBtn3')
menuBtn3.addEventListener('click', function() {
  var modal = new bootstrap.Modal(loginModal);
  modal.show();
});

// Show signup modal when signup button is clicked
signupBtn.addEventListener('click', function() {
  event.preventDefault();

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
  event.preventDefault();

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


// Reservation popup start!
var reservationLink = document.getElementById('reservationLink');
var reservationModal = document.getElementById('reservationModal');

// Show reservation modal when reservation link is clicked
reservationLink.addEventListener('click', function(event) {
  event.preventDefault();
  var modal = new bootstrap.Modal(reservationModal);
  modal.show();
});

// Show reservation modal when reservation button is clicked
var reservationButton = document.getElementById('reservationButton');
var reservationModal = document.getElementById('reservationModal');
reservationButton.addEventListener('click', function() {
  var modal = new bootstrap.Modal(reservationModal);
  modal.show();
});

// Close the reservation modal when close button is clicked
function closeReservationModal() {
  var modalInstance = bootstrap.Modal.getInstance(reservationModal);
  modalInstance.hide();
}

// Reservation popup end!!!
// ----------------------------


// Function to show confirmation message
function showConfirmationMessage(firstName, date, time, numberOfGuests) {
  // Hide the reservation modal if it's open
  var reservationModal = document.getElementById('reservationModal');
  var reservationModalInstance = bootstrap.Modal.getInstance(reservationModal);
  if (reservationModalInstance) {
    reservationModalInstance.hide();
  }
  // Fetch the HTML content for the confirmation modal
  fetch('confirmation-modal.html')
    .then(response => response.text())
    .then(html => {
      // Insert the HTML content into the document body
      document.body.insertAdjacentHTML('beforeend', html);

      // Show the confirmation modal
      var confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      confirmationModal.show();

      // Update the placeholders with the actual data
      document.getElementById('confirmationFirstName').textContent = firstName;
      document.getElementById('confirmationDate').textContent = date;
      document.getElementById('confirmationTime').textContent = time;
      document.getElementById('confirmationNumberOfGuests').textContent = numberOfGuests;
    });
}


// Select the reservation form
const reservationForm = document.getElementById('reservationForm');

// Add event listener to the reservation form submission
reservationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(reservationForm);
  const firstName = formData.get('first_name');
  const date = formData.get('date');
  const time = formData.get('time');
  const numberOfGuests = formData.get('number_of_guests');
  showConfirmationMessage(firstName, date, time, numberOfGuests);
});

// Function to show confirmation message end!!!
// ----------------------------


// Funtion to use email instead of phone number and vice versa
document.getElementById("useEmailButton").addEventListener("click", function() {
  document.getElementById("emailField").style.display = "block";
  document.querySelector("input[type='tel']").style.display = "none";
  document.getElementById("usePhoneNumberButton").style.display = "block";
  this.style.display = "none";
  document.getElementById("emailField").required = true;
  document.querySelector("input[type='tel']").removeAttribute("required");
});

document.getElementById("usePhoneNumberButton").addEventListener("click", function() {
  document.getElementById("emailField").style.display = "none";
  document.querySelector("input[type='tel']").style.display = "block";
  document.getElementById("useEmailButton").style.display = "block";
  this.style.display = "none";
  document.querySelector("input[type='tel']").required = true;
  document.getElementById("emailField").removeAttribute("required");
});

// Function to use email instead of phone number and vice versa end!!!
// ----------------------------