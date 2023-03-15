import React, { useMemo } from "react";
import { useTable, useRowSelect } from "react-table";
import "tailwindcss/tailwind.css";
import {MdDelete} from "react-icons/md";

const data = [
  {
    recipientName: "John Doe",
    collection: "Monday",
    deliveryStatus: "Delivered",
    trigger: "Email",
    currentStatus: "Claimed",
    triggerTimeStamp: "2022-03-15T08:10:00.000Z",
  },
  {
    recipientName: "Jane Doe",
    collection: "Tuesday",
    deliveryStatus: "In transit",
    trigger: "SMS",
    currentStatus: "Pending",
    triggerTimeStamp: "2022-03-15T10:25:00.000Z",
  },
  {
    recipientName: "Bob Smith",
    collection: "Wednesday",
    deliveryStatus: "Not delivered",
    trigger: "Push notification",
    currentStatus: "Claimed",
    triggerTimeStamp: "2022-03-15T14:35:00.000Z",
  },
  {
    recipientName: "Bob Smith",
    collection: "Wednesday",
    deliveryStatus: "Not delivered",
    trigger: "Push notification",
    currentStatus: "Claimed",
    triggerTimeStamp: "2022-03-15T14:35:00.000Z",
  },
  {
    recipientName: "Bob Smith",
    collection: "Wednesday",
    deliveryStatus: "Not delivered",
    trigger: "Push notification",
    currentStatus: "Claimed",
    triggerTimeStamp: "2022-03-15T14:35:00.000Z",
  },
  {
    recipientName: "Bob Smith",
    collection: "Wednesday",
    deliveryStatus: "Not delivered",
    trigger: "Push notification",
    currentStatus: "Claimed",
    triggerTimeStamp: "2022-03-15T14:35:00.000Z",
  },
  {
    recipientName: "Bob Smith",
    collection: "Wednesday",
    deliveryStatus: "Not delivered",
    trigger: "Push notification",
    currentStatus: "Claimed",
    triggerTimeStamp: "2022-03-15T14:35:00.000Z",
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
    accessor: "recipientName",
  },
  {
    Header: "Collection",
    accessor: "collection",
  },
  {
    Header: "Delivery Status",
    accessor: "deliveryStatus",
  },
  {
    Header: "Trigger",
    accessor: "trigger",
  },
  {
    Header: "Current Status",
    accessor: "currentStatus",
    Cell: ({ value }) => (
      <span
        className={
          value === "Claimed"
            ? "bg-green-300 p-1 rounded-md"
            : "bg-pink-200 p-1 rounded-md"
        }
      >
        {value}
      </span>
    ),
  },
  {
    Header: "Trigger TimeStamp",
    accessor: "triggerTimeStamp",
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
    <div>
      <div className="flex flex-row items-center space-x-5 mb-[1.5rem]">
        <div className="h-[1.5rem] w-[3.5rem] p-2 flex items-center justify-center text-white bg-blue-500">
          {numSelectedRows}
        </div>
        <p className="text-gray-600 font-semibold">
          {numSelectedRows} Selected
        </p>
        <MdDelete className="text-gray-500"/>
      </div>
      <table
        {...getTableProps()}
        className="table-auto bg-white shadow-lg rounded-lg overflow-hidden border-collapse"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-4 py-2 text-left text-gray-600 font-semibold border-b"
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
                    backgroundColor: row.isSelected ? "#d6ffff" : null,
                  },
                })}
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className=" px-4 py-2 text-gray-600 font-medium"
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
