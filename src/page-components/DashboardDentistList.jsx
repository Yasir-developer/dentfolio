import Table from "@/components/Table/Table";
import React from "react";
import AdminDentistTable from "./AdminDentistTable";
import { FaTrashAlt } from "react-icons/fa";

const DashboardDentistList = ({
  selectedTime,
  selectedTabOpt,
  onSelectedTab,
}) => {
  console.log(selectedTabOpt, "selectedTabOpt");
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

  const RevenueColumns = React.useMemo(
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
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Next Due Date",
        accessor: "due",
      },
      {
        Header: "Status",
        accessor: "status",
      },
    ],
    []
  );

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

  //   const [data, setData] = useState([]);
  const revenueData = [
    {
      id: "645",
      dentist: selectedTime == "last24" ? "Dr. Kathy" : "Dr. Jane",
      email: "kathy.hill@mail.com",
      amount: "£99",

      due: "6/16/2023",
      status: "Non Active",
    },
    {
      id: "645",
      dentist: selectedTime == "last24" ? "Dr. Kathy" : "Dr. Jane",
      email: "kathy.hill@mail.com",
      amount: "£99",

      due: "6/16/2023",
      status: "Active",
    },
    {
      id: "645",
      dentist: selectedTime == "last24" ? "Dr. Kathy" : "Dr. Jane",
      email: "kathy.hill@mail.com",
      amount: "£99",

      due: "6/16/2023",
      status: "Active",
    },
    {
      id: "645",
      dentist: selectedTime == "last24" ? "Dr. Kathy" : "Dr. Jane",
      email: "kathy.hill@mail.com",
      amount: "£99",

      due: "6/16/2023",
      status: "Active",
    },
    {
      id: "645",
      dentist: selectedTime == "last24" ? "Dr. Kathy" : "Dr. Jane",
      email: "kathy.hill@mail.com",
      amount: "£99",

      due: "6/16/2023",
      status: "Active",
    },
    {
      id: "645",
      dentist: selectedTime == "last24" ? "Dr. Kathy" : "Dr. Jane",
      email: "kathy.hill@mail.com",
      amount: "£99",

      due: "6/16/2023",
      status: "Non Active",
    },
    {
      id: "645",
      dentist: selectedTime == "last24" ? "Dr. Kathy" : "Dr. Jane",
      email: "kathy.hill@mail.com",
      amount: "£99",

      due: "6/16/2023",
      status: "Active",
    },
    {
      id: "645",
      dentist: selectedTime == "last24" ? "Dr. Kathy" : "Dr. Jane",
      email: "kathy.hill@mail.com",
      amount: "£99",

      due: "6/16/2023",
      status: "Active",
    },
    {
      id: "645",
      dentist: selectedTime == "last24" ? "Dr. Kathy" : "Dr. Jane",
      email: "kathy.hill@mail.com",
      amount: "£99",

      due: "6/16/2023",
      status: "Non Active",
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
      <AdminDentistTable
        columns={selectedTabOpt === "revenue" ? RevenueColumns : columns}
        data={selectedTabOpt === "revenue" ? revenueData : data}
      />
    </div>
  );
};

export default DashboardDentistList;
