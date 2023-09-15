import { describe, test, expect } from "bun:test";
import solution from "./solution";

const cases: Array<[string[], boolean]> = [
    [["abba", "dog cat cat dog"], true],
    [["abba", "dog cat cat fish"], false],
    [["aaaa", "dog cat cat dog"], false],
];

describe("cases", () => {
    for (let i = 0; i < cases.length; ++i) {
        test(`${cases[i][0]} => ${cases[i][1]}`, () => {
            expect(solution(cases[i][0][0], cases[i][0][1])).toEqual(
                cases[i][1],
            );
        });
    }
});
