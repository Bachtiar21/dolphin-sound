import ProductSection from "@/src/components/[landing]/product";
import { Suspense } from "react";

export default function ProductPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductSection/>
    </Suspense>
  )
}