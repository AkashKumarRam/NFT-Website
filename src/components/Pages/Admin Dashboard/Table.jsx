import React, { useMemo } from "react";
import { useTable, useRowSelect } from "react-table";
import "tailwindcss/tailwind.css";
import { MdDelete } from "react-icons/md";
import { BiDownArrow } from "react-icons/bi";

const data = [
  {
    id: 1,
    name: "Monica Geller",
    collection: "Wizard and Wolves,Edition",
    trigger: "Purchase",
    email: "True",
    sms: "True",
    ens: "True",
    etgadd: "False",
    claimedstatus: "True",
    lastsent: 1678877736662,
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
    claimedstatus: "False",
    lastsent: 1678877736662,
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
    claimedstatus: "True",
    lastsent: 1678877736662,
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
    claimedstatus: "True",
    lastsent: 1678877736662,
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
    claimedstatus: "True",
    lastsent: 1678877736662,
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
    claimedstatus: "True",
    lastsent: 1678877736662,
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
    claimedstatus: "False",
    lastsent: 1678877736662,
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
    claimedstatus: "True",
    lastsent: 1678877736662,
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
    claimedstatus: "False",
    lastsent: 1678877736662,
  },
];

const columns = [
  {
    Header: "",
    id: "selection",
    Cell: ({ row }) => (
      <div>
        <input
          type="checkbox"
          {...row.getToggleRowSelectedProps()}
          className="form-checkbox h-4 w-4 accent-blue-500"
        />
      </div>
    ),
  },
  {
    Header: "Recipient Name",
    accessor: "name",
  },
  {
    Header: "Collection",
    accessor: "collection",
  },
  {
    Header: "Delivery Route",
    accessor: (row) => {
      const routes = [];
      if (row.email === "True") {
        routes.push("Email");
      }
      if (row.sms === "True") {
        routes.push("SMS");
      }
      if (row.ens === "True") {
        routes.push("ENS");
      }
      if (row.etgadd === "True") {
        routes.push("ETGADD");
      }
      return routes.join(", ");
    },
  },
  {
    Header: "Trigger",
    accessor: "trigger",
  },
  {
    Header: "Claim Status",
    accessor: "claimedstatus",
    Cell: ({ value }) => (
      <span
        className={
          value === "True"
            ? "bg-[#AFFFA2] p-1 px-2 shadow-md text-xs rounded-md"
            : "bg-[#FFF2E2] p-1 px-2 shadow-md text-xs rounded-md"
        }
      >
        {value === "True" ? "Claimed" : "Pending"}
      </span>
    ),
  },

  {
    Header: "Trigger TimeStamp",
    accessor: "lastsent",
    Cell: ({ value }) => {
      const now = new Date().getTime();
      const diffInMilliseconds = now - value;
      const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      const diffInHours = Math.floor(diffInMinutes / 60);
      const diffInDays = Math.floor(diffInHours / 24);

      let diffString;
      if (diffInDays > 0) {
        diffString = `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
      } else if (diffInHours > 0) {
        diffString = `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
      } else if (diffInMinutes > 0) {
        diffString = `${diffInMinutes} minute${
          diffInMinutes > 1 ? "s" : ""
        } ago`;
      } else {
        diffString = `${diffInSeconds} second${
          diffInSeconds > 1 ? "s" : ""
        } ago`;
      }

      return <span>{diffString}</span>;
    },
  },
];

const Table = () => {
  const tableData = useMemo(() => data, []);
  const tableColumns = useMemo(() => columns, []);
  const tableInstance = useTable(
    {
      columns: tableColumns,
      data: tableData,
    },
    useRowSelect
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = tableInstance;

  const firstPageRows = rows.slice(0, 10);
  const numSelectedRows = selectedFlatRows.length;

  return (
    <div className="p-6">
      <div className="flex flex-row items-center space-x-52 mb-[1.5rem]">
        <div className="flex flex-row space-x-[2rem]">
          <div className="flex flex-row items-center space-x-2">
            <p className="text-sm font-poppins">Collection:</p>
            <div className="flex flex-row space-x-1 items-center">
              <span className="font-bold text-blue-500 text-xs">All</span>
              <BiDownArrow className="text-gray-500 text-xs" />
            </div>
          </div>

          <div className="flex flex-row items-center space-x-2">
            <p className="text-sm font-poppins">Delivery Route:</p>
            <div className="flex flex-row space-x-1 items-center">
              <span className="font-bold text-blue-500 text-xs">All</span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <p className="text-sm font-poppins">Trigger:</p>
            <div className="flex flex-row space-x-1 items-center">
              <span className="font-bold text-blue-500 text-xs">All</span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-2">
            <p className="text-sm font-poppins">Claim Status:</p>
            <div className="flex flex-row space-x-1 items-center">
              <span className="font-bold text-blue-500 text-xs">All</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-2 -mt-6">
          <div>
            <button className="p-3 bg-[#109CF1] text-white flex flex-row items-center justify-end font-poppins rounded-md drop-shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Add Leads</p>
            </button>
          </div>
          <div>
            <button className="p-3 bg-[#109CF1] text-white flex flex-row items-center justify-end font-poppins rounded-md drop-shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
              Retarget
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-5 mb-[0.25rem] bg-white border-b rounded-md p-1 w-[62rem] border-collapse">
        <div className="h-[1.5rem] w-[4rem] p-2 flex items-center justify-center rounded-md shadow-md text-white bg-[#109CF1]">
          {numSelectedRows}
        </div>
        <p className="text-gray-600 font-poppins">{numSelectedRows} Selected</p>
        <MdDelete className="text-gray-500" />
      </div>
      <table
        {...getTableProps()}
        className="table-auto w-full bg-white shadow-lg rounded-lg overflow-hidden border-collapse"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 text-left text-gray-600 font-poppins text-sm border-b"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps({
                  style: {
                    backgroundColor: row.isSelected ? "#E8F6FF" : null,
                  },
                })}
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className=" px-6 py-3 text-gray-600 font-poppins text-sm"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
