//estrutura com as informações para os cards

// A gente vai iterar nessa estrutura e popuplar os cards de forma dinâmica

const AllDogs = [
  {
    img: "...",
		nome:"...",
		latido:"...",
		mordida:"...",
		velocidade:"...",
  },
];

// criei essa função pra facilitar a inserção na estrutura

function createDog(nome, enderecoImg, latido, mordida, velocidade) {
	AllDogs.push({
		img: enderecoImg,
		nome: nome,
		latido: latido,
		mordida: mordida,
		velocidade: velocidade
	})
}

// exemplo:
// é só colocar os argumentos na ordem correta (nome, endereço de imagem.. e tralala..)
createDog("Simba, O Baiano", "../images/dogGalerie/simba.png", 1, 3, 16, 20);

// abra o terminal e veja a mágica:
console.log(AllDogs);