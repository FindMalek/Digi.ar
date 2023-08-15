import Logo from "@/components/overall/Logo";

export default function LogoSection() {
  return (
    <div className="flex flex-shrink-0 items-center">
      <div className="flex items-center">
        <Logo className="block h-8 w-auto lg:hidden" theme="dark" />
        <Logo className="hidden h-8 w-auto lg:block" theme="dark" />
      </div>
      <p className="text-zinc-700 xs:text-base xs:pl-3 md:text-sm md:pl-0 font-bold ml-2 mt-2">
        Digital Army
      </p>
    </div>
  );
}
