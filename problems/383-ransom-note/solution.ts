export default function canConstruct(
    ransomNote: string,
    magazine: string,
): boolean {
    const checked = new Set<string>();

    for (let i = 0; i < ransomNote.length; ++i) {
        const letter = ransomNote[i];
        if (checked.has(letter)) continue;

        let rCount = 0;
        for (let j = i; j < ransomNote.length; ++j) {
            if (ransomNote[j] === letter) ++rCount;
        }

        let mCount = 0;
        let enough = false;

        for (let j = 0; j < magazine.length; ++j) {
            if (magazine[j] === letter) {
                ++mCount;
                if (mCount >= rCount) {
                    enough = true;
                    checked.add(letter);
                }
            }
        }

        if (!enough) return false;
    }
    return true;
}
