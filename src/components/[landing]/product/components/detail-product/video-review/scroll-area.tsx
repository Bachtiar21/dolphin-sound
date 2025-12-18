import { RefObject } from "react";

//region Scroll Area Props
interface ScrollAreaProps {
  scrollRef: RefObject<HTMLDivElement | null>
  videos: string[];
  extractYouTubeId: (url: string) => string | null;
}

const ScrollAreaSection = ({ scrollRef, videos, extractYouTubeId } : ScrollAreaProps) => {

  //region Return View
  return (
    <div
      ref={scrollRef}
      className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-1"
    >
      {videos.map((link, index) => {
        const id = extractYouTubeId(link);
        if (!id) return null;

        return (
          <div
            key={index}
            className="min-w-[380px] max-w-[380px] rounded-lg overflow-hidden shadow-md shrink-0"
          >
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${id}`}
              allowFullScreen
            />
          </div>
        );
      })}
    </div>
  );
};

export default ScrollAreaSection;
