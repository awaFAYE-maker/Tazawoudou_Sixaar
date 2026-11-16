// =====================================================
//  DONNÉES DU SITE — c'est ici que tu modifies tout
//  (nom, cellules, PDF, événements, contacts)
// =====================================================

const SITE = {
  nom: "Tazawoudou Sixaar",
  slogan: "Dahira Mouride — Unis dans le dikr, le travail et l'entraide",
  whatsappGeneral: "221770000000",      // numéro sans + ni espaces
  email: "contact@exemple.com",
  // Paiement des cotisations (ne mets PAS de totaux sur le site public)
  paiement: {
    wave: "77 000 00 00",
    orangeMoney: "77 000 00 00",
    responsable: "Nom du trésorier"
  }
};

// ----------- CELLULES -----------
const CELLULES = [
  {
    nom: "Cellule Dakar",
    ville: "Dakar",
    responsable: "Nom du responsable",
    telephone: "221770000001",
    reunion: "Chaque samedi après Tisbaar",
    lieu: "Adresse / quartier",
    description: "La cellule mère, qui coordonne les activités du dahira."
  },
  {
    nom: "Cellule Thiès",
    ville: "Thiès",
    responsable: "Nom du responsable",
    telephone: "221770000002",
    reunion: "Chaque dimanche à 16h",
    lieu: "Adresse / quartier",
    description: "Dikr hebdomadaire et appui aux membres de la région."
  },
  {
    nom: "Cellule Ngoundiane",
    ville: "Ngoundiane",
    responsable: "Nom du responsable",
    telephone: "221770000003",
    reunion: "Chaque vendredi après Takussan",
    lieu: "Adresse / quartier",
    description: "Cellule locale, séances de Khassaïdes et de Kaggu."
  }
  // Pour ajouter une cellule, copie un bloc { ... } ci-dessus, ajoute une virgule, et modifie.
];

// ----------- BIBLIOTHÈQUE (PDF) -----------
// Mets tes fichiers PDF dans le dossier "pdf/" et écris le nom exact ici.
const LIVRES = [
  { titre: "Kaggu", auteur: "Collection de textes mourides", categorie: "Kaggu", fichier: "pdf/kaggu.pdf" },
  { titre: "Tazawoudou Sixaar", auteur: "Cheikh Ahmadou Bamba", categorie: "Khassaïdes", fichier: "pdf/tazawoudou-sixaar.pdf" },
  { titre: "Jawartu", auteur: "Cheikh Ahmadou Bamba", categorie: "Khassaïdes", fichier: "pdf/jawartu.pdf" },
  { titre: "Mawahibu Nafi", auteur: "Cheikh Ahmadou Bamba", categorie: "Khassaïdes", fichier: "pdf/mawahibu-nafi.pdf" },
  { titre: "Programme du Magal", auteur: "Dahira", categorie: "Documents du dahira", fichier: "pdf/programme-magal.pdf" }
  // Catégories libres : Kaggu, Khassaïdes, Prières, Documents du dahira...
];

// ----------- ÉVÉNEMENTS -----------
const EVENEMENTS = [
  { titre: "Dikr hebdomadaire", date: "Chaque samedi", lieu: "Cellule Dakar", description: "Récitation collective de Khassaïdes." },
  { titre: "Préparation du Magal", date: "À préciser", lieu: "Toutes les cellules", description: "Collecte, transport et organisation du voyage à Touba." },
  { titre: "Assemblée générale", date: "À préciser", lieu: "Dakar", description: "Bilan, projets et élection du bureau." }
];

// ----------- COMMISSIONS -----------
const COMMISSIONS = [
  { nom: "Commission Religieuse", icone: "📿", role: "Organise les dikr, les séances de Khassaïdes et l'enseignement." },
  { nom: "Commission Sociale", icone: "🤝", role: "Soutien aux membres : mariages, baptêmes, décès, maladie." },
  { nom: "Commission Financière", icone: "💰", role: "Gestion des cotisations et des fonds, en toute transparence interne." },
  { nom: "Commission Communication", icone: "📣", role: "Site web, réseaux sociaux, annonces et médias." },
  { nom: "Commission Transport & Logistique", icone: "🚌", role: "Organisation des déplacements, notamment pour le Magal." },
  { nom: "Commission Jeunes & Femmes", icone: "🌱", role: "Activités dédiées aux jeunes et aux sections féminines." }
];
