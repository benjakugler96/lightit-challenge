import { rest } from "msw";
import endings from "./endings.json";
import equipment from "./equipment.json";
import openings from "./openings.json";

export const handlers = [
  rest.get("/terminaciones", (req, res, ctx) => {
    ctx.delay(200);
    return res(ctx.json(endings));
  }),
  rest.get("/equipamiento", (req, res, ctx) => {
    ctx.delay(200);
    return res(ctx.json(equipment));
  }),
  rest.get("/aberturas", (req, res, ctx) => {
    ctx.delay(200);
    return res(ctx.json(openings));
  }),
];
