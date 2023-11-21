// ------------- ESTRUTURA DE INFORMAÇÕES DOS DOGUINHOS----INICIO----------//
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
    fofura: fofura,
  });
}
// exemplo:
// é só colocar os argumentos na ordem correta (nome, endereço de imagem.. e tralala..)
// para manter os dados a função terá que ser chamada na quantidade de cards existentes com suas respecitivas informações

createDog(0, "Simba, O Baiano", "images/dogGalerie/simba.png", 1, 3, 16, 20);
createDog(1, "Jake, Beiçola", "images/dogGalerie/jake.jpeg", 7, 5, 3, 17);
createDog(2, "Jake, Beiçola", "images/dogGalerie/sophia.jpeg", 1, 3, 16, 20);
createDog(3, "Jake, Beiçola", "images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(4, "Jake, Beiçola", "images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(5, "Jake, Beiçola", "images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(6, "Jake, Beiçola", "images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(7, "Jake, Beiçola", "images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(8, "Jake, Beiçola", "images/dogGalerie/jake.jpeg", 1, 3, 16, 20);
createDog(9, "Jake, Beiçola", "images/dogGalerie/jake.jpeg", 1, 3, 16, 20);

let dogInfo = [];
for (let dog of allDogs) {
  dogInfo.push([
    dog.id,
    dog.nome,
    dog.img,
    [dog.latido, dog.mordida, dog.velocidade, dog.fofura],
  ]);
}

// ------------- ESTRUTURA DE INFORMAÇÕES DOS DOGUINHOS----FIM----------//

// ------------- ESTRUTURA DE MANIPULAÇÃO DE ELEMENTOS(DOM) ----INICIO----------//

document.addEventListener("DOMContentLoaded", function () {
  var imagensAluno = document.querySelectorAll(".aluno img");

  imagensAluno.forEach(function (imagem) {
    imagem.addEventListener("click", function () {
      var alunoID = imagem.parentNode.id;

      document.querySelectorAll(".info-aluno").forEach(function (info) {
        info.style.display = "none";
      });

      var infoAluno = document.getElementById("info-" + alunoID);
      infoAluno.style.display = "block";
    });
  });

// carrega os cards pré-programados
window.addEventListener("load", dogCardCreate());

// observador do cards a serem deletados
document.getElementById('galeria').addEventListener('click', function(event) {
  if (event.target.classList.contains('img-btn')) {
    console.log("estou aqui")
      deleteDog(event.target);
  }
});

});

function addDog() {
  let imagem = document.getElementById("dog-img").files[0];
  let selecionaInput = document.querySelectorAll(".card-stats");

  let allstats = Array.from(selecionaInput).map(function (input) {
    const name = input.id;
    const value = input.value;
    return [name, value];
  });

  // Cria um novo card para o Doguinho
  let card = document.createElement("div");
  card.className = "dog-card";
  card.classList.add("card-form");
  // Exibe a imagem
  let imagemElemento = document.createElement("img");
  imagemElemento.src = URL.createObjectURL(imagem);
  card.appendChild(imagemElemento);

  let info = document.createElement("ul");
  for (let i = 0; i < allstats.length; i++) {
    let item = document.createElement("li");
    item.textContent = `${allstats[i][0]}: ${allstats[i][1]}`;
    info.appendChild(item);
  }

  let btnExcluir = document.createElement("button");
  let imgBtn = document.createElement("img");
  btnExcluir.appendChild(imgBtn);
  btnExcluir.className = "btn-excluir";
  imgBtn.className = "img-btn";
  imgBtn.src = "images/bloquear.png";

  card.appendChild(info);
  card.appendChild(btnExcluir);
  document.getElementById("galeria").appendChild(card);
  // document.getElementById("formularioDoguinho").reset();
}

// function dogStorage() {}

function dogCardCreate() {
  // Cria um novo card para o Doguinho
  const stats = ["latido", "mordida", "velocidade", "fofura"];
  for (let i = 0; i < dogInfo.length; i++) {
    let card = document.createElement("div");
    card.className = "dog-card";
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
    document.getElementById("galeria").appendChild(card);
  }
}

function deleteDog() {
  let formCard = document.querySelector(".card-form");
  if (formCard) {
      formCard.parentNode.removeChild(formCard);
    };
  }




// ------------- ESTRUTURA DE MANIPULAÇÃO DE ELEMENTOS(DOM) ----INICIO----------//
