// Ce fichier lit data.js et construit le site. Pas besoin de le modifier.

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

// ---- En-tête, hero, pied de page ----
$("siteNom").textContent = SITE.nom;
$("heroTitre").textContent = "Dahira " + SITE.nom;
$("heroSlogan").textContent = SITE.slogan;
$("footNom").textContent = SITE.nom;
$("annee").textContent = new Date().getFullYear();
$("payWave").textContent = SITE.paiement.wave;
$("payOM").textContent = SITE.paiement.orangeMoney;
$("payResp").textContent = SITE.paiement.responsable;

// ---- Statistiques ----
$("statCellules").textContent = CELLULES.length;
$("statLivres").textContent = LIVRES.length;
$("statCommissions").textContent = COMMISSIONS.length;

// ---- Menu mobile ----
$("burger").onclick = () => $("menu").classList.toggle("ouvert");
document.querySelectorAll("#menu a").forEach(a => a.onclick = () => $("menu").classList.remove("ouvert"));

// ---- Cellules ----
function afficherCellules(filtre = "") {
  const f = filtre.toLowerCase();
  const liste = CELLULES.filter(c => (c.nom + c.ville + c.lieu).toLowerCase().includes(f));
  $("listeCellules").innerHTML = liste.map(c => `
    <article class="card">
      <span class="badge">📍 ${esc(c.ville)}</span>
      <h3>${esc(c.nom)}</h3>
      <p>${esc(c.description)}</p>
      <p class="meta">👤 Responsable : ${esc(c.responsable)}</p>
      <p class="meta">🕌 Réunion : ${esc(c.reunion)}</p>
      <p class="meta">📌 Lieu : ${esc(c.lieu)}</p>
      <div class="actions">
        <a class="btn small" target="_blank" rel="noopener" href="https://wa.me/${esc(c.telephone)}">💬 WhatsApp</a>
        <a class="btn small" href="tel:+${esc(c.telephone)}">📞 Appeler</a>
      </div>
    </article>`).join("") || "<p class='center'>Aucune cellule trouvée.</p>";
}
$("rechercheCellule").oninput = (e) => afficherCellules(e.target.value);
afficherCellules();

// ---- Bibliothèque ----
let categorieActive = "Tous";
function afficherFiltres() {
  const cats = ["Tous", ...new Set(LIVRES.map(l => l.categorie))];
  $("filtres").innerHTML = cats.map(c =>
    `<button class="${c === categorieActive ? "actif" : ""}" data-c="${esc(c)}">${esc(c)}</button>`).join("");
  $("filtres").querySelectorAll("button").forEach(b => b.onclick = () => {
    categorieActive = b.dataset.c; afficherFiltres(); afficherLivres();
  });
}
function afficherLivres() {
  const f = $("rechercheLivre").value.toLowerCase();
  const liste = LIVRES.filter(l =>
    (categorieActive === "Tous" || l.categorie === categorieActive) &&
    (l.titre + l.auteur).toLowerCase().includes(f));
  $("listeLivres").innerHTML = liste.map((l, i) => `
    <article class="card">
      <span class="badge">${esc(l.categorie)}</span>
      <h3>📄 ${esc(l.titre)}</h3>
      <p class="meta">${esc(l.auteur)}</p>
      <div class="actions">
        <button class="btn small" data-lire="${esc(l.fichier)}" data-titre="${esc(l.titre)}">👁 Lire</button>
        <a class="btn small" href="${esc(l.fichier)}" download>⬇ Télécharger</a>
      </div>
    </article>`).join("") || "<p class='center'>Aucun document trouvé.</p>";
  $("listeLivres").querySelectorAll("[data-lire]").forEach(b => b.onclick = () => {
    $("lecteurFrame").src = b.dataset.lire;
    $("lecteurTitre").textContent = b.dataset.titre;
    $("lecteur").hidden = false;
    $("lecteur").scrollIntoView({behavior: "smooth"});
  });
}
$("fermerLecteur").onclick = () => { $("lecteur").hidden = true; $("lecteurFrame").src = ""; };
$("rechercheLivre").oninput = afficherLivres;
afficherFiltres();
afficherLivres();

// ---- Événements ----
$("listeEvenements").innerHTML = EVENEMENTS.map(e => `
  <article class="card">
    <span class="badge">📅 ${esc(e.date)}</span>
    <h3>${esc(e.titre)}</h3>
    <p class="meta">📍 ${esc(e.lieu)}</p>
    <p>${esc(e.description)}</p>
  </article>`).join("");

// ---- Commissions ----
$("listeCommissions").innerHTML = COMMISSIONS.map(c => `
  <article class="card">
    <h3>${c.icone} ${esc(c.nom)}</h3>
    <p>${esc(c.role)}</p>
  </article>`).join("");

// ---- Formulaire : envoi par WhatsApp ----
$("selectCellule").innerHTML = CELLULES.map(c => `<option>${esc(c.nom)}</option>`).join("");
$("formContact").onsubmit = (e) => {
  e.preventDefault();
  const d = new FormData(e.target);
  const texte = `Salam, je souhaite rejoindre le dahira ${SITE.nom}.\n` +
    `Nom : ${d.get("nom")}\nTél : ${d.get("tel")}\nCellule : ${d.get("cellule")}\nMessage : ${d.get("msg")}`;
  window.open(`https://wa.me/${SITE.whatsappGeneral}?text=${encodeURIComponent(texte)}`, "_blank");
};
