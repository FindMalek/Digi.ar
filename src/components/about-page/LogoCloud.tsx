import Image from "next/image";
import React from "react";

export default function LogoCloud() {
  return (
    <div className="relative isolate -z-10 pb-8 xs:mt-32 md:mt-10 lg:mt-20">
      <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
        <svg
          className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
              width={200}
              height={200}
              x="50%"
              y="50%"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(-100 0)"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
            <path
              d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
          />
        </svg>
      </div>
      <div className="whitespace-nowrap flex marqueex-animation">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 4,
          5, 6, 7, 8, 9, 10, 11, 12, 13,
        ].map((number) => (
          <Image
            key={number}
            className="max-h-24 w-full object-contain"
            src={`/partnerships/${number}.webp`}
            alt="Cloud Logo"
            width={158}
            height={48}
          />
        ))}
      </div>
      <div className="whitespace-nowrap flex marqueexx-animation">
        {[
          26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 26, 25, 24, 23,
          22, 21, 20, 19, 18, 17, 16, 15, 14, 26, 25, 24, 23, 22, 21, 20, 19,
          18, 17, 16, 15, 14, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15,
          14,
        ].map((number) => (
          <Image
            key={number}
            className="max-h-24 w-full object-contain"
            src={`/partnerships/${number}.webp`}
            alt="Cloud Logo"
            width={158}
            height={48}
          />
        ))}
      </div>
    </div>
  );
}
