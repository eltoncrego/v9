let mobileNavStatus = false;

const navigateToURL = function(url) {
  window.open(url);
}

const closeMenu = function() {
  const mobileNav = document.getElementById('mobile-nav');
  const contentOverlays = document.getElementsByClassName('content__overlay');
  mobileNav.setAttribute('style', '');
  for (let i in contentOverlays) {
    const contentOverlay = contentOverlays[i];
    if (contentOverlay.setAttribute) {
      contentOverlay.setAttribute('style', '');
    }
  }
  mobileNavStatus = false;
}

const openMenu = function() {
  const mobileNav = document.getElementById('mobile-nav');
  const contentOverlays = document.getElementsByClassName('content__overlay');
  mobileNav.setAttribute('style', 'transform: translateX(0);');
  for (let i in contentOverlays) {
    const contentOverlay = contentOverlays[i];
    if (contentOverlay.setAttribute) {
      contentOverlay.setAttribute('style', 'opacity: 0.6');
    }
  }
  mobileNavStatus = true;
}

const toggleMobileMenu = function(e, isContent) {
    if (mobileNavStatus) {
      closeMenu();
    } else if (!isContent) {
      openMenu();
    }
}

const initEventListeners = function() {
  document.getElementById('link-linkedin').addEventListener('click', (e) => {
    navigateToURL(e.target.attributes.href.value);
  });

  document.getElementById('link-github').addEventListener('click', (e) => {
    navigateToURL(e.target.attributes.href.value);
  });

  document.getElementById('link-resume').addEventListener('click', (e) => {
    navigateToURL(e.target.attributes.href.value);
  });

  document.getElementById('link-contact').addEventListener('click', (e) => {
    navigateToURL(e.target.attributes.href.value);
  });

  document.getElementById('ham').addEventListener('click', (e) => {
    toggleMobileMenu(e);
  });

  window.addEventListener('resize', (e) => {
    closeMenu();
  });
}

window.onload = function() {
  initEventListeners();
}