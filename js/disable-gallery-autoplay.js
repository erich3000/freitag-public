(function () {
  function disableGalleryAutoplay() {
    if (!window.jQuery) {
      return;
    }

    window.jQuery(".flexslider").each(function () {
      var instance = window.jQuery(this).data("flexslider");
      if (!instance) {
        return;
      }

      instance.vars.slideshow = false;
      instance.pause();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", disableGalleryAutoplay);
  } else {
    disableGalleryAutoplay();
  }
})();
