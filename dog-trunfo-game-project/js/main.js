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
