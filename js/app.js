'use strict';
//Cookies and Google Analytics
const cookieConsent = document.getElementById('cookieConsent');
const acceptBtn = document.getElementById('acceptBtn');
const declineBtn = document.getElementById('declineBtn');

//Pop-up about cookies
document.addEventListener('DOMContentLoaded', function () {

  // Перевірка, чи вже дав користувач згоду
  if (!localStorage.getItem('cookieConsent')) {
    cookieConsent.style.display = 'block';
  }

  // Користувач приймає cookies
  acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.style.display = 'none';
    console.log('User accepted cookies');
    loadGoogleAnalytics();
  });

  // Користувач відмовляється від cookies
  declineBtn.addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'declined');
    cookieConsent.style.display = 'none';
    console.log('User declined cookies');
  });

//Якщо у користувача вже є дозвіл на cookies
  if (localStorage.getItem('cookieConsent') === 'accepted') {
    loadGoogleAnalytics();
  }
});



//Завантажити Google Analytics
function loadGoogleAnalytics() {
  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted'
  });
}


// Load gtag.js script.
let gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FPGY6XK3PC';

let firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(gtagScript, firstScript);
