"use client";
import { motion } from "framer-motion";

type History = {
  index: number;
  from: String;
  to: String;
  number: number;
  selected: number;
  setSelected: Function;
};

export default function HistoryPage({
  index,
  from,
  to,
  number,
  selected,
  setSelected,
}: History) {
  return (
    <>
      <motion.div
        onClick={() => {
          if (selected == index) {
            return setSelected(-1);
          }
          setSelected(index);
        }}
        className={`h-36 rounded-lg  my-3 w-full bg-size-200 duration-200 hover:scale-[1.03] transition-all  ${
          index % 2 == 0
            ? "bg-[#D5C2FF] via-[#9894E4]"
            : "via-[#94C3E4] bg-[#A7FAFF]"
        }  ${
          index % 2 == 0
            ? "bg-gradient-to-r from-[#434163] "
            : "bg-gradient-to-r from-[#526C7E] "
        }} ${selected == index ? " bg-pos-100" : " bg-pos-0"}`}
      >
        <div
          className={`flex flex-col h-full w-full mx-5 ${
            selected == index
              ? `${index % 2 == 0 ? "text-[#383652]" : "text-[#364A58]"}`
              : "text-white"
          }`}
        >
          <div className="flex flex-col my-2 h-auto justify-start ">
            <span
              className={`text-[14px]  ${
                selected == index
                  ? `${index % 2 == 0 ? "text-[#504E75]" : "text-[#4A6C84]"}`
                  : "text-[#C1C1C1]"
              }`}
            >
              1 Thai Bath Equals
            </span>
            <h1 className="font-bold font-outfit text-[30px]">
              0.0279 United State Dollar
            </h1>
          </div>
          <div className="flex">
            <div className="flex my-5">
              <div
                className={`w-auto px-3 h-8 rounded-lg ${
                  index % 2 == 0 ? "bg-[#918ED6]" : "bg-[#8EB8D6]"
                }`}
              >
                <h1 className="my-1 font-outfit mr-6">
                  {number} {from}
                </h1>
              </div>
            </div>
            <div className="flex my-5 mx-3">
              <div
                className={`w-auto px-3 h-8 rounded-lg ${
                  index % 2 == 0 ? "bg-[#918ED6]" : "bg-[#8EB8D6]"
                }`}
              >
                <h1 className="my-1 font-outfit mr-6">
                  {0.98} {to}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
