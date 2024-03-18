import ComboBox from "@/components/ComboBox";
import InputNumber from "@/components/InputNumber";
import NavBar from "@/components/NavBar";
import Title from "@/components/Title";
import Footer from "@/components/Footer";
import ListHistory from "@/components/ListHistory";
import Calculator from "@/components/Calculator";
import { ButtonStart } from "@/components/ButtonStart";

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

async function getDataLatest() {
  const res = await fetch("https://www.frankfurter.app/latest");
  const data = await res.json();
  const data_arr: { name: string; value: number }[] = [];
  Object.keys(data.rates).forEach((key) =>
    data_arr.push({ name: key, value: data.rates[key] })
  );
  return data_arr;
}

export default async function Home() {
  const value = await getDataLatest();

  return (
    <div id="Home" className=" bg-[#252439] w-full h-auto overflow-hidden">
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
                <ButtonStart></ButtonStart>
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
          <Calculator data={value}></Calculator>
        </div>
      </div>
      <div id="contact">
        <Footer></Footer>
      </div>
    </div>
  );
}
