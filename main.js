const form = document.querySelector('form');
const characterDisplay = document.querySelector('#character-display');
const newCharacterButton = document.querySelector('#new-character-button');
const portrait = document.querySelector('#portrait');

// Stats start here
// STR
const strDecreaseButton = document.querySelector('#str-decrease');
const strIncreaseButton = document.querySelector('#str-increase');
const strInput = document.querySelector('#str');

strDecreaseButton.addEventListener('click', () => {
  let value = parseInt(strInput.value);
  if (value > 0) {
    strInput.value = value - 1;
  }
});

strIncreaseButton.addEventListener('click', () => {
  let value = parseInt(strInput.value);
  strInput.value = value + 1;
});

// DEX
const dexDecreaseButton = document.querySelector('#dex-decrease');
const dexIncreaseButton = document.querySelector('#dex-increase');
const dexInput = document.querySelector('#dex');

dexDecreaseButton.addEventListener('click', () => {
  let value = parseInt(dexInput.value);
  if (value > 0) {
    dexInput.value = value - 1;
  }
});
dexIncreaseButton.addEventListener('click', () => {
  let value = parseInt(dexInput.value);
  dexInput.value = value + 1;
});

// STA
const staDecreaseButton = document.querySelector('#sta-decrease');
const staIncreaseButton = document.querySelector('#sta-increase');
const staInput = document.querySelector('#sta');

staDecreaseButton.addEventListener('click', () => {
  let value = parseInt(staInput.value);
  if (value > 0) {
    staInput.value = value - 1;
  }
});
staIncreaseButton.addEventListener('click', () => {
  let value = parseInt(staInput.value);
  staInput.value = value + 1;
});

// WIS
const wisDecreaseButton = document.querySelector('#wis-decrease');
const wisIncreaseButton = document.querySelector('#wis-increase');
const wisInput = document.querySelector('#wis');

wisDecreaseButton.addEventListener('click', () => {
  let value = parseInt(wisInput.value);
  if (value > 0) {
    wisInput.value = value - 1;
  }
});
wisIncreaseButton.addEventListener('click', () => {
  let value = parseInt(wisInput.value);
  wisInput.value = value + 1;
});

// INT
const intDecreaseButton = document.querySelector('#int-decrease');
const intIncreaseButton = document.querySelector('#int-increase');
const intInput = document.querySelector('#int');

intDecreaseButton.addEventListener('click', () => {
  let value = parseInt(intInput.value);
  if (value > 0) {
    intInput.value = value - 1;
  }
});
intIncreaseButton.addEventListener('click', () => {
  let value = parseInt(intInput.value);
  intInput.value = value + 1;
});

// AGI
const agiDecreaseButton = document.querySelector('#agi-decrease');
const agiIncreaseButton = document.querySelector('#agi-increase');
const agiInput = document.querySelector('#agi');

agiDecreaseButton.addEventListener('click', () => {
  let value = parseInt(agiInput.value);
  if (value > 0) {
    agiInput.value = value - 1;
  }
});
agiIncreaseButton.addEventListener('click', () => {
  let value = parseInt(agiInput.value);
  agiInput.value = value + 1;
});


// Rest of the JS
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const character = {
    name: form.elements.name.value,
    class: form.elements.class.value,
    str: form.elements.str.value,
    dex: form.elements.dex.value,
    sta: form.elements.sta.value,
    wis: form.elements.wis.value,
    int: form.elements.int.value,
    agi: form.elements.agi.value,
  };

  // Save the character to local storage
  localStorage.setItem('character', JSON.stringify(character));

  // Hide the character creator form and display the character stats
  document.querySelector('#character-creator').style.display = 'none';
  characterDisplay.style.display = 'block';

  // Set the character stats in the display
  characterDisplay.querySelector('#name').textContent = character.name;
  characterDisplay.querySelector('#class').textContent = character.class;
  characterDisplay.querySelector('#str').textContent = character.str;
  characterDisplay.querySelector('#dex').textContent = character.dex;
  characterDisplay.querySelector('#sta').textContent = character.sta;
  characterDisplay.querySelector('#wis').textContent = character.wis;
  characterDisplay.querySelector('#int').textContent = character.int;
  characterDisplay.querySelector('#agi').textContent = character.agi;

  // Set the portrait based on the selected character class
  switch (character.class) {
    case 'Hunter':
      portrait.style.backgroundImage = "url('./images/hunt.png')";
      break;
    case 'Alchemist':
      portrait.style.backgroundImage = "url('./images/alchemist.png')";
      break;
    case 'Knight':
      portrait.style.backgroundImage = "url('./images/knight.png')";
      break;
    case 'Thief':
      portrait.style.backgroundImage = "url('./images/thief.png')";
      break;
}

});

newCharacterButton.addEventListener('click', () => {
  // Remove the character from local storage
  localStorage.removeItem('character');

  // Hide the character display and show the character creator form
  characterDisplay.style.display = 'none';
  document.querySelector('#character-creator').style.display = 'block';
});

// Check if a character already exists in local storage and display it if it does
const character = localStorage.getItem('character');
if (character) {
  document.querySelector('#character-creator').style.display = 'none';
  characterDisplay.style.display = 'flex';

  const characterData = JSON.parse(character);
  characterDisplay.querySelector('#name').textContent = characterData.name;
  characterDisplay.querySelector('#class').textContent = characterData.class;
  characterDisplay.querySelector('#str').textContent = characterData.str;
  characterDisplay.querySelector('#dex').textContent = characterData.dex;
  characterDisplay.querySelector('#sta').textContent = characterData.sta;
  characterDisplay.querySelector('#wis').textContent = characterData.wis;
  characterDisplay.querySelector('#int').textContent = characterData.int;
  characterDisplay.querySelector('#agi').textContent = characterData.agi;
}
