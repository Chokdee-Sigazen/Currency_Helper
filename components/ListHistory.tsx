"use client";
import { useState } from "react";
import HistoryPage from "./HistoryPage";
const history = [
  { number: 35, from: "Thai Bath(THB)", to: "United State Dollars(USD)" },
  { number: 35, from: "Thai Bath(THB)", to: "United State Dollars(USD)" },
  { number: 35, from: "Thai Bath(THB)", to: "United State Dollars(USD)" },
  { number: 35, from: "Thai Bath(THB)", to: "United State Dollars(USD)" },
];

export default function ListHistory() {
  const [selected, setSelected] = useState(-1);
  return (
    <>
      <div className="mx-auto w-full my-5">
        {history.map((item, index) => (
          <>
            <HistoryPage
              index={index}
              number={item.number}
              from={item.from}
              to={item.to}
              selected={selected}
              setSelected={setSelected}
            ></HistoryPage>
          </>
        ))}
      </div>
    </>
  );
}
