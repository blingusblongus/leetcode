export default function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(" ");
    if (words.length !== pattern.length) return false;

    const map = new Map<string, string>();
    const set = new Set<string>();

    for (let i = 0; i < pattern.length; ++i) {
        let existing = map.get(pattern[i]);

        if (existing && words[i] !== existing) return false;
        if (!existing && set.has(words[i])) return false;

        map.set(pattern[i], words[i]);
        set.add(words[i]);
    }

    return true;
}
