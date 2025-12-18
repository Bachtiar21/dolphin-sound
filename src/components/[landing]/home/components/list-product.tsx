import CardProductList from "./list-product/card-product";
import { AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import FilterButton from "@/src/components/[global]/components/product/filter-button";
import { useListProduct } from "../hooks/useListProduct";
import Link from "next/link";

const ListProductSection = () => {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id_product"));

  const {
    selected,
    setSelected,
    setProductId,
    filteredProducts,
    visibleCount,
    handleClickProduct,
  } = useListProduct(
    id ? { initialProductId: id } : { initialProductId: null }
  );

  return (
    <section className="relative px-6 md:px-20 py-8 bg-slate-50">
      <h2 className="text-4xl font-semibold tracking-[0.15em] uppercase text-[#000E33] mb-6 text-center md:text-left">
        Our Product
      </h2>
      {/* Filter Buttons */}
      <FilterButton
        selected={selected}
        onHide={() => setProductId(null)}
        setSelected={setSelected}
      />

      {/* Product */}
      <div className="relative mt-8">
        {/* Grid Produk */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProducts.slice(0, visibleCount).map((item) => (
                <CardProductList
                  key={item.id}
                  item={item}
                  handleClickProduct={handleClickProduct}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-40">
            Produk tidak ditemukan untuk kategori <strong>{selected}</strong>.
          </div>
        )}

        {/* Overlay */}
        {visibleCount < filteredProducts.length && (
          <div className="absolute bottom-0 left-0 w-full h-80 bg-linear-to-b from-transparent to-slate-50 pointer-events-none"></div>
        )}
      </div>

      {/* See More/Hide Button */}
      <div className="flex items-center justify-center mt-8">
        <Link href="/product" target="_blank">
          <button className="px-4 py-2 bg-slate-50 text-[#000E33] rounded-xs border border-[#000E33] hover:bg-gray-100 hover:scale-105 transition cursor-pointer duration-300">
            More Product
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ListProductSection;
