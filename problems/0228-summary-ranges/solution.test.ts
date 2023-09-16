import { describe, test, expect } from "bun:test";
import solution from "./solution";

const cases: Array<[number[], string[]]> = [
    [
        [0, 1, 2, 4, 5, 7],
        ["0->2", "4->5", "7"],
    ],
    [
        [0, 2, 3, 4, 6, 8, 9],
        ["0", "2->4", "6", "8->9"],
    ],
];

describe("cases", () => {
    for (let i = 0; i < cases.length; ++i) {
        test(`${cases[i][0]} => ${cases[i][1]}`, () => {
            expect(solution(cases[i][0])).toEqual(cases[i][1]);
        });
    }
});
