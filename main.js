


const charactersApi = 'http://localhost:3000/characters' //linking server API and frontend

const characterRow = document.getElementById("character-row")//getting id =character-row from html file 


fetch(charactersApi)//passing  variable charactersApi containg local api address
    .then(response => response.json())
    .then(data => {
        console.log(data); // should return an array of the characters
        data.map(character => renderCharacter(character)); // for each character we render their data
    });


    
//function to render our characters to browser
function renderCharacter(character) {
    const characterColDiv = document.createElement("div");
    characterColDiv.classList.add("col-4");
    characterRow.appendChild(characterColDiv);

    const characterColPadding = document.createElement("div");
    characterColPadding.classList.add("p-3");
    characterColDiv.appendChild(characterColPadding);

    const card = document.createElement("div");
    card.classList.add("card");
    characterColPadding.appendChild(card);

    const cardImage = document.createElement("img");
    cardImage.src = character.image;
    cardImage.classList.add("card-img-top");
    card.appendChild(cardImage);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const title = document.createElement("h5");
    title.innerText = character.name
    title.classList.add("card-title");
    cardBody.appendChild(title);

    const totalVotes = document.createElement("p");
    totalVotes.innerText = `Total Votes: ${character.votes}`
    totalVotes.classList.add("cardText");
    cardBody.appendChild(totalVotes);

    const button = document.createElement("button");
    button.setAttribute('id' , 'clicking')
    button.innerText = 'Vote'
    button.classList.add("btn", "btn-primary");
    cardBody.appendChild(button);

    //add event listener to the above button
    const voting = document.getElementById("clicking");
    voting.addEventListener('click' , (totalVotes) => {
        totalVotes = `${character.votes +1}`;
    })

}