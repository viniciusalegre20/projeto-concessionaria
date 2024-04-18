const botoesRadio = document.querySelectorAll('input[type="radio"]');
const resultado = document.getElementById('resultado');

const meuElementoEmail = `
  <div>
    <label for="email">Email: </label>
    <input type="email" id="contato" name="email" placeholder="ana@email.com" required/>
  <div>
  `;

const meuElementoTel = `
  <div>
    <label for="telefone">Telefone: </label>
    <input type="tel" id="contato" name="telefone" placeholder="11 111111111" required>
  <div>
`;
const meuElementoWhats = `
  <div>
    <label for="opcao3">WhatsApp: </label>
    <input type="tel" name="whats" id="contato" placeholder="11 111111111" required>
  <div>
`;


botoesRadio.forEach(function (radio) {
    radio.addEventListener('change', function () {
        const valorSelecionadoRadio = this.value;

        switch (valorSelecionadoRadio) {
            case 'email':
                resultado.innerHTML = meuElementoEmail;
                break;
            case 'telefone':
                resultado.innerHTML = meuElementoTel;
                break;
            case 'whats':
                resultado.innerHTML = meuElementoWhats;
            default:
                break;
        }
    });
});