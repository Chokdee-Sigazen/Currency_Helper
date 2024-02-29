async function getData() {
  const res = await fetch("https://www.frankfurter.app/latest");
  const data = await res.json();
  const data_arr: { name: string; value: number }[] = [];
  Object.keys(data.rates).forEach((key) =>
    data_arr.push({ name: key, value: data.rates[key] })
  );
  return findValue(data_arr, "THB");
}

function findValue(data_arr: { name: String; value: number }[], name: String) {
  for (const item of data_arr) {
    if (item.name === name) {
      return item.value;
    }
  }
  return 0; // Return 0 if not found
}

export default async function TestFetch() {
  return getData();
}
