import Link from "next/link";
import { Button } from "@/components/ui/Button";
import {
  PresentationChartBarIcon,
  CursorArrowRippleIcon,
  FingerPrintIcon,
  InboxStackIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Marketing Consulting Service",
    description: "Conseils en marketing stratégique.",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Social Media Management",
    description: "Stratégies médias sociaux personnalisées.",
    icon: CursorArrowRippleIcon,
  },
  {
    name: "Marketing Project Management",
    description: "Gestion de projet marketing efficace.",
    icon: InboxStackIcon,
  },
  {
    name: "Performance Advertising",
    description: "Publicités à la Performance.",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Web Development",
    description: "Développement web sur mesure.",
    icon: FingerPrintIcon,
  },
  {
    name: "Branding & Design",
    description: "Création de marque et design graphique.",
    icon: FingerPrintIcon,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
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
    </div>
  );
}
