import Logo from "@/components/overall/Logo";

export default function LogoSection() {
  return (
    <div className="flex items-center z-40">
      <Logo className="block -mt-16 -ml-10 h-7 w-auto lg:hidden" />
      <Logo className="hidden -mt-16 -ml-10 h-8 w-auto lg:block" />
    </div>
  );
}
