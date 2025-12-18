"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import menuItems from "../../../../data/page/navbar-item.json";
import products from "../../../../data/product.json";
import MobileMenuSection from "./app-navbar/mobile-menu";
import DesktopMenuSection from "./app-navbar/desktop-menu";
import { useNavbar } from "../hooks/useNavbar";
import SearchProductSection from "./app-navbar/search-product";

const AppNavbar = () => {
  const {
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
  } = useNavbar();

  return (
    <header className="sticky top-0 z-50 bg-slate-50/70 backdrop-blur border-b border-slate-200">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo */}
        <Link href="/home">
          <Image
            src="/dolphin-sound/images/assets/logo.png"
            alt="Logo Dolphin Sound"
            width={90}
            height={90}
            className="hover:opacity-50 cursor-pointer transition-all duration-300"
          />
        </Link>
        {/* Desktop Menu */}
        <DesktopMenuSection
          onNavigate={() => setOpenDropdown(false)}
          menuItems={menuItems}
          setOpenDropdown={setOpenDropdown}
          openDropdown={openDropdown}
          products={products}
        />

        {/* Desktop Search Button */}
        <SearchProductSection
          setSearchOpen={setSearchOpen}
          searchOpen={searchOpen}
          setQuery={setQuery}
          setResults={setResults}
          query={query}
          handleSearch={handleSearch}
          results={results}
        />

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileMenuSection
        onNavigate={() => setMobileOpen(false)}
        mobileOpen={mobileOpen}
        menuItems={menuItems}
        products={products}
        handleSearchMobile={handleSearchMobile}
        query={query}
        setQuery={setQuery}
        results={results}
        setResults={setResults}
      />
    </header>
  );
};

export default AppNavbar;
