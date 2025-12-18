import MotionSection from "@/src/components/[global]/ui/custom/motion-action";
import { Mail, MapPin, Phone } from "lucide-react";

const FindUsSection = () => {
  return (
    <MotionSection>
      <section className="w-full px-10 md:px-30 bg-slate-50 text-[#000E33] flex flex-col items-center">
        {/* Title */}
        <div className="text-center py-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide uppercase mb-2">
            Find Us
          </h2>
          <p className="text-[#000E33] text-lg leading-relaxed">
            Discover our locations and get in touch with us. We are here to provide you with the best service and support for all your audio needs.
          </p>
        </div>

        {/* Map & Info Card */}
        <div className="relative w-full rounded-md overflow-hidden shadow-lg">
          {/* Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.635944499316!2d106.7083710750458!3d-6.185131093798428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8a1ba4e3c07%3A0xaf92fe464243ad30!2sJl.%2020%20Desember%20No.46%2C%20RT.6%2FRW.3%2C%20Pegadungan%2C%20Kec.%20Kalideres%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011830!5e0!3m2!1sen!2sid!4v1700000000000"
            className="w-full h-[420px] md:h-[480px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Info Card */}
          <div className="hidden md:absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg space-y-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-1" />
              <p className="text-sm md:text-base leading-relaxed">
                Jl. 20 Desember No.46, RT.6/RW.3, Pegadungan, Kec. Kalideres, Kota
                Jakarta Barat, Daerah Khusus Ibukota Jakarta 11830
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <p>081806793315</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <p>dolphindaw1@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </MotionSection>
  );
};

export default FindUsSection;
