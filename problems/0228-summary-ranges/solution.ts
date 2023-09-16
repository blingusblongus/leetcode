export default function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) return [];

    let start: number = nums[0];
    let ranges = [];

    for (let i = 1; i < nums.length; ++i) {
        if (nums[i - 1] + 1 !== nums[i]) {
            if (nums[i - 1] === start) {
                ranges.push(start.toString());
            } else {
                ranges.push(start + "->" + nums[i - 1]);
            }

            start = nums[i];
        }
    }

    const lastNum = nums[nums.length - 1];

    if (start === lastNum) {
        ranges.push(start.toString());
    } else {
        ranges.push(start + "->" + lastNum);
    }

    return ranges;
}
