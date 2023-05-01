// alert("Ola mundo");

var altura  = 0;
var largura = 0;

// É NESSESARIO DECLARAR A VARIAVÉL FORA DO ESCOPO DA FUNCAO PARA PODE USAR ELA DENTRO DA FUNCAO

function ajustaTamanhoPalcoJogo(){

    altura  = window.innerHeight;   // METODO PARA VER A DIMENSAO DA JANELA
    largura = window.innerWidth;

    console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

function posicaoRandomica (){

    var posicaoX = Math.floor(Math.random() * largura) - 90    // METODO Math.random() PARA TRAZER UM NUMERO RANDOMICO
    var posicaoY = Math.floor(Math.random() * altura)  - 90    // METODO Math.floor()  PARA ARREDONDAR AS CASAS DECIMAIS PARA BAIXO

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY);


    // CRIAR O ELEMENTO HTML
    // document.createElement("img")

    var mosquito = document.createElement("img")          // cliando o elemento e passando para a variavel
    mosquito.src="imagens/mosquito.png"                   // incluindo o novo elemtno no body da pagina
    mosquito.className   = "mosquito1"
    mosquito.style.left  = posicaoX + "px"
    mosquito.style.top   = posicaoY + "px"
    mosquito.style.position = "absolute"

    document.body.appendChild(mosquito)

}