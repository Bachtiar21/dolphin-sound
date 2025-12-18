import { ChevronUpIcon } from "lucide-react";

interface HiddenButtonProps {
  onHide: () => void;
}

const HiddenButton = ({
  onHide
} : HiddenButtonProps) => {
  return (
    <div className="flex items-center justify-center gap-4 w-full my-8">
      {/* Garis kiri */}
      <div className="flex-1 h-px bg-slate-300"></div>

      {/* Button Hide */}
      <button 
        onClick={onHide}
        className="flex items-center gap-2 text-[#000E33] tracking-widest text-sm font-semibold hover:opacity-50 cursor-pointer hover:scale-105 transition-all duration-300"
      >
        <ChevronUpIcon />
        HIDE DETAIL
      </button>

      {/* Garis kanan */}
      <div className="flex-1 h-px bg-slate-300"></div>
    </div>
  );
};

export default HiddenButton;
