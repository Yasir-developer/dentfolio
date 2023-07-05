import Table from "@/components/Table/Table";
import React from "react";
import AdminDentistTable from "./AdminDentistTable";
import { FaTrashAlt } from "react-icons/fa";

const DashboardDentistList = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Dentist Name",
        accessor: "dentist",
      },
      {
        Header: "Email Address",
        accessor: "email",
      },
      {
        Header: "No Of Cases",
        accessor: "cases",
      },
      {
        Header: "Subscription Status",
        accessor: "subscription",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  //   const [data, setData] = useState([]);
  const data = [
    {
      id: "645",
      dentist: "Dr. Kathy",
      email: "kathy.hill@mail.com",
      cases: 5,

      subscription: "Trial",
      action: <FaTrashAlt className="w-4 h-4 text-[#F46A6A]" />,
    },
    {
      id: "645",
      dentist: "Dr. Kathy",
      email: "kathy.hill@mail.com",
      cases: 5,

      subscription: "Premium",
      action: <FaTrashAlt className="w-4 h-4 text-[#F46A6A]" />,
    },
    {
      id: "645",
      dentist: "Dr. Kathy",
      email: "kathy.hill@mail.com",
      cases: 5,

      subscription: "Trial",
      action: <FaTrashAlt className="w-4 h-4 text-[#F46A6A]" />,
    },

    {
      id: "645",
      dentist: "Dr. Kathy",
      email: "kathy.hill@mail.com",
      cases: 5,

      subscription: "Trial",
      action: <FaTrashAlt className="w-4 h-4 text-[#F46A6A]" />,
    },
    {
      id: "645",
      dentist: "Dr. Kathy",
      email: "kathy.hill@mail.com",
      cases: 5,

      subscription: "Premium",
      action: <FaTrashAlt className="w-4 h-4 text-[#F46A6A]" />,
    },
    {
      id: "645",
      dentist: "Dr. Kathy",
      email: "kathy.hill@mail.com",
      cases: 5,

      subscription: "Premium",
      action: <FaTrashAlt className="w-4 h-4 text-[#F46A6A]" />,
    },
    {
      id: "645",
      dentist: "Dr. Kathy",
      email: "kathy.hill@mail.com",
      cases: 5,

      subscription: "Trial",
      action: <FaTrashAlt className="w-4 h-4 text-[#F46A6A]" />,
    },
    {
      id: "645",
      dentist: "Dr. Kathy",
      email: "kathy.hill@mail.com",
      cases: 5,

      subscription: "Premium",
      action: <FaTrashAlt className="w-4 h-4 text-[#F46A6A]" />,
    },
    {
      id: "645",
      dentist: "Dr. Kathy",
      email: "kathy.hill@mail.com",
      cases: 5,

      subscription: "Trial",
      action: <FaTrashAlt className="w-4 h-4 text-[#F46A6A]" />,
    },
  ];
  return (
    <div className="bg-white p-3 rounded-[7px] my-3 ">
      <div className="my-3">
        <p className="font-semibold text-[15px]">Dentist List</p>
        <p className="font-light text-[13px] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <AdminDentistTable columns={columns} data={data} />
    </div>
  );
};

export default DashboardDentistList;
