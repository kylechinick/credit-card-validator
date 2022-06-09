console.log('test');

const cardNumberTest = 1234;

function validate(cardNumber) {
  console.log('cardNumberTest: ', cardNumber);
  const digitsToString = cardNumber.toString();
  console.log('digitsToString: ', digitsToString);
  const digitsToStringSplit = cardNumber.toString().split('');
  console.log('digitsToStringSplit ', digitsToStringSplit);
  const digitsToStringSplitMap = cardNumber.toString().split('').map(Number);
  console.log('digitsToStringSplitMap ', digitsToStringSplitMap);
  // const digits = cardNumber.toString().split('').map(Number);
  // console.log(digits);
}

validate(cardNumberTest);

// if (x > 10) {
//   x / 2;
// }
