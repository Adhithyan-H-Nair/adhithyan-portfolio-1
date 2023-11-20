window.addEventListener('load', function() {
    if (document.documentElement.style.backgroundColor === 'black') {
      document.querySelector('.loader').style.display = 'block';
    } else {
      document.querySelector('.loader').style.display = 'none';
    }
  });
  
  window.addEventListener('load', function() {
    // Check if the user is viewing the site on a mobile device
    const userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|tablet|opera mini/i.test(userAgent)) {
      // Display the notification banner
      document.querySelector('.notification-banner').style.display = 'block';
    }
  });