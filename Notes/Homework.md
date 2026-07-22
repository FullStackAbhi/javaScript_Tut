1. Find Largest Element in Array
Question
[3, 7, 2, 9, 1]

Output:

9
Solution
function findLargest(arr) {
    let largest = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest([3,7,2,9,1]));
2. Find Smallest Element
Solution
function findSmallest(arr) {
    let smallest = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

console.log(findSmallest([3,7,2,9,1]));
3. Sum of Array
Question
[1,2,3,4,5]

Output:

15
Solution
function sumArray(arr) {
    let sum = 0;

    for(let num of arr) {
        sum += num;
    }

    return sum;
}

console.log(sumArray([1,2,3,4,5]));
4. Count Even and Odd Numbers
Solution
function countEvenOdd(arr) {
    let even = 0;
    let odd = 0;

    for(let num of arr) {
        if(num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    return {even, odd};
}

console.log(countEvenOdd([1,2,3,4,5,6]));
5. Reverse an Array
Solution
function reverseArray(arr) {
    let result = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

console.log(reverseArray([1,2,3,4]));
6. Reverse a String
Solution
function reverseString(str) {
    let reversed = "";

    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("hello"));
7. Check Palindrome
Question
madam

Output:

true
Solution
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");

    return str === reversed;
}

console.log(isPalindrome("madam"));
8. Count Vowels
Solution
function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for(let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("javascript"));
9. Character Frequency
Question
hello

Output:

{
 h:1,
 e:1,
 l:2,
 o:1
}
Solution
function charFrequency(str) {
    let map = {};

    for(let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    return map;
}

console.log(charFrequency("hello"));
10. First Non-Repeating Character
Solution
function firstUnique(str) {
    let map = {};

    for(let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    for(let char of str) {
        if(map[char] === 1) {
            return char;
        }
    }

    return null;
}

console.log(firstUnique("swiss"));

Output:

w
11. Frequency of Numbers (Map)
Solution
function frequency(arr) {
    let map = {};

    for(let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    return map;
}

console.log(frequency([1,2,2,3,3,3]));
12. Find Duplicate Elements
Solution
function findDuplicates(arr) {
    let map = {};
    let result = [];

    for(let num of arr) {
        map[num] = (map[num] || 0) + 1;
    }

    for(let key in map) {
        if(map[key] > 1) {
            result.push(Number(key));
        }
    }

    return result;
}

console.log(findDuplicates([1,2,3,2,4,5,1]));

Output:

[1,2]
13. Most Frequent Element
Solution
function mostFrequent(arr) {
    let map = {};
    let maxCount = 0;
    let answer = null;

    for(let num of arr) {
        map[num] = (map[num] || 0) + 1;

        if(map[num] > maxCount) {
            maxCount = map[num];
            answer = num;
        }
    }

    return answer;
}

console.log(mostFrequent([1,2,2,3,3,3]));

Output:

3
14. Valid Anagram
Solution
function isAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }

    let map = {};

    for(let char of str1) {
        map[char] = (map[char] || 0) + 1;
    }

    for(let char of str2) {
        if(!map[char]) {
            return false;
        }

        map[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent"));

Output:

true
15. Two Sum
Question
nums = [2,7,11,15]
target = 9

Output:

[0,1]
Solution
function twoSum(nums, target) {
    let map = {};

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if(complement in map) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
}

console.log(twoSum([2,7,11,15], 9));