(() => {
  const toggle = document.querySelector("[data-nav-toggle]");
  const links = document.querySelector("[data-nav-links]");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const isOpen = links.getAttribute("data-open") === "true";
    links.setAttribute("data-open", isOpen ? "false" : "true");
  });
})();
