import Image from "next/image";
import logoSrc from "@/assets/images/logo-honda-dark.svg";
import type { LogoHondaDarkProps } from "./logo-honda-dark.types";

export default function LogoHondaDark({
  width = 178,
  className,
}: LogoHondaDarkProps) {
  return (
    <Image
      src={logoSrc}
      alt="Honda"
      width={width}
      className={className}
      priority
    />
  );
}
