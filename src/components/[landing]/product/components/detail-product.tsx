import allProducts from "@/data/product.json";
import ProductGallery from "./detail-product/product-gallery";
import ProductInformation from "./detail-product/product-information";
import { motion } from "framer-motion";
import VideoReviewSection from "./detail-product/video-review";

interface ProductDetailProps {
  productId: number;
};

export default function ProductDetailSection({ productId }: ProductDetailProps) {
  const product = allProducts.find((p) => p.id === productId);

  if (!product) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="py-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <ProductGallery
          basePath={product.url_product_images}
          cover={product.image}
        />

        {/* Product Information */}
        <ProductInformation product={product} />
      </div>

      {/* Video Review */}
      <VideoReviewSection videos={product.video_review_link} />
    </motion.section>
  );
}
