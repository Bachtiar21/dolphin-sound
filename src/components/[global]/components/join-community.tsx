import Image from "next/image";
import MotionSection from "../ui/custom/motion-action";

const JoinCommunitySection = () => {
  return (
    <MotionSection>
      <section className="relative w-full h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/community/join_community_banner.png"
          alt="Community Background"
          fill
          className="object-cover"
          priority
        />

        {/* Top White Gradient */}
        <div className="absolute top-0 left-0 w-full h-7/12 bg-linear-to-b from-slate-50 via-white/70 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-2">
          <h2 className="text-2xl md:text-4xl font-bold tracking-[0.15em] uppercase drop-shadow-lg">
            JOIN COMMUNITY
          </h2>

          <p className="mt-4 max-w-3xl text-md md:text-lg tracking-wide font-light text-white/90">
            Join our community and experience closer, more inspiring, and 
            higher-quality collaboration.
          </p>

          <button className="mt-6 text-xl px-10 py-3 bg-white/80 hover:opacity-80 hover:scale-105 text-black font-semibold rounded-xs tracking-[0.15em] shadow-md transition-all duration-300 cursor-pointer">
            LEARN MORE
          </button>
        </div>

      </section>
    </MotionSection>
  );
};

export default JoinCommunitySection;
