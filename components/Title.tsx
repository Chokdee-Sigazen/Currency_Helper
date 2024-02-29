import { useState } from "react";

type topic = {
  title: String;
  pic: String;
  description: String;
};

export default function Title({ title, pic, description }: topic) {
  const [stateTiltle, setStateTitle] = useState(0);
  return (
    <>
      <div
        className={`mx-8 flex max-w-[27%] flex-col  items-center transition-all duration-500 ${
          stateTiltle ? "opacity-100 py-5 text" : "opacity-80 py-10"
        }`}
        onMouseEnter={() => {
          setStateTitle(1);
        }}
        onMouseLeave={() => {
          setStateTitle(0);
        }}
      >
        <div
          style={{ backgroundImage: `url(${pic})` }}
          className={`w-14 h-14  bg-center bg-cover my-3`}
        ></div>
        <div className="font-bold text-[20px] mb-4">{title}</div>
        <div className="text-[20px] font-thin text-center">{description}</div>
      </div>
    </>
  );
}
