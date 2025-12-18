import { motion } from "framer-motion";
import Image from "next/image";
import { SetStateAction } from "react";

interface ThumbnailImageProps {
  displayedImages: string[];
  showMore: boolean;
  maxDisplay: number;
  activeIndex: number;
  setActiveIndex: (value: SetStateAction<number>) => void
}

const ThumbnailImage = ({
  displayedImages,
  showMore,
  maxDisplay,
  activeIndex,
  setActiveIndex
} : ThumbnailImageProps) => {
  return (
    <motion.div
      className="w-full mt-2 flex gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayedImages.map((src, index) => {
        const isLastAndMore = showMore && index === maxDisplay - 1;

        return (
          <motion.div
            key={src}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`relative w-full aspect-16/12 rounded-xs overflow-hidden border cursor-pointer ${
              index === activeIndex ? "opacity-60" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image src={src} alt="thumb" fill className="object-cover" />

            {isLastAndMore && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white text-xl font-bold">+ MORE</span>
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ThumbnailImage;
