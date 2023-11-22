const allDogs = [];
// criei essa função pra facilitar a inserção na estrutura
function createDog(id, nome, enderecoImg, latido, mordida, velocidade, fofura) {
	allDogs.push({
		id: id,
		nome: nome,
		img: enderecoImg,
		latido: latido,
		mordida: mordida,
		velocidade: velocidade,
		fofura: fofura
	})
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

function dogCardCreate() {
	// Cria um novo card para o Doguinho
	const opponentCard = document.querySelector(".cartas-oponente")
	const playerCards = document.querySelector(".cartas-jogador")
	const stats = ["latido", "mordida", "velocidade", "fofura"];
	for (let i = 0; i < dogInfo.length; i++) {
		let card = document.createElement("div");
		card.className = "dog-card carta";
		let imagemElemento = document.createElement("img");
		imagemElemento.src = dogInfo[i][2];
		card.appendChild(imagemElemento);
		let info = document.createElement("ul");
		for (let ii = 0; ii < dogInfo[i][3].length; ii++) {
			const novaLi = document.createElement("li");
			novaLi.textContent = ` ${stats[ii]}:${dogInfo[i][3][ii]}`;
			info.appendChild(novaLi);
			card.appendChild(info);
		}

		if(playerCards.childNodes.length < 5) {
			playerCards.appendChild(card);
			console.log(playerCards.childNodes.length);
		}
		
		if(opponentCard.childNodes.length < 5) {
			opponentCard.appendChild(card);
			console.log(playerCards.childNodes.length);
		}
	}
	console.log()
}

window.addEventListener("load", dogCardCreate());