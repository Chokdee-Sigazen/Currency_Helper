import React from "react";

interface Props {
  trigger: boolean;
  setClosed: any;
}

export function SignIn_Popup({ trigger, setClosed }: Props) {
  console.log(trigger);
  return (
    <div
      className={`fixed z-40 transition-opacity duration-200 ${
        trigger ? "opacity-100" : "opacity-0 invisible"
      }`}
    >
      <div className=" fixed min-h-[100vh] opacity-50 left-0 top-0 z-30 min-w-full bg-black "></div>
      <div className="flex left-0 right-0 h-full w-full justify-center items-center  fixed z-40 inset-0">
        <div className=" w-[85%] h-[80%] bg-gradient-to-r from-[#AAA1CD] to-[#46417a] z-40 rounded-lg  text-black">
          <div className="flex items-center justify-between max-w-[90%]   mt-6 mb-3 mx-auto ">
            <div className=" text-[55px] font-outfit font-bold text-[#4F286E]">
              Sign In
            </div>
            <button
              onClick={() => {
                setClosed(false);
              }}
              className=" min-h-12 min-w-12 bg-[#A18EEE] hover:bg-[#9784e2] transition-colors rounded-full text-lg font-bold text-[#39264B]"
            >
              X
            </button>
          </div>

          <div className=" flex w-[90%] mx-auto max-h-15 ">
            <div className="min-w-[45%] flex flex-col ">
              <div className="flex w-full  ">
                <div className=" flex flex-col max-h-15 mr-5">
                  <div className=" text-[#45295B] font-outfit text-[17px] font-bold">
                    Firstname
                  </div>
                  <input
                    type="text"
                    className="h-10 my-2 outline-none font-bold focus:outline-none focus:outline-purple-900 bg-[#DCD9FB] p-2   min-w-[50%] rounded-md"
                  ></input>
                </div>
                <div className=" flex flex-col max-h-15 mr-5 ">
                  <div className=" text-[#45295B] font-outfit text-[17px] font-bold">
                    Lastname
                  </div>
                  <input
                    type="text"
                    className="h-10 my-2 outline-none font-bold focus:outline-none focus:outline-purple-900 bg-[#DCD9FB] p-2  min-w-[70%] rounded-md"
                  ></input>
                </div>
              </div>
              <div className=" text-[#45295B] font-outfit text-[17px] font-bold">
                Email
              </div>
              <input
                type="email"
                className="h-10 my-2 outline-none font-bold focus:outline-none focus:outline-purple-900 bg-[#DCD9FB] p-2   min-w-[50%] rounded-md"
              ></input>
              <div className=" text-[#45295B] font-outfit text-[17px] font-bold">
                Password
              </div>
              <input
                type="password"
                className="h-10 my-2 outline-none font-bold focus:outline-none focus:outline-purple-900 bg-[#DCD9FB] p-2   min-w-[50%] rounded-md"
              ></input>
              <div className=" text-[#45295B] font-outfit text-[17px] font-bold">
                Confirm Password
              </div>
              <input
                type="password"
                className="h-10 my-2 outline-none font-bold focus:outline-none focus:outline-purple-900 bg-[#DCD9FB] p-2  min-w-[50%] rounded-md"
              ></input>
              <button
                onClick={() => {
                  setClosed(false);
                }}
                className="h-12 w-36 bg-[#5B3B7B] hover:bg-[#37234a] transition-colors duration-200 mt-5 rounded-md text-[#e2c0ff] font-outfit font-bold"
              >
                Submit
              </button>
            </div>
            <div className="min-h-full w-full ml-5 bg-auto bg-no-repeat bg-[url('/pic/computer2.png')]  bg-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
