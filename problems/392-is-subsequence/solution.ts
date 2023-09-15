export default function isSubsequence(s: string, t: string): boolean {
    let idx = 0;
    for (let i = 0; i < s.length; ++i) {
        let found = false;
        for (let j = idx; j < t.length; ++j) {
            if (s[i] === t[j]) {
                found = true;
                idx = j + 1;
                break;
            }
        }

        if (!found) return false;
    }
    return true;
}
