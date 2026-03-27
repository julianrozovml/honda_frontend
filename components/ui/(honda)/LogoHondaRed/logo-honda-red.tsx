import Image from "next/image";
import logoSrc from "@/assets/images/logo-honda-red.svg";
import type { LogoHondaRedProps } from "./logo-honda-red.types";

export default function LogoHondaRed({
  width = 178,
  className,
}: LogoHondaRedProps) {
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
