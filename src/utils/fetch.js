const BASE_PATH =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "http://localhost:5173";

export const fetchApi = async (url) => {
  console.log("hola url", url);
  try {
    const response = await fetch(`${BASE_PATH}${url}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error();
  }
};
