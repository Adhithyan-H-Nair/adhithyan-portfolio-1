window.addEventListener('load', function() {
  // Hide the loader after the page is fully loaded
  document.querySelector('.loader').style.display = 'none';

  // Restore the background color to its original value
  document.body.style.backgroundColor = '';
});

// Display the loader and change the background color to black when the page starts loading
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.loader').style.display = 'block';
  document.body.style.backgroundColor = 'black';
});

  
  window.addEventListener('load', function() {
    // Check if the user is viewing the site on a mobile device
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|tablet|opera mini/i.test(userAgent)) {
      // Display the notification banner
      document.querySelector('.notification-banner').style.display = 'block';
    }
  });