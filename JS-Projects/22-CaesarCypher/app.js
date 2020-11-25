
let input_value;


const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
const section = document.getElementById('result-section')
const placeholder = document.getElementById('result-placeholder')
const form = document.getElementById('form')

const handleFormEvent = (event) => {
 event.preventDefault()
 console.log("HELLLLLOOOOOOOOO");
};

const handleUserInput = () => {
 input_value = document.getElementById('input-value').value
 cipherTheShitOutOfIt()
}


const cipherTheShitOutOfIt = () => {

 form.addEventListener('click', handleFormEvent)

 // Grab the input value and make an array out of it
 const temp = input_value.split('')

 // Intantialte an aray to hold the indexes of the array
 let indexArray = []

 // Get the index of the given letter and push it to the indexes array
 temp.map(letter => {
  indexArray.push(alphabet.indexOf(letter))
 })

 // Loop though the indexes array and update the indexes with the ciphers values
 indexArray = indexArray.map(number => number + 16)

 // Find the values in the alphabet of the new indexes in the indexes array
 // If the index is greater than 25, restart counting the modulo of it
 indexArray = indexArray.map(index => index > 25 ? index % 25 : index)

 // Rassemble the cifered word
 let cipheredWord = indexArray.map(index => alphabet[index])

 // Remove the class of the hidden div
 section.classList.remove('hideElement')

 // Write the value to it 
 placeholder.innerHTML = cipheredWord.toString().split(',').join('');

 console.log("Form submmitted");
}
