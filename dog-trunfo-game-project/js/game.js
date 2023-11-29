const allDogs = [];
const stats = ["latido", "mordida", "velocidade", "fofura"];
const qtyCardsPerHand = 5;

let selectedCard = null;
let selectedAttribute = null;
let playerCards = [];
let opponentCards = [];

function createDog(id, nome, enderecoImg, latido, mordida, velocidade, fofura) {
	allDogs.push({
		id: id,
		nome: nome,
		img: enderecoImg,
		latido: latido,
		mordida: mordida,
		velocidade: velocidade,
		fofura: fofura
	});
}

createDog(0, "Simba, O Baiano", "images/dogGalerie/simba.png", 10, 3, 1, 15);
createDog(1, "Jake, Beiçola", "images/dogGalerie/jake.jpeg", 5, 5, 3, 17);
createDog(2, "Shadow Instinto Superior", "images/dogGalerie/usshadow.jpg", 1, 8, 20, 1);
createDog(3, "Shadow Mordida Valente", "images/dogGalerie/shadowmordida.jpg", 6, 14, 2, 8);
createDog(4, "Sophia Sonecando", "images/dogGalerie/sophia.jpeg", 5, 4, 1, 20);
createDog(5, "Ponei, o bom garoto", "images/dogGalerie/ponei.jpg", 10, 13, 2, 5);
createDog(6, "Lola (da Marina, não do Cebolinha)", "images/dogGalerie/lola.jpg", 1, 3, 16, 20);
createDog(7, "Poligochorro", "images/dogGalerie/dog.jpg", 1, 1, 9, 9);
createDog(8, "Coragem", "images/dogGalerie/coragem.jpg", 20, 6, 3, 1);
createDog(9, "Scooby", "images/dogGalerie/scooby.jpg", 10, 10, 10, 10);

let dogInfo = [];
for (let dog of allDogs) {
	dogInfo.push([
		dog.id,
		dog.nome,
		dog.img,
		[
			dog.latido,
			dog.mordida,
			dog.velocidade,
			dog.fofura
		]
	]);
}

function embaralhaCarta(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function dogCardCreate() {
	embaralhaCarta(dogInfo);

	const opponentCardsDiv = document.querySelector(".cartas-oponente");
	const playerCardsDiv = document.querySelector(".cartas-jogador");

	for (let i = 0; i < qtyCardsPerHand; i++) {
		let cardInfo = dogInfo.pop();
		let card = createCard(cardInfo);
		playerCards.push(cardInfo);
		playerCardsDiv.appendChild(card);
	}

	for (let i = 0; i < qtyCardsPerHand; i++) {
		cardInfo = dogInfo.pop();
		card = createOponentCard(cardInfo);
		opponentCards.push(cardInfo);
		opponentCardsDiv.appendChild(card);
	}
}

function displaySelectedCard() {
	if (!selectedCard) {
		return;
	}

	let cartaAtivaJogador = document.getElementById("carta-ativa-jogador");
	cartaAtivaJogador.innerHTML = "";

	let card = document.createElement("div");
	card.className = "dog-card carta selected";
	let imagemElemento = document.createElement("img");
	imagemElemento.src = selectedCard[2];
	card.appendChild(imagemElemento); 	

	let attributeList = document.createElement("ul");

	stats.forEach((attribute, index) => {
		let attributeElement = document.createElement("li");
		attributeElement.textContent = `${attribute}: ${selectedCard[3][index]}`;
		attributeElement.className = "attribute";
		attributeElement.addEventListener("click", () => {
			selectedAttribute = index;
			console.log(`Atributo selecionado: ${attribute}`);
		});
		attributeList.appendChild(attributeElement);
	});

	card.appendChild(attributeList);

	cartaAtivaJogador.appendChild(card);

	let opponentCardsDiv = document.querySelector('.cartas-oponente').children;
	if (opponentCardsDiv.length > 0) {
		opponentCardsDiv[0].remove();
	}

	const playerCardsDiv = document.querySelector(".cartas-jogador");

	const indexToRemove = playerCards.findIndex(card => card[0] === selectedCard[0]);
	
	if (indexToRemove !== -1) {
		playerCards.splice(indexToRemove, 1);
		playerCardsDiv.innerHTML = "";

		for (let i = 0; i < playerCards.length; i++) {
			let card = createCard(playerCards[i]);
			playerCardsDiv.appendChild(card);
		}
	}
}

function createCard(dogCardInfo) {
	let card = document.createElement("div");
	card.className = "dog-card carta";
	let imagemElemento = document.createElement("img");
	imagemElemento.src = dogCardInfo[2];
	card.appendChild(imagemElemento);
	let info = document.createElement("ul");

	for (let ii = 0; ii < dogCardInfo[3].length; ii++) {
		const novaLi = document.createElement("li");
		novaLi.textContent = ` ${stats[ii]}:${dogCardInfo[3][ii]}`;
		info.appendChild(novaLi);
	}

	card.appendChild(info);
	
	card.addEventListener("click", (event) => {
		event.stopPropagation();
		selectedCard = dogCardInfo;
		displaySelectedCard();
	});

	return card;
}

function createOponentCard() {
	let card = document.createElement("img");
	card.className = "carta";
	card.src = "images/card.png";

	return card;
}

window.addEventListener("load", () => {
	dogCardCreate();
});
