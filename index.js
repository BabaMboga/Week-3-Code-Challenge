document.addEventListener('DOMContentLoaded', () =>{
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
        li.addEventListener('click', ()=>{
            fetch(`http://localhost:3000/characters/${character.id}`)
            .then(response => response.json())
          .then(characterDetails => {
            // Populate animal details with character details
            animalDetails.innerHTML = `
              <img src="${characterDetails.image}">
              <h2>${characterDetails.name}</h2>
              <p>Votes: ${characterDetails.votes}</p>
              <button id="vote-button">Vote</button>
            `;
            // Add event listener to vote button
            const voteButton = document.querySelector('#vote-button');
            voteButton.addEventListener('click', () => {
              characterDetails.votes++;
              animalDetails.querySelector('p').textContent = `Votes: ${characterDetails.votes}`;
            });
            // Show animal details
            animalDetails.style.display = 'block';
          });
      });
      animalList.appendChild(li);
        })
    })
    

  })
