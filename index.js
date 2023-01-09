// function same(arr1, arr2) {
//   if (!arr1 || !arr2) return false;
//   if (arr1.length !== arr2.length) return false;

//   const lookup = {};

//   for (value of arr1) {
//     lookup[value * value] = (lookup[value * value] = 0) + 1;
//   }

//   for (secondValue of arr2) {
//     if (!lookup[secondValue]) return false;
//     lookup[secondValue] -= 1;
//   }
//   return true;
// }

// console.log(same([1, 2, 3], [4, 1, 9])); // true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency

function validAnagram(arr1, arr2) {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;

  let sortedarr1 = arr1.split('').sort().join('');
  let sortedarr2 = arr2.split('').sort().join('');
  return sortedarr1 === sortedarr2;
}

//   const lookup = {};

//   for (value of arr1) {
//     lookup[value] ? (lookup[value] = 1) : (lookup[value] = 1);
//   }

//   for (secondValue of arr2) {
//     if (!lookup[secondValue]) return false;
//     lookup[secondValue] -= 1;
//   }
//   return true;
// }

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const midindex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midindex);
  const rightArr = arr.slice(midindex, arr.length);

  return mergeSort(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex += 0;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }
  return resultarr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}
