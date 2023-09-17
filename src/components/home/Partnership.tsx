import Image from "next/image";

export default function Partnership() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Image
            className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
            src="/partnerships/1.webp"
            alt="Panorama Y&R Tunisie"
            width={1000}
            height={1000}
          />
          <Image
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
            src="/partnerships/2.webp"
            alt="Wapp Devv"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-32 w-full object-contain lg:col-span-1"
            src="/partnerships/3.webp"
            alt="Wapp Devv"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
            src="/partnerships/4.webp"
            alt="Wapp Devv"
            width={158}
            height={48}
          />
          <Image
            className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
            src="/partnerships/5.webp"
            alt="Wapp Devv"
            width={158}
            height={48}
          />
        </div>
        <div className="mt-16 flex justify-center">
          <p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
            <span className="hidden md:inline">
              Plus de 75 clients nous ont fait confiance et nous avons mené à
              bien plus de 150 projets.
            </span>
            <a href="#" className="font-semibold text-purple-900">
              <span className="absolute inset-0" aria-hidden="true" /> Read our
              customer stories <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
