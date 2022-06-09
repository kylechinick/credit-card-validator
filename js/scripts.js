console.log('test');

const cardNumberTest = 4102080880435620;
console.log('cardNumberTest: ', cardNumberTest);

function validate(cardNumber) {
  // // TURN DATA INTO STRING
  // const digitsToString = cardNumber.toString();
  // console.log('digitsToString: ', digitsToString);

  // // TURN STRING INTO ELEMENTS IN AN ARRAY
  // const digitsToStringSplit = cardNumber.toString().split('');
  // console.log('digitsToStringSplit ', digitsToStringSplit);

  // // TURN ELEMENTS IN ARRAY INTO NUMBERS
  // const digitsToStringSplitMap = cardNumber.toString().split('').map(Number);
  // console.log('digitsToStringSplitMap ', digitsToStringSplitMap);

  const digits = cardNumber.toString().split('').map(Number);
  const doubleDigits = [];
  console.log(digits);

  for (let i = digits.length - 1; i >= 0; i -= 1) {
    if (!i % 2 === 0) {
      doubleDigits.push(digits[i] * 2);
      console.log('doubleDigits: ' + doubleDigits);
    }
  }
  return digits;
}

validate(cardNumberTest);
