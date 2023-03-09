import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stars from "../../images/Stars.png";
import Avatar1 from "../../images/Avatar 1.png";
import Avatar2 from "../../images/Avatar3.png";
import Avatar from "../../images/Avatar.png";

const SwipeableMobile = () => {
  const settings = {
    dots: true, // show dots for navigation
    infinite: true, // allow infinite loop of cards
    speed: 500, // animation speed
    slidesToShow: 1, // number of cards to show at once
    slidesToScroll: 1, // number of cards to scroll on swipe
    centerMode: true,
    centerPadding: "0rem",
  };

  return (

    <div className=" w-[20rem] sm:hidden">
      <Slider {...settings} className="flex justify-center">
        <div>
          <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5 w-80 min-h-[15rem]">
            <img src={Stars} alt="review star" className="w-24" />
            <p className="text-sm">
              "Hexatick has been a game-changer for our user engagement. Our
              players love collecting and trading our branded NFTs. It's easy to
              use and has had a big impact on our community.”
            </p>
            <img src={Avatar} alt="avatar" className="w-[180px]" />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5 w-80 min-h-[15rem]">
            <img src={Stars} alt="review star" className="w-24" />
            <p className="text-sm">
              "Hexatick has been a game-changer for our user engagement. Our
              players love collecting and trading our branded NFTs. It's easy to
              use and has had a big impact on our community.”
            </p>
            <img src={Avatar} alt="avatar" className="w-[180px]" />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5 w-80 min-h-[15rem]">
            <img src={Stars} alt="review star" className="w-24" />
            <p className="text-sm">
              "Hexatick has been a game-changer for our user engagement. Our
              players love collecting and trading our branded NFTs. It's easy to
              use and has had a big impact on our community.”
            </p>
            <img src={Avatar} alt="avatar" className="w-[180px]" />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5 w-80 min-h-[15rem]">
            <img src={Stars} alt="review star" className="w-24" />
            <p className="text-sm">
              "Hexatick has been a game-changer for our user engagement. Our
              players love collecting and trading our branded NFTs. It's easy to
              use and has had a big impact on our community.”
            </p>
            <img src={Avatar} alt="avatar" className="w-[180px]" />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5 w-80 min-h-[15rem]">
            <img src={Stars} alt="review star" className="w-24" />
            <p className="text-sm">
              "Hexatick has been a game-changer for our user engagement. Our
              players love collecting and trading our branded NFTs. It's easy to
              use and has had a big impact on our community.”
            </p>
            <img src={Avatar} alt="avatar" className="w-[180px]" />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5 w-80 min-h-[15rem]">
            <img src={Stars} alt="review star" className="w-24" />
            <p className="text-sm">
              "Hexatick has been a game-changer for our user engagement. Our
              players love collecting and trading our branded NFTs. It's easy to
              use and has had a big impact on our community.”
            </p>
            <img src={Avatar} alt="avatar" className="w-[180px]" />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5 w-80 min-h-[15rem]">
            <img src={Stars} alt="review star" className="w-24" />
            <p className="text-sm">
              "Hexatick has been a game-changer for our user engagement. Our
              players love collecting and trading our branded NFTs. It's easy to
              use and has had a big impact on our community.”
            </p>
            <img src={Avatar} alt="avatar" className="w-[180px]" />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5 w-80 min-h-[15rem]">
            <img src={Stars} alt="review star" className="w-24" />
            <p className="text-sm">
              "Hexatick has been a game-changer for our user engagement. Our
              players love collecting and trading our branded NFTs. It's easy to
              use and has had a big impact on our community.”
            </p>
            <img src={Avatar} alt="avatar" className="w-[180px]" />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-6 bg-[#F2F9FF] p-5 w-80 min-h-[15rem]">
            <img src={Stars} alt="review star" className="w-24" />
            <p className="text-sm">
              "Hexatick has been a game-changer for our user engagement. Our
              players love collecting and trading our branded NFTs. It's easy to
              use and has had a big impact on our community.”
            </p>
            <img src={Avatar} alt="avatar" className="w-[180px]" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SwipeableMobile;
