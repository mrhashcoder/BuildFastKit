"use client";

import * as React from "react";
import { Column } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface EntryDataTableFacetedFilterProps<TData, TValue> {
  column: Column<TData, TValue> | undefined;
  title: string;
  options: string[];
}

export default function EntryDataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
}: EntryDataTableFacetedFilterProps<TData, TValue>) {
  const facets = column?.getFacetedUniqueValues();
  const selectedValues = new Set((column?.getFilterValue() as string[]) ?? []);

  const [open, setOpen] = React.useState(false);

  if (!column) {
    return null;
  }

  function toggleValue(value: string) {
    if (!value) return;
    if (selectedValues.has(value)) {
      selectedValues.delete(value);
    } else {
      selectedValues.add(value);
    }
    const filterArray = Array.from(selectedValues);
    column?.setFilterValue(filterArray.length ? filterArray : undefined);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
          {title}
          {selectedValues.size > 0 && (
            <span className="ml-2 h-5 w-5 rounded bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {selectedValues.size}
            </span>
          )}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map((option) => {
                const isSelected = selectedValues.has(option);
                return (
                  <CommandItem
                    key={option}
                    onSelect={() => toggleValue(option)}
                    className="cursor-pointer"
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${isSelected ? "opacity-100" : "opacity-0"}`}
                    />
                    {option}
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  column.setFilterValue(undefined);
                  setOpen(false);
                }}
                className="cursor-pointer"
              >
                Clear filter
              </CommandItem>
            </CommandGroup>
          </CommandList>
          <CommandEmpty>No results found</CommandEmpty>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
