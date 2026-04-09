import Image from "next/image";
import type { LogoHondaDarkProps } from "./logo-honda-dark.types";

export default function LogoHondaDark({
  width = 178,
  className,
}: LogoHondaDarkProps) {
  return (
    <Image
      src="/images/logo-honda-dark.svg"
      alt="Honda"
      width={width}
      height={28}
      className={className}
      priority
    />
  );
}
