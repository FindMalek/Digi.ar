import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/Button";

export default function CloudLogos() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Trusted by the most innovative brands
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Digital Army has been a partner in some of the most successful
              digital products and campaigns of the last decade.
            </p>
            <div className="mt-8 flex items-center gap-x-6">
              <Link href="/contact">
                <Button variant="primary">Contact us</Button>
              </Link>
              <Link href="/about" className="text-sm font-semibold text-white">
                A Proppos de nous <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <Image
              className="max-h-12 w-full object-contain object-left"
              src="/portfolio-page/white-clients/1.png"
              alt="Tuple"
              width={2000}
              height={2000}
            />
            <Image
              className="max-h-12 w-full object-contain object-left"
              src="/portfolio-page/white-clients/2.png"
              alt="Tuple"
              width={2000}
              height={2000}
            />
            <Image
              className="max-h-12 w-full object-contain object-left"
              src="/portfolio-page/white-clients/7.png"
              alt="Tuple"
              width={2000}
              height={2000}
            />
            <Image
              className="max-h-12 w-full object-contain object-left"
              src="/portfolio-page/white-clients/5.png"
              alt="Tuple"
              width={2000}
              height={2000}
            />
            <Image
              className="max-h-12 w-full object-contain object-left"
              src="/portfolio-page/white-clients/6.png"
              alt="Transistor"
              width={2000}
              height={2000}
            />
            <Image
              className="max-h-12 w-full object-contain object-left"
              src="/portfolio-page/white-clients/8.png"
              alt="Transistor"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
