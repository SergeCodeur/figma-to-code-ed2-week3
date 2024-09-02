"use client";
import { ChevronUpDown } from "@/assets/icons";
import { useState } from "react";
import { Button } from "./button";
import { Command, CommandGroup, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const rows = [
  {
    value: "row",
    label: "Row",
  },
];

const RowSelector = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="icon-button"
          role="combobox"
          aria-expanded={open}
          className="w-[89px] max-sm:w-20 h-9 text-xs max-sm:text-xxs dark:border-tokena-dark-gray dark:text-tokena-light-gray"
        >
          {value ? rows.find((row) => row.value === value)?.label : "Row"}
          <ChevronUpDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-28 lg:w-[200px] p-0 bg-background">
        <Command>
          <CommandList>
            <CommandGroup>
              {rows.map((row) => (
                <CommandItem
                  key={row.value}
                  value={row.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {row.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default RowSelector;
