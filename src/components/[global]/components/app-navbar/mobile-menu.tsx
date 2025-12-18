import { Navbar, Products } from "@/src/types/def";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface MobileMenuProps {
  onNavigate: () => void;
  mobileOpen: boolean;
  menuItems: Navbar[];
  products: Products[];
  handleSearchMobile: (value: string) => void;
  query: string;
  setQuery: (value: string) => void;
  results: Products[];
  setResults: (results: Products[]) => void;
}

const MobileMenuSection = ({
  onNavigate,
  mobileOpen,
  menuItems,
  products,
  handleSearchMobile,
  query,
  setQuery,
  results,
  setResults,
}: MobileMenuProps) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="md:hidden px-6 pb-6 absolute bg-slate-50 w-full shadow-md z-40"
        >
          {!searchOpen && (
            <>
              {menuItems.map((item) =>
                item.label !== "PRODUCT" ? (
                  <Link
                    key={item.label}
                    href={String(item.href)}
                    onClick={onNavigate}
                    className="block py-2 text-[#000E33] font-semibold tracking-widest"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div key={item.label}>
                    {/* PRODUCT HEADER */}
                    <button
                      onClick={() => setProductOpen((prev) => !prev)}
                      className="flex items-center justify-between w-full text-[#000E33] uppercase font-semibold tracking-widest"
                    >
                      Product
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          productOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* PRODUCT LIST */}
                    <AnimatePresence>
                      {productOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="ml-4 mt-3 space-y-2 overflow-hidden"
                        >
                          {products.map((prod) => (
                            <Link
                              key={prod.id}
                              href={`/product?id_product=${prod.id}`}
                              className="block text-slate-700 tracking-wide"
                              onClick={() => {
                                setProductOpen(false);
                                onNavigate();
                              }}
                            >
                              {prod.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}

              {/* SEARCH BUTTON */}
              <button
                className="mt-6 flex items-center gap-2 text-[#000E33] font-semibold tracking-widest"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={18} />
                Search
              </button>
            </>
          )}

          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-4"
            >
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setQuery("");
                    setResults([]);
                  }}
                >
                  <X size={18} className="text-[#000E33]" />
                </button>

                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full border border-slate-300 rounded-full px-3 py-2 text-sm bg-slate-50"
                  value={query}
                  onChange={(e) => handleSearchMobile(e.target.value)}
                />
              </div>

              {/* SEARCH RESULT */}
              {results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mt-4 bg-white border border-slate-300 rounded-md shadow-md"
                >
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={`/product?id_product=${result.id}`}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      onClick={() => {
                        setSearchOpen(false);
                        setQuery("");
                        setResults([]);
                      }}
                    >
                      {result.name}
                    </Link>
                  ))}
                </motion.div>
              )}

              {results.length === 0 && query.trim() !== "" && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mt-4 text-sm text-slate-500"
                >
                  No results found.
                </motion.p>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuSection;
