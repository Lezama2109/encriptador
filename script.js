var botonEncriptar = document.querySelector(".botonencriptar");
var botonDesencriptar = document.querySelector(".botondesencriptar");
var munieco = document.querySelector(".munieco");
var contenedor = document.querySelector(".contenedorparrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent= encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent= desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");

}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

const btnCopiar = document.querySelector(".btncopiar");
    btnCopiar.addEventListener("click", copiar = () => {
        var contenido = document.querySelector(".texto-resultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    });