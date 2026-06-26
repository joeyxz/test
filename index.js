/**
 * TizenBrew injection script for RomM
 * Registers Samsung remote keys and ensures the console route is active.
 */

(function () {
  // Register directional + media keys with the Samsung TVInputDevice API
  const keys = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Enter",
    "Return",
    "XF86Back",
    "XF86AudioPlay",
    "XF86AudioPause",
    "XF86AudioStop",
    "XF86PlayBack",
  ];

  if (window.tizen && window.tizen.tvinputdevice) {
    keys.forEach((key) => {
      try {
        window.tizen.tvinputdevice.registerKey(key);
      } catch (e) {
        // Key may already be registered or unsupported — safe to ignore
      }
    });
  }

  // Map the Samsung Back key to the browser back action
  document.addEventListener("keydown", function (e) {
    if (e.key === "XF86Back" || e.keyCode === 10009) {
      e.preventDefault();
      history.back();
    }
  });

  // If the page loads at the root, redirect to /console so the
  // TV-optimised interface is always shown on launch.
  if (window.location.pathname === "/" || window.location.pathname === "") {
    window.location.replace("/console");
  }
})();
