import Accordion from "@/src/components/[global]/ui/custom/accordion";
import { Products } from "@/src/types/def";
import { motion } from "framer-motion";
import {
  containerVariants,
  itemVariants,
} from "../../utils/product-information-utils";

interface ProductInformationProps {
  product: Products;
}

const ProductInformation = ({ product }: ProductInformationProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col"
    >
      {/* Title */}
      <motion.h1
        variants={itemVariants}
        className="text-3xl font-bold tracking-wide"
      >
        {product.name}
      </motion.h1>

      {/* Category */}
      <motion.p variants={itemVariants} className="text-lg text-[#000E33]">
        Category : {product.category}
      </motion.p>

      {/* Description */}
      {/* <motion.p variants={itemVariants} className="text-lg text-[#000E33]">
        {product.description}
      </motion.p> */}

      {/* PRICE */}
      <motion.p
        variants={itemVariants}
        className="mt-4 text-2xl text-[#000E33]"
      >
        IDR {product.price.toLocaleString("id-ID")},-
      </motion.p>

      {/* Accordions */}
      <motion.div variants={itemVariants} className="mt-8 space-y-4">
        <Accordion title="What's In The Box?" status={true}>
          <ul className="list-disc ml-5 text-[#000E33] text-lg">
            {product.what_in_the_box?.slice(0, 2).map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </Accordion>

        <Accordion title="Specifications" status={false}>
          <ul className="list-disc ml-5 text-[#000E33] text-lg">
            {product.spesification?.map((s, idx) => (
              <li key={idx}>{s}</li>
            ))}
          </ul>
        </Accordion>

        <Accordion title="Product Features" status={true}>
          <ul className="list-disc ml-5 text-[#000E33] text-lg">
            {product.product_features?.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </Accordion>
      </motion.div>
    </motion.div>
  );
};

export default ProductInformation;
