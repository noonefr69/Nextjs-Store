// components/PriceFilter.tsx
"use client";

import { Slider } from "@/components/ui/slider";
import { useState } from "react";

export function PriceFilter() {
  const [value, setValue] = useState([1000]);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="text-center flex flex-col items-center">
      <Slider
        defaultValue={[33]}
        value={value}
        onValueChange={handleValueChange}
        className="cursor-pointer mb-7 shadow-sm"
        max={1000}
        step={1}
      />
      <span className="font-medium mb-5">${value[0]}</span>

      <div className="flex gap-4">
        <button className="cursor-pointer duration-150 hover:opacity-90 px-4 py-2 bg-gray-200 rounded">RESET</button>
        <button className="cursor-pointer duration-150 hover:opacity-90 px-4 py-2 bg-[#1B9C85] text-white rounded">
          APPLY
        </button>
      </div>
    </div>
  );
}
