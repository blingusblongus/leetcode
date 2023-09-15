import { describe, test, expect } from "bun:test";
import solution from "./solution";

const cases: [string[], string][] = [
  [["flower", "flow", "flight"], "fl"],
  [["dog", "racecar", "car"], ""],
];

describe("cases", () => {
  for (let i = 0; i < cases.length; ++i) {
    test("case " + i, () => {
      expect(solution(cases[i][0])).toEqual(cases[i][1]);
    });
  }
});
