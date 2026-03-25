import Image from "next/image";
import type { LogoHondaRedProps } from "./logo-honda-red.types";

export default function LogoHondaRed({
  width = 178,
  height = 27,
  className,
}: LogoHondaRedProps) {
  return (
    <Image
      src="/images/logo-honda-red.svg"
      alt="Honda"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
