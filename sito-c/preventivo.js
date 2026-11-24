// Tappe facoltative nel modulo preventivo: il pulsante + aggiunge uno slot, × lo rimuove.
(() => {
  const box = document.getElementById("tappe");
  if (!box) return;

  const aggiorna = () => {
    box.querySelectorAll(".tappa.extra").forEach((riga, i) => {
      riga.querySelector(".t").textContent = `Tappa ${i + 2}`;
      riga.querySelector("input").name = `tappa${i + 2}`;
    });
  };

  box.querySelector(".piu").addEventListener("click", () => {
    const riga = document.createElement("div");
    riga.className = "tappa extra";
    riga.innerHTML =
      '<label><span class="t"></span><input placeholder="Es. Sosta a Verona"></label>' +
      '<button type="button" class="meno" aria-label="Rimuovi questa tappa"><i class="fa-solid fa-xmark"></i></button>';
    box.appendChild(riga);
    aggiorna();
    riga.querySelector("input").focus();
  });

  box.addEventListener("click", (e) => {
    const meno = e.target.closest(".meno");
    if (!meno) return;
    meno.closest(".tappa").remove();
    aggiorna();
  });
})();
