const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const sortBtn = document.getElementById('sort');
const millionairesBtn = document.getElementById('show-millionaires');
const wealthBtn = document.getElementById('calculate-wealth');

// let data = []
getRandomUser();
getRandomUser();
getRandomUser();

// Fetch random user and amount of wealth
async function getRandomUser() {
 const res = await fetch('https://randomuser.me/api')
 const data = await res.json()

 const user = data.results[0]

 const newUser = {
  name: `${user.name.first} ${user.name.last}`,
  wealth: Math.floor(Math.random() * 1000000)
 }
 addData(newUser);
}
// Add user to the data array
function addData(obj) {
 data.push(obj);
 updateDOM();
}

// Double the wealth of users (Map)
function doubleWealth() {
 data = data.map(user => {
  return { ...user, wealth: user.wealth * 2 };
 });
 updateDOM();
}

// Sort by most wealth (Sort)
function sortByMotsWealth() {
 data.sort((a, b) => b.wealth - a.wealth);
 updateDOM();
}

// Displaly only those with more than one million (Filter)
function showMillionaires() {
 data = data.filter(item => item.wealth > 1000000);
 updateDOM();
}

// Calculate total wealth (Reduce)
function calculateTotalWealth() {

 const totalWealth = data.reduce((acc, red) => (acc += red.wealth), 0);
 const wealthElement = document.createElement('div');

 wealthElement.innerHTML = `<h3>Total wealth:<strong>${formatMoney(totalWealth)}</strong></h3>`;

 main.appendChild(wealthElement);
}

// Update DOM
function updateDOM(providedData = data) {
 // Clear the main div
 main.innerHTML = '<h2><strong class="strong">Person</strong> Wealth</h2>';
 providedData.forEach(item => {
  const element = document.createElement('div');
  element.classList.add('person')
  element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.wealth)}`;
  main.appendChild(element)
 });
}

// Format numbers as money
function formatMoney(amount) {
 return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').concat(' €');
}

// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleWealth);
sortBtn.addEventListener('click', sortByMotsWealth);
millionairesBtn.addEventListener('click', showMillionaires);
wealthBtn.addEventListener('click', calculateTotalWealth);



