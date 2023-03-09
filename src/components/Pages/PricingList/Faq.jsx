import React, { useState } from "react";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

const Faq = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;
  return (
    <div className="mt-20">
      <div className="font-space text-6xl text-center">Frequently asked</div>
      <div className="mt-8 flex flex-row space-x-2 items-center justify-center max-sm:flex max-sm:flex-col max-sm:items-center">
        <p className="font-inter">Have any questions?</p>
        <p className="font-inter">Reach out to our team at</p>
        <p className="font-inter underline underline-offset-4 max-sm:flex flex-col">
          {" "}
          support@hexatick.com
        </p>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-14 flex flex-col items-center ">
        <div className="shadow rounded border border-gray-100 border-t-0 w-3/5 max-sm:w-11/12">
          <div className="p-4 text-xl relative font-medium">
            <div className="w-5/6">How to use Hexatick?</div>
            <button
              aria-label="question-expander"
              className="text-xl absolute top-0 right-0 p-4 focus:otline-none"
              onClick={() => setExpand(!expand)}
            >
                {expand ? <AiOutlineMinus className="w-5" /> : <AiOutlinePlus className="w-5"/> }
            </button>
          </div>
          <div  className={ansClass}>
            This is best
          </div>
        </div>

        <div className="shadow rounded border border-gray-100 border-t-0 w-3/5 max-sm:w-11/12">
          <div className="p-4 text-xl relative font-medium">
            <div className="w-5/6">How to use Hexatick?</div>
            <button
              aria-label="question-expander"
              className="text-xl absolute top-0 right-0 p-4 focus:otline-none"
              onClick={() => setExpand(!expand)}
            >
                {expand ? <AiOutlineMinus className="w-5" /> : <AiOutlinePlus className="w-5"/> }
            </button>
          </div>
          <div  className={ansClass}>
            yhis is best
          </div>
        </div>

        <div className="shadow rounded border border-gray-100 border-t-0 w-3/5 max-sm:w-11/12">
          <div className="p-4 text-xl relative font-medium">
            <div className="w-5/6">How to use Hexatick?</div>
            <button
              aria-label="question-expander"
              className="text-xl absolute top-0 right-0 p-4 focus:otline-none"
              onClick={() => setExpand(!expand)}
            >
                {expand ? <AiOutlineMinus className="w-5" /> : <AiOutlinePlus className="w-5"/> }
            </button>
          </div>
          <div  className={ansClass}>
            yhis is best
          </div>
        </div>

        <div className="shadow rounded border border-gray-100 border-t-0 w-3/5 max-sm:w-11/12">
          <div className="p-4 text-xl relative font-medium">
            <div className="w-5/6">How to use Hexatick?</div>
            <button
              aria-label="question-expander"
              className="text-xl absolute top-0 right-0 p-4 focus:otline-none"
              onClick={() => setExpand(!expand)}
            >
                {expand ? <AiOutlineMinus className="w-5" /> : <AiOutlinePlus className="w-5"/> }
            </button>
          </div>
          <div  className={ansClass}>
            yhis is best
          </div>
        </div>

        <div className="shadow rounded border border-gray-100 border-t-0 w-3/5 max-sm:w-11/12">
          <div className="p-4 text-xl relative font-medium">
            <div className="w-5/6">How to use Hexatick?</div>
            <button
              aria-label="question-expander"
              className="text-xl absolute top-0 right-0 p-4 focus:otline-none"
              onClick={() => setExpand(!expand)}
            >
                {expand ? <AiOutlineMinus className="w-5" /> : <AiOutlinePlus className="w-5"/> }
            </button>
          </div>
          <div  className={ansClass}>
            yhis is best
          </div>
        </div>

        <div className="shadow rounded border border-gray-100 border-t-0 w-3/5 max-sm:w-11/12">
          <div className="p-4 text-xl relative font-medium">
            <div className="w-5/6">How to use Hexatick?</div>
            <button
              aria-label="question-expander"
              className="text-xl absolute top-0 right-0 p-4 focus:otline-none"
              onClick={() => setExpand(!expand)}
            >
                {expand ? <AiOutlineMinus className="w-5" /> : <AiOutlinePlus className="w-5"/> }
            </button>
          </div>
          <div  className={ansClass}>
            yhis is best
          </div>
        </div>

        <div className="shadow rounded border border-gray-100 border-t-0 w-3/5 max-sm:w-11/12">
          <div className="p-4 text-xl relative font-medium">
            <div className="w-5/6">How to use Hexatick?</div>
            <button
              aria-label="question-expander"
              className="text-xl absolute top-0 right-0 p-4 focus:otline-none"
              onClick={() => setExpand(!expand)}
            >
                {expand ? <AiOutlineMinus className="w-5" /> : <AiOutlinePlus className="w-5"/> }
            </button>
          </div>
          <div  className={ansClass}>
            yhis is best
          </div>
        </div>

        <div className="shadow rounded border border-gray-100 border-t-0 w-3/5 max-sm:w-11/12">
          <div className="p-4 text-xl relative font-medium">
            <div className="w-5/6">How to use Hexatick?</div>
            <button
              aria-label="question-expander"
              className="text-xl absolute top-0 right-0 p-4 focus:otline-none"
              onClick={() => setExpand(!expand)}
            >
                {expand ? <AiOutlineMinus className="w-5" /> : <AiOutlinePlus className="w-5"/> }
            </button>
          </div>
          <div  className={ansClass}>
            yhis is best
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
