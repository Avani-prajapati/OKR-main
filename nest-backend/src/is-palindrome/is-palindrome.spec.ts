import { isPalindrome } from './is-palindrome';

describe('isPalindrome', () => {

  it('should return true when the input string is palindrome ', () => {
    const res = isPalindrome('a b4 ba');
    expect(res).toBe(true);
  });
  it('should return true when the input string has space and is palindrome', () => {
    const res = isPalindrome('abb a');
    expect(res).toBe(true);
  });
  it('should return true when the input string contains numbers and is palindrome', () => {
    const res = isPalindrome('a1a');
    // expect(res).toBeTruthy()
    expect(res).toBe(true);
  });
  it('should return true when the input string has case sensitive alphabets and is palindrome', () => {
    const res = isPalindrome('Aba');
    expect(res).toBe(true);
  });
  it('should return true when the input is an empty string', () => {
    const res = isPalindrome('');
    expect(res).toBe(true);
  });
  it('should return false when the input string is not palindrome', () => {
    const res = isPalindrome('ad12 a');
    expect(res).toBeFalsy();
    // expect(res).toBe(false);
  });
});
