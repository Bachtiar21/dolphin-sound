import {
  Card,
  CardDescription,
  CardTitle,
} from "@/src/components/[global]/ui/card";
import { Products } from "@/src/types/def";
import Image from "next/image";
import Link from "next/link";

interface CardProductProps {
  product: Products;
}

const CardProduct = ({ product }: CardProductProps) => {
  return (
    <Link href={product.url_page}>
      <Card className="relative border-none rounded-xs shadow-md bg-transparent overflow-visible cursor-pointer">
        {/* Image */}
        <div className="relative aspect-16/14 w-full overflow-hidden rounded-xs">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-110 transition-all duration-400"
          />

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-slate-50/90 z-10"></div>
        </div>

        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 w-full z-20 p-4">
          <CardTitle className="text-xl font-semibold tracking-[0.18em] uppercase text-[#000E33]">
            {product.name}
          </CardTitle>

          <CardDescription className="text-md leading-relaxed text-slate-700">
            {product.what_in_the_box.join(", ")}
          </CardDescription>
        </div>

        {/* Badge */}
        <div className="absolute right-3 top-3 z-30">
          <span className="rounded-xs bg-[#000E33] px-3 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase">
            {product.category}
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default CardProduct;
