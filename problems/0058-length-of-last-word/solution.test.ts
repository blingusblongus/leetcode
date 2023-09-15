import { describe, test, expect } from "bun:test";
import solution from "./solution";

const cases: [string, number][] = [
  ["Hello World", 5],
  ["   fly me   to   the moon  ", 4],
  ["luffy is still joyboy", 6],
];

describe("cases", () => {
  for (let i = 0; i < cases.length; ++i) {
    test(`${cases[i][0]} => ${cases[i][1]}`, () => {
      expect(solution(cases[i][0])).toEqual(cases[i][1]);
    });
  }
});
