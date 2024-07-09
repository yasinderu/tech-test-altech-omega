const modules = require("./index");

test("sort given array in ascending order", () => {
  const arr = [5, 2, 3, 8, 1];
  expect(modules.sortAsc(arr)).toStrictEqual([1, 2, 3, 5, 8]);
});

test("sort given array in descending order", () => {
  const arr = [5, 2, 3, 8, 1];
  expect(modules.sortDesc(arr)).toStrictEqual([8, 5, 3, 2, 1]);
});

test("determine if the given string is palindrome", () => {
  const str1 = "taco cat";
  const str2 = "hello world";

  expect(modules.isPalindrome(str1)).toBe(true);
  expect(modules.isPalindrome(str2)).toBe(false);
});
