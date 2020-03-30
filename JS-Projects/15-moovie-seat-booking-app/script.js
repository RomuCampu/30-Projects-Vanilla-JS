const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

populateUi();

// Update selected count
function updateSelectedCount() {
 const selectedSeats = document.querySelectorAll('.row .seat.selected');

 const indexSelectedSeats = [...selectedSeats].map(seat => [...seats].indexOf(seat));
 localStorage.setItem('selectedSeats', JSON.stringify(indexSelectedSeats))

 const selectedSeatsCount = selectedSeats.length;

 count.innerText = selectedSeatsCount;
 total.innerText = selectedSeatsCount * ticketPrice
}

// Save movie data to local storage
function setMovieData(movieIndex, moviePrice) {
 localStorage.setItem('selectedMovieData', movieIndex);
 localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Get movie data from local storage and add to the ui
function populateUi() {
 // Get selected seats from local storage
 const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
 if (selectedSeats !== null && selectedSeats.length > 0) {
  seats.forEach((seat, index) => {
   if (selectedSeats.indexOf(index) > -1) {
    seat.classList.add("selected")
   }
  });
 }
 // Get movie and prices from local storage
 const selectedMovieIndex = localStorage.getItem('selectedMovieData');
 if (selectedMovieIndex !== null) {
  movieSelect.selectedIdex = selectedMovieIndex;
 }
}

// Movie select event
movieSelect.addEventListener("change", event => {
 ticketPrice = +event.target.value;
 event.target.selectedIdex;
 setMovieData(event.target.selectedIndex, event.target.value);
 updateSelectedCount();
});

// Seat click event
container.addEventListener('click', event => {
 if (event.target.classList.contains('seat') &&
  !event.target.classList.contains('occupied')
 ) {
  event.target.classList.toggle("selected");
  updateSelectedCount();
 }
});

// Set initial count and total
updateSelectedCount();