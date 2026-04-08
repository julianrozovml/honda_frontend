"use client";

import { useState } from "react";
import InputSearch from "@/components/ui/Forms/InputSearch/input-search";
import { useNavigation } from "@/components/layouts/NavigationProvider/navigation-provider";

export default function HeaderMobileSearch() {
  const { isSearchOpen, closeSearch } = useNavigation();
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(val: string) {
    console.log("Buscar:", val);
  }

  function handleClear() {
    setSearchValue("");
    closeSearch();
  }

  return (
    <div
      className={[
        "header__mobile-search",
        isSearchOpen ? "header__mobile-search--open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={!isSearchOpen}
    >
      <div className="header__mobile-search-inner">
        <InputSearch
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
          onClear={handleClear}
          placeholder="Busca productos, accesorios, repuestos, VIN"
        />
      </div>
    </div>
  );
}
