import Image from "next/image";

export default function Herosection() {
  return (
    <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-pink-100/20 pt-14">
      <div
        className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-pink-600/10 ring-1 ring-pink-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
            À Propos de Nous: Votre Succès, Notre Mission
          </h1>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <p className="text-lg leading-8 text-gray-600">
              Notre réseau au sein de Digital Army est un ensemble de
              partenaires et de prestataires, tous unis par des collaborations
              fructueuses. Nous nous engageons à offrir à nos clients le
              meilleur, à des prix compétitifs, assurant ainsi l'un des
              meilleurs rapports qualité-prix du marché. Chez Digital Army, nous
              plaçons le client et sa marque au cœur de nos priorités. Notre
              modèle commercial est axé sur la rigueur, l'honnêteté et
              l'indépendance, garantissant à chaque client une expérience
              exceptionnelle
            </p>
          </div>
          <Image
            src="/about-page/herosection/herosection.webp"
            alt="Image of 2 people working on a laptop solving a problem and discussing it."
            height={1000}
            width={1000}
            className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-20"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}
