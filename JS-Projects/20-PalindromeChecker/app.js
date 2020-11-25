

let input;

const getUserInput = () => {
 input = document.getElementById('input').value
 console.log(input);
 checkIfPalindrome()
}

const checkIfPalindrome = () => {
 // Remove special characters and numbers from the given string
 let temp = input.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\d+/g, '').replace(/_/g, "");
 const reversedWord = temp.split('').reverse().join('')

 console.log(reversedWord === temp);
}