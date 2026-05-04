import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";

function Button({ text = "Explore More", onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3  px-3 md:px-6 py-2 md:py-3 rounded-full
                  bg-[#7642B9] hover:bg-[#522475] text-white cursor-pointer
                  ${className}`}
    >
      <span className="text-sm md:text-base font-medium">
        {text}
      </span>

      <span className="flex items-center justify-center bg-white text-black rounded-full px-3 py-1">
        <LiaArrowRightSolid className="text-base md:text-lg" />
      </span>
    </button>
  );
}

export default Button;