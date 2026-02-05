export function isLeapYear(value: number): boolean {
  if (value % 4 == 0 && value % 100 != 0) {
    return true;
  }
  return value % 400 == 0;
}
