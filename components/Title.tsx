const topic = [
  {
    title: "Greate API",
    description:
      "Start converting currencies instantly with our user-friendly interface.",
    img: "/pic/logo1.png",
  },
  {
    title: "Make informed decisions",
    description: "Navigate the market with clear insights.",
    img: "/pic/logo2.png",
  },
  {
    title: "Practice Project",
    description:
      "website project for practice Next.js and using API and Practice designing Skill",
    img: "/pic/logo3.png",
  },
];

export default function Title() {
  return (
    <>
      <div className="flex w-full justify-center">
        {topic.map((item) => (
          <div
            key={item.title}
            className="mx-8 flex max-w-[27%] flex-col  items-center"
          >
            <div
              style={{ backgroundImage: `url(${item.img})` }}
              className={`w-14 h-14  bg-center bg-cover my-3`}
            ></div>
            <div className="font-bold text-[20px] mb-4">{item.title}</div>
            <div className="text-[20px] font-thin text-center">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
