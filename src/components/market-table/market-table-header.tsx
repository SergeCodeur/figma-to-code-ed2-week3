import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { flexRender, Table } from "@tanstack/react-table";

interface TableHeaderProps<TData> {
  table: Table<TData>;
}

const TableHeaderComponent = <TData,>({ table }: TableHeaderProps<TData>) => {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow
          key={headerGroup.id}
          className="border-tokena-gray dark:border-tokena-gray/25"
        >
          {headerGroup.headers.map((header) => {
            return (
              <TableHead
                className="bg-tokena-light-gray dark:bg-tokena-light-gray/10"
                key={header.id}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
    </TableHeader>
  );
};

export default TableHeaderComponent;
