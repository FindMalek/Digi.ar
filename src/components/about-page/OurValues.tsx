import React from "react";

const values = [
  {
    name: "Centrés sur le Client",
    description:
      "Nous plaçons nos clients et leurs objectifs au cœur de notre vision d'entreprise. Notre engagement est de fournir des solutions complètes répondant à tous leurs besoins.",
  },
  {
    name: "Offres Complètes",
    description:
      "Nous nous efforçons constamment d'offrir des solutions qui couvrent l'ensemble du spectre du marketing digital. Cela inclut le community management, la publicité en ligne, le développement web, le branding, et bien plus encore.",
  },
  {
    name: "Partenaires",
    description:
      "Nos valeurs fondamentales sont l'honnêteté dans nos relations avec les clients, la rigueur dans notre approche, l'assistance à chaque étape de la collaboration, et le soutien continu à nos clients.",
  },
  {
    name: "Honnêteté, Rigueur, Assistance, Soutien",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
  {
    name: "Accessibilité du Digital Marketing",
    description:
      "Notre mission est de rendre les services de marketing digital accessibles à tous, quel que soit leur secteur d'activité ou leur taille. Nous croyons en l'inclusivité numérique.",
  },
  {
    name: "Incubateur de Jeunes Talents",
    description:
      " Nous nous engageons à incuber les jeunes talents, à les soutenir dans l'entrepreneuriat, et à les aider à créer de la valeur. C'est notre contribution à l'éveil nationa",
  },
];

export default function Quotation() {
  return (
    <section id="vision_et_valeur" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Vision and Value
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Notre vision d&apos;entreprise est centrée sur le client et ses
          objectifs, et nous nous efforçons d&apos;avoir des offres complètes
          répondant à tous ses besoins.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold text-gray-900">{value.name}</dt>
            <dd className="mt-1 text-gray-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
