import { useTable } from "react-table";

const Table = ({ columns, data }) => {
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
      className="mx-auto border-b-1 bordert-t-1 border-b-[#70707038] w-[90%] items-center justify-center"
    >
      <thead className="">
        {headerGroups.map((index, headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="border border-b-[#70707038]"
            key={index}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="p-2 font-semibold text-left"
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
            <tr {...row.getRowProps()} className="p-3">
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="border border-b-[#70707038] text-left p-2"
                    style={{}}
                    // style={{
                    //   // padding: "10px",
                    //   borderBottom: "1px solid",
                    //   textAlign: "center",
                    // }}
                  >
                    {cell.column.id === "status" ? (
                      <span
                        style={{
                          backgroundColor: getStatusColor(cell.value),
                          padding: "5px",
                          borderRadius: "7px",
                        }}
                      >
                        {cell.render("Cell")}
                      </span>
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
    case "Paid":
      return "#bdeee8";
    case "Pending":
      return "#F7CB73";
    case "Cancelled":
      return "red";
    default:
      return "black";
  }
};
export default Table;
