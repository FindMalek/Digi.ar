import Image from "next/image";
import Link from "next/link";

const jobOpenings = [
  {
    id: 1,
    role: "Wapp Dev - Training",
    href: "/contact",
    description:
      "Ce projet fait partie d’un engagement tripartite avec l’agence de développement web Wapp Dev pour le compte de l’ambassade Britanique afin d’aider les personnes habitant en zone défavorisée à maitriser et comprendre l’outil social media.",
    salary: "75,000 TND",
    name: "L. Malek",
  },
  {
    id: 2,
    role: "Marhaba - Social Media & Ads Managment",
    href: "/contact",
    description:
      "Le challenge est que la marque n’a aucune équipe marketing à disposition et qu’il fallait déjà former une ressource en interne afin d’être plus aligné avec la marque.",
    salary: "125,000 TND",
    name: "A.Amine",
  },
  {
    id: 3,
    role: "Hairstory - Performance Ads",
    href: "/contact",
    description:
      "Participation au brainstorming créatif suivant les retours medias.",
    salary: "105,000 TND",
    name: "S. Rachel",
  },
];

export default function Overview() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos Réussites Avec Nos Clients
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Nous avons aidé des dizaines d&apos;entreprises à atteindre leurs
              objectifs en ligne. Nous pouvons vous aider à faire de même.
            </p>
            <Image
              src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80"
              alt=""
              height={2000}
              width={2000}
              className="mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-100">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      <a href={opening.href}>
                        {opening.role}
                        <span className="absolute inset-0" aria-hidden="true" />
                      </a>
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-600">
                      {opening.description}
                    </dd>
                    <dt className="sr-only">Salary</dt>
                    <dd className="mt-4 text-base font-semibold leading-7 text-gray-900">
                      {opening.salary}
                    </dd>
                    <dt className="sr-only">name</dt>
                    <dd className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                      <svg
                        viewBox="0 0 2 2"
                        className="h-0.5 w-0.5 flex-none fill-gray-300"
                        aria-hidden="true"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      {opening.name}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex border-t border-gray-100 pt-8">
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-pink-600 hover:text-pink-500"
              >
                Savoir plus <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
