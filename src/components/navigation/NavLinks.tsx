import Link from "next/link";

type NavLinkProps = {
  href: string;
  text: string;
};

{
  /* Current: "border-pink-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */
}
function NavLink({ href, text }: NavLinkProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <Link
      href={href}
      onClick={scrollToTop}
      className="inline-flex items-center border-b-2 border-transparent px-1 pt-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
    >
      {text}
    </Link>
  );
}

export default function NavLinks({ navs }: any) {
  return (
    <div className="hidden md:ml-6 md:flex md:space-x-8">
      {navs.map((item: any, index: number) => (
        <NavLink key={index} text={item.name} href={item.href} />
      ))}
    </div>
  );
}
