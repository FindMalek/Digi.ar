import React from "react";
import { Disclosure, Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { LinkIcon } from "@heroicons/react/20/solid";

import { Button } from "@/components/ui/Button";
import Link from "next/link";

type Props = {
  open: boolean;
  navs: { name: string; href: string }[];
};

export default function Animatepresence({ open, navs }: Props) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <>
          <Popover.Overlay
            static
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
          />
          <Popover.Panel
            static
            as={motion.div}
            initial={{ opacity: 0, y: -32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -32,
              transition: { duration: 0.2 },
            }}
            className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
          >
            {/* Current: "block border-l-4 border-pink-500 bg-pink-50 py-2 pl-3 pr-4 text-base font-medium text-pink-700 sm:pl-5 sm:pr-6" */}
            {navs.map((item, index) => (
              <Disclosure.Button
                key={index}
                as="a"
                href={item.href}
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
              >
                {item.name}
              </Disclosure.Button>
            ))}
            <div className="mt-8 flex flex-col gap-4">
              <Link href="/contact">
                <Button
                  type="button"
                  className="w-full md:w-auto relative inline-flex items-center gap-x-1.5 rounded-3xl bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                >
                  <LinkIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                  Contact
                </Button>
              </Link>
            </div>
          </Popover.Panel>
        </>
      )}
    </AnimatePresence>
  );
}
