"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface Props {
  title: string;
  children: React.ReactNode;
  status: boolean;
}

const Accordion = ({ title, children, status }: Props) => {
  const [open, setOpen] = useState(status);

  return (
    <div className="border-b py-3 cursor-pointer">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full items-center"
      >
        <span className="font-semibold text-xl">{title}</span>
        <div className="rounded-full hover:bg-gray-200 p-2 transition-all duration-200 cursor-pointer">
          <ChevronDown
            size={20}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
          </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] mt-3" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
