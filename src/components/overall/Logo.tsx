import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className: string;
  special?: boolean;
}

const Logo = ({ className, special }: LogoProps) => {
  if (special)
    return (
      <Link href="/">
        <Image
          src="/logos/logo-black.webp"
          alt="The 'D' in the Digital Army Logo."
          width={200}
          height={100}
          className={className}
        />
      </Link>
    );
  else
    return (
      <Link href="/" className={className}>
        <Image
          src="/logos/Digi-ar.svg"
          alt="The 'Digi.ar' Logo for the Digital Army."
          width={200}
          height={100}
        />
      </Link>
    );
};

export default Logo;
