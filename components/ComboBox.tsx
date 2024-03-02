"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

type require = {
  people: { name: String; id: any }[];
  selected: any;
  selected2: any;
  setSelected: any;
  setNumberCal: any;
  data: { name: string; value: number }[];
  number: any;
};

function findValue(data_arr: { name: String; value: number }[], name: String) {
  for (const item of data_arr) {
    if (item.name === name) {
      return item.value;
    }
  }
  return 0; // Return 0 if not found
}

export default function ComboBox({
  setNumberCal,
  people,
  selected,
  setSelected,
  selected2,
  data,
  number,
}: require) {
  const [query, setQuery] = useState("");
  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className=" w-72 mx-4">
      <Combobox
        value={selected}
        onChange={(event) => {
          console.log(number);
          setSelected(event);
          console.log(event.name);
          if (number == 1) {
            setNumberCal(
              findValue(data, selected2.name.split("(")[1].substring(0, 3)) /
                findValue(data, event.name.split("(")[1].substring(0, 3))
            );
          } else {
            setNumberCal(
              findValue(data, event.name.split("(")[1].substring(0, 3)) /
                findValue(data, selected2.name.split("(")[1].substring(0, 3))
            );
          }
        }}
      >
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-black text-left shadow-md focus:outline-none focus-visible:ring-2 ">
            <Combobox.Input
              className=" z-10 w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-white font-bold font-outfit focus:ring-0 bg-[#7875B4]"
              displayValue={(person: any) => person.name}
              onChange={(event) => {
                setQuery(event.target.value);
              }}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-[#252439]"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#8f8bd5] py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none px-4 py-2 text-white font-bold font-outfit">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-[#33324f] text-white" : "text-[#252439]"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected
                              ? "font-medium font-outfit"
                              : "font-medium font-outfit"
                          }`}
                        >
                          {person.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-[#252439]"
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
