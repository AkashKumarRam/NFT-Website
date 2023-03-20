import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FaqBox = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;
  return (
    <div className="shadow rounded border border-gray-100 border-t-0 w-3/5 max-sm:w-11/12">
      <div className="p-4 text-xl relative font-medium">
        <div className="w-5/6">{question}</div>
        <button
          aria-label="question-expander"
          className="text-xl absolute top-0 right-0 p-4 focus:otline-none"
          onClick={() => setExpand(!expand)}
        >
          {expand ? (
            <AiOutlineMinus className="w-5" />
          ) : (
            <AiOutlinePlus className="w-5" />
          )}
        </button>
      </div>
      <div className={ansClass}>{answer}</div>
    </div>
  );
};

export default FaqBox;
