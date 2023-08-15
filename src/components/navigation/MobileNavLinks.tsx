import { Disclosure } from "@headlessui/react";

type Props = {
  navs: {
    name: string;
    href: string;
  }[];
};

export default function MobileNavLinks({ navs }: Props) {
  return (
    <Disclosure.Panel className="md:hidden bg-slate-100">
      <div className="space-y-1 pb-3 pt-2">
        {/* Current: "block border-l-4 border-pink-500 bg-pink-50 py-2 pl-3 pr-4 text-base font-medium text-pink-700 sm:pl-5 sm:pr-6" */}

        {navs.map((item, index) => (
          <Disclosure.Button
            key={index} // Add a unique key
            as="a"
            href={item.href}
            className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
          >
            {item.name}
          </Disclosure.Button>
        ))}

        <Disclosure.Button
          as="a"
          href="/contact"
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
        >
          Contact
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
}
