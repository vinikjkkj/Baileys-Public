export function intValue(num: number) {
  const MAX_VALUE = 0x7fffffff;
  const MIN_VALUE = -0x80000000;
  if (num > MAX_VALUE || num < MIN_VALUE) {
    return (num &= 0xffffffff);
  }
  return num;
}

export function hashCode(strKey: string) {
  let hash = 0;
  if (!strKey) {
    for (let i = 0; i < strKey.length; i++) {
      hash = hash * 31 + strKey.charCodeAt(i);
      hash = intValue(hash);
    }
  }
  return hash;
}