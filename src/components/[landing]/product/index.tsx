"use client";

import JoinCommunitySection from "../../[global]/components/join-community";
import ListProductSection from "./components/list-product";

export default function ProductSection() {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center">
      {/* FRAME UTAMA */}
      <div className="w-full space-y-24 bg-slate-50 overflow-hidden">

        {/* LIST PRODUCT */}
        <ListProductSection/>

        {/* JOIN COMMUNITY */}
        <JoinCommunitySection/>
      </div>
    </div>
  );
}