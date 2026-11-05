import { fetchData } from "./fetchData.js";

async function displayData() {
  const res = await fetchData();
  if (res === null) {
    console.log("No data to display due to fetch error.");
  } else {
    console.table(res);
  }
}
displayData();
