import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const stats = [
  { id: 1, name: "Clients Worked With", value: "75" },
  { id: 2, name: "Project Completed", value: "150" },
  { id: 3, name: "Succesful Ad Campaigns", value: "100%" },
  { id: 4, name: "Client Satisfaction", value: "1,000+" },
];

export default function TrustUsSection() {
  return (
    <div className="relative bg-white">
      <Image
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2"
        src="/home-page/trust-us/Mountains.webp"
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
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6"
                >
                  <dt className="text-sm leading-6 text-gray-600">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
            <Link href="/contact">
              <Button className="mt-16 text-white shadow-xl bg-gray-900 hover:bg-gray-500">
                Get started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
