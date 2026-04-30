import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
function Button({ text = "Explore More", onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between gap-6 p-3
                 bg-[#7642B9]
                 text-white rounded-full shadow-md cursor-pointer"
    >
      <span className="text-lg font-medium">{text}</span>

      <span className="flex items-center justify-center  bg-white rounded-2xl px-2 py-px">
        <LiaArrowRightSolid className="w-6 h-6 text-[#7642B9]" />
      </span>
    </button>
  );
}

export default Button;