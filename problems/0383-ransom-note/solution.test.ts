import { describe, test, expect } from "bun:test";
import solution from "./solution";

const cases: Array<[string[], boolean]> = [
    [["a", "b"], false],
    [["aa", "ab"], false],
    [["aa", "aab"], true],
    [["aab", "baa"], true],
];

describe("cases", () => {
    for (let i = 0; i < cases.length; ++i) {
        test("case " + i, () => {
            expect(solution(cases[i][0][0], cases[i][0][1])).toEqual(
                cases[i][1],
            );
        });
    }
});
