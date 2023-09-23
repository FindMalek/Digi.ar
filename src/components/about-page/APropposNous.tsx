import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function AProposNous() {
  return (
    <section id="partenaire" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7 text-pink-600">
            À Propos de Digital Army
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Votre Partenaire en Marketing Digital et Gestion de Projet
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                <strong className="font-semibold text-gray-900">
                  Votre Partenaire en Marketing :
                </strong>
                Nous concentrons sur l&apos;analyse et la mesure de la
                performance de vos campagnes marketing. Grâce à des données et
                des outils d&apos;analyse avancés, nous mesurons le retour sur
                investissement de chaque campagne, ce qui nous permet
                d&apos;ajuster les stratégies en temps réel.
              </p>
              <p className="mt-8">
                <strong className="font-semibold text-gray-900">
                  Collaboration Personnalisée :
                </strong>
                Chez Digital Army, nous travaillons main dans la main avec nos
                clients pour comprendre leur marché et leurs besoins
                spécifiques. Nos stratégies marketing sont taillées sur mesure
                pour votre succès. Nous offrons un suivi personnalisé et des
                rapports détaillés pour une totale transparence.
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold text-gray-900">
                  Gestion de Projet Expertise :
                </strong>{" "}
                Outre notre expertise en marketing digital, nous excellons en
                gestion de projet. Nous vous accompagnons à chaque étape, en
                garantissant une communication efficace, une planification
                rigoureuse et une gestion proactive des risques.
              </p>
              <p className="mt-8">
                <strong className="font-semibold text-gray-900">
                  Soutien à l&apos;Entreprenariat :
                </strong>{" "}
                Nous croyons en l&apos;entreprenariat et l&apos;éveil national.
                Digital Army incube les jeunes talents et les guide pour créer
                de la valeur. Nous proposons également des formations et des
                ateliers pour partager notre expertise avec les entrepreneurs.
              </p>
            </div>
          </div>
          <div className="mt-10 flex">
            <Link href="/contact">
              <Button variant={"primary"}>Contactez-nous !</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16 lg:pt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="/about-page/content/content.webp"
            alt=""
            height={1500}
            width={1500}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
