// Selecione todos os elementos com a classe "duvida" 

const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
        // fecha as outras duvidas
        elementosDuvida.forEach(function (outraDuvida) {
            if (outraDuvida !== duvida) {
              outraDuvida.classList.remove("ativa");
            }
        });

        // abre a dúvida clicada
    duvida.classList.toggle("ativa");
  });
});