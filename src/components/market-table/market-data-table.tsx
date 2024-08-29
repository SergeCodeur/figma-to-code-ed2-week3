import { ColumnDef } from "@tanstack/react-table";

import { Table } from "@/components/ui/table";
import { useTableState } from "@/hooks/use-market-table-state";
import TableBodyComponent from "./market-table-body";
import TableHeaderComponent from "./market-table-header";
import Pagination from "./market-table-pagination";
import SearchInput from "./search-input";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function MarketDataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const { table } = useTableState({ columns, data });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    table.getColumn("crypto_info")?.setFilterValue(event.target.value);
  };

  return (
    <div className="mt-[38px]">
      <div className="flex w-full justify-between items-center">
        <SearchInput
          value={
            (table.getColumn("crypto_info")?.getFilterValue() as string) ?? ""
          }
          onChange={handleSearchChange}
        />
        <span>Catégorie</span>
      </div>
      <div className="mt-8 border border-tokena-gray dark:border-tokena-dark-gray rounded-xxl">
        <div className="flex justify-between items-center p-4">
          <h3 className="text-tokena-dark text-base font-semibold">Market</h3>
          <p>Market data provided by CoinGecko API</p>
        </div>
        <Table className="min-w-max">
          <TableHeaderComponent table={table} />
          <TableBodyComponent table={table} columns={columns} />
        </Table>
        <Pagination table={table} />
      </div>
    </div>
  );
}
