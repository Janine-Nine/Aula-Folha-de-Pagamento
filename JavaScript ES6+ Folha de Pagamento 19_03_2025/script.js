// Função para imprimir o recebibo
function imprimirRecibo() {
    window.print();
}

// Preenchimento automático de dados (exemplo)
document.addEventListener("DOMContentLoaded", () => {
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString("pt-BR");

    // Simulando dados dinâmicos (poderia vir de um banco de dados)
    const funcionario = {
        nome: "",
        cpf: "",
        codigo: "001",
        salarioBase: 3000,
        descontos: 300
    };

    // Preenchendo os dados no HTML
    document.querySelector(".dados").innerHTML =

    <p><strong>Código:</strong>${funcionario.codigo}</p>
    <p><strong>Nome:</strong>${funcionario.nome}</p>
    <p><strong>CPF:</strong>${funcionario.cpf}</p>
    <p><strong>Data:</strong>${dataFormatada}</p>
    ;

    document.querySelector("tbody").innerHTML =
    <tr>
        <td>001</td>
        <td>Salário Base</td>
        <td>${hoje.getMonth() + 1}/${hoje.getFullYear()}</td>
        <td>${hoje.getDate() + 10}/${hoje.getMonth() + 1}/${hoje.getFullYear()}</td>
        <td>R$ ${funcionario.descontos.toFixed(2)}</td>
    </tr>
    ;

    document.querySelector(".valores").innerHTML =
    <p><strong>Total Vencimentos:</strong> R$ ${funcionario.salarioBase.toFixed(2)}</p>
    <p><strong>Total Descontos:</strong> R$ ${funcionario.descontos.toFixed(2)}</p>
    <p><strong>Valor Líquido:</strong> R$ ${funcionario.salarioBase - funcionario.descontos.toFixed(2)}</p>
    ;
});