import Link from "next/link";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { Button } from "@/components/ui/Button";

const stats = [
  { label: "Clients Worked With", value: "75" },
  { label: "Project Completed", value: "150" },
  { label: "Successful Ad Campaigns", value: "1,000+" },
];

export default function OurMission() {
  return (
    <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-20 lg:px-8 xl:mt-20">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Notre Mission
        </h2>
        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
          <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
            <p className="text-xl leading-8 text-gray-600">
              Le réseau de digital army est donc composé de network de travaux
              passés, et de divers prestataires ayant eu une relation de
              partenariat win win avec la companie.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
              <p>
                <AiOutlineCheckCircle className="inline-block mr-2 text-green-500" />
                Améliorer votre présence sur le digital
              </p>
              <p className="mt-2">
                <AiOutlineCheckCircle className="inline-block mr-2 text-green-500" />
                Traduire vos besoins en stratégie marketing.
              </p>
              <p className="mt-2">
                <AiOutlineCheckCircle className="inline-block mr-2 text-green-500" />
                Appliquer la stratégie pré-conversion.
              </p>
              <p className="mt-2">
                <AiOutlineCheckCircle className="inline-block mr-2 text-green-500" />
                Avoir un réel impact sur votre business. .
              </p>
            </div>
            <Link href="/contact">
              <Button variant={"primary"} className="mt-10 ">
                Rejoins-nous
              </Button>
            </Link>
          </div>
          <div className="lg:flex lg:flex-auto lg:justify-center">
            <dl className="w-64 space-y-8 xl:w-80">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                  <dt className="text-base leading-7 text-gray-600">
                    {stat.label}
                  </dt>
                  <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
