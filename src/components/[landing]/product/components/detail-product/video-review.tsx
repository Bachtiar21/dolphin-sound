import { useVideoReview } from "../../hooks/useVideoReview";
import ScrollAreaSection from "./video-review/scroll-area";
import ButtonVideoSection from "./video-review/button-video";

//region Video Review Section Props
interface VideoReviewProps {
  videos: string[];
}

export default function VideoReviewSection({ videos }: VideoReviewProps) {
  //region Hook Video Review
  const {
    scrollRef,
    extractYouTubeId,
    scroll,
  } = useVideoReview();

  //region Return View
  return (
    <div className="mt-16 relative">
      <h2 className="text-2xl font-bold mb-6">Video Review</h2>

      {/* Left Button */}
      <ButtonVideoSection
        scroll={scroll}
      />

      {/* Scroll Area */}
      <ScrollAreaSection
        scrollRef={scrollRef}
        videos={videos}
        extractYouTubeId={extractYouTubeId}
      />
    </div>
  );
}
