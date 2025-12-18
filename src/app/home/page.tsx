import HomeSection from "@/src/components/[landing]/home";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeSection/>
    </Suspense>
  );
};