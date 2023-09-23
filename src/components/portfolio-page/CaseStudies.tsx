import CaseStudy from "@/components/portfolio-page/CaseStudy";

const caseStudies = [
  {
    logo: "/portfolio-page/bw-clients/16.webp",
    client: "HiSense",
    service: "Social Media Management",
    date: "2018-02",
    title: "Community Manager",
    summary: [
      "Ce projet fait partie d'un engagement tripartite avec une agence américaine internationale pour le compte de la marque multinationale Hisense.",
      "Le challenge est que ce client voudrait s'implanter en Tunisie et voudrait bien avoir une présence sur le web digne de ce nom pour être en Top of Mind ainsi que pour avoir le maximum de portée sur ces différents produits.",
    ],
    testimonial: {
      author: {
        name: "M.Omrane",
        role: "Afrivision Group",
      },
      content:
        "La page et la présence sont digne d'une marque internationale, et l'agence Digital Army a su mettre en valeur la marque ainsi qu'à créer la présence nécessaire au lancement de la marque dans le pays",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/3.webp",
    client: "Sciences Pro Tunis",
    service: "Social Media Management",
    date: "2018-08",
    title: "Community Manager",
    summary: [
      "Ce projet fait partie d'un engagement tripartite avec une agence américaine internationale pour le compte de la marque Science Politiques Tunis.",
      "Le challenge est que ce client voudrait entamer un processus de préinscription en ligne un mois avant le début de l'année universitaire. Challenge relevé avec Brio, pour le Step 0 et Step 1 de ce process.",
    ],
    testimonial: {
      author: {
        name: "L.Luca",
        role: "Panorama",
      },
      content:
        "L'agence Digital Army, a permis à notre société de démarrer les différents projets marketing digitaux de nos clients, jusqu'à ce que nous ayons pu créer un pôle Digital au sein de notre agence. Une mention spéciale pour ce projet, car on avait besoin de résultats et performances. ",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/2.webp",
    client: "Wapp Dev",
    service: "Training",
    date: "2018-09",
    title: "Training Session",
    summary: [
      "Ce projet fait partie d’un engagement tripartite avec l’agence de développement web Wapp Dev pour le compte de l’ambassade Britanique afin d’aider les personnes habitant en zone défavorisée à maitriser et comprendre l’outil social media.",
      "Le challenge est que ce doit être fait sur deux groupes d’individus de différentes classes opinions et background. Un groupe de jeunes issus des régions défavorisé de la Tunisie et un groupe de personnes beaucoup plus âgées.",
      "Il a fallu donc adapter le programme et la façon de présenter en fonction de la première séance, ou un formateur se doit de connaitre les limites et les connaissances de chaque élève sur le sujet de la formation.",
    ],
    testimonial: {
      author: {
        name: "L.Malek",
        role: "Wapp Dev",
      },
      content:
        "Digital Army a été appelé en urgence la veille de la formation et a su répondre présent et ainsi fournir une prestation de qualité.",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/12.webp",
    client: "Marhaba",
    service: "Social Media & Ads Managment",
    date: "2018-11",
    title: "Social Media & Ads Managment",
    summary: [
      "Ce projet fait partie d'une facon de faire et d'une approche Clé en main et unique å Digital Army. Le besoin du client était de s'étendre sur les marchés africain et européen et promouvoir ses services.",
      "Le challenge est que la marque n’a aucune équipe marketing à disposition et qu’il fallait déjà former une ressource en interne afin d’être plus aligné avec la marque.",
      "Nous avons donc lancer le projet en clé en main pour le compte du client sur les marchés ivoiriens, français et belges.",
    ],
    testimonial: {
      author: {
        name: "A.Amine",
        role: "Marhaba Mobile",
      },
      content:
        "Digital Army a été d’une aide hors du commun afin d’atteindre nos objectifs, former nos ressources et nous laisser une machine qui tourne toute seule parfaitement.",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/7.webp",
    client: "Plan B",
    service: "Graphical Content",
    date: "2023-02",
    title: "Graphical Content",
    summary: [
      "L’agence Digital Army a été appelée en urgence pour le lancement d’un nouveau point de vente de cette chaine de fast-food internationale.",
      "Nous avions réalisé pour le compte de cette marque en 2023: Son Brand Book international (Condition qui a permis l’acceptation de son dossier pour un Pitch international et par la même occasion de le gagner) Création du branding et de la marque Plan B Coffee.",
    ],
    testimonial: {
      author: {
        name: "K.Yasmine",
        role: "Plan B",
      },
      content:
        "Le directeur artistique chez Digital Army est un vrai virtuose de l’outil graphique et a su à chaque fois répondre au besoin et émerveiller les yeux",
    },
  },

  {
    logo: "/portfolio-page/bw-clients/17.webp",
    client: "Hairstory",
    service: "Performance Ads",
    date: "2022-06",
    title: "Performance Ads",
    summary: [
      "Ce projet fait partie d’un partenariat tripartite entre notre agence et l’agence lyonnaise Better & Stronger, et l’équipe de Hairstory US.",
      "Gestion des publicités de différents pays suivant les besoins & actions",
      "Optimisation des campagnes drive to store et drive to event.",
      "Participation au brainstorming créatif suivant les retours medias.",
    ],
    testimonial: {
      author: {
        name: "S. Rachel",
        role: "Hair Story",
      },
      content:
        "Mahmoud has been of a huge help, participating in both media creation and performance ads for the brand. He’s been wonderful at finding solutions and brainstorming with us around the brand",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/28.webp",
    client: "Lily Pharma",
    service: "All in One",
    date: "2023-04",
    title: "All in One",
    summary: [
      "Ce projet est une entente sur la création d’un branding, un site web, une présence sur les réseaux sociaux ainsi que de la vente de produit parapharmaceutiques en ligne.",
      "Creation de la marque et du branding.",
      "Creation et gestion des réseaux sociaux (Facebook & Instagram).",
      "Création du site web.",
      "Préparation à la gestion publicitaire.",
    ],
    testimonial: {
      author: {
        name: "G. Selima",
        role: "Lily Pharma (Parapharmacie)",
      },
      content:
        "Digital Army a parfaitement compris mon besoin de me concentrer sur mon business en m’offrant un partenariat ou je n’ai qu’à chapoter à distance tous les travaux médias et marketing en quelques minutes.",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/5.webp",
    client: "SIMCC",
    service: "Performance Ads",
    date: "2020-06",
    title: "Performance Ads & Bonus",
    summary: [
      "Ce projet est une entente sur la gestion des campagnes publicitaires afin de générer des revenus ainsi que pour le regroupement de 7 pages Facebook différentes en une seule.",
      "Participation à l’accaparation de plus de 30K TND en chiffre d’affaires en l’espace de 3 campagnes publicitaires pour un ROAS de plus de 1500%.",
    ],
    testimonial: {
      author: {
        name: "D. Slim",
        role: "SIMCC (Représentant Peugeot Motocycles & Plusieurs Marque d’accessoires Moto)",
      },
      content:
        "Digital Army nous a permis de regrouper nos 7 pages de façon professionnelle en contactant le support Facebook, et nous a permis aussi de grapiller beaucoup de part de marché sur tout le territoire tunisien",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/6.webp",
    client: "Sanabel Carthage",
    service: "Social Media Management",
    date: "2018-12",
    title: "Community Management",
    summary: [
      "Ce projet fait partie d’un engagement tripartite avec une agence américaine internationale pour le compte de la marque d’agro-alimentaire locale Sanabel Carthage",
      "Lancement et gestion des réseaux sociaux Facebook & Instagram et Proposer et innover sur les façons de parler à son audience.",
      "Créer de l’engouement et de l’attente pour le lancement officiel de la marque.",
    ],
    testimonial: {
      author: {
        name: "L. Luca",
        role: "Panorama",
      },
      content:
        "Mahmoud est une personne très réactive, dynamique et multi-casquettes.",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/24.webp",
    client: "Circle Agency",
    service: "External Consultancy",
    date: "2022-09",
    title: "External Consultancy",
    summary: [
      "Ce projet fait partie d’un partenariat entre notre agence et Circle, une agence créative spécialisé en production de contenus graphiques hors du commun et de la gestion de réseaux sociaux. (un mastodonte local du Food Marketing)",
      "Upselling pertinent à ses clients.",
      "Proposition de solutions marketing avancées.",
      "Amelioration de l’approche stratégique",
    ],
    testimonial: {
      author: {
        name: "K. Amine",
        role: "Circle Agency",
      },
      content:
        "Mahmoud sait s’adapter et offrir le meilleur de sa technicité et son savoir-faire suivant la situation, toujours au taquet et passionné de Quick Thinking",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/25.webp",
    client: "Circle Agency",
    service: "External Consultancy",
    date: "2022-04",
    title: "External Consultancy",
    summary: [
      "Ce projet fait partie d’un partenariat entre notre agence et l’agence lyonnaise Better & Stronger, une agence 360 spécialisée dans la publicité à performance. ",
      "Gestion des publicités de différents Brand suivant les besoins",
      "Optimisation des campagnes",
      "Formation et partage de Savoir avec les Juniors.",
    ],
    testimonial: {
      author: {
        name: "C. Ronan",
        role: "Better & Stronger",
      },
      content:
        "Mahmoud est une ressource 360° en marketing unique. Il a une vision Macro et à la fois Micro. Il Maitrise les outils d’advertisement. Mention spéciale pour la maitrise de la langue, mieux qu’un natif.",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/11.webp",
    client: "Miap",
    service: "All in One",
    date: "2021-02",
    title: "All in One",
    summary: [
      "Ce projet est une entente sur la gestion à distance (en remote) de tout le département marketing de la marque ainsi que préparer au web summit 2019 au portugal. ",
      "2019: Gestion du Pole, Formation des ressource humaines, Creation graphique de mascotte, Gestion des réseaux sociales Facebook & Instagram et Participation au pitch du web summit.",
      "2021: Audit & Consulting et Gestion et Optimisation des campagnes publicitaires.",
    ],
    testimonial: {
      author: {
        name: "B.A. Sofian",
        role: "Miap (Technology Start’up)",
      },
      content:
        "Mahmoud a toujours répondu pour des missions ponctuelles avec objectifs, qu’il a réussi à atteindre à chaque fois",
    },
  },
  {
    logo: "/portfolio-page/bw-clients/4.webp",
    client: "Timberland",
    service: "Performance Ads",
    date: "2021-02",
    title: "Performance Ads",
    summary: [
      "Ce projet fait partie d’un partenariat tripartite entre notre agence et l’agence lyonnaise Better & Stronger, et l’équipe de Timberland Europe",
      "Gestion des publicités de différents pays suivant les besoins & actions",
      "Optimisation des campagnes drive to store et drive to event.",
      "Participation au brainstorming créatif suivant les retours medias.",
    ],
    testimonial: {
      author: {
        name: "G.Giada",
        role: "Timberland (Clothing Brand)",
      },
      content:
        "Mahmoud is very ressorceful and has a great understanding of the digital marketing ecosystem. He is a great asset to any team and I would recommend him for any digital marketing project.",
    },
  },
];

export default function CaseStudies() {
  return (
    <section id="case_studies" className="mx-auto max-w-screen-xl px-8 mt-10">
      <h2 className="font-display text-2xl font-semibold text-neutral-950">
        Case studies
      </h2>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <CaseStudy caseStudy={caseStudy} key={caseStudy.title} />
        ))}
      </div>
    </section>
  );
}
