import { rest } from "msw";
import endings from "./endings.json";
import equipment from "./equipment.json";
import openings from "./openings.json";

const BASE_PATH =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5173"
    : "https://lightit-challenge.vercel.app";

export const handlers = [
  rest.get(`${BASE_PATH}/terminaciones`, (req, res, ctx) => {
    ctx.delay(200);
    return res(ctx.json(endings));
  }),
  rest.get(`${BASE_PATH}/equipamiento`, (req, res, ctx) => {
    ctx.delay(200);
    return res(ctx.json(equipment));
  }),
  rest.get(`${BASE_PATH}/aberturas`, (req, res, ctx) => {
    // ctx.delay(200);
    return res(ctx.json(openings));
  }),
];
