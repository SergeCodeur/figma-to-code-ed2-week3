import { flexRender, Table } from "@tanstack/react-table";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";

interface TableBodyProps<TData> {
  table: Table<TData>;
  columns: any[];
}
const TableBodyComponent = <TData,>({
  table,
  columns,
}: TableBodyProps<TData>) => {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            className="border-tokena-gray dark:border-tokena-gray/25"
            key={row.id}
            data-state={row.getIsSelected() && "selected"}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id} className="text-tokena-dark">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default TableBodyComponent;
