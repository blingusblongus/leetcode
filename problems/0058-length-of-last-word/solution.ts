export default function lengthOfLastWord(s: string): number {
  let re = /(\w+)\s*$/;
  let match = s.match(re)?.[1] || [];
  return match.length;
}
