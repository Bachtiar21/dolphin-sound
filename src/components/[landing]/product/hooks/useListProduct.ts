import { useEffect, useState } from "react";
import products from "@/data/product.json";
import { Products } from "@/src/types/def";
import { useRouter, useSearchParams } from "next/navigation";

interface UseListProductProps {
  initialProductId: number | null;
}

export const useListProduct = ({ initialProductId }: UseListProductProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [selected, setSelected] = useState<string>("All Category");
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const [productId, setProductId] = useState<number | null>(initialProductId);

  useEffect(() => {
    setProductId(initialProductId);
  }, [initialProductId]);

  const filteredProducts: Products[] =
    selected === "All Category"
      ? products
      : products.filter((p) => p.category === selected);

  const handleClickProduct = (item: Products): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setProductId(item.id);

    const params = new URLSearchParams(searchParams.toString());
    params.set("id_product", String(item.id));

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleHideProduct = () => {
    setProductId(null);

    const params = new URLSearchParams(searchParams.toString());
    params.delete("id_product");

    router.push(`?${params.toString()}`, { scroll: false });
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
    handleHideProduct
  };
};
