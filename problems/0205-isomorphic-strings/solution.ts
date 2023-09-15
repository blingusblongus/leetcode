export default function isIsomorphic(s: string, t: string): boolean {
    let map: { [key: string]: string } = {};
    const used = new Set<string>();

    for (let i = 0; i < s.length; ++i) {
        let a = s[i];
        let b = t[i];

        if (map[a] && map[a] !== b) return false;
        if (!map[a] && used.has(b)) return false;

        map[a] = b;
        used.add(b);
    }

    return true;
}
