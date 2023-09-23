import Image from "next/image";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <section id="impact" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-pink-600">
                Votre Armée du Marketing Numérique
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Maximisez Votre Impact en Ligne avec Digital Army
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Digital Army, l&apos;agence de marketing spécialisée en
                publicité performante et gestion de projets clé en main, vous
                accompagne dans la réalisation de vos objectifs marketing et
                l&apos;augmentation de votre chiffre d&apos;affaires.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="/about-page/content/landscape.webp"
            alt="A landscape of mountains and a man standing on top."
            width={1000}
            height={800}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Chez Digital Army, nous mettons la DATA au cœur de notre
                stratégie. Nous analysons minutieusement les données de nos
                clients pour mieux comprendre leur entreprise. Cette analyse
                rigoureuse nous permet de maximiser l&apos;impact de leurs
                campagnes marketing en atteignant les KPIs qui correspondent à
                leurs objectifs commerciaux.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon
                    className="mt-1 h-5 w-5 flex-none text-pink-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Une Exclusivité
                    </strong>{" "}
                    Notre fondateur, Mahmoud Beznaiguia, possède une vaste
                    expérience sur le marché tunisien et international. Il a
                    collaboré avec de grandes marques et sa spécialité est la
                    publicité à la performance.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <LockClosedIcon
                    className="mt-1 h-5 w-5 flex-none text-pink-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Notre Vision et Nos Valeurs
                    </strong>{" "}
                    Notre vision est axée sur le client et ses objectifs. Nous
                    sommes des partenaires dévoués qui travaillent en étroite
                    collaboration pour atteindre vos objectifs. Nous croyons en
                    la transparence et en la communication ouverte tout au long
                    de chaque projet.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ServerIcon
                    className="mt-1 h-5 w-5 flex-none text-pink-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Une Équipe d&apos;Experts
                    </strong>{" "}
                    Notre équipe est composée de spécialistes passionnés et
                    expérimentés en marketing numérique. Nous recrutons les
                    meilleurs talents de l&apos;industrie pour garantir des
                    solutions de qualité.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Nous collaborons avec un réseau diversifié de partenaires, avec
                lesquels nous avons établi des relations gagnant-gagnant. Nous
                partageons notre expertise pour les aider à réussir et à opérer
                en toute indépendance. Digital Army offre une gamme complète de
                services de marketing et de gestion de projets, adaptés à vos
                besoins et à votre budget. De l&apos;amélioration de la présence
                en ligne à la création de contenu graphique, en passant par le
                développement web et la gestion des réseaux sociaux, nous vous
                accompagnons à chaque étape de votre stratégie marketing.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                Une Équipe D&apos;Experts à Votre Service
              </h2>
              <p className="mt-6">
                En résumé, Digital Army est l&apos;agence de marketing numérique
                tout-en-un qui vous accompagne dans l&apos;atteinte de vos
                objectifs commerciaux grâce à une stratégie sur mesure. Nous
                sommes passionnés, créatifs, réactifs, et nous croyons en la
                collaboration et la transparence. Notre équipe dédiée est fière
                de son expertise et est prête à investir dans votre succès. Si
                vous recherchez une agence de marketing numérique sur laquelle
                compter, contactez Digital Army dès aujourd&apos;hui pour
                discuter de vos besoins marketing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
