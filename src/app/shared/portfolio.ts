import { Portfolio } from './interfaces/portfolio';

export const PORTFOLIOS: Portfolio[] = [
  {
    _id: 1,
    title: 'Installation',
    category: 'card',
    description: "Installation d'un ficher sur un serveur dédié chez ionos",
    date: '09/07/2023',
    image: 'assets/img/portfolio/installation.png',
    preview: 'assets/img/portfolio/installation_prev.png',
  },
  {
    _id: 2,
    title: "(Synchronisation avec d'autres calendriers) Lavarel - Airbnb clone",
    category: 'web',
    description:
      "Le BOUTON (Synchroniser avec d'autres calendriers)\nIl est déjà programmé et fonctionnel seulement qu'il fonctionne manuellement j'explique seulement qu'une action humaine doit l'engager pour réaliser la tâche. J'aimerais l'automatiser J'aimerais que le site Web le fasse de manière automatisée toutes les 30 minutes.\nVoici une petite description qui est répertoriée sur le site.\nMontrez aux voyageurs quand ils peuvent réserver !\nVous pouvez toujours mettre à jour manuellement votre calendrier pour bloquer des dates ou les rendre disponibles.",
    image: 'assets/img/portfolio/calendar-airnbnb.jpg',
    date: '30/07/2022',
    preview: 'assets/img/portfolio/calendar-airnbnb_prev.png',
  },
  {
    _id: 3,
    title:
      "Statistiques sur 100+ fichier d'export HTML de conversations WhatsApp",
    category: 'web',
    description:
      "Ces fichiers HTML ont le meme format qu'une conversation WhatsApp classique, messages ecrits, photos, vidéos, notes vocales, différents paricipants aus groupes etc...\nNous aimerions savoir, quel est le temps moyen de réponses des messages, combien de messages traités par jour, combien de relances par jour, a t-on oublié de répondre a des clients...",
    date: '07/06/2022',
    image: 'assets/img/portfolio/export-whatsapp.jpg',
    preview: 'assets/img/portfolio/export-whatsapp_prev.png',
  },
  {
    _id: 4,
    title: 'Laravel Email Responsive Tableau Markdown',
    category: 'web',
    description:
      "J'ai créé un site sous Laravel, j'ai mis en place un système d'email et celui-ci fonctionne. Par contre j'ai un soucis pour designé un tableau HTML/CSS avec les markdowns. Je cherche quelqu'un pouvant m'aider a regler ce soucis en installant en local la plateforme et en faisant un lien via mailtrap pour tester le rendu visuelle .\n Je souhaiterais rendre le tableau le tableau responsive via via mediaquery.",
    image: 'assets/img/portfolio/laravel-mail-markdown.jpg',
    date: '03/04/2022',
    preview: 'assets/img/portfolio/laravel-mail-markdown_prev.png',
  },
  {
    _id: 5,
    title: 'Petit script avec node.js',
    category: 'web',
    description:
      "J'ai un script en node.js qui fonctionne bien mais je souhaite juste personnaliser.",
    image: 'assets/img/portfolio/coding.jpg',
    date: '02/04/2022',
    preview: 'assets/img/portfolio/coding_prev.png',
  },
  {
    _id: 6,
    title: 'Seo for shotz',
    category: 'web',
    description:
      "En tant qu'experts en développement, nous comprenons l'importance cruciale d'une visibilité en ligne efficace. Grâce à une combinaison de compétences techniques avancées et une connaissance approfondie des meilleures pratiques en SEO, nous sommes en mesure d'optimiser ce site pour les moteurs de recherche.",
    image: 'assets/img/portfolio/shotz.png',
    url: 'https://shotzfilm.de/',
    preview: 'assets/img/portfolio/shotz_prev.png',
  },
  {
    _id: 7,
    title: 'Diagnostic Automobile OBD Multimarque',
    category: 'web',
    description:
      'Reprenez la main sur le diagnostic de votre véhicule : les origines de la marque klavkarr.',
    image: 'assets/img/portfolio/klav.png',
    url: 'https://www.outilsobdfacile.fr/',
    preview: 'assets/img/portfolio/klav_prev.png',
  },
  {
    _id: 8,
    title: 'Creative-Cables',
    category: 'web',
    description:
      "Creative-Cables a eu à cœur l'aspect créatif et le bricolage, se positionnant comme un support valable pour les passionnés d'ameublement, les designers d'intérieur, les architectes et tous les clients qui sont à la recherche d'éclairages fonctionnels avec un grand impact esthétique.",
    image: 'assets/img/portfolio/creative.png',
    url: 'https://www.creative-cables.be/nl/',
    preview: 'assets/img/portfolio/creative_prev.png',
  },
  {
    _id: 9,
    title: 'Kris translation',
    category: 'web',
    description:
      'High quality translations with a passion for language and a strong belief in cooperation.',
    image: 'assets/img/portfolio/kris.png',
    url: 'https://kristranslation.com/?v=947d7d61cd9a',
    preview: 'assets/img/portfolio/kris_prev.png',
  },
  {
    _id: 10,
    title: 'Fly Delivery',
    category: 'app',
    description: 'Fly Delivery.',
    image: 'assets/img/portfolio/fly.jpg',
    date: '02/2024',
    preview: 'assets/img/portfolio/fly_prev.png',
  },
];
