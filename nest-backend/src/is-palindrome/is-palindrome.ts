export function isPalindrome(input: string) {
  if (input.length === 0) return true;

  const modifiedInput = input.replaceAll(' ', '').toLowerCase();
  console.log(modifiedInput);
  const reverse = modifiedInput.split('').reverse().join('');
  return reverse == modifiedInput;
}
