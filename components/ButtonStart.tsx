"use client";

import { useState } from "react";
import { SignIn_Popup } from "./SignIn_Popup";

export function ButtonStart() {
  const [signInPopUp, setSignInPopUp] = useState(false);
  return (
    <>
      <div className="flex my-5">
        <SignIn_Popup
          trigger={signInPopUp}
          setClosed={setSignInPopUp}
        ></SignIn_Popup>
        <button
          onClick={() => {
            setSignInPopUp(true);
          }}
          className=" w-36 h-12 bg-[#4797C0] rounded-lg mr-4 font-bold flex-col justify-center flex hover:bg-[#397D9F] transition-all duration-200"
        >
          <span className=" mx-auto text-[20px] text-center">Get Start</span>
        </button>
        <a
          href="https://github.com/Chokdee-Sigazen"
          className=" w-36 h-12 bg-[#6D42CA] rounded-lg mr-4 font-bold  justify-center flex hover:bg-[#513197] transition-all duration-200 "
        >
          <span className=" text-[20px] my-auto mr-2">Github</span>
          <div className=" w-6 h-6 bg-[url('/pic/github.png')] bg-center bg-cover rounded-full my-auto"></div>
        </a>
      </div>
    </>
  );
}
