const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    var elements = mutation.target.querySelectorAll(".MathJax");
    Array.from(elements).forEach((element) => {
      element.classList.add("notranslate");
    });
  });
});

observer.observe(document.body, { childList: true });
