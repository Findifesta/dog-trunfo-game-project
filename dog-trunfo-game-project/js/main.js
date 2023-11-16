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
	let selecionaInput = document.querySelectorAll('.card-stats');
	let allstats = Array.from(selecionaInput).map(function(input) {
		const name = input.id
		const value = input.value
		return [name, value]
	});

  // Cria um novo card para o Doguinho
  let card = document.createElement("div");
  card.className = "dog-card";
  // Exibe a imagem
  let imagemElemento = document.createElement("img");
  imagemElemento.src = URL.createObjectURL(imagem);
  card.appendChild(imagemElemento);

	let info = document.createElement("ul");
	for(i=0;i < allstats.length; i++ ) {
		let item = document.createElement("li");
		item.textContent = `${allstats[i][0]}: ${allstats[i][1]}`;
		info.appendChild(item);
	}

  card.appendChild(info);
  document.getElementById("galeria").appendChild(card);
  document.getElementById("formularioDoguinho").reset();
}
