const btnGerar = document.getElementById('btn-gerar');
const btnCopy = document.getElementById('btn-copy');
const display = document.getElementById('cpf-display');
const toast = document.getElementById('toast');

function calcularDigito(base) {
    let multiplicador = base.length + 1;
    let soma = 0;
    for (let numero of base) {
        soma += numero * multiplicador--;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

function gerarCPF() {
    let cpf = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    cpf.push(calcularDigito(cpf));
    cpf.push(calcularDigito(cpf));

    const cpfString = cpf.join('');
    const cpfFormatado = cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    display.innerText = cpfFormatado;
}

// Função de copiar para a área de transferência
btnCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(display.innerText);
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', 2000);
});

btnGerar.addEventListener('click', gerarCPF);
window.onload = gerarCPF;