"use client";
import { ChevronUpDown } from "@/assets/icons";
import { useState } from "react";
import { Button } from "./button";
import { Command, CommandGroup, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const frameworks = [
  {
    value: "usd",
    label: "USD",
  },
  {
    value: "eur",
    label: "EUR",
  },
  {
    value: "cad",
    label: "CAD",
  },
];

const CurrencySelector = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="icon-button"
          role="combobox"
          aria-expanded={open}
          className="w-[89px] h-9 text-xs dark:border-tokena-dark-gray dark:text-tokena-light-gray"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "USD"}
          <ChevronUpDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-background">
        <Command>
          <CommandList>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CurrencySelector;
