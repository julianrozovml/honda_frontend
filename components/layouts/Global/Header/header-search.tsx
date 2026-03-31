"use client";

import { useState } from "react";
import InputSearch from "@/components/ui/Forms/InputSearch/input-search";

export default function HeaderSearch() {
  const [value, setValue] = useState("");

  return (
    <InputSearch
      value={value}
      onChange={setValue}
      onSearch={(val) => console.log("Buscar:", val)}
      onClear={() => setValue("")}
      placeholder="Busca productos, accesorios, repuestos, VIN"
      className="header__search-wrapper"
    />
  );
}
