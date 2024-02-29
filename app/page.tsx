"use client";

import ComboBox from "@/components/ComboBox";
import HistoryPage from "@/components/HistoryPage";
import InputNumber from "@/components/InputNumber";
import NavBar from "@/components/NavBar";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import Image from "next/image";

const topic = [
  {
    no: 1,
    title: "Greate API",
    description:
      "Start converting currencies instantly with our user-friendly interface.",
    img: "/pic/logo1.png",
  },
  {
    no: 2,
    title: "Make informed decisions",
    description: "Navigate the market with clear insights.",
    img: "/pic/logo2.png",
  },
  {
    no: 3,
    title: "Practice Project",
    description:
      "website project for practice Next.js and using API and Practice designing Skill",
    img: "/pic/logo3.png",
  },
];

export default function Home() {
  return (
    <div className=" bg-[#252439] w-full h-auto overflow-hidden">
      <div className="bg-[url('/pic/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="w-[85%] mx-auto ">
          <NavBar></NavBar>
          <div className="flex w-full min-h-[75vh] bg-cover bg-center ">
            <div className="flex w-full min-h-full  mx-auto">
              <div className=" h-full w-[60%] flex flex-col justify-center">
                <h1 className=" font-bold text-white text-[50px] font-outfit">
                  Track and Convert Currency
                </h1>
                <span className=" text-[20px]">
                  Get real-time exchange rates and manage your <br></br>
                  personalized watchlist.
                </span>
                <div className="flex my-5">
                  <div className=" w-36 h-12 bg-[#4797C0] rounded-lg mr-4 font-bold flex-col justify-center flex hover:bg-[#397D9F] transition-all duration-200">
                    <span className=" text-[20px] text-center">Get Start</span>
                  </div>
                  <div className=" w-36 h-12 bg-[#6D42CA] rounded-lg mr-4 font-bold  justify-center flex hover:bg-[#513197] transition-all duration-200 ">
                    <span className=" text-[20px] my-auto mr-2">Discord</span>
                    <div className=" w-6 h-6 bg-[url('/pic/github.png')] bg-center bg-cover rounded-full my-auto"></div>
                  </div>
                </div>
              </div>
              <div className=" h-full w-[40%] bg-[url('/pic/computer1.png')] bg-center b-cover"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3B395C] min-h-[45vh] py-4">
        <div className="w-[85%] mx-auto min-h-[40vh] flex flex-col justify-center">
          <div className="flex w-full justify-center">
            {topic.map((item) => (
              <Title
                key={item.title}
                description={item.description}
                title={item.title}
                pic={item.img}
              ></Title>
            ))}
          </div>
        </div>
      </div>
      <div className="min-h-[100vh] mt-5 mb-20">
        <div className="flex flex-col max-w-[85%] h-full mx-auto" id="Cal">
          <div className="flex flex-col my-2 mt-4 h-auto ">
            <span className="text-[20px] text-[#C1C1C1]">
              1 Thai Bath Equals
            </span>
            <h1 className="font-bold font-outfit text-[40px]">
              0.0279 United State Dollar
            </h1>
          </div>
          <div className="flex h-auto">
            <div className="w-auto flex flex-col">
              <div className="flex">
                <InputNumber></InputNumber>
                <ComboBox></ComboBox>
              </div>
              <div className="flex my-4">
                <InputNumber></InputNumber>
                <ComboBox></ComboBox>
              </div>
            </div>
            <div className="w-full h-[35vh] bg-gradient-to-b from-[#4E416C] to-[#8C69D8] rounded-lg"></div>
          </div>
          <div className="mx-auto w-full my-5">
            <HistoryPage
              index={0}
              number={35}
              from={"Thai Bath"}
              to={"United State Dollars"}
            ></HistoryPage>
            <HistoryPage
              index={1}
              number={35}
              from={"Thai Bath"}
              to={"United State Dollars"}
            ></HistoryPage>
            <HistoryPage
              index={2}
              number={35}
              from={"Thai Bath"}
              to={"United State Dollars"}
            ></HistoryPage>
          </div>
          <button className="h-6 w-20 bg-[#9994E7] font-bold text-[17px] text-[#23213D] my-4 rounded-md mx-auto">
            More
          </button>
        </div>
      </div>
      <div id="contact">
        <Footer></Footer>
      </div>
    </div>
  );
}
