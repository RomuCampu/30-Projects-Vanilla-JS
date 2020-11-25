
// Grab the placeholder html element to write the result to
const roman_num = document.getElementById('roman-number');
// Declare variable to hold the input
let input;

// Grab the input
const getUserInput = () => {
 input = document.getElementById('input').value;
 const value = Number(input);
 // Check if value is 0
 if (value === 0) return roman_num.innerHTML = "Enter a number";
 // Call the convert method
 convertToRomanNumbers();
}

const convertToRomanNumbers = () => {
 const value = Number(input);
 if (value < 10 && value > 0) roman_num.innerHTML = convertOneDigit(value);
 if (value < 100 && value >= 10) roman_num.innerHTML = convertTwoDigits(value);
 if (value < 1000 && value >= 100) {
  // if (value % 10 < 10) {
  //  roman_num.innerHTML = convertThreeDigits(value);
  //  // return roman_num.innerHTML += convertOneDigit(value % 10)
  // }
  roman_num.innerHTML = convertThreeDigits(value);
 }
 if (value < 5000 && value >= 1000) roman_num.innerHTML = convertFourDigits(value);
}

const convertOneDigit = (number) => {
 return getOneDigitAndConvertItToRoman(number);
}

const convertTwoDigits = (number) => {
 const temp = number.toString().split('');
 let romanNum = "X";

 if (number < 10) return convertOneDigit(number);

 if (number < 20 && number >= 10) {
  return number === 10 ? romanNum : romanNum + convertOneDigit(number);
 }
 if (number < 30 && number >= 20) {
  return number === 20 ? romanNum += "X" : romanNum += "X" + convertOneDigit(Number(temp[1]));
 }
 if (number < 40 && number >= 30) {
  return number === 30 ? romanNum += "XX" : romanNum += "XX" + convertOneDigit(Number(temp[1]));
 }
 if (number < 50 && number >= 40) {
  return number === 40 ? romanNum = "XL" : romanNum = "XL" + convertOneDigit(Number(temp[1]));
 }
 if (number < 60 && number >= 50) {
  return number === 50 ? romanNum = "L" : romanNum = "L" + convertOneDigit(Number(temp[1]));
 }
 if (number < 70 && number >= 60) {
  return number === 60 ? romanNum = "LX" : romanNum = "LX" + convertOneDigit(Number(temp[1]));
 }
 if (number < 80 && number >= 70) {
  return number === 70 ? romanNum = "LXX" : romanNum = "LXX" + convertOneDigit(Number(temp[1]));
 }
 if (number < 90 && number >= 80) {
  return number === 80 ? romanNum = "LXXX" : romanNum = "LXXX" + convertOneDigit(Number(temp[1]));
 }
 if (number < 100 && number >= 90) {
  return number === 90 ? romanNum = "XC" : romanNum = "XC" + convertOneDigit(Number(temp[1]));
 }
}

const convertThreeDigits = (number) => {
 const temp = number.toString().split('');

 const decimals = Number(temp.slice(1).join(""));

 if (number < 100) return convertTwoDigits(number);

 let romanNum = "C";

 if (Number(temp[0]) === 0) return convertTwoDigits(Number(temp.slice(1).toString()));
 if (number < 200 && number >= 100) { return number === 100 ? romanNum : romanNum + convertTwoDigits(decimals); }
 if (number < 300 && number >= 200) { return number === 200 ? romanNum += "C" : romanNum += "C" + convertTwoDigits(decimals); }
 if (number < 400 && number >= 300) { return number === 300 ? romanNum += "CC" : romanNum += "CC" + convertTwoDigits(decimals); }
 if (number < 500 && number >= 400) { return number === 400 ? romanNum = "CD" : romanNum = "CD" + convertTwoDigits(decimals); }
 if (number < 600 && number >= 500) { return number === 500 ? romanNum = "D" : romanNum = "D" + convertTwoDigits(decimals); }
 if (number < 700 && number >= 600) { return number === 600 ? romanNum = "DC" : romanNum = "DC" + convertTwoDigits(decimals); }
 if (number < 800 && number >= 700) { return number === 700 ? romanNum = "DCC" : romanNum = "DCC" + convertTwoDigits(decimals); }
 if (number < 900 && number >= 800) { return number === 800 ? romanNum = "DCCC" : romanNum = "DCCC" + convertTwoDigits(decimals); }
 if (number < 1000 && number >= 900) { return number === 900 ? romanNum = "CM" : romanNum = "CM" + convertTwoDigits(decimals); }
}

const convertFourDigits = (number) => {
 const temp = number.toString().split('');
 const threeLastDigits = Number(temp.slice(1).join(""));
 const value = Number(number);
 let romanNum = "";

 if (number < 1000) return convertThreeDigits(number);

 if (value < 4000 && value >= 3000) { return romanNum === 3000 ? romanNum = "MMM" : romanNum = "MMM" + convertThreeDigits(Number(threeLastDigits)); }
 if (value < 3000 && value >= 2000) { return romanNum === 2000 ? romanNum = "MM" : romanNum = "MM" + convertThreeDigits(Number(threeLastDigits)); }
 if (value < 2000 && value >= 1000) { return romanNum === 1000 ? romanNum = "M" : romanNum = "M" + convertThreeDigits(Number(threeLastDigits)); }
}

const getOneDigitAndConvertItToRoman = (number) => {
 const decimal = Number(number) > 9 ? Number(number % 10) : number;

 let temp = findDigitValue(Number(decimal));

 switch (temp) {
  case 1: return "I";
  case 2: return "II";
  case 3: return "III";
  case 4: return "IV";
  case 5: return "V";
  case 6: return "VI";
  case 7: return "VII";
  case 8: return "VIII";
  case 9: return "IX";
 }
}

const findDigitValue = (digit) => {
 for (let i = 0; i < 10; i++) {
  if (digit === i) {
   return i;
  }
 }
}

