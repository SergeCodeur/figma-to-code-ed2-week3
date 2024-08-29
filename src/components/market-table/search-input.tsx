import { Search } from "@/assets/icons";
import { SearchInputProps } from "@/types";
import { Input } from "../ui/input";

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="relative">
      <Search className="absolute top-1/2 left-2 -translate-y-1/2 text-tokena-dark-gray" />
      <Input
        placeholder="Search crypto.."
        value={value}
        onChange={onChange}
        className="h-10 w-full lg:w-[312px] pl-7 text-tokena-dark-gray dark:border-tokena-dark-gray dark:text-tokena-dark-gray dark:placeholder:tokena-dark-gray rounded-xl"
      />
    </div>
  );
};

export default SearchInput;
