let palavraSecretaCategoria;
let palavraSecretaSorteada;
let listaDinamica = [];
let tentativas = 6;


const palavras = [
    palavra001 = {
        nome : "BRASIL",
        categoria : "LUGARES"
    },
    palavra002 = {
        nome : "RUSSIA",
        categoria : "LUGARES"
    },
    palavra003 = {
        nome: "CANADA",
        categoria: "LUGARES"
    },
    palavra004 = {
        nome: "CHINA",
        categoria: "LUGARES"
    },
    palavra005 = {
        nome: "INDIA",
        categoria: "LUGARES"
    },
    palavra006 = {
        nome: "SUDAO",
        categoria: "LUGARES"
    },
    palavra007 = {
        nome: "ARGELIA",
        categoria: "LUGARES"
    },
    palavra008 = {
        nome: "MEXICO",
        categoria: "LUGARES"
    },
    palavra009 = {
        nome: "AUSTRALIA",
        categoria: "LUGARES"
    },
    palavra010 = {
        nome: "INDONESIA",
        categoria: "LUGARES"
    },
    palavra011 = {
        nome: "VERMELHO",
        categoria: "CORES"
    },
    palavra012 = {
        nome: "ARMARELO",
        categoria: "CORES"
    },
    palavra013 = {
        nome: "VIOLETA",
        categoria: "CORES"
    },
    palavra014={
        nome: "TURQUESA",
        categoria: "CORES"
    },
    palavra015={
        nome: "ESVERDEADO",
        categoria: "CORES"
    },
    palavra016={
        nome: "AMETISTA",
        categoria: "CORES"
    },
    palavra017 = {
        nome: "ARDOSIA",
        categoria: "CORES"
    },
    palavra018 = {
        nome: "MARINHO",
        categoria: "CORES"
    },
    palavra019 = {
        nome: "CIANO",
        categoria: "CORES"
    },
    palavra020 = {
        nome: "DOURADO",
        categoria: "CORES"
    },
    palavra021 = {
        nome: "ANDORINHA",
        categoria: "ANIMAIS"
    },
    palavra022 = {
        nome: "BABUINO",
        categoria: "ANIMAIS"
    },
    palavra023 = {
        nome: "CAMALEAO",
        categoria: "ANIMAIS"
    },
    palavra024 = {
        nome: "ABELHA",
        categoria: "ANIMAIS"
    },
    palavra025 = {
        nome: "GOLFINHO",
        categoria: "ANIMAIS"
    },
    palavra026 = {
        nome: "FLAMINGO",
        categoria: "ANIMAIS"
    },
    palavra027 = {
        nome: "HIPOPOTAMO",
        categoria: "ANIMAIS"
    },
    palavra028 = {
        nome: "GUAXINIM",
        categoria: "ANIMAIS"
    },
    palavra029 = {
        nome: "HIENA",
        categoria: "ANIMAIS"
    },
    palavra030 = {
        nome: "RINOCERONTE",
        categoria: "ANIMAIS"
    },
    palavra031 = {
        nome: "ABACAXI",
        categoria: "FRUTAS"
    },
    palavra032 = {
        nome: "ABACATE",
        categoria: "FRUTAS"
    },
    palavra033 = {
        nome: "CARAMBOLA",
        categoria: "FRUTAS"
    },
    palavra034 = {
        nome: "FRAMBOESA",
        categoria: "FRUTAS"
    },
    palavra035 = {
        nome: "BACURI",
        categoria: "FRUTAS"
    },
    palavra036 = {
        nome: "CEREJA",
        categoria: "FRUTAS"
    },
    palavra037 = {
        nome: "GROSELHA",
        categoria: "FRUTAS"
    },
    palavra038 = {
        nome: "HEISTERIA",
        categoria: "FRUTAS"
    },
    palavra039 = {
        nome: "MORANGO",
        categoria: "FRUTAS"
    },
    palavra040 = {
        nome: "DAMASCO",
        categoria: "FRUTAS"
    },
    palavra041 = {
        nome: "JOAQUIM",
        categoria: "NOME"
    },
    palavra042 = {
        nome: "JOSE",
        categoria: "NOME"
    },
    palavra043 = {
        nome: "HUGO",
        categoria: "NOME"
    },
    palavra044 = {
        nome: "EVELYM",
        categoria: "NOME"
    },
    palavra045 = {
        nome: "ERIC",
        categoria: "NOME"
    },
    palavra046 = {
        nome: "ELVIS",
        categoria: "NOME"
    },
    palavra047 = {
        nome : "RODRIGO",
        categoria : "NOME"
    },
    palavra048 = {
        nome: "KAIQUE",
        categoria: "NOME"
    },
    palavra049 = {
        nome: "CAMILLY", 
        categoria:"NOME"
    },
    palavra050 = {
        nome: "MARINALDA",
        categoria: "NOME"
    }
];

