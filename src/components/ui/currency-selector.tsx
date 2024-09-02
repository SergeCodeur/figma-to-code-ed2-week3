"use client";
import { ChevronUpDown } from "@/assets/icons";
import { useState } from "react";
import { Button } from "./button";
import { Command, CommandGroup, CommandItem, CommandList } from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

const currencys = [
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
          className="w-[89px] max-sm:w-20 h-9 text-xs max-sm:text-xxs dark:border-tokena-dark-gray dark:text-tokena-light-gray"
        >
          {value
            ? currencys.find((currency) => currency.value === value)?.label
            : "USD"}
          <ChevronUpDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-background">
        <Command>
          <CommandList>
            <CommandGroup>
              {currencys.map((currency) => (
                <CommandItem
                  key={currency.value}
                  value={currency.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {currency.label}
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
