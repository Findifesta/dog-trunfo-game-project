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
});

function addDog() {
  let imagem = document.getElementById("dog-img").files[0];
  let fofura = document.getElementById("fofura").value;
  let velocidade = document.getElementById("velocidade").value;
  let mordida = document.getElementById("mordida").value;
  let latido = document.getElementById("latido").value;

  // Cria um novo card para o Doguinho
  let card = document.createElement("div");
  card.className = "dog-card";

  // Exibe a imagem
  let imagemElemento = document.createElement("img");
  imagemElemento.src = URL.createObjectURL(imagem);
  card.appendChild(imagemElemento);

  // Adiciona informações do Doguinho
  let info = document.createElement("ul");
  let fofuraItem = document.createElement("li");
  fofuraItem.textContent = `Fofura: ${fofura}`;
  let velocidadeItem = document.createElement("li");
  velocidadeItem.textContent = `Velocidade: ${velocidade}`;
  let mordidaItem = document.createElement("li");
  mordidaItem.textContent = `Mordida: ${mordida}`;
  let latidoItem = document.createElement("li");
  latidoItem.textContent = `Latido: ${latido}`;

  info.appendChild(fofuraItem);
  info.appendChild(velocidadeItem);
  info.appendChild(mordidaItem);
  info.appendChild(latidoItem);
  card.appendChild(info);

  // Adiciona o card à galeria
  document.getElementById("galeria").appendChild(card);
  // Limpa o formulário
  document.getElementById("formularioDoguinho").reset();
}
