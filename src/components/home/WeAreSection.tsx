import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";
import AuthorBox from "@/components/home/AuthorBox";

export default function WeAreSection() {
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src="/home-page/we-are/Marketing Plan.webp"
          alt="A note with a marketing plan on it."
          height={1200}
          width={1000}
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#FF00FF-FF00FF-FF00FF-FF00FF-FF00FF)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="FF00FF-FF00FF-FF00FF-FF00FF-FF00FF"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF00FF" />
              <stop offset={1} stopColor="#FF00FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-pink-600">
            Award winning support
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We are Digital Army
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Nous sommes une agence de conseils en marketing et de gestion de
            projet digitaux.
          </p>
          <AuthorBox />
          <div className="mt-8">
            <Link href="/about">
              <Button className="inline-flex rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-700 shadow-sm hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                More about us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
