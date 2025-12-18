import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Products } from "@/src/types/def";
import { SetStateAction } from "react";

interface DropdownResultProps {
  results: Products[];
  setSearchOpen: (value: SetStateAction<boolean>) => void;
  setQuery: (value: SetStateAction<string>) => void;
  setResults: (value: SetStateAction<Products[]>) => void;
}

const DropdownResult = ({
  results,
  setSearchOpen,
  setQuery,
  setResults
}: DropdownResultProps) => {
  return (
    <motion.ul
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute right-0 mt-2 w-[220px] bg-white shadow-lg rounded-xs border border-slate-200 z-30"
    >
      {results.map((product) => (
        <li key={product.id}>
          <Link
            href={product.url_page}
            className="flex items-center gap-2 p-2 hover:bg-slate-100 text-sm text-[#000E33]"
            onClick={() => {
              setSearchOpen(false);
              setQuery("");
              setResults([]);
            }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={100}
              height={100}
              className="object-cover rounded w-14 h-14"
            />
            <div className="grid">
              <span className="font-bold">{product.name}</span>
              <span className="text-xs font-light">{product.category}</span>
            </div>
          </Link>
        </li>
      ))}
    </motion.ul>
  );
};

export default DropdownResult;
