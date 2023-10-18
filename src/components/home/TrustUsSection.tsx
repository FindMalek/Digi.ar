import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
  {
    id: 1,
    name: "Audit & Consulting ",
    value:
      "We listen to your needs and help you to define your objectives and your strategy.",
  },
  {
    id: 2,
    name: "Collecte & Analyse des Résultats",
    value:
      "We help you to understand your data and to make the right decisions.",
  },
  {
    id: 3,
    name: "Recommandation & Stratégies",
    value:
      "We help you to understand your data and to make the right decisions.",
  },
  {
    id: 4,
    name: "Exécution des Prestations",
    value: "We help you to implement your strategy and to achieve your goals.",
  },
];

export default function TrustUsSection() {
  return (
    <div className="relative bg-white">
      <Image
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
        src="/home-page/trust-us/trends.webp"
        alt="A picture from Pexels.com of a mountain and some people hiking and rising their hands in the air."
        height={1000}
        width={1000}
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-1 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base font-semibold leading-8 text-pink-600">
              Our track record
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Trust us and reach the mountain
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Notre approche consiste à analyser les données de nos clients pour
              en tirer des conclusions pertinentes, que nous utilisons ensuite
              pour optimiser leurs performances marketing.
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="flex flex-col gap-y-3 border-l border-pink-600/30 pl-6"
                >
                  <dd className="order-first text-lg font-bold tracking-tight text-gray-900">
                    {service.name}
                  </dd>
                  <dt className="text-smleading-6 text-gray-600">
                    {service.value}
                  </dt>
                </div>
              ))}
            </dl>
            <Link href="/contact">
              <Button className="mt-16" variant="primary">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
