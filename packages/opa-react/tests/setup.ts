import { /* expect,*/ afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/vitest";
// import { default as matchers } from "@testing-library/jest-dom/matchers";

// expect.extend(matchers);

afterEach(() => {
  cleanup();
});
