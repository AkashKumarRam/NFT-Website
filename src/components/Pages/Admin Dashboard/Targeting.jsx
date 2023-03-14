import React,{useState,useEffect, useMemo} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import {useTable} from "react-table";

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

const tableColumn = [
  {
    Header: "ID",
    accessor:"id"
  },
  {
    Header: "Name",
    accessor:"name"
  },
  {
    Header: "Collection",
    accessor:"collection"
  },
  {
    Header: "Trigger",
    accessor:"trigger"
  },
  {
    Header: "Email",
    accessor:"email"
  },
  {
    Header: "SMS",
    accessor:"sms"
  },
  {
    Header: "ENS",
    accessor:"ens"
  },
  {
    Header: "ETHAdd",
    accessor:"ethadd"
  },
  {
    Header: "ClaimedStautus",
    accessor:"claimedstautus"
  },
  {
    Header: "LastSent",
    accessor:"lastsent"
  },
  
]

const Targeting = () => {
  const [products,setProducts] = useState([]);
  const columns = useMemo(()=>tableColumn,[]);
  const data = useMemo(()=>products,[products])

  const {
    getTableProps,getTableBodyProps,headerGroups,rows,prepareRow
  } = useTable({
    columns,
    data,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const {data} = await axios.get(userData);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  },[])

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-between">
        <div>
          <Sidebar />
        </div>
        <div className="w-[calc(100%-16rem)] h-[calc(100%-74px)] tex">
            
        </div>
      </div>
    </div>
  );
};

export default Targeting;
