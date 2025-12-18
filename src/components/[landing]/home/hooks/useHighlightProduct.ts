import { useState, useEffect } from "react";
import newProducts from "@/data/product.json";

export const useHighlightProduct = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  const newItems = newProducts.filter((p) => p.badge === "NEW");
  const maxIndex = Math.ceil(newItems.length / itemsPerSlide);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? maxIndex - 1 : prev - 1));

  const handleNext = () =>
    setIndex((prev) => (prev === maxIndex - 1 ? 0 : prev + 1));

  const slideWidth = 100 / itemsPerSlide;

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  return {
    index,
    handleNext,
    handlePrev,
    slideWidth,
    newProducts: newItems,
  };
};