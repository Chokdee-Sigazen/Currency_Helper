"use client";

import { useState } from "react";
import ComboBox from "./ComboBox";
import InputNumber from "./InputNumber";

const people = [
  { id: 1, name: "Thai Bath (THB)" },
  { id: 2, name: "United State Dollar (USD)" },
];

type Data = {
  data: { name: string; value: number }[];
};

function findValue(data_arr: { name: String; value: number }[], name: String) {
  for (const item of data_arr) {
    if (item.name === name) {
      return item.value;
    }
  }
  return 0; // Return 0 if not found
}

export default function Calculator({ data }: Data) {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(1);
  const [selected1, setSelected1] = useState(people[0]);
  const [selected2, setSelected2] = useState(people[1]);
  const [number_cal, setNumber_Cal] = useState(
    findValue(data, selected2.name.split("(")[1].substring(0, 3)) /
      findValue(data, selected1.name.split("(")[1].substring(0, 3))
  );
  console.log("data = ", data);
  return (
    <>
      <div className="flex flex-col my-2 mt-4 h-auto ">
        <span className="text-[20px] text-[#C1C1C1]">
          1 {selected1.name} Equals
        </span>
        <h1 className="font-bold font-outfit text-[40px]">
          {Math.round(number_cal * 10000) / 10000} {selected2.name}
        </h1>
      </div>
      <div className="flex h-auto">
        <div className="w-auto flex flex-col">
          <div className="flex">
            <InputNumber
              setValueAnother={setValue2}
              num_cal={number_cal}
              setValue={setValue1}
              value={value1}
              number={"1"}
            ></InputNumber>
            <ComboBox
              setNumberCal={setNumber_Cal}
              selected={selected1}
              selected2={selected2}
              people={people}
              setSelected={setSelected1}
              data={data}
              number={"1"}
            ></ComboBox>
          </div>
          <div className="flex my-4">
            <InputNumber
              setValueAnother={setValue1}
              setValue={setValue2}
              value={value2}
              num_cal={number_cal}
              number={"2"}
            ></InputNumber>
            <ComboBox
              number={"2"}
              data={data}
              setNumberCal={setNumber_Cal}
              selected={selected2}
              selected2={selected1}
              people={people}
              setSelected={setSelected2}
            ></ComboBox>
          </div>
        </div>
        <div className="w-full h-[35vh] bg-gradient-to-b from-[#4E416C] to-[#8C69D8] rounded-lg"></div>
      </div>
    </>
  );
}
