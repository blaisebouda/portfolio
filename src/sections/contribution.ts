import ypay from "/projects/ypay.jpg";
import gpharma from "/projects/gpharma.jpg";
import unionhalal from "/projects/unionhalal.jpg";
import portfolio from "/projects/portfolio.jpg";

export type Contribution = {
  id: number;
  cover: string;
  title: string;
  year: string;
  short_description: string;
  description: {
    more_desc: string;
    context?: string;
    contributions: string[];
    technologies: string[];
    visit_link?: string;
  };
  technologies: string[];
};

export const contributions: Contribution[] = [
  {
    id: 1,
    cover: ypay,
    year: "2024",
    title: "Solution de paiement",
    short_description:
      "Développement d’une solution de paiement sécurisée en interne chez Ytech.",
    description: {
      more_desc:
        "Développement d’une solution de paiement sécurisée en interne chez Ytech, garantissant fiabilité et protection des transactions financières. Pour des raisons de confidentialité, le contexte complet du projet ne peut être partagé.",
      contributions: [
        "Optimisé les requêtes SQL, réduisant le temps de réponse de 40%.",
        "Implémenté des tests unitaires (Pest) atteignant 90% de couverture.",
        "Renforcé la sécurité avec la protection CSRF, la prévention des attaques DDoS et la validation stricte des données.",
        "Rédigé la documentation via Swagger pour faciliter l’intégration du frontend.",
        "Livré la maquette de l’application mobile et de la landing page.",
      ],
      technologies: [
        "Laravel → Backend solide et développement de l’API.",
        "Swagger → Documentation claire et interactive des endpoints API.",
        "Filament PHP → Panneau d’administration moderne et intuitif.",
      ],
      visit_link: "https://ypay.ytech-bf.com/",
    },
    technologies: ["Laravel", "Swagger", "API"],
  },
  {
    id: 2,
    year: "2023",
    cover: gpharma,
    title: "Gestion de pharmacie",
    short_description:
      "Intégration et développement d’une application desktop moderne de gestion de pharmacie.",
    description: {
      more_desc:
        "Développement et intégration d’une application desktop moderne de gestion de pharmacie, facilitant la gestion des stocks, ventes et des approvissionements.",
      context:
        "Bien que des logiciels existent déjà sur le marché, la plupart sont souvent trop complexes, coûteux et basés sur des données locales peu sécurisées. C’est ainsi que Ytech a développé G-Pharma, une application simple, abordable et fiable, avec des données protégées.",
      contributions: [
        "Mis en place une architecture Clean avec API Composition, Pinia et Vue Router.",
        "Optimisé les performances des rendus pour une expérience fluide.",
        "Rédigé et exécuté des tests unitaires (Vitest) pour assurer la fiabilité et simplifier la maintenance.",
        "Packagé l’application en desktop avec Electron.js.",
        "Renforcé la robustesse du code grâce au typage strict avec TypeScript, garantissant une meilleure maintenabilité et réduisant les erreurs en production.",
      ],
      technologies: [
        "TypeScript → Typage strict pour un code robuste et maintenable.",
        "Vue.js → Développement du frontend moderne et réactif.",
        "Pinia → Gestion globale de l’état avec simplicité et efficacité.",
        "Electron.js → Packaging en application desktop multiplateforme.",
        "GitHub Actions → Intégration continue et automatisation des déploiements.",
      ],
    },
    technologies: ["VueJs", "Pinia", "TailwindCSS", " Electron Js"],
  },
  {
    id: 3,
    year: "2025",
    cover: unionhalal,
    title: "Union Halal",
    short_description:
      "Conception UI/UX et développement de l’API en Laravel pour une application de rencontre 100% Halal.",
    description: {
      more_desc:
        "Conception UI/UX et développement de l’API en Laravel pour une application de rencontre 100% Halal.",
      context:
        "Notre client souhaitait aider les musulmans à trouver leur âme sœur dans un cadre 100% halal et éthique. J’ai alors été sollicité pour travailler sur le design de l’application et apporter mon expertise en backend avec Laravel.",
      contributions: [
        "Conception du design avec prototypes interactifs.",
        "Développement du backend avec Laravel.",
        "Rédaction de la documentation API avec Swagger.",
      ],
      technologies: [
        "Figma → Prototypage et conception UI/UX.",
        "Laravel → Développement du backend robuste et évolutif.",
        "Swagger → Documentation claire et interactive de l’API.",
      ],
    },
    technologies: ["Laravel", "Swagger", "Figma"],
  },
  {
    id: 4,
    year: "2025",
    cover: portfolio,
    title: "Landing Page – Portfolio",
    short_description:
      "Intégration d’une landing page moderne regroupant mes principales réalisations en design.",
    description: {
      more_desc:
        "Intégration d’une landing page moderne regroupant mes principales réalisations en design.",
      context:
        "Passionné par le design, j’ai conçu cette page comme un espace d’expression et d’apprentissage. Elle marque une nouvelle étape dans mon parcours : approfondir mes compétences UI/UX et évoluer vers ma vision à long terme est de devenir Product Designer.",
      contributions: [
        "Réalisation du market design complet sur Figma (charte graphique, écrans et interactions).",
        "Intégration frontend en React avec une structure réactive et fluide.",
        "Animations dynamiques avec ReactBits pour renforcer l’engagement et la convivialité.",
      ],
      technologies: [
        "React → Développement d’une interface réactive et performante.",
        "TailwindCSS → Mise en page responsive et design épuré.",
        "ReactBits → Création d’animations légères et interactives.",
        "Figma → Conception du design system et des maquettes haute-fidélité.",
      ],
      visit_link: "https://blaisebouda.github.io/uxui-portfolio",
    },
    technologies: ["React", "TailwinCSS", "TypeScript", "Figma"],
  },
];
