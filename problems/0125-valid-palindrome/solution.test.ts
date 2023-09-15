import { describe, test, expect } from "bun:test";
import solution from "./solution";

const cases: Array<[string, boolean]> = [
  ["A man, a plan, a canal: Panama", true],
  ["race a car", false],
  [" ", true],
  ["0P", false],
];

describe("cases", () => {
  for (let i = 0; i < cases.length; ++i) {
    test("case " + i, () => {
      expect(solution(cases[i][0])).toEqual(cases[i][1]);
    });
  }
});
