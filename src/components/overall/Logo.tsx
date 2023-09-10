import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  theme: "light" | "dark";
  className: string;
  special?: boolean;
}

const Logo = ({ theme = "light", className, special }: LogoProps) => {
  const logoSrc =
    theme === "light" ? "/logos/logo-white.webp" : "/logos/logo-black.webp";
  if (special)
    return (
      <Link href="/">
        <Image
          src={logoSrc}
          alt="The 'D' in the Digital Army Logo."
          width={40}
          height={25}
          className={className}
        />
      </Link>
    );
  else
    return (
      <Link href="/" className={className}>
        <Image
          src={logoSrc}
          alt="The 'D' in the Digital Army Logo."
          width={40}
          height={25}
        />
      </Link>
    );
};

export default Logo;
