import { useTable } from "react-table";

const AdminDentistTable = ({ columns, data }) => {
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
  });

  return (
    <table
      {...getTableProps()}
      className="mx-auto border-b-1 bordert-t-1 border-b-[#EFF2F7] w-[100%] items-center justify-center "
    >
      <thead className="">
        {headerGroups.map((headerGroup) => (
          <tr
            key={headerGroup}
            {...headerGroup.getHeaderGroupProps()}
            className="border-b border-t border-t-[#EFF2F7] border-b-[#EFF2F7]"
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                key={column}
                className="p-3 font-semibold text-[13px] text-left"
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              // className="p-3"
              key={row}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    key={cell}
                    {...cell.getCellProps()}
                    className={`border-b border-b-[#EFF2F7] text-[13px] p-3 font-normal 
                    ${cell.column.id === "action" ? "px-5" : "px-3"}
                    `}
                  >
                    {cell.column.id === "id" ? (
                      <span className="font-medium">{cell.render("Cell")}</span>
                    ) : cell.column.id === "subscription" ? (
                      <p
                        style={{
                          backgroundColor: getStatusColor(cell.value),
                          //   paddingRight: "35px",
                          //   paddingLeft: "35px",

                          color: getStatusTextColor(cell.value),
                          fontWeight: "500",
                          padding: "5px",
                          textAlign: "center",
                          width: "40%",
                          //   padding: "15px",
                          borderRadius: "7px",
                        }}
                      >
                        {cell.render("Cell")}
                      </p>
                    ) : (
                      cell.render("Cell")
                    )}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
  // Table component logic and UI come here
};

const getStatusColor = (status) => {
  switch (status) {
    case "Trial":
      return "#0682FF2E";
    case "Premium":
      return "#34C38F2E";
  }
};

const getStatusTextColor = (status) => {
  switch (status) {
    case "Trial":
      return "#0372E2";
    case "Premium":
      return "#34C38F";
  }
};
export default AdminDentistTable;
