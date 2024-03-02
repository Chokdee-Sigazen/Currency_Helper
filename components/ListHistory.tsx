"use client";
import HistoryPage from "./HistoryPage";
const history = [
  { number: 35, from: "Thai Bath", to: "United State Dollars" },
  { number: 35, from: "Thai Bath", to: "United State Dollars" },
  { number: 35, from: "Thai Bath", to: "United State Dollars" },
  { number: 35, from: "Thai Bath", to: "United State Dollars" },
];

export default function ListHistory() {
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
            ></HistoryPage>
          </>
        ))}
      </div>
    </>
  );
}
