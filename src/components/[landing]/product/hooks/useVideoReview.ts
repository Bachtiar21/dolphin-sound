import { useRef } from "react";

export const useVideoReview = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  //region Extract YouTube ID Function
  const extractYouTubeId = (url: string) => {
    try {
      if (url.includes("shorts/")) {
        return url.split("shorts/")[1];
      }
      const urlObj = new URL(url);
      return urlObj.searchParams.get("v");
    } catch {
      return null;
    }
  };

  //region Scrolling Function
  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  //region Return Hook
  return {
    scrollRef,
    extractYouTubeId,
    scroll,
  };
};
