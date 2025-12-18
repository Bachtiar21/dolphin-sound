import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ButtonPrevImage from "./product-gallery/button-prev";
import ThumbnailImage from "./product-gallery/thumbnail-image";
import { useProductGallery } from "../../hooks/useProductGalllery";

interface ProductGalleryProps {
  basePath: string;
  cover: string;
}

const ProductGallery = ({ basePath, cover }: ProductGalleryProps) => {
  const {
    active,
    maxDisplay,
    showMore,
    displayedImages,
    nextImage,
    prevImage,
    activeIndex,
    setActiveIndex
  } = useProductGallery({ basePath, cover })

  return (
    <div className="w-full">
      
      {/* Main Image */}
      <div className="w-full aspect-16/14 relative rounded-xs overflow-hidden">

        {/* Buttons */}
        <ButtonPrevImage
          prevImage={prevImage}
          nextImage={nextImage}
        />

        {/* Animated Active Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image src={active} alt="product-image" fill className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <ThumbnailImage
        displayedImages={displayedImages}
        showMore={showMore}
        maxDisplay={maxDisplay}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default ProductGallery;
