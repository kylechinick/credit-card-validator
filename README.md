# APPLICATION NAME

_Author_:

## Summary

...

## Technologies

- ...

## Description

...

## Setup/Installation

...

## Known bugs

...

## License

...
Test: "It will take data a turn it into a string"
Code: const cardNumber = 1234; cardNumber.toString();
Expected Output: "1234"

Test: "It will take the string and turn it into an array"
Code: const cardNumber = '1234'; cardNumber.split();
Expected Output: ['1','2','3','4']

Test: "It will take the array and turn elements in the array into numbers"
Code: const cardNumber = ['1','2','3','4']; cardNumber.map(Number);
Expected Output: [1,2,3,4]

Test: "It will take the array and run through the elements from right to left."
Code: const cardNumber = ['1','2','3','4']; for (let i = digits.length- 1; i >= 0; i -= 1)
Expected Output: [4, 3, 2, 1]

Test: "It will only select every other element within the array."
Code: const cardNumber = [4, 3, 2, 1]; if (i % 2 === 0) {
console.log('Index ' + i + ' is odd');
}
}
Expected Output: [3, 1]

Test: "It will take the elements and multiply them by 2."
Code: const cardNumber = [3, 1];
Expected Output: [6, 2]
