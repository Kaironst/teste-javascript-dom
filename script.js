// Selecionando pelo ID do título
const title = document.getElementById("titulo");

// Selecionando o botão que exibe "Hello"
const helloBtn = document.getElementById("botao-ola");

// Selecionando o botão que altera o título
const changeTitleBtn = document.getElementById("btn-mudar-titulo");


// Evento de clique para exibir uma mensagem "Olá"
helloBtn.addEventListener("click", function () {
  alert("Olá!");
});

// Evento de clique para alterar o texto do título
changeTitleBtn.addEventListener("click", function () {
  title.textContent = "O Titulo foi mudado utilizando JS!";
});

// Evento de clique para alterar o texto das frases
//declarando constantes

const changeTextBtn = document.getElementById("btn-mudar-texto");
const mensagens = document.getElementsByClassName('mensagem2');
//alterando o texto

  changeTextBtn.addEventListener("click", function ()
    {
      for(let i=0;i<mensagens.length;i++)
      {
      mensagens[i].textContent=`a frase ${i+1} foi alterada utilizando javascript`;
      }
    });