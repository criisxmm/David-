
const card = document.getElementById("card");

const button = document.getElementById("flipButton");

// Função para virar o cartão
function flipCard() {

    card.classList.toggle("flipped");

    if (card.classList.contains("flipped")) {

        button.textContent = "RETURN TO DAVID ↗";

    } else {

        button.textContent = "ACCESS DAVID'S FILE ↗";

    }

}

// Clique no cartão
card.addEventListener("click", flipCard);

// Clique no botão
button.addEventListener("click", (event) => {

    event.stopPropagation();

    flipCard();

});
