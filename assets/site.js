const menu = document.querySelector(".mobile-menu");

if (menu) {
  const trigger = menu.querySelector("summary");
  const wideLayout = window.matchMedia("(min-width: 58.01rem)");

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      trigger.focus();
    }
  });

  document.addEventListener("pointerdown", (event) => {
    if (menu.open && !menu.contains(event.target)) {
      menu.open = false;
    }
  });

  wideLayout.addEventListener("change", (event) => {
    if (event.matches) menu.open = false;
  });
}
