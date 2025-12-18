import { Button } from "../../ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { SetStateAction } from "react";
import { Products } from "@/src/types/def";
import DropdownResult from "./search-product/dropdown-result";

interface SearchProductProps {
  setSearchOpen: (value: SetStateAction<boolean>) => void;
  searchOpen: boolean;
  setQuery: (value: SetStateAction<string>) => void;
  setResults: (value: SetStateAction<Products[]>) => void;
  query: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleSearch: (value: any) => void;
  results: Products[];
}

const SearchProductSection = ({
  setSearchOpen,
  searchOpen,
  setQuery,
  setResults,
  query,
  handleSearch,
  results
} : SearchProductProps) => {
  return (
    <div className="relative hidden md:flex items-center">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          setSearchOpen(!searchOpen);
          setQuery("");
          setResults([]);
        }}
        className="text-[#000E33] rounded-full border border-slate-300 hover:bg-slate-100 z-20"
      >
        <Search className="h-4 w-4" />
      </Button>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute right-10 top-1/2 -translate-y-1/2 z-10"
          >
            <input
              type="text"
              placeholder="Search products..."
              className="w-[200px] border border-slate-300 rounded-full px-3 py-2 text-xs bg-slate-50"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
            />

            {/* Dropdown results */}
            {results.length > 0 && (
              <DropdownResult
                results={results}
                setSearchOpen={setSearchOpen}
                setQuery={setQuery}
                setResults={setResults}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchProductSection;
