import { Products } from "@/src/types/def";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface CardProductReviewProps {
  item: Products,
  index: number,
}

const CardProductReview = ({
  item,
  index
} : CardProductReviewProps) => {
  return (
    <div
      key={index + (item.id)}
      className="relative group w-full aspect-16/12 rounded-xs overflow-hidden cursor-pointer shadow-sm"
    >
      {/* Background Image */}
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
      />

      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
        <h3 className="text-md md:text-2xl font-semibold tracking-[0.15em] text-slate-900 uppercase drop-shadow">
          {item.name}
        </h3>

        {/* Review Button */}
        <a
          href={item.video_review_link[0]}
          target="_blank"
          className="mt-3 px-4 md:px-6 py-2 bg-white/70 backdrop-blur-md text-xs md:text-base rounded-full text-slate-900 font-semibold tracking-widest flex items-center gap-2 shadow-sm hover:bg-slate-100 hover:scale-105 transition-all duration-300"
        >
          REVIEW <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default CardProductReview;
