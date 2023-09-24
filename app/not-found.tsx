import Link from "next/link";

import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/overall/Icons";

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  BookmarkSquareIcon,
  BookOpenIcon,
  QueueListIcon,
  RssIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

import Logo from "@/components/overall/Logo";

const links = [
  {
    name: "Home",
    href: "/",
    description: "Digital Army's home page.",
    icon: BookOpenIcon,
  },
  {
    name: "About Digital Army",
    href: "/about",
    description: "Learn more about Digital Army and its mission.",
    icon: QueueListIcon,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    description: "View our past work and case studies.",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Blogs",
    href: "/blogs",
    description: "Read our latest news and articles.",
    icon: RssIcon,
  },
  {
    name: "Contact Us",
    href: "/contact",
    description: "Get in touch with us.",
    icon: LinkIcon,
  },
];

const social = [
  {
    name: "Twitter",
    href: "#",
    icon: TwitterIcon,
  },
  {
    name: "Instagram",
    href: "#",
    icon: FacebookIcon,
  },
  {
    name: "Instagram",
    href: "#",
    icon: InstagramIcon,
  },
];

export const metadata = {
  title: "Not Found | Digital Army",
  description:
    "Online portfolio of Mahmoud Beznaiguia, a digital marketer skilled in SEO, social media, email marketing, and more. View examples of his work and contact him to help your business succeed online.",
};

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="bg-white">
          <main className="mx-auto w-full max-w-7xl px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
            <Logo
              special={true}
              theme="dark"
              className="mx-auto h-10 w-auto sm:h-12"
            />
            <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
              <p className="text-base font-semibold leading-8 text-pink-600">
                404
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                This page does not exist
              </h1>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
              </p>
            </div>
            <div className="mx-auto mt-16 flow-root max-w-lg sm:mt-20">
              <h2 className="sr-only">Popular pages</h2>
              <ul
                role="list"
                className="-mt-6 divide-y divide-gray-900/5 border-b border-gray-900/5"
              >
                {links.map((link, linkIdx) => (
                  <li key={linkIdx} className="relative flex gap-x-6 py-6">
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
                      <link.icon
                        className="h-6 w-6 text-pink-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <h3 className="text-sm font-semibold leading-6 text-gray-900">
                        <a href={link.href}>
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.name}
                        </a>
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {link.description}
                      </p>
                    </div>
                    <div className="flex-none self-center">
                      <ChevronRightIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/"
                  className="text-sm font-semibold leading-6 text-pink-600"
                >
                  <span aria-hidden="true">&larr;</span> Back to home
                </Link>
              </div>
            </div>
          </main>
          <footer className="border-t border-gray-100 py-6 sm:py-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 sm:flex-row lg:px-8">
              <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                &copy; {new Date().getFullYear()} Digital Army, Inc. | Created
                by{" "}
                <Link
                  href="https://www.endlessbyte.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-600"
                >
                  Endlessbyte
                </Link>
                . All rights reserved.
              </p>
              <div className="hidden sm:block sm:h-7 sm:w-px sm:flex-none sm:bg-gray-200" />

              <div className="flex gap-x-4">
                {social.map((item, itemIdx) => (
                  <a
                    key={itemIdx}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
