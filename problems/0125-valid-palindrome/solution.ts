export default function isPalindrome(s: string): boolean {
  let simplified = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  for (let i = 0; i < simplified.length / 2; ++i) {
    if (simplified[i] !== simplified[simplified.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
