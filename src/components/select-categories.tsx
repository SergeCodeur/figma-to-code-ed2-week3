import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectCategories = () => {
  return (
    <Select>
      <SelectTrigger className="w-ful lg:w-[234px]">
        <SelectValue placeholder="Catégories" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="gmci">GMCI 30 Index</SelectItem>
          <SelectItem value="smart-contract">
            Smart Contract Platform
          </SelectItem>
          <SelectItem value="ftx-holdings">FTX Holdings</SelectItem>
          <SelectItem value="usd-stablecoin">USD Stablecoin</SelectItem>
          <SelectItem value="pantera-capital-porfolio">
            Pantera Capital Portfolio
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategories;
