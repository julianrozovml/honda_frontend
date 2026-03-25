import Image from "next/image";
import type { LogoHondaDarkProps } from "./logo-honda-dark.types";

export default function LogoHondaDark({
  width = 178,
  height = 27,
  className,
}: LogoHondaDarkProps) {
  return (
    <Image
      src="/images/logo-honda-dark.svg"
      alt="Honda"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
