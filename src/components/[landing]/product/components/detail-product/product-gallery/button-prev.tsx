import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface ButtonPrevImageProps {
  prevImage: () => void;
  nextImage: () => void;
}

const ButtonPrevImage = ({
  prevImage,
  nextImage
} : ButtonPrevImageProps) => {
  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        onClick={prevImage}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md z-10"
      >
        <ChevronLeftIcon />
      </motion.button>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        onClick={nextImage}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-md z-10"
      >
        <ChevronRightIcon />
      </motion.button>
    </>
  );
};

export default ButtonPrevImage;
