export function wrap(offset: number, length: number) {
  if (offset >= 0) return offset % length;

  const abs = Math.abs(offset) % length;
  if (abs == 0) return 0;
  return length - abs;
}
