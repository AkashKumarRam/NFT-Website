import React, { useState, useEffect, useMemo } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useTable } from "react-table";
import Table from "./Table";

const userData = [
  {
    id: 1,
    name: "Monica Geller",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "True",
    sms: "True",
    ens: "True",
    etgadd: "False",
    claimedstautus: "True",
    lastsent: 1678769158,
  },
  {
    id: 2,
    name: "Joey Tribani",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "False",
    sms: "False",
    ens: "True",
    ethadd: "True",
    claimedstautus: "True",
    lastsent: 1678769158,
  },
  {
    id: 3,
    name: "Monica Geller",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "True",
    sms: "True",
    ens: "True",
    etgadd: "False",
    claimedstautus: "True",
    lastsent: 1678769158,
  },
  {
    id: 4,
    name: "Monica Geller",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "True",
    sms: "True",
    ens: "True",
    etgadd: "False",
    claimedstautus: "True",
    lastsent: 1678769158,
  },
  {
    id: 5,
    name: "Monica Geller",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "True",
    sms: "True",
    ens: "True",
    etgadd: "False",
    claimedstautus: "True",
    lastsent: 1678769158,
  },
  {
    id: 6,
    name: "Monica Geller",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "True",
    sms: "True",
    ens: "True",
    etgadd: "False",
    claimedstautus: "True",
    lastsent: 1678769158,
  },
  {
    id: 7,
    name: "Joey Tribani",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "False",
    sms: "False",
    ens: "True",
    ethadd: "True",
    claimedstautus: "True",
    lastsent: 1678769158,
  },
  {
    id: 8,
    name: "Monica Geller",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "True",
    sms: "True",
    ens: "True",
    etgadd: "False",
    claimedstautus: "True",
    lastsent: 1678769158,
  },
  {
    id: 9,
    name: "Monica Geller",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "True",
    sms: "True",
    ens: "True",
    etgadd: "False",
    claimedstautus: "True",
    lastsent: 1678769158,
  },
];

const Targeting = () => {
  return (
    <div className="bg-[#F8FAFF]">
      <Navbar />
      <div className="flex flex-row justify-between">
        <div>
          <Sidebar menuActive="targeting" />
        </div>
        <div className=" w-[calc(100%-16rem)] h-[calc(100%-74px)] tex">
          <div className="mt-[4rem] ml-[4rem]">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targeting;
