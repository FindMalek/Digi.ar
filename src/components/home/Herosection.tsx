import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ChevronRightIcon } from "@heroicons/react/20/solid";

import Logo from "@/components/overall/Logo";
import { Button } from "@/components/ui/Button";

export default function Herosection() {
  return (
    <div className="overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <Logo className="xs:hidden lg:block h-11 w-auto" special={true} />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link href="/blogs" className="inline-flex space-x-6">
              <span className="rounded-full bg-pink-600/10 px-3 py-1 text-sm font-semibold leading-6 text-pink-600 ring-1 ring-inset ring-pink-600/10">
                Newest blog
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Les tendances du...</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Rentabilisez vos Activités Marketing
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Mettez l&apos;accent sur votre DATA pour générer plus de chiffre
            d&rsquo;affaires. Nous mesurons l&apos;impact de vos campagnes et
            les ajustement à entreprendre pour garantir les meilleures
            prestations à nos clients.
          </p>

          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/contact">
              <Button variant="primary">Get started</Button>
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl mt-16 flex-none sm:max-w-5xl lg:max-w-none">
            <div className="mx-auto sm:flex sm:items-center -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/home-page/herosection/hero-section.webp"
                alt="Circle divided by 4 and filled with different colors. Each color represents a different service. The circle is surrounded by a yellow background"
                width={2432}
                height={1442}
                className="w-[50rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
