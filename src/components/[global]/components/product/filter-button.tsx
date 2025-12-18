"use client";

import { SetStateAction } from "react";
import { FILTERS } from "../../utils/list-product-utils";

interface FilterButtonProps {
  selected: string;
  onHide: () => void;
  setSelected: (value: SetStateAction<string>) => void
}

const FilterButton = ({
  selected,
  onHide,
  setSelected
} : FilterButtonProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            setSelected(filter)
            onHide()
          }}
          className={`px-4 py-1 border rounded-xs text-md tracking-wide transition-all cursor-pointer
              ${
                selected === filter
                  ? "bg-[#000E33] text-white border-[#000E33]"
                  : "border-slate-400 text-slate-700 hover:bg-slate-100"
              }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterButton;
