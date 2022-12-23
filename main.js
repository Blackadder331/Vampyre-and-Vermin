const form = document.querySelector('form');
const characterDisplay = document.querySelector('#character-display');


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
  });
  
  // Check if a character already exists in local storage and display it if it does
  const character = localStorage.getItem('character');
  if (character) {
    document.querySelector('#character-creator').style.display = 'none';
    characterDisplay.style.display = 'block';
  
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
  