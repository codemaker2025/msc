import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import useSWR from "swr";
import axiosInstance from "../../api/axiosInstance";
import { Link } from "react-router-dom";
import EntirepageLoad from "../Loading/EntirepageLoad";
const fetcher = async (url) => {
  const response = await axiosInstance.get(url);
  return response.data;
};

export default function Dashboard() {
  const {
    data: apiData,
    error,
    isLoading,
  } = useSWR("/api/v1/employee?length=10&page=1", fetcher);

  // Define columns outside of the conditional logic
  const columns = React.useMemo(
    () => [
      {
        accessorKey: "employee_code",
        header: "Employee Id",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "phone",
        header: "Mobile",
      },
      {
        accessorKey: "designation.title",
        header: "Designation",
        cell: ({ row }) => row.original.designation.title,
      },
      {
        accessorKey: "designation_id", // Add designation_id to the table
        header: "Designation ID",
      },
      {
        accessorKey: "view_details",
        header: "View Details",
        cell: ({ row }) => (
          <Link to={`/employees/${row.original.id}`}>View Details</Link>
        ),
      },
    ],
    []
  );

  // Ensure `useReactTable` is always called, even if data is not yet available
  const table = useReactTable({
    data: apiData?.data?.rows?.data || [], // Fallback to an empty array if data is not available
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading || !apiData)
    return (
      <>
        <EntirepageLoad />
      </>
    );


  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
