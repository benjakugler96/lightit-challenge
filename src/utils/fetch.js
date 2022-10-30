const BASE_PATH =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://lightit-challenge.vercel.app/";

export const fetchApi = async (url) => {
  try {
    const response = await fetch(`${BASE_PATH}${url}`);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error();
  }
};
