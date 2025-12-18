import { useState } from "react";
import { getProductImages } from "../utils/detail-product-utils";

interface UseProductGalleryProps {
  basePath: string;
  cover: string;
}

export const useProductGallery = ({
  basePath,
  cover
} : UseProductGalleryProps) => {
  const images = [cover, ...getProductImages(basePath)];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];
  const maxDisplay = 4;
  const showMore = images.length > maxDisplay;
  const displayedImages = showMore ? images.slice(0, maxDisplay) : images;

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return {
    active,
    maxDisplay,
    showMore,
    displayedImages,
    nextImage,
    prevImage,
    activeIndex,
    setActiveIndex
  };
};
