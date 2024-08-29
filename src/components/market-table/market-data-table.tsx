import { ColumnDef } from "@tanstack/react-table";

import { Ellipsis } from "@/assets/icons";
import { Table } from "@/components/ui/table";
import useCryptoMarketData from "@/hooks/use-fetch-crypto-market";
import { useTableState } from "@/hooks/use-market-table-state";
import { Button } from "../ui/button";
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
  const { isLoading, error } = useCryptoMarketData();

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
          <Button
            size="icon-xs"
            variant="icon-button"
            className="dark:border-tokena-dark-gray dark:text-tokena-light-gray"
          >
            <Ellipsis />
          </Button>
        </div>
        <Table className="min-w-max">
          <TableHeaderComponent table={table} />
          <TableBodyComponent
            table={table}
            columns={columns}
            isLoading={isLoading}
            error={error}
          />
        </Table>
        <Pagination table={table} />
      </div>
    </div>
  );
}
