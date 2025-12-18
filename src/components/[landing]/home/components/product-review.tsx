import videoReviews from "@/data/product.json";
import CardProductReview from "./product-review/card-product-review";
import MotionSection from "@/src/components/[global]/ui/custom/motion-action";

const ProductReviewSection = () => {
  return (
    <MotionSection>
      <section className="px-8 md:px-20 py-24 bg-slate-50">
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-[0.15em] uppercase text-slate-900 mb-12">
          Video Review Product
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {videoReviews.slice(0, 6).map((item, index) => (
            <CardProductReview key={item.id} item={item} index={index} />
          ))}
        </div>
      </section>
    </MotionSection>
  );
};

export default ProductReviewSection;
