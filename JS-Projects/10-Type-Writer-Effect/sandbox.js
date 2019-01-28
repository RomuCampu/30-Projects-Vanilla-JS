const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// TYPE METHOD //
TypeWriter.prototype.type = function() {
  // CURRENT INDEX OF WORDS //
  const current = this.wordIndex % this.words.lenght;
  // GET FULL TEXT OF CURRENT WORDS //
  const fullTxt = this.words[current];
  // console.log(current);
  //console.log(fullTxt + 'hello');

  if(this.isDeleting) {
    // Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  setTimeout(() => this.type(), 500);
}

// INIT ON DOM LOAD //
document.addEventListener('DOMContentLoaded', init);

// INIT APP //
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // INIT THE TYPEWRITER //
  new TypeWriter(txtElement, words, wait);
}