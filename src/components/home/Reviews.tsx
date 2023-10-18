import { Container } from "@/components/overall/Container";
import ReviewGrid from "@/components/home/review/ReviewGrid";

const reviews = [
  {
    title: "YR PANAROMA",
    body: "A propos du C.E.O: Profil assez complet, avec une vision stratégique et des aptitudes commerciales prouvées.",
    author: "M.A.E (DG, YR PANAROMA)",
    rating: 4,
    imageSrc: "/home-page/reviews/YR PANORAMA TUNIS.webp",
  },
  {
    title: "Miap",
    body: "Digital Army a aidé la startup Miap à remporter le Web Summit 2019 avec succès. Ils ont également géré à distance notre département MKTG, nous permettant de nous concentrer sur notre activité principale.",
    author: "Sofien.B.A  (COO, Miap)",
    rating: 4,
    imageSrc: "/home-page/reviews/miap.webp",
  },
  {
    title: "Better & Stronger",
    body: "Digital Army, l'entreprise à contacter en cas de besoin. Leur niveau de français élevé et leur esprit d'initiative font la différence pour une sous-traitance réussie. Un regard client centric et un marketing 360 sans équivoque !",
    author: "Ronnan.C  (COO, Better & Stronger)",
    rating: 4,
    imageSrc: "/home-page/reviews/Calque 1.webp",
  },
  {
    title: "Circle Agency",
    body: "Digital Army m’a permis d’offrir des services de conseils d’excellence aux clients de mon agence créative. Nous sommes très satisfait de collaborer avec une telle expertise dans la publicité et le marketing.",
    author: "Amine.K (CEO, Circle Agency)",
    rating: 4,
    imageSrc: "/home-page/reviews/Circle Agency.webp",
  },
  {
    title: "Prod’’Now",
    body: "Très bonne expérience avec cette agence pour du contenu rédactionnel. Service rapide et complet.",
    author: "Med Aziz.B (CEO, Prod’’Now)",
    rating: 4,
    imageSrc: "/home-page/reviews/Netcom.webp",
  },
  {
    title: "WappDev",
    body: "Très surpris de la réactivité et du temps d'exécution de cette agence formatrice en community management.",
    author: "Malek Laz. (Co-Founder, WappDev)",
    rating: 4,
    imageSrc: "/home-page/reviews/Wapp Dev.webp",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-16 pt-20 sm:pb-24 sm:pt-32"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Everyone is changing their buisness with Digital Army.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          All of our clients have seen an increase in their sales and a
          significant improvement in their brand image. With Digital Army, you
          will be able to reach your goals.
        </p>
        <ReviewGrid reviews={reviews} />
      </Container>
    </section>
  );
}
