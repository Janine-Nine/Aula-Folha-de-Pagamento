# Aula Recode Pro AI-Folha-de-Pagamento
# 📄 Recibo de Pagamento Web

Sistema simples de **Recibo de Pagamento** desenvolvido com **HTML, CSS e JavaScript**, com foco em geração e impressão de recibos de funcionários de forma rápida e organizada.

---

## 🚀 Objetivo do Projeto

Criar uma página web que simule um **recibo de pagamento empresarial**, permitindo:

* Exibir dados da empresa
* Exibir dados do funcionário
* Mostrar vencimentos e descontos
* Calcular valor líquido
* Imprimir o recibo
* Preencher dados automaticamente com JavaScript

Projeto ideal para prática de **Front-end, manipulação de DOM e automação de documentos web**.

---

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Window Print API

---

## 📂 Estrutura do Projeto

```
recibo-pagamento/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 📄 Funcionalidades

### ✔ Layout de Recibo

* Nome da empresa
* Endereço
* Código do funcionário
* Nome
* CPF
* Data
* Tabela de pagamento

### ✔ Preenchimento Automático

O JavaScript preenche automaticamente:

* Data atual
* Código do funcionário
* Salário base
* Descontos
* Valor líquido

### ✔ Impressão do Recibo

Botão:

```
Imprimir Recibo
```

Executa:

```javascript
window.print();
```

Permite gerar versão física ou PDF do recibo.

---

## 🧠 Lógica do Sistema

### 1. Carregamento da página

```javascript
document.addEventListener("DOMContentLoaded")
```

Carrega os dados automaticamente.

---

### 2. Dados do funcionário

```javascript
const funcionario = {
    nome: "",
    cpf: "",
    codigo: "001",
    salarioBase: 3000,
    descontos: 300
};
```

Simula dados vindos de banco de dados.

---

### 3. Atualização do HTML

JavaScript altera:

```
.dados
tbody
.valores
```

Criando conteúdo dinâmico.

---

## 🎨 Estilização

O CSS cria:

* Layout centralizado
* Fundo cinza
* Recibo branco
* Tabela organizada
* Sombra no recibo
* Visual limpo e profissional

---

## 🖨️ Impressão

Função:

```javascript
function imprimirRecibo() {
    window.print();
}
```

Permite:

* Imprimir
* Salvar em PDF
* Gerar documento

---

## 💡 Possíveis Melhorias

### 🔹 Inserir formulário

Para digitar:

* Nome
* CPF
* Salário
* Descontos

---

### 🔹 Integração com Banco de Dados

* MySQL
* MongoDB
* API REST
* Node.js
* Java Spring Boot

---

### 🔹 Exportar PDF automático

Bibliotecas:

* jsPDF
* html2pdf
* PDFMake

---

### 🔹 Login de usuários

* JWT
* Autenticação
* Controle de acesso

---

## 📷 Exemplo de Uso

1. Abrir o arquivo

```
index.html
```

2. Visualizar recibo

3. Clicar em

```
Imprimir Recibo
```

4. Salvar em PDF ou imprimir

---

## 🎯 Finalidade Acadêmica

Projeto desenvolvido para:

* Prática de HTML e CSS
* Manipulação de DOM
* Automação de documentos
* Interface empresarial
* Desenvolvimento Web Front-end

---

## 👩‍💻 Autora

**Janine Tavares Cunha**

Estudante de Tecnologia
Desenvolvimento Web Full Stack

GitHub: https://github.com/Janine-Nine
LinkedIn: https://www.linkedin.com/in/janine-cunha-74b456307

---

## 📌 Status do Projeto

✅ Finalizado
🔄 Pode receber melhorias
🚀 Pronto para portfólio
