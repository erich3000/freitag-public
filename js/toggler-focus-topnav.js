(function () {
  function isHidden(el) {
    return window.getComputedStyle(el).display === "none";
  }

  function focusFirstTopNavLink() {
    var firstLink = document.querySelector("nav .topnav a");
    if (firstLink) {
      firstLink.focus();
    }
  }

  function onTogglerClick() {
    var nav = document.querySelector("nav");
    if (!nav) {
      return;
    }

    // The theme toggles nav visibility via jQuery slideToggle; only focus when opening.
    var wasHidden = isHidden(nav);
    if (wasHidden) {
      window.setTimeout(focusFirstTopNavLink, 220);
    }
  }

  function setup() {
    var togglers = document.querySelectorAll("header .toggler");
    if (!togglers.length) {
      return;
    }

    togglers.forEach(function (toggler) {
      toggler.addEventListener("click", onTogglerClick);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup);
  } else {
    setup();
  }
})();
