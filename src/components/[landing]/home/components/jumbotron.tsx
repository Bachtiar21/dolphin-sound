import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useJumbotron } from "../hooks/useJumbotron";
import MotionSection from "@/src/components/[global]/ui/custom/motion-action";

const JumbotronSection = () => {
  const { handleNext, handlePrev, jumbotron, index } = useJumbotron();

  return (
    <MotionSection>
      {/* Tampilan Desktop */}
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full aspect-16/10 md:aspect-16/6">
          {/* Slider Wrapper */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {jumbotron.map((item) => (
              <div key={item.id} className="relative min-w-full h-full">
                <Image
                  src={item.link_image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />

                {/* Gradient Bawah Overlay */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-slate-50"></div>
              </div>
            ))}
          </div>

          {/* Button Kiri */}
          <button
            onClick={handlePrev}
            className="absolute text-gray-600 left-8 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-2 hover:scale-110 transition-all hover:opacity-70"
          >
            <ChevronLeft size={25} />
          </button>

          {/* Button Kanan */}
          <button
            onClick={handleNext}
            className="absolute text-gray-600 right-8 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white p-2 hover:scale-110 transition-all hover:opacity-70"
          >
            <ChevronRight size={25} />
          </button>
        </div>

        {/* Dot Indikator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {jumbotron.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full transition-all ${
                i === index ? "bg-[#000E33] w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Tampilan Mobile */}
      {/* <section className="relative w-full overflow-hidden block md:hidden bg-linear-to-b from-gray-200 to-slate-50">
        <div className="px-8 pt-16">
          <h2 className="text-4xl font-bold text-[#000E33]">
            Professional Audio Solutions for Your Needs
          </h2>
          <p className="text-gray-700 mt-4 text-xl leading-relaxed">
          Dolphin Sound delivers the latest audio technology to support your business success. Discover high-quality products designed to provide the best sound experience. Our innovative solutions are tailored to meet the needs of professionals and businesses alike, ensuring exceptional performance and reliability. Whether you&apos;re setting up a conference room, a recording studio, or a large-scale event, Dolphin Sound is here to elevate your audio experience to the next level.
          </p>
        </div>
      </section> */}
    </MotionSection>
  );
};

export default JumbotronSection;