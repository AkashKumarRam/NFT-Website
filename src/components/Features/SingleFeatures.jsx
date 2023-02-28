import React from "react";
import Flame from "../../images/Flame.png";
import Chart from "../../images/Chart.png";
import Dollar from "../../images/Dollar.png";
import Settings from "../../images/Settings.png";

const SingleFeatures = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between ml-20 mr-20">
      <div className="w-[550px] h-[270px] bg-cyan-50 rounded-md mt-20">
        <div className="flex items-center gap-5">
          <img className="h-32 mt-10 ml-10" src={Flame} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Boost Engagement</h2>
        </div>
        <div className="ml-10 mt-4">
          <p>
            Make users feel they are important to your brand by rewarding
            <br /> limited edition branded digital collectible and build a
            long-term
            <br /> relationship with your users.
          </p>
        </div>
      </div>

      <div className="w-[550px] h-[270px] bg-cyan-50 rounded-md mt-20">
        <div className="flex items-center gap-5">
          <img className="h-32 mt-10 ml-10" src={Dollar} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Save Cost</h2>
        </div>
        <div className="ml-10 mt-5">
          <p>
            Skip hiring expensive blockchain developers and manage digital
            <br /> collectible with our easy-to-use deployment solution that
            doesn’t
            <br />
            require technical know-how.
          </p>
        </div>
      </div>

      <div className="w-[550px] h-[270px] bg-cyan-50 rounded-md mt-20">
        <div className="flex items-center gap-5">
          <img className="h-32 mt-10 ml-10" src={Chart} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Boost Engagement</h2>
        </div>
        <div className="ml-10 mt-5">
          <p>
            Say goodbye to time-consuming blockchain development processes
            <br /> and easily integrate digital collectibles in your product
            journey within
            <br /> 10 minutes.
          </p>
        </div>
      </div>

      <div className="w-[550px] h-[270px] bg-cyan-50 rounded-md mt-20">
        <div className="flex items-center gap-5">
          <img className="h-32 mt-10 ml-10" src={Settings} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Automate Process</h2>
        </div>
        <div className="ml-10 mt-5">
          <p>
            Leverage our straightforward RESTful API integrations to create and
            <br /> reward digital collectibles within your product journey, even
            with
            <br />
            your most junior developers on board.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleFeatures;
