import Image from "next/image";
import { Products } from "@/src/types/def";
import { motion } from "framer-motion";

interface CardProductProps {
  item: Products;
  handleClickProduct: (item: Products) => void
}

const CardProductList = ({ item, handleClickProduct }: CardProductProps) => {
  return (
    <motion.div
      onClick={() => handleClickProduct(item)}
      layout
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{
        duration: 0.22,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="block w-full transition-all duration-300 hover:scale-105 hover:border hover:shadow-md cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full aspect-14/11 overflow-hidden rounded-xs">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <div className="px-4 py-1">
        <h3 className="mt-3 text-lg font-semibold tracking-[0.15em] text-[#000E33] uppercase">
          {item.name}
        </h3>

        {item.price && (
          <p className="text-[#000E33]">IDR {item.price.toLocaleString()}</p>
        )}

        <p className="text-sm text-slate-700 mt-1 leading-relaxed">
          {item.what_in_the_box.join(", ")}
        </p>
      </div>
    </motion.div>
  );
};

export default CardProductList;