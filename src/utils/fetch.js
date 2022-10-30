const BASE_PATH =
  process.env.NODE_ENV === "development" ? "http://localhost:5173" : "";

export const fetch = (url) =>
  fetch(`${BASE_PATH}${url}`).then((res) => res.json());
