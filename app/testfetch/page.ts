


async function getDataLatest() {
    const res = await fetch("https://www.frankfurter.app/latest");
    const data = await res.json();
    const data_arr: { name: string; value: number }[] = [];
    Object.keys(data.rates).forEach((key) =>
      data_arr.push({ name: key, value: data.rates[key] })
    );
    return data_arr;
  }

export const data  = getDataLatest();
