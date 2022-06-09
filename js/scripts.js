console.log('test');

const cardNumberTest = 1234;
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
  console.log(digits);
}

validate(cardNumberTest);
