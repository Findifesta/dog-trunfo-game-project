//estrutura com as informações para os cards

// A gente vai iterar nessa estrutura e popuplar os cards de forma dinâmica

const AllDogs = [
];

// criei essa função pra facilitar a inserção na estrutura
function createDog(id, nome, enderecoImg, latido, mordida, velocidade, fofura) {
	AllDogs.push({
		id:id,
		img: enderecoImg,
		nome: nome,
		latido: latido,
		mordida: mordida,
		velocidade: velocidade,
		fofura:fofura
	})
}

// exemplo:
// é só colocar os argumentos na ordem correta (nome, endereço de imagem.. e tralala..)
// para manter os dados a função terá que ser chamada na quantidade de cards existentes com suas respecitivas informações 

createDog(0, "Simba, O Baiano", "../images/dogGalerie/simba.png", 1, 3, 16, 20);
createDog(1, "Jake, Beiçola", "../images/dogGalerie/jake.jpeg", 7, 5, 3, 17);
createDog(2, "Jake, Beiçola", "../images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(3, "Jake, Beiçola", "../images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(4, "Jake, Beiçola", "../images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(5, "Jake, Beiçola", "../images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(6, "Jake, Beiçola", "../images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(7, "Jake, Beiçola", "../images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(8, "Jake, Beiçola", "../images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(9, "Jake, Beiçola", "../images/dogGalerie/jake.jpeg", 1, 3, 16, 20);

console.log(AllDogs)
// abra o terminal e veja a mágica:
// (TENHA A EXTENSÃO RUNCODE INSTALADA PARA EXECUTAR O SCRIPT NO TERMINAL)