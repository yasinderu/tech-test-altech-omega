function fishBash(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "fish";
    }
    if (i % 5 === 0) {
      output += "bash";
    }
    if (output === "") {
      output = i.toString();
    }
    console.log(output);
  }
}
fishBash(5);

function sortAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function sortDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
let arr = [3, 7, 2, 1, 8, 4, 5, 6];
console.log(sortAsc(arr));
console.log(sortDesc(arr));

function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "");

  const reversed = str.split("").reverse().join("");

  return str === reversed;
}
console.log(isPalindrome("taco cat")); // true
console.log(isPalindrome("hello world")); // false

module.exports = {
  sortAsc,
  sortDesc,
  isPalindrome,
};
