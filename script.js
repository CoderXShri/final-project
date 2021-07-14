let cards = [{
    image: "1.jpeg",
    value: 1,
    status: "closed"
},
{
    image: "1.jpeg",
    value: 1,
    status: "closed"
},
{
    image: "2.jpeg",
    value: 2,
    status: "closed"
},
{
    image: "2.jpeg",
    value: 2,
    status: "closed"
},
{
    image: "3.jpeg",
    value: 3,
    status: "closed"
},
{
    image: "3.jpeg",
    value: 3,
    status: "closed"
},
{
    image: "4.jpeg",
    value: 4,
    status: "closed"
},
{
    image: "4.jpeg",
    value: 4,
    status: "closed"
},
{
    image: "5.jpeg",
    value: 5,
    status: "closed"
},
{
    image: "5.jpeg",
    value: 5,
    status: "closed"
}
]

let temp;
for (let i = cards.length - 1; i >= 0; i--) {
let j = Math.floor(Math.random() * (i + 1));
temp = cards[i];
cards[i] = cards[j];
cards[j] = temp

}


let cardsCopy = cards;



function displayCards(data) {

let cardsString = "";
data.forEach(function(card, index) {
cardsString += `
<div class="card" style="background-image:url('${card.image}')">
<div class="overlay ${card.status}" onclick="openCard(${index})">
</div>
</div>

`;
});
document.getElementById('cards').innerHTML = cardsString;
}

displayCards(cards);

let cardCount = 1;
let val1 = null,
val2 = null;
let score = 0;

function openCard(index) {

cards[index].status = "opened";
if (cardCount === 1) {
val1 = cards[index].value;
cardCount++;
} else if (cardCount === 2) {
val2 = cards[index].value;

if (val1 === val2) {
    score++;
    document.getElementById('score').innerText = score;
    val1 = null;
    val2 = null;
    cardCount = 1;
} else {
    location.reload();
    alert('Game Over');
}
}
displayCards(cards);
}
