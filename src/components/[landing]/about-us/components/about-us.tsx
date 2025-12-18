import Image from "next/image";
import aboutData from "@/data/page/about-us.json";
import MotionSection from "@/src/components/[global]/ui/custom/motion-action";

const AboutUsInformation = () => {
  return (
    <MotionSection>
      {/* Desktop View */}
      <section className="hidden md:block w-full bg-slate-50 text-[#000E33]">
        {aboutData.map((section, index) => {
          const isImageLeft = section.imagePosition === "left";
          return (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center"
            >
              {/* Image Left */}
              {isImageLeft && (
                <div className="w-full h-80 md:h-[450px] relative overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
              )}

              {/* Text Content */}
              <div className={`px-6 md:px-16 py-12`}>
                <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4 text-[#000E33]">
                  {section.title}
                </h2>

                <p className="text-lg leading-relaxed text-[#000E33]">
                  {section.description}
                </p>
              </div>

              {/* Image Right */}
              {!isImageLeft && (
                <div className="w-full h-80 md:h-[450px] relative overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover hover:scale-105 transition-all duration-300"
                  />
                </div>
              )}
            </div>
          );
        })}
      </section>
      {/* Mobile View */}
      <section className="block md:hidden w-full bg-slate-50 text-[#000E33]">
        {aboutData.map((section, index) => {
          const isImageLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                isImageLeft ? "md:flex-row-reverse" : ""
              } items-center`}
            >
              {/* Image */}
              <div className="w-full h-80 md:h-[450px] relative overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover hover:scale-105 transition-all duration-300"
                />
              </div>

              {/* Text Content */}
              <div className="px-6 md:px-16 py-6 md:py-12">
                <h2 className="text-2xl md:text-4xl font-bold tracking-wide mb-4 text-[#000E33]">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-[#000E33]">
                  {section.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </MotionSection>
  );
};

export default AboutUsInformation;
