import { isLeapYear } from './is-leap-year';

describe('isLeapYear', () => {
  it('should return true when input value is leap year', () => {
    const result = isLeapYear(2020);
    expect(result).toBe(true);
  });

  it('should return false when input is not leap year', () => {
    const result = isLeapYear(100);
    expect(result).toBe(false);
  });
});
