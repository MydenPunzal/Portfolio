document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("overlay");
  const cards = document.querySelectorAll(".card");
  let activeCard = null;

  function closeCard() {
    if (!activeCard) return;
    activeCard.classList.remove("is-open");
    overlay.classList.remove("is-visible");
    document.body.classList.remove("no-scroll");
    activeCard = null;
  }

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      if (activeCard === card) return;
      if (activeCard) closeCard();
      card.classList.add("is-open");
      overlay.classList.add("is-visible");
      document.body.classList.add("no-scroll");
      activeCard = card;
    });
  });

  if (overlay) overlay.addEventListener("click", closeCard);

  document.addEventListener("click", () => {
    if (activeCard) closeCard();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeCard();
  });

  
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav-cols");
  if (toggle && nav) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("is-open");
    });
    nav.addEventListener("click", (e) => e.stopPropagation());
  }
});