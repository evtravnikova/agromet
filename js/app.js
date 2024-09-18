'use strict';
//Вибір мови
/*

let userLang = navigator.language; //"uk-UA"
let urls = {
    'uk-UA': 'http://localhost:63342/agromet/index.html',
    'en-US': 'http://localhost:63342/agromet/index-en.html',
};
let defaultUrl = 'http://localhost:63342/agromet/index.html';

let url = urls[userLang] ?? defaultUrl;
console.log(url);
console.log(navigator);

*/


//Pop-up about cookies
document.addEventListener('DOMContentLoaded', function () {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptBtn');
  const declineBtn = document.getElementById('declineBtn');

  // Перевірка, чи вже дав користувач згоду
  if (!localStorage.getItem('cookieConsent')) {
    cookieConsent.style.display = 'block';
  }

  // Користувач приймає cookies
  acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.style.display = 'none';
    console.log('User accepted cookies');
  });

  // Користувач відмовляється від cookies
  declineBtn.addEventListener('click', function () {
    localStorage.setItem('cookieConsent', 'declined');
    cookieConsent.style.display = 'none';
    console.log('User declined cookies');
  });
});








const acceptBtn = document.getElementById('acceptBtn');

acceptBtn.addEventListener("click", function () {
  localStorage.setItem("consentGranted", "true");

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted'
  });
});

// Load gtag.js script.
let gtagScript = document.createElement('script');
gtagScript.async = true;
gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-FPGY6XK3PC';

let firstScript = document.getElementsByTagName('script')[0];
firstScript.parentNode.insertBefore(gtagScript, firstScript);
