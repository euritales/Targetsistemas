const nome = "0123456789";

reverter("selaT");
reverter(nome);

function reverter(caracters) {
  let reverso = "";
  for (let i = caracters.length - 1; i >= 0; i--) {
    reverso += caracters[i];
  }
  console.log(reverso);
}
