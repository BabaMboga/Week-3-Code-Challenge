const animalList = document.querySelector('#animal-list');
const animalDetails = document.querySelector('#animal-details');

fetch("http://localhost:3000/characters")
.then(function (response) {
    return response.json(); 
  })
  .then(characters => {
// populate animal list with data entry
    characters.forEach(function character(){
        const li = document.createElement('li');
        li.textContent = character.name;
    })
    

  })