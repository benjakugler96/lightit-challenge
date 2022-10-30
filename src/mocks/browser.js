import { setupWorker } from "msw";
import { handlers } from "./handlers";
import { isBrowser } from "../utils/isBrowser";
// This configures a Service Worker with the given request handlers.
export const worker = isBrowser()
  ? setupWorker(...handlers)
  : { start: () => {} };