function criarPalavraSecreta(){
  const indexPalavra = parseInt(Math.random() * palavras.length)
  palavraSecretaSorteada = palavras[indexPalavra].nome
  palavraSecretaCategoria = palavras[indexPalavra].categoria
}
criarPalavraSecreta()

function montarPalvraNaTela(){
    const assunto = document.getElementById("assunto");
    assunto.innerHTML = palavraSecretaCategoria;

    const segredo = document.getElementById("segredo");
    segredo.innerHTML = "";

    for(i = 0; i<palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            segredo.innerHTML = segredo.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>" 
        }
        else{
            segredo.innerHTML = segredo.innerHTML + "<div class='letras'>"+ listaDinamica[i] +"</div>" 
        }
    }
}

montarPalvraNaTela();

function verificaLetras(letra){
    document.getElementById("tecla-"+ letra).disabled = true;
    if (tentativas > 0){
    mudarStyleletra("tecla-"+ letra);
    comparaLista(letra);
    montarPalvraNaTela()
    }


}
function mudarStyleletra(tecla){
    document.getElementById(tecla).style.background = "rgb(0, 0, 0)";
    document.getElementById(tecla).style.color = "rgb(255, 255, 255";
}

function comparaLista(letra){
    const pos = palavraSecretaSorteada.indexOf(letra) 
    if (pos < 0 ) {
        tentativas-- ;
        mostrarimg();

        if(tentativas == 0){
            abreModal(" Que Pena! Você perdeu!","A Palavra secreta era<br>"+ palavraSecretaSorteada +"<br>tente de novo! ");
        }

    }
    else{
        for(i=0; i < palavraSecretaSorteada.length; i++){
            if (palavraSecretaSorteada[i]== letra) {
                listaDinamica[i] = letra;                
            }
            else{
                for(i = 0; i< palavraSecretaSorteada.length; i++ ){
                    if(palavraSecretaSorteada[i]== letra){
                        listaDinamica[i] = letra;
                    }
                }
            }
        }
    }

    let vitoria = true;
    for(i = 0; i< palavraSecretaSorteada.length; i++ ){
        if (palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        abreModal(" Parabens!! ","A Palavra secreta era<br>"+ palavraSecretaSorteada +"<br> e você ACERTOU! ");
        tentativas = 0;
    }

}

function mostrarimg(){
    switch(tentativas){
        case 5:
            document.getElementById("img").style.background ="url('./img/forca01.png')";
            break;
        case 4:
            document.getElementById("img").style.background ="url('./img/forca02.png')";
            break;
        case 3:
            document.getElementById("img").style.background ="url('./img/forca03.png')";
            break;
        case 2:
            document.getElementById("img").style.background ="url('./img/forca04.png')";
            break;
        case 1:
            document.getElementById("img").style.background ="url('./img/forca05.png')";
            break;
        case 0:
            document.getElementById("img").style.background ="url('./img/forca06.png')";
            break;
        default:   
            document.getElementById("img").style.background ="url('./img/forca.png')";
            break;
    }

}

function abreModal(titulo, mensagem){

    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}
let novojogo = document.querySelector("#novojogo");
novojogo.addEventListener("click", function(){
    location.reload();
}
);
