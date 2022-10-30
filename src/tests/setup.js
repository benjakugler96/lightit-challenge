import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import "@testing-library/jest-dom";
import { fetch } from "cross-fetch";
import { server } from "../mocks/server";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// fetch polyfill
global.fetch = fetch;

beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  server.resetHandlers();
});
afterAll(() => server.close());
