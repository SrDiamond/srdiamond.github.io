const textElement = document.querySelector('#title');
const text = textElement.innerHTML;
const parts = text.split(/(<br>)/);
const wrappedParts = parts.map(part => {
  if (part === '<br>') {
    return part;
  } else {
    const letters = part.split('');
    const wrappedLetters = letters.map(letter => `<span class="title">${letter}</span>`);
    return wrappedLetters.join('');
  }
});
textElement.innerHTML = wrappedParts.join('');

const titles = document.querySelectorAll('.title');

function toggleTitleClass(title) {
  title.classList.toggle('active');
  let delay = title.classList.contains('active') ? Math.random() * 100000: Math.random() * 10000;
  setTimeout(() => {
    toggleTitleClass(title);
  }, delay);
}

titles.forEach(title => {
  toggleTitleClass(title);
});