/* ============================================================
   Ilir Rukaj — Portfolio interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---- Year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Theme toggle (respects saved choice, else system) ---- */
  var root = document.documentElement;
  var toggle = document.getElementById("themeToggle");

  function storedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function saveTheme(v) {
    try { localStorage.setItem("theme", v); } catch (e) {}
  }

  // Default is light (white); the head script already applied any saved theme.
  function syncSwitch() {
    if (!toggle) return;
    var dark = root.getAttribute("data-theme") === "dark";
    toggle.setAttribute("aria-checked", dark ? "true" : "false");
  }
  syncSwitch();

  if (toggle) {
    toggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      saveTheme(next);
      syncSwitch();
    });
  }

  /* ---- Nav shadow on scroll + progress bar ---- */
  var nav = document.getElementById("nav");
  var progress = document.getElementById("scrollProgress");

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (nav) nav.classList.toggle("is-scrolled", y > 12);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var pct = h > 0 ? (y / h) * 100 : 0;
      progress.style.width = pct + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach(function (el, i) {
      // stagger siblings a touch for a graceful cascade
      el.style.transitionDelay = (i % 4) * 60 + "ms";
      io.observe(el);
    });
  }

  /* ---- Count-up stats ---- */
  var stats = document.querySelectorAll(".stat__num[data-count]");
  if (!reduce && "IntersectionObserver" in window && stats.length) {
    var sio = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseInt(el.getAttribute("data-count"), 10) || 0;
          var suffix = el.textContent.replace(/[0-9]/g, "");
          var start = 0;
          var dur = 1100;
          var t0 = performance.now();
          function step(now) {
            var p = Math.min((now - t0) / dur, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(start + (target - start) * eased) + suffix;
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          sio.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    stats.forEach(function (el) { sio.observe(el); });
  }

  /* ---- Subtle parallax on hero glow ---- */
  var glow = document.querySelector(".hero__glow");
  if (glow && !reduce) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY || 0;
      if (y < window.innerHeight) {
        glow.style.transform = "translateX(-50%) translateY(" + y * 0.15 + "px)";
      }
    }, { passive: true });
  }
})();
