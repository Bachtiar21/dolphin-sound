"use client";

import Image from "next/image";
import { iconMapFooter } from "../utils/footer-utils";
import { useFooter } from "../hooks/useFooter";
import Link from "next/link";

const AppFooter = () => {
  const {
    footerProducts,
    footerItems
  } = useFooter();

  return (
    <footer className="bg-slate-100 pt-20 pb-0">
      <div className="px-10 md:px-20 grid grid-cols-1 md:grid-cols-5 gap-12 mb-16 w-full">
        
        {/* Column 1 — Logo */}
        <div className="md:col-span-2 flex flex-col justify-between h-full">
          <Link href="/home" className="hover:opacity-50 transition-all duration-200 cursor-pointer">
            <Image
              src={footerItems.company.logo}
              alt="Dolphin Sound"
              width={150}
              height={50}
              className="mb-6"
            />
          </Link>

          <p className="text-[#000E33] leading-relaxed max-w-sm">
            {footerItems.company.description}
          </p>
        </div>

        {/* Column 2 — Contact */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold tracking-widest mb-4 text-[#000E33]">
            Contact Us
          </h3>

          <ul className="space-y-3 text-[#000E33]">
            {footerItems.contact.map((item, index) => {
              const Icon = iconMapFooter[item.icon];
              return (
                <li key={index} className="flex items-center gap-2 hover:underline cursor-pointer">
                  <Link className="flex gap-1 items-center" href={item.href} target="_blank">
                    <Icon size={18} /> {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3 — Dynamic Product List */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold tracking-widest mb-4 text-[#000E33]">
            Our Products
          </h3>

          <ul className="space-y-2 text-[#000E33]">
            {footerProducts.map((product, index) => (
              <li key={index} className="hover:underline cursor-pointer">
                <Link href={product.url_page} target="_blank">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Join Community */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold tracking-widest mb-4 text-[#000E33]">
            Join Community
          </h3>
          <Link href={footerItems.community.href} target="_blank" className="hover:opacity-50 transition-all duration-200 cursor-pointer">
            <Image
              src={footerItems.community.logo}
              alt="Join Community"
              width={150}
              height={50}
            />
          </Link>
        </div>
      </div>

      <div className="w-full bg-[#000E33] py-4">
        <p className="text-center text-white tracking-widest">
          Dolphin Sound Indonesia
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;