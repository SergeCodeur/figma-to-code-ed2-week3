import { ChevronLeft, ChevronRight } from "@/assets/icons";
import { Table } from "@tanstack/react-table";
import { Button } from "../ui/button";

interface PaginationProps<TData> {
  table: Table<TData>;
}

const Pagination = <TData,>({ table }: PaginationProps<TData>) => {
  const renderPageNumbers = () => {
    const pages = [];
    const totalPages = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex + 1;
    const pageRange = 2;

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - pageRange && i <= currentPage + pageRange)
      ) {
        pages.push(
          <Button
            key={i}
            size="icon"
            className={`transition-colors duration-300 border border-transparent dark:border-tokena-dark-gray max-xs:h-8 max-xs:w-8 ${
              i === currentPage
                ? "bg-tokena-blue text-tokena-white !border-transparent"
                : "bg-transparent text-tokena-blue"
            }`}
            onClick={() => table.setPageIndex(i - 1)}
          >
            {i}
          </Button>
        );
      } else if (
        i === currentPage - pageRange - 1 ||
        i === currentPage + pageRange + 1
      ) {
        pages.push(
          <Button
            key={i}
            size="icon"
            className="bg-transparent text-tokena-blue dark:border-tokena-dark-gray"
          >
            ...
          </Button>
        );
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between gap-3 p-4 border-t border-tokena-gray dark:border-tokena-dark/25 max-sm:flex-col">
      <span className="hidden lg:block">
        <span className="text-tokena-dark text-sm font-medium">
          Showing {table.getState().pagination.pageIndex + 1} to{" "}
          {table.getPageCount()} of {table.getFilteredRowModel().rows.length}{" "}
          results
        </span>
      </span>
      <div className="flex items-center gap-4 max-sm:gap-1.5">
        <Button
          className="bg-transparent text-tokena-dark disabled:text-tokena-dark-gray border border-tokena-dark-gray max-xs:h-8 max-xs:w-8"
          size="icon"
          variant="ghost"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        {renderPageNumbers()}
        <Button
          className="bg-transparent text-tokena-dark disabled:text-tokena-dark-gray border border-tokena-dark-gray max-xs:h-8 max-xs:w-8"
          size="icon"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
      <div className="w-full flex items-center justify-between">
        <span className="block lg:hidden">
          <span className="text-tokena-dark text-xs sm:text-sm font-medium">
            Showing {table.getState().pagination.pageIndex + 1} to{" "}
            {table.getPageCount()} of {table.getFilteredRowModel().rows.length}{" "}
            results
          </span>
        </span>
        <span>Row</span>
      </div>
    </div>
  );
};

export default Pagination;
