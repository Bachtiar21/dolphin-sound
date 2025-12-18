"use client";

import JoinCommunitySection from "../../[global]/components/join-community";
import AboutUsInformation from "./components/about-us";
import FindUsSection from "./components/find-us";

export default function AboutUsSection() {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center">
      {/* FRAME UTAMA */}
      <div className="w-full space-y-24 bg-slate-50 overflow-hidden">

        {/* ABOUT US INFORMATION */}
        <AboutUsInformation/>

        {/* FIND US */}
        <FindUsSection/>

        {/* JOIN COMMUNITY */}
        <JoinCommunitySection/>

      </div>
    </div>
  );
}