import { Products } from "@/src/types/def";
import products from "../../../../data/product.json";
import { useState } from "react";

export const useNavbar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Products[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (value: any) => {
    setQuery(value);
    if (!value) {
      setResults([]);
      return;
    }
    const filtered = products.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase()) ||
        item.what_in_the_box.join(", ").toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered.slice(0, 5));
  };

  const handleSearchMobile = (value: string) => {
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
    } else {
      const filteredResults = products.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  return {
    query,
    setQuery,
    results,
    setResults,
    mobileOpen,
    setMobileOpen,
    searchOpen,
    setSearchOpen,
    openDropdown,
    setOpenDropdown,
    handleSearch,
    handleSearchMobile
  };
};
