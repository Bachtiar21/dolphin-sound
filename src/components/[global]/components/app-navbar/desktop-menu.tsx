import { Navbar, Products } from "@/src/types/def";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface DesktopMenuProps {
  onNavigate?: () => void;
  menuItems: Navbar[];
  setOpenDropdown: Dispatch<SetStateAction<boolean>>;
  openDropdown: boolean;
  products: Products[];
}

const DesktopMenuSection = ({
  onNavigate,
  menuItems,
  setOpenDropdown,
  openDropdown,
  products,
}: DesktopMenuProps) => {
  return (
    <nav className="hidden md:flex items-center gap-12 text-sm font-semibold tracking-[0.25em] uppercase text-[#000E33]">
      {menuItems.map((item, index) =>
        item.children !== true ? (
          <Link
            key={index + item.label}
            href={String(item.href)}
            onClick={onNavigate}
            className="relative inline-block hover:text-slate-900
              after:absolute after:left-0 after:-bottom-1 after:h-0.5
              after:w-0 after:bg-[#000E33] after:transition-all after:duration-300
              after:content-[''] hover:after:w-full"
          >
            {item.label}
          </Link>
        ) : (
          <div
            key={index + item.label}
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <button
              className="relative inline-flex items-center gap-1 hover:text-slate-900
                after:absolute after:left-0 after:-bottom-1 after:h-0.5
                after:w-0 after:bg-[#000E33] after:transition-all after:duration-300
                after:content-[''] hover:after:w-full"
            >
              PRODUCT
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  openDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-0 top-full mt-2 bg-white shadow-md border rounded-md py-2 w-56 z-50"
                >
                  {products.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/product?id_product=${prod.id}`}
                      className="block px-4 py-2 hover:bg-slate-100 text-sm tracking-normal"
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
    </nav>
  );
};

export default DesktopMenuSection;
