import React, { useState, useRef } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Integration = () => {
  const demoRef = useRef(null);
  const prodRef = useRef(null);

  const [isDemoCopied, setDemoIsCopied] = useState(false);

  function copyDemoApiKey() {
    navigator.clipboard.writeText(demoRef.current.value);
    setDemoIsCopied(true);

    setTimeout(() => {
      setDemoIsCopied(false);
    }, 3000);
  }

  const [isProdCopied, setProdIsCopied] = useState(false);

  function copyProdApiKey() {
    navigator.clipboard.writeText(prodRef.current.value);
    setProdIsCopied(true);

    setTimeout(() => {
      setProdIsCopied(false);
    }, 3000);
  }

  return (
    <div className="bg-[#F8FAFF]">
      <Navbar />
      <div className="flex flex-row justify-between">
        <div>
          <Sidebar menuActive="Integration" />
        </div>
        <div className=" w-[calc(100%-16rem)] h-[calc(100%-74px)] mt-[4rem]">
          <div className="h-[28rem] flex flex-col items-end mr-[6rem] space-y-8">
            <button className="p-2 bg-[#109CF1] text-white flex flex-row items-center justify-center space-x-3 font-poppins  rounded-md drop-shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <p>Generate New Key</p>
            </button>

            <div className="mt-[6rem]  p-5 w-[58rem] h-[30rem] bg-white drop-shadow-lg flex flex-col space-y-6">
              <p className="font-poppins text-xs">
                API key based NFT dRop it easiest way for any business to
                leaverage on nFT marketing without the requirement of a
                bloackchain developer. It is powered by simple RESTful API
                Endpoints that business cna use in their product flow.
              </p>
              <div className="w-full flex flex-col items-start space-y-3">
                <h2 className="font-poppins text-xl">Demo API key</h2>
                <p className="font-poppins text-xs">
                  Demo API key is on aPI key linked for demo nFT drop with
                  limited funvtionalit and Copping in number of allowed calls.
                </p>
                <div className="w-full flex flex-row items-center">
                  <input
                    type="text"
                    className="pl-[1rem] text-gray-700 border-[1px] border-black w-full p-[0.5rem] font-poppins text-sm bg-[#EBF3FD]"
                    value="YUGF2348HBSDF42309C7R3RSDHJ"
                    ref={demoRef}
                    readOnly
                  />
                  <button
                    className="flex flex-row items-center -ml-[6rem] space-x-2"
                    onClick={copyDemoApiKey}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                    <p className="font-poppins text-sm">
                      {isDemoCopied ? "Copied!" : "Copy"}
                    </p>
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col items-start space-y-3">
                <h2 className="font-poppins text-xl">Production API key</h2>
                <p className="font-poppins text-xs">
                  Production API key is on API key linked to accounts with
                  activated plans with full-fledged assigned functionality to
                  the plN
                </p>
                <div className="w-full flex flex-row items-center">
                  <input
                    type="text"
                    className="pl-[1rem] text-gray-700 border-[1px] border-black w-full p-[0.5rem] font-poppins text-sm bg-[#EBF3FD]"
                    value="IUGWRO935BJHKQ3598T4NDFF935"
                    ref={prodRef}
                    readOnly
                  />
                  <button
                    className="flex flex-row items-center -ml-[6rem] space-x-2"
                    onClick={copyProdApiKey}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      />
                    </svg>
                    <p className="font-poppins text-sm">
                      {isProdCopied ? "Copied!" : "Copy"}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
