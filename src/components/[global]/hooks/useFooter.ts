import footerData from "@/data/page/footer-item.json";
import products from "@/data/product.json";

export const useFooter = () => {
  const footerProducts = Array.from(
    new Map(products.map((item) => [item.name, item])).values());
  const footerItems = footerData;
  
  return {
    footerProducts,
    footerItems
  };
};
