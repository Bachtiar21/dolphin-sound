import { ChevronLeft, ChevronRight } from 'lucide-react'

//region Button Video Section Props
interface ButtonVideoSectionProps {
  scroll: (direction: "left" | "right") => void;
}

const ButtonVideoSection = ({ scroll } : ButtonVideoSectionProps) => {
  //region Return View
  return (
    <>
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:scale-110 transition"
      >
        <ChevronRight size={28} />
      </button>
    </>
  )
}

export default ButtonVideoSection
