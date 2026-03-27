import Link from "next/link";
import Button from "@/components/ui/(buttons)/Button/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Link href="/campanias-de-seguridad">
        <Button label="Campañas de seguridad" />
      </Link>
    </div>
  );
}
