type History = {
  index: number;
  from: String;
  to: String;
  number: number;
};

export default function HistoryPage({ index, from, to, number }: History) {
  return (
    <>
      <div
        className={`h-36 rounded-lg  my-3 w-full ${
          index % 2 == 0 ? "bg-[#9894E4]" : "bg-[#94C3E4]"
        }  ${
          index % 2 == 0
            ? "bg-gradient-to-r from-[#434163] "
            : "bg-gradient-to-r from-[#526C7E] "
        }}`}
      >
        <div className="flex flex-col h-full w-full mx-5">
          <div className="flex flex-col my-2 h-auto justify-start ">
            <span className="text-[10px] text-[#C1C1C1]">
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
      </div>
    </>
  );
}
