import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  PresentationChartBarIcon,
  CursorArrowRippleIcon,
  InboxStackIcon,
  ChatBubbleBottomCenterTextIcon,
  ComputerDesktopIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

import ServiceModal from "@/components/home/ServiceModal";
import { useState } from "react";

const features = [
  {
    name: "Marketing Consulting Service",
    description: "Conseils en marketing stratégique.",
    icon: ChatBubbleBottomCenterTextIcon,
    descriptions: [
      "1. Notre service d'audit et de conseils en marketing vous offre une vision claire de votre stratégie actuelle, identifie les opportunités d'amélioration et vous guide dans la mise en place de tactiques efficaces.",
      "2. Nous analysons vos données, évaluons votre positionnement et vous fournissons des recommandations personnalisées pour optimiser vos campagnes, accroître votre visibilité et atteindre vos objectifs commerciaux.",
    ],
  },
  {
    name: "Social Media Management",
    description: "Stratégies médias sociaux personnalisées.",
    icon: CursorArrowRippleIcon,
    descriptions: [
      "1. Notre service de médias sociaux et de création de contenu vous permet de maximiser votre présence en ligne et d'engager votre audience cible de manière efficace.",
      "2. Nous développons des stratégies personnalisées pour chaque plateforme de médias sociaux, créons du contenu captivant et engageant, et assurons une gestion proactive de vos comptes. Grâce à notre expertise, nous vous aidons à accroître votre notoriété, à renforcer votre image de marque et à générer des interactions significatives avec votre public.",
    ],
  },
  {
    name: "Marketing Project Management",
    description: "Gestion de projet marketing efficace.",
    icon: InboxStackIcon,
    descriptions: [
      "1. Notre service de gestion de projet marketing vous permet de bénéficier d'une expertise complète pour mener à bien vos initiatives marketing.",
      "2. Nous prenons en charge l'ensemble du processus, de la planification à l'exécution, en veillant à respecter les délais, les budgets et les objectifs fixés. Grâce à notre approche méthodique et notre coordination efficace, nous vous offrons une gestion de projet transparente et sans faille, garantissant la réussite de vos campagnes marketing.",
    ],
  },
  {
    name: "Performance Advertising",
    description: "Publicités à la Performance.",
    icon: PresentationChartBarIcon,
    descriptions: [
      "1. Notre service de publicité à la performance vous permet d'obtenir des résultats concrets en ligne.",
      "2. Nous mettons en place des campagnes publicitaires ciblées et optimisées pour maximiser votre retour sur investissement. Grâce à notre expertise en analyse de données et en stratégies publicitaires, nous vous aidons à atteindre vos objectifs commerciaux en générant du trafic qualifié, en augmentant les conversions et en améliorant la rentabilité de vos campagnes publicitaires.",
    ],
  },
  {
    name: "Web Development",
    description: "Développement web sur mesure.",
    icon: ComputerDesktopIcon,
    descriptions: [
      "1. Notre service de développement web vous permet de créer un site web performant et adapté à vos besoins.",
      "2. Nous concevons des sites web sur mesure, optimisés pour le référencement et adaptés à tous les appareils. Grâce à notre expertise en développement web, nous vous aidons à améliorer votre présence en ligne, à générer du trafic qualifié et à augmenter vos conversions.",
    ],
  },
  {
    name: "Branding & Design",
    description: "Création de marque et design graphique.",
    icon: PaintBrushIcon,
    descriptions: [
      "1. Notre service de création de marque et de design graphique vous permet de développer une identité visuelle unique et mémorable.",
      "2. Nous créons des logos, des chartes graphiques et des supports de communication qui reflètent l'identité de votre marque et qui vous permettent de vous démarquer de la concurrence. Grâce à notre expertise en branding et en design, nous vous aidons à renforcer votre image de marque et à améliorer votre notoriété.",
    ],
  },
];

export default function ServicesSection() {

  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-pink-600">
            Les meilleurs services de marketing digital
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Digital Army Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez nos services d&apos;accompagnement des entreprises vers
            l&apos;excellence numérique
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none sm:grid-cols-2 sm:gap-y-112 lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-pink-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 lg:min-h-[60px]">
                  {feature.description}
                </dd>

                <ServiceModal
                  service={feature}
                />
              </div>
            ))}
          </dl>
        </div>
        <Link href="/contact" className="flex justify-center">
          <Button className="mt-16 text-white shadow-xl bg-gray-900 hover:bg-gray-500">
            Commencer
          </Button>
        </Link>
      </div>
    </section>
  );
}
