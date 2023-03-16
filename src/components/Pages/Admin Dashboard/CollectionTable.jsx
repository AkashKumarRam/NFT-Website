import React from "react";
import { useTable } from "react-table";
import Collection1 from "../../../images/Collection1.png";
import Collection2 from "../../../images/Collection2.png";
import Collection3 from "../../../images/Collection3.png";

const data = [
  {
    primaryArtwork: (
      <img src={Collection1} alt="Artwork" className="h-[5rem]" />
    ),
    collection_Name: "Wizard and Wolves, Edition 1",
    ticker: "WAW",
    total_distribution: 1204,
    distribution: "98%",
    launch_period: 1678952761277,
  },
  {
    primaryArtwork: (
      <img src={Collection3} alt="Artwork" className="h-[5rem]" />
    ),
    collection_Name: "Wizard and Wolves, Edition 2",
    ticker: "WAW",
    total_distribution: 4567,
    distribution: "87%",
    launch_period: 1678952761277,
  },
  {
    primaryArtwork: (
      <img src={Collection2} alt="Artwork" className="h-[5rem]" />
    ),
    collection_Name: "Wizard and Wolves, Edition 3",
    ticker: "WAW",
    total_distribution: 12042,
    distribution: "63%",
    launch_period: 1678952761277,
  },
];

const columns = [
  {
    Header: "Primary Artwork",
    accessor: "primaryArtwork",
    Cell: ({ value }) => (
      <td className="flex items-center justify-center">{value}</td>
    ),
  },
  {
    Header: "Collection Name",
    accessor: "collection_Name",
  },
  {
    Header: "Ticker",
    accessor: "ticker",
  },
  {
    Header: "Total Distribution",
    accessor: "total_distribution",
  },
  {
    Header: "Distribution",
    accessor: "distribution",
  },

  {
    Header: "Launch Period",
    accessor: "launch_period",
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
        diffString = `${diffInMinutes} min${diffInMinutes > 1 ? "s" : ""} ago`;
      } else {
        diffString = `${diffInSeconds} sec${diffInSeconds > 1 ? "s" : ""} ago`;
      }

      return <span>{diffString}</span>;
    },
  },
];

const CollectionTable = () => {
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <div className="bg-white shadow-lg w-[62rem] flex flex-col items-end">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-8 py-4 font-poppins text-xs text-gray-700 text-start border-b-[1px] border-gray-100"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-10 py-3 font-poppins text-xs text-gray-700 border-b-[1px] border-gray-100"
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

export default CollectionTable;
