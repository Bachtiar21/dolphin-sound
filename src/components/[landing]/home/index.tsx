"use client";

import JoinCommunitySection from "../../[global]/components/join-community";
import ProductReviewSection from "./components/product-review";
import JumbotronSection from "./components/jumbotron";
import ListProductSection from "./components/list-product";

export default function HomeSection() {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center">
      {/* FRAME UTAMA */}
      <div className="w-full space-y-24 bg-slate-50 overflow-hidden">

        {/* HERO SECTION */}
        <JumbotronSection/>

        {/* PRODUCT SECTION */}
        {/* <ProductSection/> */}
        <ListProductSection/>

        {/* JOIN COMMUNITY */}
        <JoinCommunitySection/>

        {/* PRODUCT REVIEW */}
        <ProductReviewSection/>
      </div>
    </div>
  );
}