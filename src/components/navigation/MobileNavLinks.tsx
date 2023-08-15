import {Popover } from "@headlessui/react";
import { ChevronUpIcon, MenuIcon } from "@/components/overall/Icons";

import ContactButton from "@/components/navigation/ContactButton";
import Animatepresence from "@/components/navigation/Animatepresence";

type Props = {
  navs: {
    name: string;
    href: string;
  }[];
};

export default function MobileNavLinks({ navs }: Props) {
  return (
    <div className="flex items-center gap-6">
      <Popover className="md:hidden">
        {({ open }) => (
          <>
            <Popover.Button
              className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
              aria-label="Toggle site navigation"
            >
              {({ open }) =>
                open ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )
              }
            </Popover.Button>
            <Animatepresence open={open} navs={navs} />
          </>
        )}
      </Popover>
      <ContactButton className="xs:hidden sm:hidden md:block lg:block" />
    </div>
  );
}