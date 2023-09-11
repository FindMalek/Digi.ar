import { Container } from "@/components/overall/Container";
import ReviewGrid from "@/components/home/review/ReviewGrid";

const reviews = [
  {
    title: "YR PANAROMA",
    body: "A propos du C.E.O: Profil assez complet, avec une vision stratégique et des aptitudes commerciales prouvées.",
    author: "M.A.E (DG, Access)",
    rating: 4,
    imageSrc: "/home-page/reviews/YR PANORAMA TUNIS.webp",
  },
  {
    title: "Miap",
    body: "Digital Army a aidé la startup Miap à remporter le Web Summit 2019 avec succès. Ils ont également géré à distance notre département MKTG, nous permettant de nous concentrer sur notre activité principale.",
    author: "Sofien.B.A  (COO, Miap)",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
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
    body: "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
    author: "JordanBelfort1962",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "I love it!",
    body: "I started providing insider information myself and now I get new insider tips every 5 minutes. I don’t even have time to act on all of them. New Lamborghini is being delivered next week!",
    author: "MrBurns",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "Too good to be true.",
    body: "I was making money so fast with Pocket that it felt like a scam. But I sold my shares and withdrew the money and it’s really there, right in my bank account. This app is crazy!",
    author: "LazyRich99",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "Wish I could give 6 stars",
    body: "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
    author: "SarahLuvzCash",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "Bought an island.",
    body: "Yeah, you read that right. Want your own island too? Get Pocket.",
    author: "ScroogeMcduck",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "No more debt!",
    body: "After 2 weeks of trading on Pocket I was debt-free. Why did I even go to school at all when Pocket exists?",
    author: "BruceWayne",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "I’m 13 and I’m rich.",
    body: "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
    author: "RichieRich",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "Started an investment firm.",
    body: "I charge clients a 3% management fee and just throw all their investments into Pocket. Easy money!",
    author: "TheCountOfMonteChristo",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "It’s like a superpower.",
    body: "Every tip Pocket has sent me has paid off. It’s like playing Blackjack but knowing exactly what card is coming next!",
    author: "ClarkKent",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "Quit my job.",
    body: "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
    author: "GeorgeCostanza",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
  },
  {
    title: "Don’t download this app",
    body: "Unless you want to have the best life ever! I am literally writing this from a yacht.",
    author: "JeffBezos",
    rating: 4,
    imageSrc: "/home-page/reviews/KAPPA.webp",
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
