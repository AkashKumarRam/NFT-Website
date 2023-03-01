import React from "react";
import Stars from "../../images/Stars.png";
import Avatar1 from "../../images/Avatar 1.png";
import Avatar2 from "../../images/Avatar3.png";
import Avatar from "../../images/Avatar.png";

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 mt-14 p-4">
      <h2 className="text-4xl text-black font-settings p-4">
        Satisfied Customers
      </h2>
      <div className="flex flex-row space-x-8 items-center justify-between">
        <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5  w-80 min-h-[15rem]">
          <img src={Stars} alt="review star" className="w-24" />
          <p className="text-sm">
            "Hexatick has been a game-changer for our user engagement. Our
            players love collecting and trading our branded NFTs. It's easy to
            use and has had a big impact on our community.”
          </p>
          <img src={Avatar} alt="avatar" className="w-[180px]" />
        </div>
        <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5  w-80 min-h-[15rem]">
          <img src={Stars} alt="review star" className="w-24" />
          <p className="text-sm">
            "Hexatick is highly recommended.! Our brand's engagement strategy.
            The integration process was seamless, and the resulting impact on
            user engagement was incredible."
          </p>
          <img src={Avatar1} alt="avatar" className="w-[180px]" />
        </div>
        <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5  w-80 min-h-[15rem]">
          <img src={Stars} alt="review star" className="w-24" />
          <p className="text-sm">
          "Hexatick is highly recommended.! Our brand's engagement strategy.
            The integration process was seamless, and the resulting impact on
            user engagement was incredible."
          </p>
          <img src={Avatar2} alt="avatar" className="w-[180px]" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
