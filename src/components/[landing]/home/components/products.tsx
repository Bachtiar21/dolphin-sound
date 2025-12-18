import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHighlightProduct } from "../hooks/useHighlightProduct";
import CardProduct from "./products/card-product";
import MotionSection from "@/src/components/[global]/ui/custom/motion-action";
import FilterButton from "@/src/components/[global]/components/product/filter-button";
import { SetStateAction } from "react";

const ProductSection = () => {
  const { index, handleNext, handlePrev, slideWidth, newProducts } =
    useHighlightProduct();

  return (
    <MotionSection>
      <section className="px-10 md:px-20 md:pb-20 bg-slate-50">
        <div className="relative">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-semibold tracking-[0.15em] uppercase text-[#000E33] mb-6 text-center md:text-left">
              Our Product
            </h2>

            <Link href="/product">
              <button className="hidden md:block border border-[#000E33] bg-slate-50 px-3 py-1 text-sm cursor-pointer hover:scale-105 hover:bg-gray-100 transition-all duration-300">
                More Product
              </button>
            </Link>
          </div>

          <FilterButton selected={""} onHide={function (): void {
            throw new Error("Function not implemented.");
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } } setSelected={function (_: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          } }          
          />

          {/* Button Left */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md 
              hover:scale-110 transition md:-left-2.5"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Slider Wrapper */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * slideWidth}%)` }}
            >
              {newProducts.map((product, i) => (
                <div
                  key={product.id + "-" + i}
                  className="w-full lg:w-1/3 shrink-0 px-2 pb-6"
                >
                  <CardProduct product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Button Right */}
          <button
            onClick={handleNext}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-md 
              hover:scale-110 transition md:-right-2.5"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center md:hidden">
          <Link href="/product">
            <button
              className="border border-[#000E33] bg-slate-50 px-4 py-1 text-sm cursor-pointer 
                hover:scale-105 hover:bg-gray-100 transition-all duration-300"
            >
              More Product
            </button>
          </Link>
        </div>
      </section>
    </MotionSection>
  );
};

export default ProductSection;
