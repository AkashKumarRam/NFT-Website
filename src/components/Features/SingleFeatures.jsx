import React from "react";
import Flame from "../../images/Flame.png";
import Chart from "../../images/Chart.png";
import Dollar from "../../images/Dollar.png";
import Settings from "../../images/Settings.png";

const SingleFeatures = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between ml-24 mr-28 max-sm:-mt-3 max-sm:mr-0 max-sm:p-1 max-sm:ml-0 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center">
      <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md mt-20 max-sm:w-fit max-sm:h-[220px] sm:hidden">
        <div className="flex items-center gap-4 max-sm:-mt-2">
          <img
            className="h-14 mt-10 ml-10 max-sm:ml-8"
            src={Flame}
            alt="Flame"
          />
          <h2 className="text-3xl font-body mt-10 max-sm:text-2xl">
            Boost Engagement
          </h2>
        </div>
        <div className="ml-10 mr-10 mt-5 max-sm:mr-0 max-sm:p-4 max-sm:mt-2 max-sm:ml-6">
          <p className="max-sm:text-md">
            Make users feel they are important to your brand by rewarding
            limited edition branded digital collectible
          </p>
        </div>
      </div>
      {/* For Pc */}
      {/* <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md mt-20 max-sm:hidden">
        <div className="flex items-center gap-4">
          <img className="h-14 mt-10 ml-10" src={Flame} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Boost Engagement</h2>
        </div>
        <div className="ml-10 mr-10 mt-5">
          <p>
            Make users feel they are important to your brand by rewarding
            limited edition branded digital collectible and build a
            long-term
            relationship with your users.
          </p>
        </div>
      </div> */}
      {/* FOR PC */}

      <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md mt-20 max-sm:mt-3 max-sm:w-fit max-sm:h-[220px] sm:hidden">
        <div className="flex items-center gap-4 max-sm:-mt-2">
          <img
            className="h-14 mt-10 ml-10 max-sm:ml-8"
            src={Dollar}
            alt="Flame"
          />
          <h2 className="text-3xl font-body mt-10 max-sm:text-2xl">
            Save Cost
          </h2>
        </div>
        <div className="ml-10 mr-10 mt-5 max-sm:mr-0 max-sm:p-2 max-sm:mt-2 max-sm:ml-6">
          <p className="max-sm:text-md">
            Skip hiring rare & expensive blockchain developers with our
            easy-to-use deployment solution that
          </p>
        </div>
      </div>
      {/* FOR PC */}
      {/* <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md mt-20 max-sm:hidden">
        <div className="flex items-center gap-4">
          <img className="h-14 mt-10 ml-10" src={Dollar} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Save Cost</h2>
        </div>
        <div className="ml-10 mr-10 mt-5">
          <p>
            Skip hiring expensive blockchain developers and manage digital
            collectible with our easy-to-use deployment solution that
            doesn’t
            
            require technical know-how.
          </p>
        </div>
      </div> */}
      {/* FOR PC */}

      <div className="w-[550px] h-[250px] bg-[#F2F9FF]  rounded-md mt-10 max-sm:w-fit max-sm:h-[220px] max-sm:mt-3 sm:hidden">
        <div className="flex items-center gap-4 max-sm:-mt-2">
          <img
            className="h-14 mt-10 ml-10 max-sm:ml-8"
            src={Chart}
            alt="Flame"
          />
          <h2 className="text-3xl font-body mt-10 max-sm:text-2xl">
            Save Time
          </h2>
        </div>
        <div className="ml-10 mr-10 mt-5 max-sm:mr-0 max-sm:p-2 max-sm:mt-2 max-sm:ml-6">
          <p className="max-sm:text-md">
            Say goodbye to time-consuming blockchain development processes and
            easily integrate digital collectibles in your
          </p>
        </div>
      </div>
      {/* FOR PC */}
      {/* <div className="w-[550px] h-[250px] bg-[#F2F9FF]  rounded-md mt-10 max-sm:hidden">
        <div className="flex items-center gap-5">
          <img className="h-14 mt-10 ml-10" src={Chart} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Save Time</h2>
        </div>
        <div className="ml-10 mr-10 mt-5">
          <p>
            Say goodbye to time-consuming blockchain development processes
            and easily integrate digital collectibles in your product
            journey within
            10 minutes.
          </p>
        </div>
      </div> */}
      {/* FOR PC */}

      <div className="w-[550px] h-[250px] bg-[#F2F9FF]  rounded-md mt-10 max-sm:w-fit max-sm:h-[220px] max-sm:mt-3 sm:hidden">
        <div className="flex items-center gap-4 max-sm:-mt-2">
          <img
            className="h-14 mt-10 ml-10 max-sm:ml-8"
            src={Settings}
            alt="Flame"
          />
          <h2 className="text-3xl font-body mt-10 max-sm:text-2xl">
            Automate Process
          </h2>
        </div>
        <div className="ml-10 mr-10 mt-5 max-sm:mr-0 max-sm:p-2 max-sm:mt-2 max-sm:ml-6">
          <p className="max-sm:text-md">
            Leverage our straightforward RESTful API integrations to create and
            reward digital collectibles within your product journey
          </p>
        </div>
      </div>
      {/* FOR PC */}
      {/* <div className="w-[550px] h-[250px] bg-[#F2F9FF]  rounded-md mt-10 max-sm:hidden">
        <div className="flex items-center gap-5">
          <img className="h-14 mt-10 ml-10" src={Settings} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Automate Process</h2>
        </div>
        <div className="ml-10 mr-10 mt-5">
          <p>
            Leverage our straightforward RESTful API integrations to create and
            reward digital collectibles within your product journey, even
            with
            
            your most junior developers on board.
          </p>
        </div>
      </div> */}
      {/* FOR PC */}

      {/* For Pc >>>>>>>>> */}
      {/* <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md mt-20 max-sm:hidden">
        <div className="flex items-center gap-4">
          <img className="h-14 mt-10 ml-10" src={Flame} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Boost Engagement</h2>
        </div>
        <div className="ml-10 mr-10 mt-5">
          <p>
            Make users feel they are important to your brand by rewarding
            limited edition branded digital collectible and build a
            long-term
            relationship with your users.
          </p>
        </div>
      </div>

      <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md mt-20 max-sm:hidden">
        <div className="flex items-center gap-4">
          <img className="h-14 mt-10 ml-10" src={Dollar} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Save Cost</h2>
        </div>
        <div className="ml-10 mr-10 mt-5">
          <p>
            Skip hiring expensive blockchain developers and manage digital
            collectible with our easy-to-use deployment solution that
            doesn’t
            
            require technical know-how.
          </p>
        </div>
      </div> 

      <div className="w-[550px] h-[250px] bg-[#F2F9FF]  rounded-md mt-10 max-sm:hidden">
        <div className="flex items-center gap-5">
          <img className="h-14 mt-10 ml-10" src={Chart} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Save Time</h2>
        </div>
        <div className="ml-10 mr-10 mt-5">
          <p>
            Say goodbye to time-consuming blockchain development processes
            and easily integrate digital collectibles in your product
            journey within
            10 minutes.
          </p>
        </div>
      </div>

      <div className="w-[550px] h-[250px] bg-[#F2F9FF]  rounded-md mt-10 max-sm:hidden">
        <div className="flex items-center gap-5">
          <img className="h-14 mt-10 ml-10" src={Settings} alt="Flame" />
          <h2 className="text-3xl font-body mt-10">Automate Process</h2>
        </div>
        <div className="ml-10 mr-10 mt-5">
          <p>
            Leverage our straightforward RESTful API integrations to create and
            reward digital collectibles within your product journey, even
            with
            
            your most junior developers on board.
          </p>
        </div>
      </div> */}

      <div className="max-sm:hidden mt-10 space-y-5 items-center">
        <div className="flex flex-row space-x-5 pr-5 pl-5">
          <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md p-12 space-y-5">
            <div className="flex flex-row items-center space-x-5">
              <img className="h-14" src={Flame} alt="fire-logo" />
              <h2 className="text-3xl font-body">Boost Engagement</h2>
            </div>
            <p className="font-regular">
              Make users feel they are important to your brand by rewarding
              limited edition branded digital collectible and build a long-term
              relationship with your users.
            </p>
          </div>

          <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md p-12 space-y-5">
            <div className="flex flex-row items-center space-x-5">
              <img className="h-14" src={Dollar} alt="dollar-logo" />
              <h2 className="text-3xl font-body">Save Cost</h2>
            </div>
            <p className="font-regular">
              Skip hiring expensive blockchain developers and manage digital
              collectible with our easy-to-use deployment solution that doesn’t
              require technical know-how
            </p>
          </div>
        </div>

        <div>
          <div className="flex flex-row space-x-5 pr-5 pl-5">
            <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md p-12 space-y-5">
              <div className="flex flex-row items-center space-x-5">
                <img className="h-14" src={Chart} alt="save-time-logo" />
                <h2 className="text-3xl font-body">Save Time</h2>
              </div>
              <p className="font-regular">
                Say goodbye to time-consuming blockchain development processes
                and easily integrate digital collectibles in your product
                journey within 10 minutes
              </p>
            </div>

            <div className="w-[550px] h-[250px] bg-[#F2F9FF] rounded-md p-12 space-y-5">
              <div className="flex flex-row items-center space-x-5">
                <img className="h-14" src={Settings} alt="settings-logo" />
                <h2 className="text-3xl font-body">Automate Process</h2>
              </div>
              <p className="font-regular">
                Leverage our straightforward RESTful API integrations to create
                and reward digital collectibles within your product journey,
                even with your most junior developers on board
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeatures;
