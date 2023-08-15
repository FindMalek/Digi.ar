import React from "react";

import { Disclosure } from "@headlessui/react";
import LogoSection from "@/components/navigation/LogoSection";
import NavLinks from "@/components/navigation/NavLinks";
import ContactButton from "@/components/navigation/ContactButton";
import MobileNavLinks from "@/components/navigation/MobileNavLinks";

type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-white sticky top-0 z-40 border border-b-1"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <LogoSection />
          <NavLinks navs={navigation} />
          <MobileNavLinks navs={navigation} />
        </div>
      </div>
    </Disclosure>
  );
}
