type Input = {
  setValue: any;
  value: number;
  num_cal: number;
  setValueAnother: any;
  number: any;
};

export default function InputNumber({
  setValueAnother,
  num_cal,
  setValue,
  value,
  number,
}: Input) {
  return (
    <>
      <input
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          console.log(event.target.value);
          if (number == 1) {
            setValueAnother(num_cal * event.target.value);
          }
          if (number == 2) {
            setValueAnother((1 / num_cal) * event.target.value);
          }
        }}
        placeholder="1"
        className="rounded-lg text-[17px] transition-all duration-300 outline-none  bg-[#7875B4] focus:bg-[#605e92]  focus:outline-none font-bold font-outfit px-3 "
      ></input>
    </>
  );
}
