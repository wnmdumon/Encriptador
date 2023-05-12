const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
/*     var darkModeToggle = document.getElementById('darkMode');
    var body = document.querySelector('body');

    darkModeToggle.addEventListener('click',function(){
    body.classList.toggle('dark-mode');
}); */

const darkModeToggle = document.getElementById('darkMode');
const body = document.querySelector('body');

darkModeToggle.onclick = function(){
    darkModeToggle.classList.toggle('active');
    body.classList.toggle('active');
}


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}


function encriptar (stringEncriptado) {
    let matrizCodigo =  [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])   

         }

    }
    return stringEncriptado
}


function btnDesencriptar(){
    const textoEncritado = desencriptar(textArea.value)
    mensaje.value = textoEncritado
    textArea.value = "";

}


function desencriptar (stringDesencriptado) {
    let matrizCodigo =  [["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])   

         }

    }
    return stringDesencriptado
}


function copiarPortapapeles(){
    var copiado = document.getElementById("resultado");
    copiado.select();
    document.execCommand('copy');  

}
 
 botonCopiar.onclick = copiarPortapapeles;

