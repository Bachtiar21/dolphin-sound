import { useState } from "react";
import products from "@/data/product.json";
import { Products } from "@/src/types/def";

interface UseListProductProps {
  initialProductId: number | null;
}

export const useListProduct = ({ initialProductId }: UseListProductProps) => {
  const [selected, setSelected] = useState<string>("All Category");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [productId, setProductId] = useState<number | null>(initialProductId);

  const filteredProducts: Products[] =
    selected === "All Category"
      ? products
      : products.filter((p) => p.category === selected);

  const handleClickProduct = (item: Products): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setProductId(item.id);
  };

  return {
    selected,
    setSelected,
    visibleCount,
    setVisibleCount,
    productId,
    setProductId,
    filteredProducts,
    handleClickProduct,
  };
};